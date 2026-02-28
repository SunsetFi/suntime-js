import { type ExportDefaultDeclaration } from "@babel/types";

import isAssignmentGrammar from "../../grammar/is-assignment-grammar.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import Q from "../completions/Q.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

function* exportDefaultDeclarationNodeEvaluator(
  node: ExportDefaultDeclaration,
  context: EvaluationContext,
): EvaluationGenerator {
  if (node.declaration.type === "FunctionDeclaration") {
    return yield* Q(EvaluateNodeCommand(node.declaration, context));
  }

  if (isAssignmentGrammar(node.declaration)) {
    const rhs = yield* Q.val(EvaluateNodeCommand(node.declaration, context), context.realm);

    yield* context.lexicalEnv.initializeBindingEvaluator("*default*", rhs);
  }

  return null;
}

export default exportDefaultDeclarationNodeEvaluator;
