import type { ForInStatement, LVal } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import { isStaticJsObjectLike } from "../../runtime/types/StaticJsObjectLike.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";
import { ContinueCompletion } from "../completions/ContinueCompletion.js";
import { BreakCompletion } from "../completions/BreakCompletion.js";
import type { NormalCompletion } from "../completions/NormalCompletion.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import setLVal from "./LVal.js";
import setupEnvironment from "./setup-environment.js";

function* forInStatementNodeEvaluator(
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

  let lVal: LVal;
  if (node.left.type === "VariableDeclaration") {
    const decl = node.left.declarations[0];
    // FIXME: What on earth is this?  It just showed up one day with an update to @babel/parser
    if (decl.id.type === "VoidPattern") {
      throw new ThrowCompletion(
        context.realm.types.error(
          "SyntaxError",
          "Invalid left-hand side in for-in loop",
        ),
      );
    }
    lVal = decl.id;
  } else {
    lVal = node.left;
  }

  let lastCompletion: NormalCompletion = null;
  const keys = yield* right.getEnumerableKeysEvaluator();
  for (const key of keys) {
    const bodyContext = context.createLexicalEnvContext(
      StaticJsDeclarativeEnvironmentRecord.from(context),
    );

    // From testing NodeJs, the decl is in the body scope
    // (IE: const works and doesn't get upset about redecl)
    yield* setupEnvironment(node.left, bodyContext);

    yield* setupEnvironment(node.body, bodyContext);

    yield* setLVal(
      lVal,
      context.realm.types.string(key),
      bodyContext,
      function* (name, value) {
        return yield* bodyContext.lexicalEnv.initializeBindingEvaluator(
          name,
          value,
        );
      },
    );

    try {
      lastCompletion = yield* EvaluateNodeCommand(node.body, bodyContext);
    } catch (e) {
      if (BreakCompletion.isBreakForLabel(e, context.label)) {
        break;
      }

      if (ContinueCompletion.isContinueForLabel(e, context.label)) {
        continue;
      }

      throw e;
    }
  }

  return lastCompletion;
}

export default typedMerge(forInStatementNodeEvaluator, {
  environmentSetup: false,
});
