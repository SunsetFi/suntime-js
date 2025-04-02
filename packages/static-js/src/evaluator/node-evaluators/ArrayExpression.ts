import { ArrayExpression } from "@babel/types";

import { isStaticJsArray, StaticJsValue } from "../../runtime/index.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import EvaluationContext from "../EvaluationContext.js";
import { NormalCompletion, ThrowCompletion } from "../completions/index.js";
import { EvaluateNodeAssertValueCommand } from "../commands/index.js";
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
      const resolved = yield* EvaluateNodeAssertValueCommand(
        element.argument,
        context,
      );
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

    const value = yield* EvaluateNodeAssertValueCommand(element, context);
    items.push(value);
  }

  return NormalCompletion(context.realm.types.createArray(items));
}
