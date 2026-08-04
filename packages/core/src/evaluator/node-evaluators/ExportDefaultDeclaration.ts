import type { ExportDefaultDeclaration } from "@babel/types";

import { isDeclarationGrammar } from "#grammar/is-declaration-gramar.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Q } from "../completions/Q.js";
import { EvaluationContext } from "../EvaluationContext.js";

function* exportDefaultDeclarationNodeEvaluator(
  node: ExportDefaultDeclaration,
): EvaluationGenerator {
  const { lexicalEnv } = EvaluationContext.current;
  if (node.declaration.type === "FunctionDeclaration") {
    return yield* Q(EvaluateNodeCommand(node.declaration));
  }

  // Note: isAssignmentGrammar is a pain to fully model with babel, so let's flip it
  // if (isAssignmentGrammar(node.declaration)) {
  if (!isDeclarationGrammar(node.declaration)) {
    const rhs = yield* Q.val(EvaluateNodeCommand(node.declaration));

    yield* lexicalEnv.initializeBindingEvaluator("*default*", rhs);
  }

  return null;
}

export default exportDefaultDeclarationNodeEvaluator;
