import type { VariableDeclaration, VariableDeclarator } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import typedMerge from "../../internal/typed-merge.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import setLVal, { environmentSetupLVal } from "./LVal.js";

function* variableDeclarationNodeEvaluator(
  node: VariableDeclaration,
  context: EvaluationContext,
): EvaluationGenerator {
  let variableInitializer: (
    name: string,
    value: StaticJsValue | null,
  ) => EvaluationGenerator<void>;
  switch (node.kind) {
    case "const":
    case "let":
      variableInitializer = function* (name, value) {
        return yield* context.lexicalEnv.initializeBindingEvaluator(
          name,
          value ?? context.realm.types.undefined,
        );
      };
      break;
    case "var":
      variableInitializer = function* (name, value) {
        return yield* context.lexicalEnv.setMutableBindingEvaluator(
          name,
          value ?? context.realm.types.undefined,
          context.strict,
        );
      };
      break;
    default:
      throw new StaticJsEngineError(
        `Unsupported variable declaration kind: ${node.kind}`,
      );
  }

  for (const declarator of node.declarations) {
    yield* declarationStatementEvaluator(
      declarator,
      context,
      variableInitializer,
    );
  }

  return null;
}

function* variableDeclarationEnvironmentSetup(
  node: VariableDeclaration,
  context: EvaluationContext,
): EvaluationGenerator<boolean> {
  let variableCreator: (name: string) => EvaluationGenerator<void>;
  switch (node.kind) {
    case "const":
      variableCreator = function* (name) {
        yield* context.lexicalEnv.createImmutableBindingEvaluator(
          name,
          context.strict,
        );
      };
      break;
    case "let":
      variableCreator = function* (name) {
        yield* context.lexicalEnv.createMutableBindingEvaluator(name, false);
      };
      break;
    case "var":
      variableCreator = function* (name) {
        const varScope = context.variableEnv;
        yield* varScope.createMutableBindingEvaluator(name, false);

        // Vars are initialized immediately with undefined.
        varScope.initializeBindingEvaluator(
          name,
          context.realm.types.undefined,
        );
      };
      break;
    default:
      throw new StaticJsEngineError(
        `Unsupported variable declaration kind: ${node.kind}`,
      );
  }

  for (const declarator of node.declarations) {
    if (declarator.id.type === "VoidPattern") {
      continue;
    }
    yield* environmentSetupLVal(declarator.id, context, variableCreator);
  }

  return false;
}

export default typedMerge(variableDeclarationNodeEvaluator, {
  environmentSetup: variableDeclarationEnvironmentSetup,
});

function* declarationStatementEvaluator(
  declarator: VariableDeclarator,
  context: EvaluationContext,
  variableCreator: (
    name: string,
    value: StaticJsValue | null,
  ) => EvaluationGenerator<void>,
): EvaluationGenerator {
  let value: StaticJsValue | null = null;
  if (declarator.init) {
    value = yield* EvaluateNodeCommand(declarator.init, context, {
      forNormalValue: "VariableDeclarator.init",
    });
  }

  if (declarator.id.type === "VoidPattern") {
    return context.realm.types.undefined;
  }

  return yield* setLVal(declarator.id, value, context, variableCreator);
}
