import type { Program } from "@babel/types";
import {
  isExportSpecifier,
  isFunctionDeclaration,
  isIdentifier,
  isImportDeclaration,
  isVariableDeclaration,
} from "@babel/types";

import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import StaticJsModuleEnvironmentRecord from "../../environments/implementation/StaticJsModuleEnvironmentRecord.js";
import StaticJsLexicalEnvironment from "../../environments/implementation/StaticJsLexicalEnvironment.js";

import setupEnvironment from "../../../evaluator/node-evaluators/setup-environment.js";
import { EvaluateNodeCommand } from "../../../evaluator/commands/EvaluateNodeCommand.js";
import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import EvaluationContext from "../../../evaluator/EvaluationContext.js";

import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

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

export class StaticJsModuleImpl extends StaticJsModuleBase {
  private _linked = false;

  private _enviornment: StaticJsModuleEnvironmentRecord | undefined;
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
    const exportNames = this._exportEntries
      .filter(isStaticJsIndirectExportEntry)
      .map((x) => x.moduleRequest);

    const moduleSpecifiers = Array.from(
      new Set<string>([...importNames, ...exportNames]),
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

    this._enviornment = new StaticJsModuleEnvironmentRecord(this._realm);

    const env = new StaticJsLexicalEnvironment(
      this._realm,
      this._enviornment,
      this._realm.globalEnv,
    );

    this._context = EvaluationContext.createRootContext(true, this._realm, env);

    yield* setupEnvironment(this._ast, this._context);

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

      if (entry.importName === "namespace") {
        yield* this._enviornment.createImmutableBindingEvaluator(
          entry.localName,
          false,
        );

        const ns = yield* module.getModuleNamespaceEvaluator();

        yield* this._enviornment.initializeBindingEvaluator(
          entry.localName,
          ns,
        );
      } else {
        const resolved = yield* module.resolveExportEvaluator(entry.importName);

        if (!resolved) {
          throw new ThrowCompletion(
            this._realm.types.error(
              "SyntaxError",
              `Module ${entry.moduleRequest} does not export ${entry.importName}.`,
            ),
          );
        }

        if (resolved === "ambiguous") {
          throw new ThrowCompletion(
            this._realm.types.error(
              "SyntaxError",
              `Ambiguous export ${entry.importName} in module ${entry.moduleRequest}.`,
            ),
          );
        }

        yield* this._enviornment.createImportBindingEvaluator(
          entry.localName,
          resolved.module,
          resolved.bindingName,
        );
      }
    }

    // Verify local exports
    for (const entry of this._exportEntries) {
      if (!isStaticJsLocalExportEntry(entry)) {
        continue;
      }

      const hasBinding = yield* this._enviornment.hasBindingEvaluator(
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
    if (this._enviornment == null) {
      return null;
    }

    const value = yield* this._enviornment.getBindingValueEvaluator(
      bindingName,
      false,
    );
    if (value == null) {
      return null;
    }

    return value;
  }
}

function cloneFreezeObjectArray<T>(x: readonly T[]): readonly Readonly<T>[] {
  return Object.freeze(
    x.map((value) => Object.freeze(Object.assign({}, value))),
  );
}

function parseImportEntries(
  moduleName: string,
  ast: Program,
): StaticJsImportEntry[] {
  const importEntries: StaticJsImportEntry[] = [];
  const seenImports = new Set<string>();
  function throwIfImportSeen(importName: string) {
    if (seenImports.has(importName)) {
      // It seems babel/parser gates this for us
      throw new StaticJsEngineError(
        `Duplicate import name "${importName}" in module ${moduleName}.`,
      );
    }
    seenImports.add(importName);
  }

  for (const node of ast.body) {
    if (!isImportDeclaration(node)) {
      continue;
    }

    for (const specifier of node.specifiers) {
      switch (specifier.type) {
        case "ImportDefaultSpecifier":
          {
            const localName = specifier.local.name;
            throwIfImportSeen(localName);
            importEntries.push({
              moduleRequest: node.source.value,
              localName,
              importName: "default",
            });
          }
          break;
        case "ImportNamespaceSpecifier":
          {
            const localName = specifier.local.name;
            throwIfImportSeen(localName);
            importEntries.push({
              moduleRequest: node.source.value,
              localName,
              importName: "namespace",
            });
          }
          break;
        case "ImportSpecifier":
          {
            if (!isIdentifier(specifier.imported)) {
              // Not sure when this happens but might have something to do with specifier.importKind
              // I was unable to get this to be anything using a sandbox of babel/parser.
              throw new StaticJsEngineError(
                `Import specifier is importing unknown node type ${specifier.imported.type}`,
              );
            }

            const localName = specifier.local.name;
            const importName = specifier.imported.name;
            throwIfImportSeen(importName);
            importEntries.push({
              moduleRequest: node.source.value,
              localName,
              importName,
            });
          }
          break;
      }
    }
  }

  return importEntries;
}

function parseExportEntries(
  moduleName: string,
  ast: Program,
): StaticJsExportEntry[] {
  const exportEntries: StaticJsExportEntry[] = [];
  const seenExports = new Set<string>();
  function throwIfExportSeen(exportName: string) {
    if (seenExports.has(exportName)) {
      throw new Error(
        `Duplicate export name "${exportName}" in module ${moduleName}.`,
      );
    }
    seenExports.add(exportName);
  }

  for (const node of ast.body) {
    switch (node.type) {
      case "ExportAllDeclaration":
        exportEntries.push({
          moduleRequest: node.source.value,
          exportName: null,
          importName: null,
        });
        break;
      case "ExportNamedDeclaration":
        // FIXME: THis can be a LOT of weird things!w
        if (isVariableDeclaration(node.declaration)) {
          for (const decl of node.declaration.declarations) {
            if (!isIdentifier(decl.id)) {
              throw new Error(
                `Exported variable ${node.declaration.type} does not have an identifier.`,
              );
            }
            const { name } = decl.id;
            throwIfExportSeen(name);
            exportEntries.push({
              localName: name,
              exportName: name,
            });
          }
        } else if (isFunctionDeclaration(node.declaration)) {
          if (!isIdentifier(node.declaration.id)) {
            throw new Error(
              `Exported variable ${node.declaration.type} does not have an identifier.`,
            );
          }
          const { name } = node.declaration.id;
          throwIfExportSeen(name);
          exportEntries.push({
            localName: name,
            exportName: name,
          });
        } else if (node.declaration) {
          throw new StaticJsEngineError(
            `Not implemented: Module export of type ${node.declaration.type}`,
          );
        }

        for (const specifier of node.specifiers) {
          if (isExportSpecifier(specifier)) {
            if (
              !isIdentifier(specifier.local) ||
              !isIdentifier(specifier.exported)
            ) {
              throw new Error(
                `Exported variable ${specifier.type} is not an identifier.`,
              );
            }

            const localName = specifier.local.name;
            const exportName = specifier.exported.name;

            throwIfExportSeen(exportName);
            exportEntries.push({
              localName,
              exportName,
            });
            continue;
          }
        }
        break;
      case "ExportDefaultDeclaration":
        throwIfExportSeen("default");
        exportEntries.push({
          exportName: "default",
          localName: "*default*",
        });
        break;
    }
  }

  return exportEntries;
}
