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

function* tryStatementNodeEvaluator(
  node: TryStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  // Due to the way Environment Records are handled for try/catch/finally,
  // we manually handle blocks ourselves instead of delegating to the BlockStatement node evaluator.

  let completion = yield* runBlock(node.block, context);
  switch (completion.type) {
    case "throw":
      if (node.handler) {
        completion = yield* runCatch(node.handler, completion.value, context);
      }
      break;
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
    new StaticJsDeclarativeEnvironmentRecord(),
    context.env,
  );

  const catchContext: EvaluationContext = {
    ...context,
    env,
  };

  if (node.param) {
    yield* setLVal(node.param, value, catchContext, (name, value) => {
      env.createMutableBinding(name, false);
      env.initializeBinding(name, value);
    });
  }

  return yield* runBlock(node.body, catchContext);
}

function* runBlock(
  node: BlockStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  for (const statement of node.body) {
    const statementResult = yield* EvaluateNodeCommand(statement, context);
    switch (statementResult.type) {
      case "throw":
      case "return":
      case "break":
      case "continue":
        return statementResult;
    }
  }

  return NormalCompletion();
}

export default typedMerge(tryStatementNodeEvaluator, {
  // This is a bit surprising, but the only EnvironmentRecord we need to create is for catch,
  // and that is only created at runtime.
  environmentSetup: () => false,
});
