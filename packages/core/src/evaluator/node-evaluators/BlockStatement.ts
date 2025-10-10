import type { BlockStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import type { StaticJsValue } from "../../runtime/index.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import type EvaluationGenerator from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import setupEnvironment from "./setup-environment.js";
import { BreakCompletion } from "../completions/BreakCompletion.js";

function* blockStatementNodeEvaluator(
  node: BlockStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  // FIXME: Only do this if we have a let or const.
  const blockContext = context.createBlockContext(
    new StaticJsDeclarativeEnvironmentRecord(context.realm),
  );

  for (const child of node.body) {
    yield* setupEnvironment(child, blockContext);
  }

  let lastValue: StaticJsValue | null = null;
  for (const statement of node.body) {
    try {
      lastValue = yield* EvaluateNodeCommand(statement, blockContext);
    } catch (e) {
      if (BreakCompletion.isBreakForLabel(e, context.label)) {
        return lastValue;
      }
      throw e;
    }
  }

  return lastValue;
}

export default typedMerge(blockStatementNodeEvaluator, {
  environmentSetup: false,
});
