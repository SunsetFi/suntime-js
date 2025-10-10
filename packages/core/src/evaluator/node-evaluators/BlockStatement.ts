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
  const blockContext = context.createLexicalEnvContext(
    new StaticJsDeclarativeEnvironmentRecord(context.realm),
  );

  for (const child of node.body) {
    yield* setupEnvironment(child, blockContext);
  }

  let lastValue: StaticJsValue | null = null;

  // Directives are values too!
  // Inherit the last one as a value.
  // This is important for eval(),
  // with things like eval("'use strict'"); returning "use strict"
  // We may want to consider making these evaluator nodes as anything else...
  const lastDirective = node.directives.at(-1);
  if (lastDirective) {
    lastValue = context.realm.types.string(lastDirective.value.value);
  }

  for (const statement of node.body) {
    try {
      lastValue = yield* EvaluateNodeCommand(statement, blockContext);
    } catch (e) {
      // Breaks apply to blocks, but only if we have a label.
      if (context.label && BreakCompletion.isBreakForLabel(e, context.label)) {
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
