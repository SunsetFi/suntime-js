import { VariableDeclaration, VariableDeclarator } from "@babel/types";

import { StaticJsValue, StaticJsUndefined } from "../../runtime/internal.js";

import typedMerge from "../../internal/typed-merge.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

import { EvaluateNodeAssertValueCommand } from "../commands/index.js";

import setLVal, { environmentSetupLVal } from "./LVal.js";

function* variableDeclarationNodeEvaluator(
  node: VariableDeclaration,
  context: EvaluationContext,
): EvaluationGenerator {
  let variableInitializer: (name: string, value: StaticJsValue | null) => void;
  switch (node.kind) {
    case "const":
    case "let":
      variableInitializer = (name, value) => {
        context.env.initializeBinding(name, value ?? StaticJsUndefined());
      };
      break;
    case "var":
      variableInitializer = (name, value) => {
        context.env.setMutableBinding(
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

  return null;
}

function variableDeclarationEnvironmentSetup(
  node: VariableDeclaration,
  context: EvaluationContext,
) {
  let variableCreator: (name: string) => void;
  switch (node.kind) {
    case "const":
      variableCreator = (name) => {
        context.env.createImmutableBinding(name, context.realm.strict);
      };
      break;
    case "let":
      variableCreator = (name) => {
        context.env.createMutableBinding(name, false);
      };
      break;
    case "var":
      variableCreator = (name) => {
        debugger;
        const varScope = context.env.getVarScope() ?? context.env;
        if (varScope.canDeclareGlobalVar(name)) {
          varScope.createGlobalVarBinding(name, true);
        } else {
          varScope.createMutableBinding(name, false);
        }
      };
      break;
    default:
      throw new Error(`Unsupported variable declaration kind: ${node.kind}`);
  }

  for (const declarator of node.declarations) {
    environmentSetupLVal(declarator.id, context, variableCreator);
  }

  return false;
}

export default typedMerge(variableDeclarationNodeEvaluator, {
  environmentSetup: variableDeclarationEnvironmentSetup,
});

function* declarationStatementEvaluator(
  declarator: VariableDeclarator,
  context: EvaluationContext,
  variableCreator: (name: string, value: StaticJsValue | null) => void,
): EvaluationGenerator {
  let value: StaticJsValue | null = null;
  if (declarator.init) {
    value = yield* EvaluateNodeAssertValueCommand(declarator.init, context);
  }

  yield* setLVal(declarator.id, value, context, variableCreator);

  return null;
}
