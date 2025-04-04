import { ArrayExpression } from "@babel/types";

import { isStaticJsArray, StaticJsValue } from "../../runtime/index.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import EvaluationContext from "../EvaluationContext.js";
import { NormalCompletion, ThrowCompletion } from "../completions/index.js";
import { EvaluateNodeCommand } from "../commands/index.js";
import nameNode from "./name-node.js";

export default function* arrayExpressionNodeEvaluator(
  node: ArrayExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const items: StaticJsValue[] = [];
  for (const element of node.elements) {
    if (element == null) {
      items.push(context.realm.types.undefined);
      continue;
    }

    if (element.type === "SpreadElement") {
      const resolvedCompletion = yield* EvaluateNodeCommand(
        element.argument,
        context,
      );
      if (resolvedCompletion.type === "throw") {
        return resolvedCompletion;
      }
      if (resolvedCompletion.type !== "normal" || !resolvedCompletion.value) {
        // FIXME: Use real error.
        return ThrowCompletion(
          context.realm.types.string(
            `Cannot spread non-array value (spreading ${nameNode(element)}).`,
          ),
        );
      }

      const resolved = resolvedCompletion.value;
      if (!isStaticJsArray(resolved)) {
        // FIXME: Use real error.
        return ThrowCompletion(
          context.realm.types.string(
            `Cannot spread non-array value (spreading ${nameNode(element)}).`,
          ),
        );
      }

      // No reason to slice here, could just get the direct array for a performance improvement.
      // However, we don't want to let the user mutate the array, and these are public APIs.
      const resolvedValues = yield* resolved.sliceNativeEvaluator();
      items.push(...resolvedValues);
      continue;
    }

    const valueCompletion = yield* EvaluateNodeCommand(element, context);
    if (valueCompletion.type === "throw") {
      return valueCompletion;
    }
    if (valueCompletion.type !== "normal" || !valueCompletion.value) {
      // FIXME: Use real error.
      return ThrowCompletion(
        context.realm.types.string(
          `Cannot resolve value (resolving ${nameNode(element)}).`,
        ),
      );
    }

    items.push(valueCompletion.value);
  }

  return NormalCompletion(context.realm.types.createArray(items));
}
