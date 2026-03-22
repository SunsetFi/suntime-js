import type { VariableDeclaration, VariableDeclarator } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import { StaticJsRealm } from "../../runtime/realm/StaticJsRealm.js";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import { StaticJsEnvironmentRecord } from "../../runtime/environments/StaticJsEnvironmentRecord.js";
import getIdentifierReference from "../../runtime/references/get-identifier-reference.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import Q from "../completions/Q.js";

import EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import initializeReferencedBinding from "../bindings/initialize-referenced-binding.js";
import bindingInitialization from "../bindings/binding-initialization.js";

import putValue from "../../runtime/algorithms/put-value.js";

function* variableDeclarationNodeEvaluator(node: VariableDeclaration): EvaluationGenerator {
  const { lexicalEnv, realm, strict } = EvaluationContext.current;
  for (const declarator of node.declarations) {
    if (node.kind === "using" || node.kind === "await using") {
      throw new StaticJsEngineError(`VariableDeclaration kind '${node.kind}' is not supported`);
    }
    yield* declarationStatementEvaluator(declarator, node.kind, lexicalEnv, strict, realm);
  }

  return null;
}

function* declarationStatementEvaluator(
  declarator: VariableDeclarator,
  kind: "const" | "let" | "var",
  lexicalEnv: StaticJsEnvironmentRecord,
  strict: boolean,
  realm: StaticJsRealm,
): EvaluationGenerator<void> {
  if (kind === "var" && !declarator.init) {
    return;
  }

  if (declarator.id.type === "Identifier") {
    const bindingId = declarator.id.name;
    const lhs = yield* getIdentifierReference(lexicalEnv, bindingId, strict);

    let value: StaticJsValue = realm.types.undefined;
    if (declarator.init) {
      const rhs = yield* Q.val(EvaluateNodeCommand(declarator.init));
      value = rhs;
    }

    if (kind === "var") {
      yield* putValue(lhs, value);
    } else {
      yield* initializeReferencedBinding(lhs, value);
    }
  } else {
    if (!declarator.init) {
      throw new StaticJsEngineError(`Destructuring variable declaration must have an initializer`);
    }

    const value = yield* Q.val(EvaluateNodeCommand(declarator.init));

    // No idea what VoidPattern is...
    if (declarator.id.type === "VoidPattern") {
      throw new StaticJsEngineError("Declarator VoidPattern is not supported");
    }

    const env = kind === "var" ? null : lexicalEnv;
    yield* bindingInitialization(declarator.id, value, env);
  }
}

export default variableDeclarationNodeEvaluator;
