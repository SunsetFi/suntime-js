import { ArrayExpression } from "@babel/types";

import { StaticJsValue } from "../../runtime/types/interfaces/StaticJsValue.js";
import { isStaticJsArray } from "../../runtime/types/interfaces/StaticJsArray.js";

import { NormalCompletion, ThrowCompletion } from "../completions/index.js";
import { EvaluateNodeCommand } from "../commands/index.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import EvaluationContext from "../EvaluationContext.js";

import nameNode from "./name-node.js";

export default function* arrayExpressionNodeEvaluator(
  node: ArrayExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const items: StaticJsValue[] = [];
  for (const element of node.elements) {
    if (!element) {
      items.length++;
      continue;
    }

    if (element.type === "SpreadElement") {
      const resolved = yield* EvaluateNodeCommand(element.argument, context, {
        rethrow: true,
        forNormalValue: "ArrayExpression.elements[].argument",
      });

      if (!isStaticJsArray(resolved)) {
        // FIXME: This is allowed if there is an Iterator.
        // FIXME: Use real error.
        return ThrowCompletion(
          context.realm.types.error(
            "TypeError",
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

    const value = yield* EvaluateNodeCommand(element, context, {
      rethrow: true,
      forNormalValue: "ArrayExpression.elements[]",
    });
    items.push(value);
  }

  return NormalCompletion(context.realm.types.array(items));
}
