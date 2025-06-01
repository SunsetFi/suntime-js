import type { Node } from "@babel/types";
import { isNode } from "@babel/types";

import typedKeys from "../../internal/typed-keys.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import { getEvaluator } from "./nodes.js";

export default function* setupEnvironment(
  node: Node,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  // Recurse by default, there are only a few exceptions.
  let shouldRecurse = true;
  const evaluator = getEvaluator(node);

  if (evaluator) {
    if (typeof evaluator.environmentSetup === "boolean") {
      shouldRecurse = evaluator.environmentSetup;
    } else if (evaluator.environmentSetup) {
      shouldRecurse = yield* evaluator.environmentSetup(node, context);
    }
  }

  if (shouldRecurse) {
    for (const child of getChildNodes(node)) {
      yield* setupEnvironment(child, context);
    }
  }
}

function getChildNodes(node: Node): Node[] {
  // There might be some stuff in @babel/types that can collect these more efficiently,
  // but I've only found tree-walking stuff that requires specific visitor types.
  // ...Actually, that might work, if we make shouldRecurse opt-in and collect the node types
  // ahead of time.
  const childNodes: Node[] = [];
  for (const key of typedKeys(node)) {
    const value = node[key];
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
