import { ExportDefaultDeclaration } from "@babel/types";

import EvaluationGenerator from "../EvaluationGenerator.js";
import EvaluationContext from "../EvaluationContext.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { NormalCompletion } from "../internal.js";
import typedMerge from "../../internal/typed-merge.js";

function* exportDefaultDeclarationNodeEvaluator(
  node: ExportDefaultDeclaration,
  context: EvaluationContext,
): EvaluationGenerator {
  const value = yield* EvaluateNodeCommand(node.declaration, context, {
    rethrow: true,
    forNormalValue: "default export",
  });
  yield* context.env.initializeBindingEvaluator("*default*", value);
  return NormalCompletion();
}

export default typedMerge(exportDefaultDeclarationNodeEvaluator, {
  *environmentSetup(
    node: ExportDefaultDeclaration,
    context: EvaluationContext,
  ) {
    yield* context.env.createImmutableBindingEvaluator("*default*", true);
    return true;
  },
});
