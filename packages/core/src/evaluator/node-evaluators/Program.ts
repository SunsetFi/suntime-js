import type { Program } from "@babel/types";

import { Completion } from "../completions/Completion.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import evaluateStatementList from "./StatementList.js";

function* programNodeEvaluator(node: Program, context: EvaluationContext): EvaluationGenerator {
  if (node.body.length === 0) {
    // Directives are values too!
    // Inherit the last one as a value.
    // This is important for eval(),
    // with things like eval("'use strict'"); returning "use strict"
    // We may want to consider making these evaluator nodes as anything else...
    const lastDirective = node.directives.at(-1);
    if (lastDirective) {
      return context.realm.types.string(lastDirective.value.value);
    }

    return null;
  }

  try {
    return yield* evaluateStatementList(node.body, context);
  } catch (e) {
    Completion.ControlFlow.handleRuntime(e);
    throw e;
  }
}

export default programNodeEvaluator;
