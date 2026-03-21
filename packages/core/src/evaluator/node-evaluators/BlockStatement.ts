import type { BlockStatement } from "@babel/types";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import blockDeclarationInstantiation from "../instantiation/block-declaration-instantiation.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

import evaluateStatementList from "./StatementList.js";

function* blockStatementNodeEvaluator(
  node: BlockStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const blockEnv = StaticJsDeclarativeEnvironmentRecord.from(context);
  const blockContext = context.with({ lexicalEnv: blockEnv });

  yield* blockDeclarationInstantiation(node, blockEnv, blockContext);

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

  return yield* evaluateStatementList(node.body, blockContext);
}

export default blockStatementNodeEvaluator;
