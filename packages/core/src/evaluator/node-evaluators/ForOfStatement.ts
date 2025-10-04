import type { ForOfStatement, LVal } from "@babel/types";

import { isStaticJsObjectLike } from "../../runtime/types/StaticJsObjectLike.js";
import { isStaticJsFunction } from "../../runtime/types/StaticJsFunction.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import toBoolean from "../../runtime/algorithms/to-boolean.js";

import typedMerge from "../../internal/typed-merge.js";

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

  if (!isStaticJsObjectLike(right)) {
    // NodeJS seems to stringify the value in place of 'Value'.  Maybe.  It returns {} when {} is used?
    throw new ThrowCompletion(
      context.realm.types.error("TypeError", "Value is not iterable"),
    );
  }

  const iteratorFunc = yield* right.getPropertyEvaluator(
    context.realm.types.symbols.iterator,
  );
  if (!isStaticJsFunction(iteratorFunc)) {
    throw new ThrowCompletion(
      context.realm.types.error("TypeError", "Value is not iterable"),
    );
  }

  const iterator = yield* iteratorFunc.callEvaluator(right);
  if (!isStaticJsObjectLike(iterator)) {
    throw new ThrowCompletion(
      context.realm.types.error(
        "TypeError",
        "Result of the Symbol.iterator method is not an object",
      ),
    );
  }

  while (true) {
    const nextMethod = yield* iterator.getPropertyEvaluator("next");
    if (!isStaticJsFunction(nextMethod)) {
      throw new ThrowCompletion(
        context.realm.types.error("TypeError", "next is not a function"),
      );
    }

    const next = yield* nextMethod.callEvaluator(iterator);
    if (!isStaticJsObjectLike(next)) {
      throw new ThrowCompletion(
        context.realm.types.error(
          "TypeError",
          "Result of next is not an object",
        ),
      );
    }

    const done = yield* next.getPropertyEvaluator("done");
    const doneResult = yield* toBoolean(done, context.realm);
    if (doneResult.value) {
      break;
    }

    const value = yield* next.getPropertyEvaluator("value");

    const bodyContext = context.createBlockContext(
      new StaticJsDeclarativeEnvironmentRecord(context.realm),
    );

    yield* setupEnvironment(node.left, bodyContext);

    yield* setupEnvironment(node.body, bodyContext);

    let lVal: LVal;
    if (node.left.type === "VariableDeclaration") {
      lVal = node.left.declarations[0].id;
    } else {
      lVal = node.left;
    }

    yield* setLVal(lVal, value, bodyContext, function* (name, val) {
      return yield* bodyContext.env.initializeBindingEvaluator(name, val);
    });

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

export default typedMerge(forOfStatementNodeEvaluator, {
  environmentSetup: false,
});
