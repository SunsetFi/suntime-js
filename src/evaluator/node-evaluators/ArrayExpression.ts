import { ArrayExpression } from "@babel/types";

import {
  StaticJsEnvironment,
  StaticJsArray,
  isStaticJsArray,
  StaticJsValue,
  StaticJsUndefined,
} from "../../environment/index.js";

import { evaluateNodeAssertValue } from "./evaluate-node.js";

export default function arrayExpressionNodeEvaluator(
  node: ArrayExpression,
  env: StaticJsEnvironment,
) {
  const items: StaticJsValue[] = [];
  for (const element of node.elements) {
    if (element == null) {
      items.push(StaticJsUndefined());
      continue;
    }

    if (element.type === "SpreadElement") {
      const resolved = evaluateNodeAssertValue(element.argument, env);
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

    const value = evaluateNodeAssertValue(element, env);
    items.push(value);
  }

  return StaticJsArray(items);
}
