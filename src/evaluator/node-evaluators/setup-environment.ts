import { Node, isNode } from "@babel/types";

import EvaluationContext from "../EvaluationContext.js";

import { getEvaluator } from "./nodes.js";

export default function setupEnvironment(
  node: Node,
  context: EvaluationContext,
) {
  // Recurse by default, there are only a few exceptions.
  let shouldRecurse = true;
  const evaluator = getEvaluator(node);

  if (evaluator && evaluator.environmentSetup) {
    shouldRecurse = evaluator.environmentSetup(node, context);
  }

  if (shouldRecurse) {
    for (const child of getChildNodes(node)) {
      setupEnvironment(child, context);
    }
  }
}

function getChildNodes(node: Node): Node[] {
  const childNodes: Node[] = [];
  for (const key in node) {
    const value = (node as any)[key];
    if (value == null) {
      continue;
    }

    if (isNode(value)) {
      childNodes.push(value);
    } else if (Array.isArray(value)) {
      for (const child of value) {
        if (child && isNode(child)) {
          childNodes.push(child);
        }
      }
    }
  }

  return childNodes;
}
