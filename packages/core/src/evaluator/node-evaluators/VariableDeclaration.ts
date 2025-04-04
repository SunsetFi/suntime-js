import { VariableDeclaration, VariableDeclarator } from "@babel/types";

import { StaticJsValue } from "../../runtime/types/interfaces/StaticJsValue.js";

import typedMerge from "../../internal/typed-merge.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/index.js";
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
          value ?? context.realm.types.undefined,
        );
      };
      break;
    case "var":
      variableInitializer = function* (name, value) {
        yield* context.env.setMutableBindingEvaluator(
          name,
          value ?? context.realm.types.undefined,
          context.realm.strict,
        );
      };
      break;
    default:
      throw new Error(`Unsupported variable declaration kind: ${node.kind}`);
  }

  for (const declarator of node.declarations) {
    const completion = yield* declarationStatementEvaluator(
      declarator,
      context,
      variableInitializer,
    );

    if (completion.type !== "normal") {
      return completion;
    }
  }

  return NormalCompletion(null);
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
): EvaluationGenerator {
  let value: StaticJsValue | null = null;
  if (declarator.init) {
    const completion = yield* EvaluateNodeCommand(declarator.init, context);
    if (completion.type === "throw") {
      return completion;
    }
    if (completion.type !== "normal" || !completion.value) {
      throw new Error(`Expected normal completion, got ${completion.type}`);
    }
    value = completion.value;
  }

  return yield* setLVal(declarator.id, value, context, variableCreator);
}
