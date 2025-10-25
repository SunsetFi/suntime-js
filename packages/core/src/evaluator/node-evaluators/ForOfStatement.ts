import type { ForOfStatement, LVal } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import getIterator from "../../runtime/algorithms/get-iterator.js";
import iteratorStepValue from "../../runtime/algorithms/iterator-step-value.js";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";
import { ContinueCompletion } from "../completions/ContinueCompletion.js";
import { BreakCompletion } from "../completions/BreakCompletion.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import setLVal from "./LVal.js";
import setupEnvironment from "./setup-environment.js";

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

  let lastValue: StaticJsValue | null = null;
  while (true) {
    const value = yield* iteratorStepValue(iterator, context.realm);
    if (!value) {
      break;
    }

    const bodyContext = context.createLexicalEnvContext(
      new StaticJsDeclarativeEnvironmentRecord(context.realm),
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
      lastValue = yield* EvaluateNodeCommand(node.body, bodyContext);
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

  return lastValue;
}

export default typedMerge(forOfStatementNodeEvaluator, {
  environmentSetup: false,
});
