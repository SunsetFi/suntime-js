import type { Program } from "@babel/types";

import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsResolveSetRecord } from "#modules/implementation/StaticJsResolveSetRecord.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsSourceRecord } from "#sources/StaticJsSourceRecord.js";
import type { StaticJsPromiseCapabilityRecord } from "#types/StaticJsPromise.js";

import { asyncBlockStart } from "#algorithms/async-block-start.js";
import { instantiateFunctionObject } from "#algorithms/instantiate-function-object.js";
import { StaticJsModuleEnvironmentRecord } from "#environments/implementation/StaticJsModuleEnvironmentRecord.js";
import { EvaluateNodeCommand } from "#evaluator/commands/EvaluateNodeCommand.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { Q } from "#evaluator/completions/Q.js";
import { X } from "#evaluator/completions/X.js";
import { EvaluationContext } from "#evaluator/EvaluationContext.js";
import lexicallyScopedDeclarations from "#evaluator/instantiation/algorithms/lexically-scoped-declarations.js";
import varScopedDeclarations from "#evaluator/instantiation/algorithms/var-scoped-declarations.js";
import { boundNames } from "#grammar/bound-names.js";
import { isConstantDeclaration } from "#grammar/is-constant-declaration.js";
import { allocated } from "#memory/allocated.js";
import { createImportBinding } from "#modules/implementation/algorithms/create-import-binding.js";
import { getImportedModule } from "#modules/implementation/algorithms/get-imported-module.js";
import { getModuleNamespace } from "#modules/implementation/algorithms/get-module-namespace.js";
import { importedLocalNames } from "#modules/implementation/algorithms/imported-local-names.js";
import { exportEntries as exportEntriesGrammar } from "#modules/implementation/grammar/export-entries.js";
import { importEntries as ImportEntriesGrammar } from "#modules/implementation/grammar/import-entries.js";
import { moduleRequests } from "#modules/implementation/grammar/module-requests.js";
import { AllButDefault } from "#modules/implementation/symbols/AllButDefault.js";
import { Namespace } from "#modules/implementation/symbols/Namespace.js";
import { findTopLevelAwait } from "#parser/find-top-level-await.js";
import { parseModule } from "#parser/parse-module.js";
import { assert } from "#utils/assert.js";
import { isTaggedSymbol } from "#utils/symbol-for.js";

import type { StaticJsModuleImpl } from "./StaticJsModuleImpl.js";

import { type StaticJsResolvedBindingRecord } from "../StaticJsResolvedBinding.js";
import {
  StaticJsCyclicModuleImpl,
  type StaticJsCyclicModuleCreateParams,
} from "./StaticJsCyclicModuleImpl.js";
import {
  type StaticJsExportEntryRecord,
  type StaticJsLocalExportEntryRecord,
} from "./StaticJsExportEntryRecord.js";
import { type StaticJsImportEntryRecord } from "./StaticJsImportEntryRecord.js";

interface StaticJsSourceTextModuleCreateParams extends StaticJsCyclicModuleCreateParams {
  ecmaScriptSource: string;
  ecmaScriptCode: Program;
  importEntries: readonly StaticJsImportEntryRecord[];
  localExportEntries: readonly StaticJsLocalExportEntryRecord[];
  indirectExportEntries: readonly StaticJsExportEntryRecord[];
  starExportEntries: readonly StaticJsExportEntryRecord[];
}

export class StaticJsSourceTextModuleImpl
  extends StaticJsCyclicModuleImpl
  implements StaticJsSourceRecord
{
  static parse(sourceText: string, specifier: string, realm: StaticJsRealm) {
    const file = parseModule(sourceText, specifier);
    const body = file.program;

    const requestedModules = moduleRequests(body);
    const importEntries = ImportEntriesGrammar(body);
    const importedBoundNames = importedLocalNames(importEntries);
    const indirectExportEntries: StaticJsExportEntryRecord[] = [];
    const localExportEntries: StaticJsLocalExportEntryRecord[] = [];
    const starExportEntries: StaticJsExportEntryRecord[] = [];

    const exportEntries = exportEntriesGrammar(body);
    for (const exportEntry of exportEntries) {
      if (exportEntry.moduleRequest === null) {
        // Spec weirdness: Does not check if localName can be null,
        // which it seems to be,
        if (exportEntry.localName && !importedBoundNames.includes(exportEntry.localName)) {
          localExportEntries.push(exportEntry);
        } else {
          let importEntry = importEntries.find(
            (entry) => entry.localName === exportEntry.localName,
          );
          assert.notNull(
            importEntry,
            "Import entry not found when creating indirect export entry.",
          );
          indirectExportEntries.push({
            moduleRequest: importEntry.moduleRequest,
            importName: importEntry.importName,
            localName: null,
            exportName: exportEntry.exportName,
          });
        }
      } else if (exportEntry.importName === AllButDefault) {
        assert(
          exportEntry.exportName === null,
          "Export name must be null when import name is AllButDefault",
        );
        starExportEntries.push(exportEntry);
      } else {
        indirectExportEntries.push(exportEntry);
      }
    }

    const async = findTopLevelAwait(file) !== null;

    return StaticJsSourceTextModuleImpl.create({
      specifier,
      realm,
      hasTLA: async,
      ecmaScriptSource: sourceText,
      ecmaScriptCode: body,
      requestedModules,
      importEntries,
      localExportEntries,
      indirectExportEntries,
      starExportEntries,
    });
  }

  static create(params: StaticJsSourceTextModuleCreateParams): StaticJsSourceTextModuleImpl {
    return allocated(new StaticJsSourceTextModuleImpl(params));
  }

  protected constructor({
    ecmaScriptSource,
    ecmaScriptCode,
    importEntries,
    localExportEntries,
    indirectExportEntries,
    starExportEntries,
    ...rootOpts
  }: StaticJsSourceTextModuleCreateParams) {
    super(rootOpts);
    this.ecmaScriptSource = ecmaScriptSource;
    this.ecmaScriptCode = ecmaScriptCode;
    this.importEntries = importEntries;
    this.localExportEntries = localExportEntries;
    this.indirectExportEntries = indirectExportEntries;
    this.starExportEntries = starExportEntries;
  }

  readonly ecmaScriptSource: string;
  readonly ecmaScriptCode: Program;
  readonly importMeta: Record<string, string> | null = null;
  readonly importEntries: readonly StaticJsImportEntryRecord[];
  readonly localExportEntries: readonly StaticJsLocalExportEntryRecord[];
  readonly indirectExportEntries: readonly StaticJsExportEntryRecord[];
  readonly starExportEntries: readonly StaticJsExportEntryRecord[];

  context: EvaluationContext | null = null;

  override getExportedNames(exportStarSet?: Set<StaticJsModuleImpl>) {
    assert(this.status !== "new", "Module must be linked to get exported names.");
    if (!exportStarSet) {
      exportStarSet = new Set();
    }

    if (exportStarSet.has(this)) {
      return [];
    }

    exportStarSet.add(this);

    const exportedNames = new Set<string>();

    for (const exportEntry of this.localExportEntries) {
      // Spec says: "assert module provides the direct binding for this export"
      // Not sure how to do that at the moment.
      assert.notNull(
        exportEntry.exportName,
        "Export name must not be null for local export entries.",
      );
      exportedNames.add(exportEntry.exportName);
    }

    for (const exportEntry of this.indirectExportEntries) {
      // Spec says: "assert imports a specific binding for this export"
      // Not sure how to do that at the moment.
      assert.notNull(
        exportEntry.exportName,
        "Export name must not be null for indirect export entries.",
      );
      exportedNames.add(exportEntry.exportName);
    }

    for (const exportEntry of this.starExportEntries) {
      assert.notNull(
        exportEntry.moduleRequest,
        "Module request must not be null for star export entries.",
      );
      const requestedModule = getImportedModule(this, exportEntry.moduleRequest);
      const starNames = requestedModule.getExportedNames(exportStarSet);
      for (const name of starNames) {
        if (name !== "default") {
          if (!exportedNames.has(name)) {
            exportedNames.add(name);
          }
        }
      }
    }

    return Array.from(exportedNames);
  }

  override resolveExport(
    exportName: string,
    resolveSet?: StaticJsResolveSetRecord[],
  ): StaticJsResolvedBindingRecord | null | "ambiguous" {
    assert(this.status !== "new", "Cannot resolve export of an unlinked module");
    if (!resolveSet) {
      resolveSet = [];
    }

    for (const record of resolveSet) {
      if (record.module === this && exportName === record.exportName) {
        // Spec says assert this is a circular request.  ...How?
        return null;
      }
    }

    resolveSet.push({
      module: this,
      exportName,
    });

    for (const exportEntry of this.localExportEntries) {
      if (exportEntry.exportName === exportName) {
        // SPec says assert module provides the direct binding for this export.
        // How?
        return {
          module: this,
          bindingName: exportEntry.localName,
        };
      }
    }

    for (const exportEntry of this.indirectExportEntries) {
      if (exportEntry.exportName === exportName) {
        assert.notNull(
          exportEntry.moduleRequest,
          "Module request must not be null for indirect export entries.",
        );

        const importedModule = getImportedModule(this, exportEntry.moduleRequest);

        if (exportEntry.importName === Namespace) {
          // Spec says: Assert module does not provide the direct binding for this export
          // how?
          return {
            module: importedModule,
            bindingName: Namespace,
          };
        }

        // Spec says: Assert module imports a specific binding for this export
        // how?
        assert.isString(
          exportEntry.importName,
          "Import name must be a string for non-namespace indirect export entries.",
        );
        return importedModule.resolveExport(exportEntry.importName, resolveSet);
      }
    }

    if (exportName === "default") {
      return null;
    }

    let starResolution: StaticJsResolvedBindingRecord | null | "ambiguous" = null;

    for (const exportEntry of this.starExportEntries) {
      assert.notNull(exportEntry.moduleRequest, "Star export entries must have module requests");

      const importedModule = getImportedModule(this, exportEntry.moduleRequest);

      const resolution = importedModule.resolveExport(exportName, resolveSet);

      if (resolution === "ambiguous") {
        return "ambiguous";
      }

      if (resolution != null) {
        if (starResolution === null) {
          starResolution = resolution;
        } else {
          // Spec says: Assert there is more than one * export that includes the requested name.
          if (resolution.module != starResolution.module) {
            return "ambiguous";
          }
          if (resolution.bindingName !== starResolution.bindingName) {
            return "ambiguous";
          }
        }
      }
    }

    return starResolution;
  }

  override *initializeEnvironment() {
    for (const exportEntry of this.indirectExportEntries) {
      assert.notNull(exportEntry.exportName, "Indirect export entries must have export names.");
      const resolution = this.resolveExport(exportEntry.exportName);
      if (resolution === null || resolution === "ambiguous") {
        throw Completion.Throw.create(
          "SyntaxError",
          `Failed to resolve export ${exportEntry.exportName} of ${this.specifier}`,
        );
      }
    }

    const realm = this.realm;
    const envRecord = StaticJsModuleEnvironmentRecord.create({ realm, outerEnv: realm.globalEnv });
    this.environment = envRecord;

    for (const importEntry of this.importEntries) {
      const importedModule = getImportedModule(this, importEntry.moduleRequest);
      if (importEntry.importName === Namespace) {
        const namespace = getModuleNamespace(importedModule);
        yield* X(envRecord.createImmutableBindingEvaluator(importEntry.localName, true));
        yield* X(envRecord.initializeBindingEvaluator(importEntry.localName, namespace));
      } else {
        assert.isString(
          importEntry.importName,
          "Import name must be a string for non-namespace import entries.",
        );
        const resolution = importedModule.resolveExport(importEntry.importName);
        if (resolution === null || resolution === "ambiguous") {
          throw Completion.Throw.create(
            "SyntaxError",
            `Failed to resolve import ${importEntry.importName} of ${this.specifier}`,
          );
        }

        if (isTaggedSymbol(resolution.bindingName, Namespace)) {
          const namespace = getModuleNamespace(resolution.module);
          yield* X(envRecord.createImmutableBindingEvaluator(importEntry.localName, true));
          yield* X(envRecord.initializeBindingEvaluator(importEntry.localName, namespace));
        } else {
          createImportBinding(
            envRecord,
            importEntry.localName,
            resolution.module,
            resolution.bindingName,
          );
        }
      }
    }

    const moduleContext = EvaluationContext.createRootContext({
      scriptOrModule: this,
      strict: true,
      realm,
      env: envRecord,
    });
    this.context = moduleContext;

    EvaluationContext.push(moduleContext);
    try {
      const code = this.ecmaScriptCode;
      const variableDecls = varScopedDeclarations(code);

      const declaredVariableNames = new Set<string>();

      for (const variableDecl of variableDecls) {
        for (const name of boundNames(variableDecl)) {
          if (!declaredVariableNames.has(name)) {
            yield* X(envRecord.createMutableBindingEvaluator(name, false));
            yield* X(envRecord.initializeBindingEvaluator(name, realm.types.undefined));
            declaredVariableNames.add(name);
          }
        }
      }

      const lexicalDecls = lexicallyScopedDeclarations.forModule(code);
      let privateEnv = null;
      for (const lexicalDecl of lexicalDecls) {
        for (const name of boundNames(lexicalDecl)) {
          if (isConstantDeclaration(lexicalDecl)) {
            yield* X(envRecord.createImmutableBindingEvaluator(name, true));
          } else {
            yield* X(envRecord.createMutableBindingEvaluator(name, false));
          }
          if (lexicalDecl.type === "FunctionDeclaration") {
            const funcObj = yield* instantiateFunctionObject(lexicalDecl, envRecord, privateEnv);
            yield* X(envRecord.initializeBindingEvaluator(name, funcObj));
          }
        }
      }
    } finally {
      EvaluationContext.pop();
    }
  }

  override *executeModule(
    capability?: StaticJsPromiseCapabilityRecord,
  ): EvaluationGenerator<void | Completion.Throw> {
    // assert(() => PostLink, "Module must be linked before execution.");
    // Spec says to assert "module has been linked and declarations are instantiated"
    assert.notNull(
      this.environment,
      "StaticJsSourceTextModule environment must be initialized before execution.",
    );

    const moduleContext = this.context!;
    if (!this.hasTLA) {
      assert(capability == null, "Capability must be null for modules without top-level await.");

      // Wanted by DisposeResources, which we don't implement.
      // const env = this.environment;

      let result: Completion;
      EvaluationContext.push(moduleContext);
      try {
        result = yield* EvaluateNodeCommand(this.ecmaScriptCode);
        // TODO: DisposeResources
      } finally {
        EvaluationContext.pop();
      }
      if (Completion.Throw.is(result)) {
        return yield* Q(result);
      }
    } else {
      assert.notNull(capability, "Capability must not be null for modules with top-level await.");
      yield* asyncBlockStart(capability, this.ecmaScriptCode, moduleContext);
    }
  }
}
