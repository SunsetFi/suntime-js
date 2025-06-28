import type { BlockStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import type { StaticJsValue } from "../../runtime/index.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";
import StaticJsLexicalEnvironment from "../../runtime/environments/implementation/StaticJsLexicalEnvironment.js";

import type EvaluationGenerator from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

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

  const blockContext = context.createBlockContext(env);

  for (const child of node.body) {
    yield* setupEnvironment(child, blockContext);
  }

  let lastValue: StaticJsValue | null = null;
  for (const statement of node.body) {
    lastValue = yield* EvaluateNodeCommand(statement, blockContext);
  }

  return lastValue;
}

export default typedMerge(blockStatementNodeEvaluator, {
  environmentSetup: false,
});
