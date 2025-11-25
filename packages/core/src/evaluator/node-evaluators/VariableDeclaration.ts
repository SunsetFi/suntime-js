import type { VariableDeclaration, VariableDeclarator } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import { getIdentifierReference } from "../../runtime/references/get-identifier-reference.js";

import typedMerge from "../../internal/typed-merge.js";

import putValue from "../algorithms/put-value.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

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
        const lhs = yield* getIdentifierReference(
          context.lexicalEnv,
          name,
          context.strict,
        );
        yield* putValue(
          lhs,
          value ?? context.realm.types.undefined,
          context.realm,
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
      node.kind,
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
  kind: "const" | "let" | "var",
  context: EvaluationContext,
  variableCreator: (
    name: string,
    value: StaticJsValue | null,
  ) => EvaluationGenerator<void>,
): EvaluationGenerator {
  const id = declarator.id;
  if (id.type === "VoidPattern") {
    // FIXME: What is this?  It just appeared in babel typings one day.
    // Assuming its a way to avoid declaring a variable but still having the side effect.
    // Which is silly, because the variable still exists, and won't be initialized.
    // Something for a rest pattern, maybe?

    if (declarator.init) {
      yield* EvaluateNodeCommand(declarator.init, context, {
        forNormalValue: "VariableDeclarator.init",
      });
    }

    return context.realm.types.undefined;
  }

  if (declarator.init) {
    const value = yield* EvaluateNodeCommand(declarator.init, context, {
      forNormalValue: "VariableDeclarator.init",
    });

    return yield* setLVal(id, value, context, variableCreator);
  } else if (kind === "let") {
    // Let declarations without initializers are initialized to undefined.
    return yield* setLVal(
      id,
      context.realm.types.undefined,
      context,
      variableCreator,
    );
  }

  return context.realm.types.undefined;
}
