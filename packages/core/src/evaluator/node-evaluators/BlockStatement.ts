import { BlockStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";
import StaticJsLexicalEnvironment from "../../runtime/environments/implementation/StaticJsLexicalEnvironment.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import EvaluationContext from "../EvaluationContext.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { NormalCompletion } from "../completions/NormalCompletion.js";
import { isThrowCompletion } from "../completions/ThrowCompletion.js";

import setupEnvironment from "./setup-environment.js";

function* blockStatementNodeEvaluator(
  node: BlockStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  // FIXME: Only do this if we have a let or const.
  const env = new StaticJsLexicalEnvironment(
    context.realm,
    new StaticJsDeclarativeEnvironmentRecord(context.realm),
    context.env,
  );
  const blockContext: EvaluationContext = {
    ...context,
    env: env,
  };

  for (const child of node.body) {
    const completion = yield* setupEnvironment(child, blockContext);
    if (isThrowCompletion(completion)) {
      return completion;
    }
  }

  for (const statement of node.body) {
    const statementResult = yield* EvaluateNodeCommand(statement, blockContext);
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

export default typedMerge(blockStatementNodeEvaluator, {
  environmentSetup: false,
});
