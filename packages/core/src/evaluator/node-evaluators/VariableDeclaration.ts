import { VariableDeclaration, VariableDeclarator } from "@babel/types";

import { StaticJsValue } from "../../runtime/types/interfaces/StaticJsValue.js";

import typedMerge from "../../internal/typed-merge.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/index.js";
import { NormalCompletion } from "../completions/index.js";

import setLVal, { environmentSetupLVal } from "./LVal.js";
import StaticJsEngineError from "../StaticJsEngineError.js";
import ThrowCompletion, {
  isThrowCompletion,
} from "../completions/ThrowCompletion.js";

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
      throw new StaticJsEngineError(
        `Unsupported variable declaration kind: ${node.kind}`,
      );
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
): EvaluationGenerator<ThrowCompletion | boolean> {
  let variableCreator: (
    name: string,
  ) => EvaluationGenerator<ThrowCompletion | void>;
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
        const completion = yield* context.env.createMutableBindingEvaluator(
          name,
          false,
        );
        if (isThrowCompletion(completion)) {
          return completion;
        }
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
          const result = yield* varScope.createMutableBindingEvaluator(
            name,
            false,
          );
          if (isThrowCompletion(result)) {
            return result;
          }
        }
      };
      break;
    default:
      throw new StaticJsEngineError(
        `Unsupported variable declaration kind: ${node.kind}`,
      );
  }

  for (const declarator of node.declarations) {
    const completion = yield* environmentSetupLVal(
      declarator.id,
      context,
      variableCreator,
    );
    if (isThrowCompletion(completion)) {
      return completion;
    }
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
      rethrow: true,
      forNormalValue: "VariableDeclarator.init",
    });
  }

  return yield* setLVal(declarator.id, value, context, variableCreator);
}
