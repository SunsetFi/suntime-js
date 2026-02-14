import type { BlockStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import blockDeclarationInstantiation from "../instantiation/block-declaration-instantiation.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { BreakCompletion } from "../completions/BreakCompletion.js";
import type { NormalCompletion } from "../completions/NormalCompletion.js";
import updateEmpty from "../completions/update-empty.js";

function* blockStatementNodeEvaluator(
  node: BlockStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const env = StaticJsDeclarativeEnvironmentRecord.from(context);
  const blockContext = context.createLexicalEnvContext(env);

  yield* blockDeclarationInstantiation(node, env, blockContext);

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
      lastCompletion = yield* EvaluateNodeCommand(statement, blockContext);
    } catch (e) {
      updateEmpty(e, lastCompletion);

      // Breaks apply to blocks, but only if we have a label.
      if (context.label && BreakCompletion.isBreakForLabel(e, context.label)) {
        return e.value;
      }

      throw e;
    }
  }

  return lastCompletion;
}

export default typedMerge(blockStatementNodeEvaluator, {
  environmentSetup: false,
});
