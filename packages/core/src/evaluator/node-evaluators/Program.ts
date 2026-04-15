import type { Program } from "@babel/types";

import { Completion } from "../completions/Completion.js";
import { rethrowCompletion } from "../completions/rethrow-completion.js";
import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import evaluateStatementList from "./StatementList.js";

function* programNodeEvaluator(node: Program): EvaluationGenerator {
  const { realm } = EvaluationContext.current;

  if (node.body.length === 0) {
    // Directives are values too!
    // Inherit the last one as a value.
    // This is important for eval(),
    // with things like eval("'use strict'"); returning "use strict"
    // We may want to consider making these evaluator nodes as anything else...
    const lastDirective = node.directives.at(-1);
    if (lastDirective) {
      return realm.types.string(lastDirective.value.value);
    }

    return null;
  }

  const completion = yield* evaluateStatementList(node.body);
  if (Completion.Abrupt.is(completion)) {
    Completion.ControlFlow.handleRuntime(completion);
  }

  return rethrowCompletion(completion);
}

export default programNodeEvaluator;
