import { ExportDefaultDeclaration } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import { NormalCompletion } from "../completions/NormalCompletion.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import EvaluationContext from "../EvaluationContext.js";
import { isThrowCompletion } from "../completions/ThrowCompletion.js";

function* exportDefaultDeclarationNodeEvaluator(
  node: ExportDefaultDeclaration,
  context: EvaluationContext,
): EvaluationGenerator {
  const value = yield* EvaluateNodeCommand(node.declaration, context, {
    rethrow: true,
    forNormalValue: "default export",
  });
  const initResult = yield* context.env.initializeBindingEvaluator(
    "*default*",
    value,
  );
  if (isThrowCompletion(initResult)) {
    return initResult;
  }
  return NormalCompletion();
}

export default typedMerge(exportDefaultDeclarationNodeEvaluator, {
  *environmentSetup(
    node: ExportDefaultDeclaration,
    context: EvaluationContext,
  ) {
    const result = yield* context.env.createImmutableBindingEvaluator(
      "*default*",
      true,
    );
    if (isThrowCompletion(result)) {
      return result;
    }
    return true;
  },
});
