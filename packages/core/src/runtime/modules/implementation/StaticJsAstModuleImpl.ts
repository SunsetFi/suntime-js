import type { Program } from "@babel/types";

import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import varScopedDeclarations from "../../../evaluator/instantiation/algorithms/var-scoped-declarations.js";
import boundNames from "../../../evaluator/instantiation/algorithms/bound-names.js";
import lexicallyScopedDeclarations from "../../../evaluator/instantiation/algorithms/lexically-scoped-declarations.js";

import { EvaluateNodeCommand } from "../../../evaluator/commands/EvaluateNodeCommand.js";
import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import EvaluationContext from "../../../evaluator/EvaluationContext.js";

import { Completion } from "../../../evaluator/completions/Completion.js";
import Q from "../../../evaluator/completions/Q.js";

import createFunction from "../../../evaluator/node-evaluators/Function.js";

import StaticJsModuleEnvironmentRecord from "../../environments/implementation/StaticJsModuleEnvironmentRecord.js";
import StaticJsDeclarativeEnvironmentRecord from "../../environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../../types/StaticJsValue.js";

import type {
  StaticJsModuleStatus,
  StaticJsModuleImplementation,
} from "../StaticJsModuleImplementation.js";
import {
  BindingNameNamespace,
  type StaticJsModuleResolvedBinding,
  type StaticJsResolvedBinding,
} from "./StaticJsResolvedBinding.js";

import { StaticJsModuleBase } from "./StaticJsModuleBase.js";

import { NamespaceImportName, type StaticJsImportEntry } from "./StaticJsImportEntry.js";

import type { StaticJsExportEntry } from "./StaticJsExportEntry.js";
import {
  isStaticJsLocalExportEntry,
  isStaticJsIndirectExportEntry,
  ImportAllButDefault,
} from "./StaticJsExportEntry.js";

import parseImportEntries from "./parse-import-entries.js";
import exportEntries from "./export-entries.js";
import { StaticJsModuleRecord } from "../../../evaluator/ScriptOrModuleRecord/StaticJsModuleRecord.js";
import AsyncEvaluatorInvocation from "../../../evaluator/AsyncEvaluatorInvocation.js";
import StaticJsRuntimeError from "../../../errors/StaticJsRuntimeError.js";

export class StaticJsAstModuleImpl extends StaticJsModuleBase {
  private _linked = false;

  private _moduleEnv: StaticJsModuleEnvironmentRecord | undefined;
  private _envRec: StaticJsDeclarativeEnvironmentRecord | undefined;
  private _context: EvaluationContext | undefined;

  private _status: StaticJsModuleStatus = "uninstantiated";

  private readonly _importEntries: readonly StaticJsImportEntry[];
  private readonly _exportEntries: readonly StaticJsExportEntry[];

  private readonly _linkedModules = new Map<string, StaticJsModuleImplementation | null>();

  private readonly _indirectExports = new Map<
    string,
    { module: StaticJsModuleImplementation; targetExportName: string }
  >();
  private readonly _starExports: StaticJsModuleImplementation[] = [];

  private _evaluationPromise: Promise<void> | null = null;

  constructor(
    name: string,
    private readonly _ecmaScriptSource: string,
    private readonly _ecmaScriptCode: Program,
    realm: StaticJsRealm,
  ) {
    super(name, realm);
    if (_ecmaScriptCode.sourceType !== "module") {
      throw new Error(
        `Module ${name} is not a module.  Source type is ${_ecmaScriptCode.sourceType}.`,
      );
    }

    this._importEntries = parseImportEntries(name, _ecmaScriptCode);
    this._exportEntries = exportEntries(this._ecmaScriptCode);
  }

  override get name() {
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

    const moduleSpecifiers = Array.from(new Set([...importNames, ...indirectExportNames]));
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

  *moduleDeclarationInstantiationEvaluator(): EvaluationGenerator<void> {
    if (this._status !== "uninstantiated") {
      return;
    }

    this._status = "instantiating";

    // FIXME: Where does the spec want this done?
    // Implement this for real!

    // Note: We have no evaluation stack at this phase, so we need to pass realm to Completion.Throw

    // Instaniate export modules
    for (const entry of this._exportEntries) {
      if (!isStaticJsIndirectExportEntry(entry)) {
        continue;
      }

      const module = this._linkedModules.get(entry.moduleRequest);
      if (!module) {
        throw Completion.Throw(
          "ReferenceError",
          `Module ${entry.moduleRequest} not found.`,
          this._realm,
        );
      }

      yield* module.moduleDeclarationInstantiationEvaluator();
    }

    // Instantiate import modules
    for (const entry of this._importEntries) {
      const module = this._linkedModules.get(entry.moduleRequest);
      if (!module) {
        throw Completion.Throw(
          "ReferenceError",
          `Module ${entry.moduleRequest} not found.`,
          this._realm,
        );
      }

      yield* module.moduleDeclarationInstantiationEvaluator();
    }

    // Done somewhere in ParseModule according to the spec.
    // NOTE: Not 1-1 with the spec, need to review this.
    // Resolve Re-exports
    for (const entry of this._exportEntries) {
      if (!isStaticJsIndirectExportEntry(entry)) {
        continue;
      }

      const module = this._linkedModules.get(entry.moduleRequest);
      if (!module) {
        throw Completion.Throw(
          "ReferenceError",
          `Module ${entry.moduleRequest} not found.`,
          this._realm,
        );
      }

      const { importName, exportName } = entry;

      if (importName === ImportAllButDefault) {
        this._starExports.push(module);
        continue;
      }

      if (!exportName) {
        throw new StaticJsEngineError(
          `Export name is null for named export from module ${module.name} in module ${this._name}.`,
        );
      }

      this._indirectExports.set(exportName, {
        module,
        targetExportName: importName,
      });
    }

    // Actual speccy stuff
    yield* this._initializeEnvironment();

    // Verify local exports
    for (const entry of this._exportEntries) {
      if (!isStaticJsLocalExportEntry(entry)) {
        continue;
      }

      const hasBinding = yield* this._envRec!.hasBindingEvaluator(entry.localName);
      if (!hasBinding) {
        throw Completion.Throw(
          "SyntaxError",
          `Exported local name not declared: ${entry.localName}`,
          this._realm,
        );
      }
    }

    this._status = "instantiated";
  }

  *moduleEvaluationEvaluator(): EvaluationGenerator<Promise<void>> {
    if (this._status === "evaluating" || this._status === "evaluated") {
      return this._evaluationPromise!;
    }

    if (this._status !== "instantiated") {
      throw new StaticJsEngineError(
        `Cannot evaluate module ${this._name} because it is not instantiated. Current status: ${this._status}`,
      );
    }

    this._status = "evaluating";

    const prereqs: Promise<void>[] = [];
    for (const module of this._linkedModules.values()) {
      if (!module) {
        // Oh well.  If we actually needed it we would have thrown by now.
        continue;
      }

      const promise = yield* module.moduleEvaluationEvaluator();
      if (promise instanceof Promise) {
        prereqs.push(promise);
      }
    }

    return Promise.all(prereqs).then(() => {
      const { _ecmaScriptCode, _realm, _context } = this;

      const { promise, resolve, reject } = Promise.withResolvers<void>();
      this._evaluationPromise = promise;

      const onComplete = () => {
        this._status = "evaluated";
      };

      function* evaluateAsyncBody() {
        yield* Q(EvaluateNodeCommand(_ecmaScriptCode));
        onComplete();
        return null;
      }

      function* moduleJob() {
        const invocation = new AsyncEvaluatorInvocation(evaluateAsyncBody(), _realm);

        yield* invocation.onComplete((_, err) => {
          if (err) {
            reject(new StaticJsRuntimeError(err));
          } else {
            resolve();
          }
        });

        yield* _context!.run(function* () {
          yield* invocation.start();
        });
      }

      this._realm.enqueuePromiseJob(moduleJob);

      return this._evaluationPromise;
    });
  }

  *resolveExportEvaluator(
    exportName: string,
    resolveSet = new Set<string>(),
  ): EvaluationGenerator<StaticJsResolvedBinding> {
    const key = `${this._name}::${exportName}`;
    if (resolveSet.has(key)) {
      return null;
    }

    resolveSet.add(key);

    for (const e of this._exportEntries) {
      if (!isStaticJsLocalExportEntry(e)) {
        continue;
      }

      if (e.exportName === exportName) {
        return {
          module: this,
          bindingName: e.localName,
        };
      }
    }

    for (const e of this._exportEntries) {
      if (!isStaticJsIndirectExportEntry(e)) {
        continue;
      }

      if (e.exportName !== exportName) {
        continue;
      }

      const importedModule = this._linkedModules.get(e.moduleRequest);
      if (!importedModule) {
        throw new StaticJsEngineError(
          `Module ${e.moduleRequest} not found for indirect export ${exportName} in module ${this._name}.`,
        );
      }

      // Note: Spec says ALL which seems to be different than AllButDefault???
      if (e.importName === ImportAllButDefault) {
        return {
          module: importedModule,
          bindingName: BindingNameNamespace,
        };
      } else {
        return yield* importedModule.resolveExportEvaluator(e.importName, resolveSet);
      }
    }

    if (exportName === "default") {
      return null;
    }

    let starResolution: StaticJsModuleResolvedBinding | null = null;
    for (const e of this._exportEntries) {
      if (!isStaticJsIndirectExportEntry(e) || e.importName !== ImportAllButDefault) {
        continue;
      }

      const importedModule = this._linkedModules.get(e.moduleRequest);
      if (!importedModule) {
        throw new StaticJsEngineError(
          `Module ${e.moduleRequest} not found for star export in module ${this._name}.`,
        );
      }

      const resolution = yield* importedModule.resolveExportEvaluator(exportName, resolveSet);

      if (resolution === "ambiguous") {
        return resolution;
      }

      if (resolution === null) {
        continue;
      }

      if (starResolution == null) {
        starResolution = resolution;
      } else if (
        starResolution.module !== resolution.module ||
        starResolution.bindingName !== resolution.bindingName
      ) {
        return "ambiguous";
      }
    }

    return starResolution;
  }

  *getExportedNamesEvaluator(exportStarSet = new Set<string>()): EvaluationGenerator<string[]> {
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
        throw new StaticJsEngineError(
          `Module ${entry.moduleRequest} not found for star export in module ${this._name}.`,
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

  *getOwnBindingValueEvaluator(bindingName: string): EvaluationGenerator<StaticJsValue | null> {
    if (this._envRec! == null) {
      return null;
    }

    const value = yield* this._envRec!.getBindingValueEvaluator(bindingName, true);
    if (value == null) {
      return null;
    }

    return value;
  }

  private *_initializeEnvironment(): EvaluationGenerator<void> {
    for (const exportName of this._indirectExports.keys()) {
      const resolution = yield* this.resolveExportEvaluator(exportName!);
      if (!resolution || resolution === "ambiguous") {
        throw Completion.Throw(
          "ReferenceError",
          `Cannot resolve export ${exportName} for module ${this._name}.`,
        );
      }
    }

    this._moduleEnv = new StaticJsModuleEnvironmentRecord(this._realm);
    this._envRec = new StaticJsDeclarativeEnvironmentRecord(this._moduleEnv, this._realm);

    for (const entry of this._importEntries) {
      const importedModule = this._linkedModules.get(entry.moduleRequest);
      if (!importedModule) {
        throw Completion.Throw("ReferenceError", `Module ${entry.moduleRequest} not found.`);
      }

      if (entry.importName === NamespaceImportName) {
        const ns = yield* importedModule.getModuleNamespaceEvaluator();

        yield* this._envRec.createImmutableBindingEvaluator(entry.localName, true);
        yield* this._envRec.initializeBindingEvaluator(entry.localName, ns);
      } else {
        const resolved = yield* importedModule.resolveExportEvaluator(entry.importName);

        if (!resolved || resolved === "ambiguous") {
          throw Completion.Throw(
            "SyntaxError",
            `Module ${entry.moduleRequest} does not export ${entry.importName}.`,
          );
        }

        if (resolved.bindingName === BindingNameNamespace) {
          const namespace = yield* resolved.module.getModuleNamespaceEvaluator();

          yield* this._envRec.createImmutableBindingEvaluator(entry.localName, true);
          yield* this._envRec.initializeBindingEvaluator(entry.localName, namespace);
        } else {
          yield* this._moduleEnv.createImportBindingEvaluator(
            entry.localName,
            resolved.module,
            resolved.bindingName,
          );
        }
      }
    }

    const scriptOrModule = StaticJsModuleRecord(this._ecmaScriptCode, this._ecmaScriptSource, this);
    this._context = EvaluationContext.createRootContext(
      scriptOrModule,
      true,
      this._realm,
      this._envRec,
    );

    // oxlint-disable-next-line typescript/no-this-alias
    const { _ecmaScriptCode, _realm, _envRec } = this;
    yield* this._context.run(function* () {
      const varDeclarations = varScopedDeclarations(_ecmaScriptCode);
      const declaredVarNames = new Set<string>();
      for (const d of varDeclarations) {
        for (const dn of boundNames(d)) {
          if (declaredVarNames.has(dn)) {
            continue;
          }
          declaredVarNames.add(dn);
          yield* _envRec.createMutableBindingEvaluator(dn, false);
          yield* _envRec.initializeBindingEvaluator(dn, _realm.types.undefined);
        }
      }

      const lexDeclarations = lexicallyScopedDeclarations(_ecmaScriptCode);
      for (const d of lexDeclarations) {
        for (const dn of boundNames(d)) {
          if (d.type === "VariableDeclaration" && d.kind === "const") {
            yield* _envRec.createImmutableBindingEvaluator(dn, true);
          } else {
            yield* _envRec.createMutableBindingEvaluator(dn, false);
          }

          if (d.type === "FunctionDeclaration") {
            const fn = createFunction(dn, d, _envRec);
            yield* _envRec.initializeBindingEvaluator(dn, fn);
          }
        }
      }
    });
  }
}
