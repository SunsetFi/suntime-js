import type { BlockStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import blockDeclarationInstantiation from "../instantiation/block-declaration-instantiation.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

import { BreakCompletion } from "../completions/BreakCompletion.js";

import evaluateStatementList from "./StatementList.js";

function* blockStatementNodeEvaluator(
  node: BlockStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const env = StaticJsDeclarativeEnvironmentRecord.from(context);
  const blockContext = context.createLexicalEnvContext(env);

  yield* blockDeclarationInstantiation(node, env, blockContext);

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
    return yield* evaluateStatementList(node.body, blockContext);
  } catch (e) {
    if (context.label && BreakCompletion.isBreakForLabel(e, context.label)) {
      return e.value;
    }

    throw e;
  }
}

export default typedMerge(blockStatementNodeEvaluator, {
  environmentSetup: false,
});
