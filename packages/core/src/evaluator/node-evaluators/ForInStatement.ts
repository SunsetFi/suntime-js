import type { ForInStatement, LVal } from "@babel/types";

import { isStaticJsObjectLike } from "../../runtime/types/StaticJsObject.js";

import StaticJsLexicalEnvironment from "../../runtime/environments/implementation/StaticJsLexicalEnvironment.js";
import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import setLVal from "./LVal.js";
import setupEnvironment from "./setup-environment.js";
import { ContinueCompletion } from "../completions/ContinueCompletion.js";
import { BreakCompletion } from "../completions/BreakCompletion.js";

export default function* forInStatementNodeEvaluator(
  node: ForInStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  if (
    node.left.type === "VariableDeclaration" &&
    node.left.declarations.length != 1
  ) {
    throw new ThrowCompletion(
      context.realm.types.error(
        "SyntaxError",
        "Invalid left-hand side in for-in loop: Must have single binding",
      ),
    );
  }

  const right = yield* EvaluateNodeCommand(node.right, context, {
    forNormalValue: "ForInStatement.right",
  });

  // This appears to just return with nothing in this case.
  if (!isStaticJsObjectLike(right)) {
    return null;
  }

  const keys = yield* right.getEnumerableKeysEvaluator();
  for (const key of keys) {
    const bodyEnv = new StaticJsLexicalEnvironment(
      context.realm,
      new StaticJsDeclarativeEnvironmentRecord(context.realm),
      context.env,
    );

    const bodyContext = {
      ...context,
      env: bodyEnv,
    };

    // From testing NodeJs, the decl is in the body scope
    // (IE: const works and doesn't get upset about redecl)
    yield* setupEnvironment(node.left, bodyContext);

    yield* setupEnvironment(node.body, bodyContext);

    let lVal: LVal;
    if (node.left.type === "VariableDeclaration") {
      lVal = node.left.declarations[0].id;
    } else {
      lVal = node.left;
    }

    yield* setLVal(
      lVal,
      context.realm.types.string(key),
      bodyContext,
      function* (name, value) {
        return yield* bodyEnv.initializeBindingEvaluator(name, value);
      },
    );

    try {
      yield* EvaluateNodeCommand(node.body, bodyContext);
    } catch (e) {
      if (BreakCompletion.isBreakForLabel(e, context.label)) {
        return null;
      }

      if (ContinueCompletion.isContinueForLabel(e, context.label)) {
        continue;
      }

      throw e;
    }
  }

  return null;
}
