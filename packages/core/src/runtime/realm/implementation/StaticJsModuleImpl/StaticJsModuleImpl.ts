import {
  isExportSpecifier,
  isIdentifier,
  isImportDeclaration,
  isVariableDeclaration,
  Program,
} from "@babel/types";

import { StaticJsValue } from "../../../types/index.js";

import StaticJsModuleEnvironmentRecord from "../../../environments/implementation/StaticJsModuleEnvironmentRecord.js";

import EvaluationGenerator from "../../../../evaluator/EvaluationGenerator.js";
import { evaluateNode } from "../../../../evaluator/node-evaluators/index.js";
import setupEnvironment from "../../../../evaluator/node-evaluators/setup-environment.js";
import EvaluationContext from "../../../../evaluator/EvaluationContext.js";
import {
  NormalCompletion,
  ThrowCompletion,
} from "../../../../evaluator/internal.js";

import StaticJsModule, {
  StaticJsModuleStatus,
} from "../../interfaces/StaticJsModule.js";
import StaticJsRealm from "../../interfaces/StaticJsRealm.js";

import {
  isStaticJsLocalExportEntry,
  isStaticJsReexportExportEntry,
  StaticJsExportEntry,
} from "./StaticJsExportEntry.js";

import { StaticJsImportEntry } from "./StaticJsImportEntry.js";
import { isThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import StaticJsLexicalEnvironment from "../../../environments/implementation/StaticJsLexicalEnvironment.js";
import { StaticJsEnvironment } from "../../../environments/index.js";

export class StaticJsModuleImpl implements StaticJsModule {
  private _enviornment: StaticJsModuleEnvironmentRecord | undefined;
  private _lexicalEnv: StaticJsEnvironment | undefined;

  private _status: StaticJsModuleStatus = "uninstantiated";

  private _importEntries: readonly StaticJsImportEntry[] = [];
  private _importedModules: StaticJsModule[] = [];

  private _exportEntries: readonly StaticJsExportEntry[];
  private _indirectExports = new Map<
    string,
    { module: StaticJsModule; targetExportName: string }
  >();
  private _starExportModules: StaticJsModule[] = [];

  constructor(
    private readonly _realm: StaticJsRealm,
    private readonly _name: string,
    private readonly _ast: Program,
  ) {
    if (_ast.sourceType !== "module") {
      throw new Error(
        `Module ${_name} is not a module.  Source type is ${_ast.sourceType}.`,
      );
    }

    this._importEntries = cloneFreezeObjectArray(
      parseImportEntries(_name, _ast),
    );
    this._exportEntries = cloneFreezeObjectArray(
      parseExportEntries(_name, _ast),
    );
  }

  get name() {
    return this._name;
  }

  get status() {
    return this._status;
  }

  *moduleDeclarationInstantiation(): EvaluationGenerator {
    if (this._status !== "uninstantiated") {
      return NormalCompletion();
    }

    // TODO: Recursive dependency instantiation

    this._enviornment = new StaticJsModuleEnvironmentRecord(this._realm);

    this._lexicalEnv = new StaticJsLexicalEnvironment(
      this._realm,
      this._enviornment,
      this._realm.globalEnv,
    );

    const context: EvaluationContext = {
      realm: this._realm,
      env: this._lexicalEnv,
      label: null,
    };

    yield* setupEnvironment(this._ast, context);

    for (const entry of this._exportEntries) {
      if (!isStaticJsReexportExportEntry(entry)) {
        continue;
      }

      const mod = yield* this._realm.resolveModule(entry.moduleRequest);
      if (!mod) {
        return ThrowCompletion(
          this._realm.types.error(
            "ReferenceError",
            `Module ${entry.moduleRequest} not found.`,
          ),
        );
      }

      yield* mod.moduleDeclarationInstantiation();
    }

    for (const entry of this._importEntries) {
      const mod = yield* this._realm.resolveModule(entry.moduleRequest);
      if (!mod) {
        return ThrowCompletion(
          this._realm.types.error(
            "ReferenceError",
            `Module ${entry.moduleRequest} not found.`,
          ),
        );
      }

      this._importedModules.push(mod);

      yield* this._enviornment.createImportBindingEvaluator(
        entry.localName,
        mod,
        entry.importName,
      );
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
        return ThrowCompletion(
          this._realm.types.error(
            "SyntaxError",
            `Exported local name not declared: ${entry.localName}`,
          ),
        );
      }
    }

    // Resolve Re-exports
    for (const entry of this._exportEntries) {
      if (!isStaticJsReexportExportEntry(entry)) {
        continue;
      }

      const mod = yield* this._realm.resolveModule(entry.moduleRequest);
      if (!mod) {
        return ThrowCompletion(
          this._realm.types.error(
            "ReferenceError",
            `Module ${entry.moduleRequest} not found.`,
          ),
        );
      }

      const { importName, exportName } = entry;

      if (exportName === null) {
        this._starExportModules.push(mod);
        continue;
      }

      if (!importName) {
        throw new Error(
          `Import name is null for named export from module ${mod.name} in module ${this._name}.`,
        );
      }

      this._indirectExports.set(exportName, {
        module: mod,
        targetExportName: importName,
      });
    }

    this._status = "instantiated";

    return NormalCompletion();
  }

  *moduleEvaluation() {
    if (this._status !== "instantiated") {
      return NormalCompletion();
    }

    this._status = "evaluating";

    const context: EvaluationContext = {
      realm: this._realm,
      env: this._lexicalEnv!,
      label: null,
    };

    for (const entry of this._importedModules) {
      const result = yield* entry.moduleEvaluation();
      if (isThrowCompletion(result)) {
        return result;
      }
    }

    const result = yield* evaluateNode(this._ast, context);

    this._status = "evaluated";

    return result;
  }

  hasExport(_name: string): boolean {
    throw new Error("StaticJsModuleImpl.hasExport not implemented.");
  }

  resolveExport(_name: string): StaticJsValue | undefined {
    throw new Error("StaticJsModuleImpl.resolveExport not implemented.");
  }

  getExportedNames(): readonly string[] {
    throw new Error("StaticJsModuleImpl.getExportedNames not implemented.");
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
      throw new Error(
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
            if (!isIdentifier(specifier.local)) {
              throw new Error(
                `Imported variable ${specifier.type} is not an identifier.`,
              );
            }

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
            if (!isIdentifier(specifier.local)) {
              throw new Error(
                `Imported variable ${specifier.type} is not an identifier.`,
              );
            }

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
            if (
              !isIdentifier(specifier.local) ||
              !isIdentifier(specifier.imported)
            ) {
              throw new Error(
                `Imported variable ${specifier.type} is not an identifier.`,
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
        if (isVariableDeclaration(node.declaration)) {
          for (const decl of node.declaration.declarations) {
            if (!isIdentifier(decl.id)) {
              throw new Error(
                `Exported variable ${node.declaration.type} is not an identifier.`,
              );
            }
            const { name } = decl.id;
            throwIfExportSeen(name);
            exportEntries.push({
              localName: name,
              exportName: name,
            });
          }
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
