import type { ExportDefaultDeclaration } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationGenerator from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

function* exportDefaultDeclarationNodeEvaluator(
  node: ExportDefaultDeclaration,
  context: EvaluationContext,
): EvaluationGenerator {
  const value = yield* EvaluateNodeCommand(node.declaration, context, {
    forNormalValue: "default export",
  });

  yield* context.lexicalEnv.initializeBindingEvaluator("*default*", value);

  return null;
}

export default typedMerge(exportDefaultDeclarationNodeEvaluator, {
  *environmentSetup(
    _node: ExportDefaultDeclaration,
    context: EvaluationContext,
  ) {
    yield* context.lexicalEnv.createImmutableBindingEvaluator(
      "*default*",
      true,
    );

    return true;
  },
});
