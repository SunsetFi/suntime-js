import type { Program } from "@babel/types";

import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import varScopedDeclarations from "../../../evaluator/initialization/algorithms/var-scoped-declarations.js";
import boundNames from "../../../evaluator/initialization/algorithms/bound-names.js";
import lexicallyScopedDeclarations from "../../../evaluator/initialization/algorithms/lexically-scoped-declarations.js";

import { EvaluateNodeCommand } from "../../../evaluator/commands/EvaluateNodeCommand.js";
import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import EvaluationContext from "../../../evaluator/EvaluationContext.js";

import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

import createFunction from "../../../evaluator/node-evaluators/Function.js";

import StaticJsModuleEnvironmentRecord from "../../environments/implementation/StaticJsModuleEnvironmentRecord.js";
import StaticJsDeclarativeEnvironmentRecord from "../../environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../../types/StaticJsValue.js";

import type {
  StaticJsModuleStatus,
  StaticJsModuleImplementation,
} from "../StaticJsModuleImplementation.js";
import type {
  StaticJsModuleResolvedBinding,
  StaticJsResolvedBinding,
} from "../StaticJsResolvedBinding.js";

import { StaticJsModuleBase } from "./StaticJsModuleBase.js";

import type { StaticJsImportEntry } from "./StaticJsImportEntry.js";

import type { StaticJsExportEntry } from "./StaticJsExportEntry.js";
import {
  isStaticJsLocalExportEntry,
  isStaticJsIndirectExportEntry,
} from "./StaticJsExportEntry.js";

import parseImportEntries from "./parse-import-entries.js";
import parseExportEntries from "./parse-export-entries.js";

export class StaticJsModuleImpl extends StaticJsModuleBase {
  private _linked = false;

  private _moduleEnv: StaticJsModuleEnvironmentRecord | undefined;
  private _envRec: StaticJsDeclarativeEnvironmentRecord | undefined;
  private _context: EvaluationContext | undefined;

  private _status: StaticJsModuleStatus = "uninstantiated";

  private readonly _importEntries: readonly StaticJsImportEntry[];
  private readonly _exportEntries: readonly StaticJsExportEntry[];

  private readonly _linkedModules = new Map<
    string,
    StaticJsModuleImplementation | null
  >();

  private readonly _indirectExports = new Map<
    string,
    { module: StaticJsModuleImplementation; targetExportName: string }
  >();
  private readonly _starExports: StaticJsModuleImplementation[] = [];

  constructor(
    name: string,
    private readonly _ast: Program,
    realm: StaticJsRealm,
  ) {
    super(name, realm);
    if (_ast.sourceType !== "module") {
      throw new Error(
        `Module ${name} is not a module.  Source type is ${_ast.sourceType}.`,
      );
    }

    this._importEntries = cloneFreezeObjectArray(
      parseImportEntries(name, _ast),
    );
    this._exportEntries = cloneFreezeObjectArray(
      parseExportEntries(name, _ast),
    );
  }

  get name() {
    return this._name;
  }

  get status() {
    return this._status;
  }

  async linkModules(): Promise<void> {
    if (this._linked) {
      return;
    }

    this._linked = true;

    const importNames = this._importEntries.map((x) => x.moduleRequest);
    const indirectExportNames = this._exportEntries
      .filter(isStaticJsIndirectExportEntry)
      .map((x) => x.moduleRequest);

    const moduleSpecifiers = Array.from(
      new Set([...importNames, ...indirectExportNames]),
    );
    const modules = await Promise.all(
      moduleSpecifiers.map((moduleSpecifier) =>
        this._realm.resolveImportedModule(this, moduleSpecifier),
      ),
    );

    await Promise.all(modules.map((module) => module?.linkModules()));

    for (let i = 0; i < moduleSpecifiers.length; i++) {
      const moduleSpecifier = moduleSpecifiers[i];
      const module = modules[i];
      this._linkedModules.set(moduleSpecifier, module);
    }
  }

  *moduleDeclarationInstantiationEvaluator(): EvaluationGenerator {
    if (this._status !== "uninstantiated") {
      return null;
    }

    this._status = "instantiating";

    // FIXME: Where does the spec want this done?
    // Implement this for real!

    // Instaniate export modules
    for (const entry of this._exportEntries) {
      if (!isStaticJsIndirectExportEntry(entry)) {
        continue;
      }

      const module = this._linkedModules.get(entry.moduleRequest);
      if (!module) {
        throw new ThrowCompletion(
          this._realm.types.error(
            "ReferenceError",
            `Module ${entry.moduleRequest} not found.`,
          ),
        );
      }

      yield* module.moduleDeclarationInstantiationEvaluator();
    }

    // Instantiate import modules
    for (const entry of this._importEntries) {
      const module = this._linkedModules.get(entry.moduleRequest);
      if (!module) {
        throw new ThrowCompletion(
          this._realm.types.error(
            "ReferenceError",
            `Module ${entry.moduleRequest} not found.`,
          ),
        );
      }

      yield* module.moduleDeclarationInstantiationEvaluator();
    }

    // Actual speccy stuff
    yield* this._initializeEnvironment();

    // Verify local exports
    for (const entry of this._exportEntries) {
      if (!isStaticJsLocalExportEntry(entry)) {
        continue;
      }

      const hasBinding = yield* this._envRec!.hasBindingEvaluator(
        entry.localName,
      );
      if (!hasBinding) {
        throw new ThrowCompletion(
          this._realm.types.error(
            "SyntaxError",
            `Exported local name not declared: ${entry.localName}`,
          ),
        );
      }
    }

    // Resolve Re-exports
    for (const entry of this._exportEntries) {
      if (!isStaticJsIndirectExportEntry(entry)) {
        continue;
      }

      const module = this._linkedModules.get(entry.moduleRequest);
      if (!module) {
        throw new ThrowCompletion(
          this._realm.types.error(
            "ReferenceError",
            `Module ${entry.moduleRequest} not found.`,
          ),
        );
      }

      const { importName, exportName } = entry;

      if (exportName === null) {
        this._starExports.push(module);
        continue;
      }

      if (!importName) {
        throw new StaticJsEngineError(
          `Import name is null for named export from module ${module.name} in module ${this._name}.`,
        );
      }

      this._indirectExports.set(exportName, {
        module,
        targetExportName: importName,
      });
    }

    this._status = "instantiated";

    return null;
  }

  *moduleEvaluationEvaluator() {
    if (this._status !== "instantiated") {
      return null;
    }

    this._status = "evaluating";

    for (const module of this._linkedModules.values()) {
      if (!module) {
        // Oh well.  If we actually needed it we would have thrown by now.
        continue;
      }

      yield* module.moduleEvaluationEvaluator();
    }

    const result = yield* EvaluateNodeCommand(this._ast, this._context!);

    this._status = "evaluated";

    return result;
  }

  *resolveExportEvaluator(
    bindingName: string,
    resolveSet = new Set<string>(),
  ): EvaluationGenerator<StaticJsResolvedBinding> {
    const key = `${this._name}::${bindingName}`;
    if (resolveSet.has(key)) {
      return null;
    }

    resolveSet.add(key);

    // Check direct exports.
    for (const entry of this._exportEntries) {
      if (
        !isStaticJsLocalExportEntry(entry) ||
        entry.exportName !== bindingName
      ) {
        continue;
      }

      return {
        module: this,
        bindingName: entry.localName,
      };
    }

    // Check indirect exports
    for (const entry of this._exportEntries) {
      if (
        !isStaticJsIndirectExportEntry(entry) ||
        entry.importName === null ||
        entry.exportName !== bindingName
      ) {
        continue;
      }

      const module = this._linkedModules.get(entry.moduleRequest);
      if (!module) {
        throw new ThrowCompletion(
          this._realm.types.error(
            "ReferenceError",
            `Module ${entry.moduleRequest} not found.`,
          ),
        );
      }

      return yield* module.resolveExportEvaluator(entry.importName, resolveSet);
    }

    // Star exports

    let starResolution: StaticJsModuleResolvedBinding | null = null;

    for (const entry of this._exportEntries) {
      if (!isStaticJsIndirectExportEntry(entry) || entry.exportName !== null) {
        continue;
      }

      const module = this._linkedModules.get(entry.moduleRequest);
      if (!module) {
        throw new ThrowCompletion(
          this._realm.types.error(
            "ReferenceError",
            `Module ${entry.moduleRequest} not found.`,
          ),
        );
      }

      const resolution = yield* module.resolveExportEvaluator(
        bindingName,
        resolveSet,
      );

      if (resolution === "ambiguous") {
        return resolution;
      }

      if (resolution != null) {
        if (starResolution == null) {
          starResolution = resolution;
        } else if (
          starResolution.module !== resolution.module ||
          starResolution.bindingName !== resolution.bindingName
        ) {
          return "ambiguous";
        }
      }
    }

    return starResolution;
  }

  *getExportedNamesEvaluator(
    exportStarSet = new Set<string>(),
  ): EvaluationGenerator<string[]> {
    const visitedKey = this.name;
    if (exportStarSet.has(visitedKey)) {
      return [];
    }
    exportStarSet.add(visitedKey);

    const names = new Set<string>();

    // Local exports
    for (const entry of this._exportEntries) {
      if (!isStaticJsLocalExportEntry(entry)) {
        continue;
      }

      const { exportName } = entry;
      if (exportName === "default") {
        continue;
      }

      names.add(exportName);
    }

    // Star exports
    for (const entry of this._exportEntries) {
      if (!isStaticJsIndirectExportEntry(entry)) {
        continue;
      }

      const module = this._linkedModules.get(entry.moduleRequest);
      if (!module) {
        throw new ThrowCompletion(
          this._realm.types.error(
            "ReferenceError",
            `Module ${entry.moduleRequest} not found.`,
          ),
        );
      }

      const starNames = yield* module.getExportedNamesEvaluator(exportStarSet);
      for (const name of starNames) {
        if (name === "default") {
          continue;
        }

        names.add(name);
      }
    }

    return Array.from(names);
  }

  *getOwnBindingValueEvaluator(
    bindingName: string,
  ): EvaluationGenerator<StaticJsValue | null> {
    if (this._envRec! == null) {
      return null;
    }

    const value = yield* this._envRec!.getBindingValueEvaluator(
      bindingName,
      false,
    );
    if (value == null) {
      return null;
    }

    return value;
  }

  private *_initializeEnvironment(): EvaluationGenerator<void> {
    for (const entry of this._exportEntries) {
      if (!isStaticJsIndirectExportEntry(entry)) {
        continue;
      }

      const resolution = yield* this.resolveExportEvaluator(entry.exportName!);
      if (!resolution || resolution === "ambiguous") {
        throw new ThrowCompletion(
          this._realm.types.error(
            "ReferenceError",
            `Cannot resolve export ${entry.exportName} for module ${this._name}.`,
          ),
        );
      }
    }

    this._moduleEnv = new StaticJsModuleEnvironmentRecord(this._realm);
    this._envRec = new StaticJsDeclarativeEnvironmentRecord(
      this._moduleEnv,
      this._realm,
    );

    for (const entry of this._importEntries) {
      const importedModule = this._linkedModules.get(entry.moduleRequest);
      if (!importedModule) {
        throw new ThrowCompletion(
          this._realm.types.error(
            "ReferenceError",
            `Module ${entry.moduleRequest} not found.`,
          ),
        );
      }

      if (entry.importName === "namespace") {
        const ns = yield* importedModule.getModuleNamespaceEvaluator();

        yield* this._envRec.createImmutableBindingEvaluator(
          entry.localName,
          true,
        );
        yield* this._envRec.initializeBindingEvaluator(entry.localName, ns);
      } else {
        const resolved = yield* importedModule.resolveExportEvaluator(
          entry.importName,
        );

        if (!resolved || resolved === "ambiguous") {
          throw new ThrowCompletion(
            this._realm.types.error(
              "SyntaxError",
              `Module ${entry.moduleRequest} does not export ${entry.importName}.`,
            ),
          );
        }

        if (resolved.bindingName === "namespace") {
          const namespace =
            yield* resolved.module.getModuleNamespaceEvaluator();

          yield* this._envRec.createImmutableBindingEvaluator(
            entry.localName,
            true,
          );
          yield* this._envRec.initializeBindingEvaluator(
            entry.localName,
            namespace,
          );
        } else {
          yield* this._moduleEnv.createImportBindingEvaluator(
            entry.localName,
            resolved.module,
            resolved.bindingName,
          );
        }
      }
    }

    this._context = EvaluationContext.createRootContext(
      true,
      this._realm,
      this._envRec,
    );

    const varDeclarations = varScopedDeclarations(this._ast);
    const declaredVarNames = new Set<string>();
    for (const d of varDeclarations) {
      for (const dn of boundNames(d)) {
        if (declaredVarNames.has(dn)) {
          continue;
        }
        declaredVarNames.add(dn);
        yield* this._envRec.createMutableBindingEvaluator(dn, false);
        yield* this._envRec.initializeBindingEvaluator(
          dn,
          this._realm.types.undefined,
        );
      }
    }

    const lexDeclarations = lexicallyScopedDeclarations(this._ast);
    for (const d of lexDeclarations) {
      for (const dn of boundNames(d)) {
        if (d.type === "VariableDeclaration" && d.kind === "const") {
          yield* this._envRec.createImmutableBindingEvaluator(dn, true);
        } else {
          yield* this._envRec.createMutableBindingEvaluator(dn, false);
        }

        if (d.type === "FunctionDeclaration") {
          const fn = createFunction(dn, d, this._context!);
          yield* this._envRec.initializeBindingEvaluator(dn, fn);
        }
      }
    }
  }
}

function cloneFreezeObjectArray<T>(x: readonly T[]): readonly Readonly<T>[] {
  return Object.freeze(
    x.map((value) => Object.freeze(Object.assign({}, value))),
  );
}
