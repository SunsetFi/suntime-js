import { type ExportDefaultDeclaration } from "@babel/types";

import isAssignmentGrammar from "../../grammar/is-assignment-grammar.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

function* exportDefaultDeclarationNodeEvaluator(
  node: ExportDefaultDeclaration,
  context: EvaluationContext,
): EvaluationGenerator {
  if (node.declaration.type === "FunctionDeclaration") {
    return yield* EvaluateNodeCommand(node.declaration, context);
  }

  if (isAssignmentGrammar(node.declaration)) {
    const rhs = yield* EvaluateNodeCommand(node.declaration, context, {
      forNormalValue: "default export",
    });

    yield* context.lexicalEnv.initializeBindingEvaluator("*default*", rhs);
  }

  return null;
}

export default exportDefaultDeclarationNodeEvaluator;
