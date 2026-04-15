import { type ExportDefaultDeclaration } from "@babel/types";

import isAssignmentGrammar from "../../grammar/is-assignment-grammar.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Q } from "../completions/Q.js";
import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

function* exportDefaultDeclarationNodeEvaluator(
  node: ExportDefaultDeclaration,
): EvaluationGenerator {
  const { lexicalEnv } = EvaluationContext.current;
  if (node.declaration.type === "FunctionDeclaration") {
    return yield* Q(EvaluateNodeCommand(node.declaration));
  }

  if (isAssignmentGrammar(node.declaration)) {
    const rhs = yield* Q.val(EvaluateNodeCommand(node.declaration));

    yield* lexicalEnv.initializeBindingEvaluator("*default*", rhs);
  }

  return null;
}

export default exportDefaultDeclarationNodeEvaluator;
