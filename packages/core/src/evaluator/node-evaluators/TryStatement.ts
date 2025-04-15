import { BlockStatement, CatchClause, TryStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import { StaticJsValue } from "../../runtime/index.js";

import {
  StaticJsDeclarativeEnvironmentRecord,
  StaticJsLexicalEnvironment,
} from "../../runtime/environments/implementation/index.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeCommand } from "../commands/index.js";
import { NormalCompletion } from "../completions/index.js";

import setLVal from "./LVal.js";
import setupEnvironment from "./setup-environment.js";
import { isThrowCompletion } from "../completions/ThrowCompletion.js";

function* tryStatementNodeEvaluator(
  node: TryStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  // Due to the way Environment Records are handled for try/catch/finally,
  // we manually handle blocks ourselves instead of delegating to the BlockStatement node evaluator.

  let completion = yield* runBlock(node.block, context);
  if (completion.type === "throw") {
    if (node.handler) {
      completion = yield* runCatch(node.handler, completion.value, context);
    }
  }

  if (node.finalizer) {
    const finalizerCompletion = yield* runBlock(node.finalizer, context);
    // finalizer takes precedence over catch or try completions.
    switch (finalizerCompletion.type) {
      case "return":
      case "throw":
      case "break":
      case "continue":
        completion = finalizerCompletion;
    }
  }

  return completion;
}

function* runCatch(
  node: CatchClause,
  value: StaticJsValue,
  context: EvaluationContext,
): EvaluationGenerator {
  const env = new StaticJsLexicalEnvironment(
    context.realm,
    new StaticJsDeclarativeEnvironmentRecord(context.realm),
    context.env,
  );

  const catchContext: EvaluationContext = {
    ...context,
    env,
  };

  if (node.param) {
    const setCompletion = yield* setLVal(
      node.param,
      value,
      catchContext,
      function* (name, value) {
        const completion = yield* env.createMutableBindingEvaluator(
          name,
          false,
        );
        if (isThrowCompletion(completion)) {
          return completion;
        }

        yield* env.initializeBindingEvaluator(name, value);
      },
    );

    if (setCompletion.type === "throw") {
      return setCompletion;
    }
  }

  return yield* runBlock(node.body, catchContext);
}

function* runBlock(
  node: BlockStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const blockContext = {
    ...context,
    env: new StaticJsLexicalEnvironment(
      context.realm,
      new StaticJsDeclarativeEnvironmentRecord(context.realm),
      context.env,
    ),
  };

  for (const statement of node.body) {
    const completion = yield* setupEnvironment(statement, blockContext);
    if (isThrowCompletion(completion)) {
      return completion;
    }
  }

  let completionResult: StaticJsValue | null = null;
  for (const statement of node.body) {
    const statementResult = yield* EvaluateNodeCommand(statement, blockContext);
    switch (statementResult.type) {
      case "throw":
      case "return":
      case "break":
      case "continue":
        return statementResult;
      case "normal":
        completionResult = statementResult.value;
    }
  }

  return NormalCompletion(completionResult);
}

export default typedMerge(tryStatementNodeEvaluator, {
  environmentSetup: false,
});
