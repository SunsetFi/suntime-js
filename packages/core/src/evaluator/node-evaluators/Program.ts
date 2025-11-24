import type { Program } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { ControlFlowCompletion } from "../completions/ControlFlowCompletion.js";
import type { NormalCompletion } from "../completions/NormalCompletion.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import setupEnvironment from "./setup-environment.js";

function* programNodeEvaluator(
  node: Program,
  context: EvaluationContext,
): EvaluationGenerator {
  let lastCompletion: NormalCompletion = null;

  // Directives are values too!
  // Inherit the last one as a value.
  // This is important for eval(),
  // with things like eval("'use strict'"); returning "use strict"
  // We may want to consider making these evaluator nodes as anything else...
  const lastDirective = node.directives.at(-1);
  if (lastDirective) {
    lastCompletion = context.realm.types.string(lastDirective.value.value);
  }

  for (const statement of node.body) {
    try {
      lastCompletion = yield* EvaluateNodeCommand(statement, context);
    } catch (e) {
      ControlFlowCompletion.handleUnexpected(context.realm, e);
      throw e;
    }
  }

  return lastCompletion;
}

export default typedMerge(programNodeEvaluator, {
  environmentSetup: function* (node: Program, context: EvaluationContext) {
    for (const statement of node.body) {
      yield* setupEnvironment(statement, context);
    }

    return false;
  },
});
