import type { ArrayExpression } from "@babel/types";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import { isStaticJsArray } from "../../runtime/types/StaticJsArray.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationGenerator from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

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
        forNormalValue: "ArrayExpression.elements[].argument",
      });

      if (!isStaticJsArray(resolved)) {
        // FIXME: This is allowed if there is an Iterator.
        // FIXME: Use real error.
        throw new ThrowCompletion(
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
      forNormalValue: "ArrayExpression.elements[]",
    });
    items.push(value);
  }

  return context.realm.types.array(items);
}
