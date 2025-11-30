import type { ForOfStatement, LVal } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import getIterator from "../../runtime/algorithms/get-iterator.js";
import iteratorStepValue from "../../runtime/algorithms/iterator-step-value.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";
import { ContinueCompletion } from "../completions/ContinueCompletion.js";
import { BreakCompletion } from "../completions/BreakCompletion.js";
import type { NormalCompletion } from "../completions/NormalCompletion.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import setLVal from "./LVal.js";
import setupEnvironment from "./setup-environment.js";
import iteratorClose from "../../runtime/algorithms/iterator-close.js";
import { isAbnormalCompletion } from "../completions/AbnormalCompletion.js";

function* forOfStatementNodeEvaluator(
  node: ForOfStatement,
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

  const iterator = yield* getIterator(right, context.realm);

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
  while (true) {
    const value = yield* iteratorStepValue(iterator, context.realm);
    if (!value) {
      break;
    }

    const bodyContext = context.createLexicalEnvContext(
      StaticJsDeclarativeEnvironmentRecord.from(context),
    );

    yield* setupEnvironment(node.left, bodyContext);

    yield* setupEnvironment(node.body, bodyContext);

    yield* setLVal(lVal, value, bodyContext, function* (name, val) {
      return yield* bodyContext.lexicalEnv.initializeBindingEvaluator(
        name,
        val,
      );
    });

    try {
      lastCompletion = yield* EvaluateNodeCommand(node.body, bodyContext);
    } catch (e) {
      if (isAbnormalCompletion(e)) {
        yield* iteratorClose(iterator, e, context.realm, false);
      }

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

export default typedMerge(forOfStatementNodeEvaluator, {
  environmentSetup: false,
});
