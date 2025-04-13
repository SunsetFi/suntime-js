import { ImportDeclaration, isImportDeclaration, Program } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import StaticJsModuleEnvironmentRecord, {
  StaticJsModuleEnvironmentImport,
} from "../../runtime/environments/implementation/StaticJsModuleEnvironmentRecord.js";
import StaticJsLexicalEnvironment from "../../runtime/environments/implementation/StaticJsLexicalEnvironment.js";
import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import EvaluationContext from "../EvaluationContext.js";
import { EvaluateNodeCommand } from "../commands/index.js";
import { Completion, NormalCompletion } from "../completions/index.js";

import EvaluationGenerator from "../EvaluationGenerator.js";

import setupEnvironment from "./setup-environment.js";
import StaticJsEngineError from "../StaticJsEngineError.js";

function* programNodeEvaluator(
  node: Program,
  context: EvaluationContext,
): EvaluationGenerator {
  if (node.sourceType === "module") {
    const importStatements = node.body.filter((node) =>
      isImportDeclaration(node),
    );
    const imports: StaticJsModuleEnvironmentImport[] =
      importStatements.flatMap(extractImports);

    const moduleEnv = new StaticJsLexicalEnvironment(
      context.realm,
      new StaticJsModuleEnvironmentRecord(context.realm, imports),
      context.env,
    );

    const env = new StaticJsLexicalEnvironment(
      context.realm,
      new StaticJsDeclarativeEnvironmentRecord(context.realm),
      moduleEnv,
    );
    context = {
      ...context,
      env,
    };
  }

  for (const statement of node.body) {
    yield* setupEnvironment(statement, context);
  }

  let lastCompletion: Completion = NormalCompletion(null);
  for (const statement of node.body) {
    lastCompletion = yield* EvaluateNodeCommand(statement, context);
    switch (lastCompletion.type) {
      case "throw":
        return lastCompletion;
      case "return":
      case "break":
      case "continue":
        // TODO: Real error type
        throw new StaticJsEngineError(
          "Illegal control flow completion type in Program node.",
        );
    }
  }

  return lastCompletion;
}

export default typedMerge(programNodeEvaluator, {
  environmentSetup: false,
});

function extractImports(
  node: ImportDeclaration,
): StaticJsModuleEnvironmentImport[] {
  return node.specifiers.map((specifier) => {
    switch (specifier.type) {
      case "ImportSpecifier": {
        let importName = specifier.local.name;
        if (specifier.imported) {
          switch (specifier.imported.type) {
            case "Identifier":
              importName = specifier.imported.name;
              break;
            case "StringLiteral":
              importName = specifier.imported.value;
              break;
            default: {
              // @ts-expect-error - We want to catch values the typings don't know about.
              const type = specifier.imported.type;
              throw new StaticJsEngineError(
                `Unsupported import specifier imported type ${type}`,
              );
            }
          }
        }
        return {
          moduleName: node.source.value,
          bindings: {
            [specifier.local.name]: importName,
          },
        };
      }
    }

    throw new StaticJsEngineError(
      `Unsupported import specifier ${specifier.type}`,
    );
  });
}
