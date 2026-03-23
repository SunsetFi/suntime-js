import type { BlockStatement } from "@babel/types";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import blockDeclarationInstantiation from "../instantiation/block-declaration-instantiation.js";

import Q from "../completions/Q.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import { EvaluationContext } from "../EvaluationContext.js";

import evaluateStatementList from "./StatementList.js";
import captureThrownCompletion from "../completions/capture-thrown-completion.js";

function* blockStatementNodeEvaluator(node: BlockStatement): EvaluationGenerator {
  const context = EvaluationContext.current;
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

  const oldEnv = context.lexicalEnv;
  const oldLabels = context.labelSet;
  const blockEnv = StaticJsDeclarativeEnvironmentRecord.from(context);
  context.lexicalEnv = blockEnv;
  context.labelSet = [];

  try {
    yield* blockDeclarationInstantiation(node, blockEnv);

    const completion = yield* captureThrownCompletion(evaluateStatementList(node.body));

    return yield* Q(completion);
  } finally {
    context.lexicalEnv = oldEnv;
    context.labelSet = oldLabels;
  }
}

export default blockStatementNodeEvaluator;
