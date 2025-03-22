import { ArrayExpression } from "@babel/types";

import {
  StaticJsArray,
  isStaticJsArray,
  StaticJsUndefined,
  StaticJsArrayItem,
} from "../../runtime/index.js";

import { evaluateNodeAssertValue } from "./nodes.js";
import { NodeEvaluationContext } from "./node-evaluation-context.js";

export default function arrayExpressionNodeEvaluator(
  node: ArrayExpression,
  context: NodeEvaluationContext,
) {
  const items: StaticJsArrayItem[] = [];
  for (const element of node.elements) {
    if (element == null) {
      items.push(StaticJsUndefined());
      continue;
    }

    if (element.type === "SpreadElement") {
      const resolved = evaluateNodeAssertValue(element.argument, context);
      if (!isStaticJsArray(resolved)) {
        const elementName =
          element.argument.type === "Identifier"
            ? element.argument.name
            : "<expression>";
        throw new Error(
          `Cannot spread non-array value (spreading ${elementName}).`,
        );
      }

      // No reason to slice here, could just get the direct array for a performance improvement.
      // However, we don't want to let the user mutate the array, and these are public APIs.
      items.push(...resolved.sliceNative());
      continue;
    }

    const value = evaluateNodeAssertValue(element, context);
    items.push(value);
  }

  return StaticJsArray(items);
}
