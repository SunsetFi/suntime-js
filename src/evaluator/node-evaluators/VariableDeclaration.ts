import { VariableDeclaration, VariableDeclarator } from "@babel/types";

import { StaticJsValue, StaticJsUndefined } from "../../runtime/index.js";

import typedMerge from "../../internal/typed-merge.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

import { EvaluateNodeAssertValueCommand } from "../commands/index.js";
import { NormalCompletion } from "../completions/index.js";

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
        yield* context.env.initializeBindingEvaluator(
          name,
          value ?? StaticJsUndefined(),
        );
      };
      break;
    case "var":
      variableInitializer = function* (name, value) {
        yield* context.env.setMutableBindingEvaluator(
          name,
          value ?? StaticJsUndefined(),
          context.realm.strict,
        );
      };
      break;
    default:
      throw new Error(`Unsupported variable declaration kind: ${node.kind}`);
  }

  for (const declarator of node.declarations) {
    yield* declarationStatementEvaluator(
      declarator,
      context,
      variableInitializer,
    );
  }

  return NormalCompletion();
}

function* variableDeclarationEnvironmentSetup(
  node: VariableDeclaration,
  context: EvaluationContext,
): EvaluationGenerator<boolean> {
  let variableCreator: (name: string) => EvaluationGenerator<void>;
  switch (node.kind) {
    case "const":
      variableCreator = function* (name) {
        yield* context.env.createImmutableBindingEvaluator(
          name,
          context.realm.strict,
        );
      };
      break;
    case "let":
      variableCreator = function* (name) {
        yield* context.env.createMutableBindingEvaluator(name, false);
      };
      break;
    case "var":
      variableCreator = function* (name) {
        let varScope = yield* context.env.getVarScopeEvaluator();
        if (!varScope) {
          varScope = context.env;
        }
        if (yield* varScope.canDeclareGlobalVarEvaluator(name)) {
          yield* varScope.createGlobalVarBindingEvaluator(name, true);
        } else {
          yield* varScope.createMutableBindingEvaluator(name, false);
        }
      };
      break;
    default:
      throw new Error(`Unsupported variable declaration kind: ${node.kind}`);
  }

  for (const declarator of node.declarations) {
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
): EvaluationGenerator<void> {
  let value: StaticJsValue | null = null;
  if (declarator.init) {
    value = yield* EvaluateNodeAssertValueCommand(declarator.init, context);
  }

  yield* setLVal(declarator.id, value, context, variableCreator);
}
