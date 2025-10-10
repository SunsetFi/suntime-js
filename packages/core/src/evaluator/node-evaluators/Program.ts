import type { Program } from "@babel/types";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import typedMerge from "../../internal/typed-merge.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import setupEnvironment from "./setup-environment.js";
import { ControlFlowCompletion } from "../completions/ControlFlowCompletion.js";

function* programNodeEvaluator(
  node: Program,
  context: EvaluationContext,
): EvaluationGenerator {
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
      lastValue = yield* EvaluateNodeCommand(statement, context);
    } catch (e) {
      ControlFlowCompletion.handleUnexpected(context.realm, e);
      throw e;
    }
  }

  return lastValue;
}

export default typedMerge(programNodeEvaluator, {
  environmentSetup: function* (node: Program, context: EvaluationContext) {
    for (const statement of node.body) {
      yield* setupEnvironment(statement, context);
    }

    return false;
  },
});
