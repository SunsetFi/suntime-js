import type { VariableDeclaration, VariableDeclarator } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import { getIdentifierReference } from "../../runtime/references/get-identifier-reference.js";

import typedMerge from "../../internal/typed-merge.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import initializeReferencedBinding from "../bindings/initialize-referenced-binding.js";
import bindingInitialization from "../bindings/binding-initialization.js";

import { environmentSetupLVal } from "./LVal.js";
import putValue from "../../runtime/algorithms/put-value.js";

function* variableDeclarationNodeEvaluator(
  node: VariableDeclaration,
  context: EvaluationContext,
): EvaluationGenerator {
  for (const declarator of node.declarations) {
    if (node.kind === "using" || node.kind === "await using") {
      throw new StaticJsEngineError(
        `VariableDeclaration kind '${node.kind}' is not supported`,
      );
    }
    yield* declarationStatementEvaluator(declarator, node.kind, context);
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
): EvaluationGenerator {
  if (declarator.id.type === "Identifier") {
    const bindingId = declarator.id.name;
    const lhs = yield* getIdentifierReference(
      context.lexicalEnv,
      bindingId,
      context.strict,
    );

    let value: StaticJsValue = context.realm.types.undefined;
    if (declarator.init) {
      const rhs = yield* EvaluateNodeCommand(declarator.init, context, {
        forNormalValue: "VariableDeclarator.init",
      });
      value = rhs;
    }

    if (kind === "var") {
      yield* putValue(lhs, value, context.realm);
    } else {
      yield* initializeReferencedBinding(lhs, value);
    }
  } else {
    if (!declarator.init) {
      throw new StaticJsEngineError(
        `Destructuring variable declaration must have an initializer`,
      );
    }

    const value = yield* EvaluateNodeCommand(declarator.init, context, {
      forNormalValue: "VariableDeclarator.init",
    });

    // No idea what VoidPattern is...
    if (declarator.id.type === "VoidPattern") {
      throw new StaticJsEngineError("Declarator VoidPattern is not supported");
    }

    const env = context.lexicalEnv;
    yield* bindingInitialization(declarator.id, value, env, context);
  }

  return context.realm.types.undefined;
}
