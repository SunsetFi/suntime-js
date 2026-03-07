import type { Node } from "@babel/types";
import isFunctionDefinition from "./is-function-definition.js";
import hasName from "./has-name.js";

export default function isAnonymousFunctionDefinition(node: Node) {
  if (!isFunctionDefinition(node)) {
    return false;
  }

  const nodeHasName = hasName(node);
  if (nodeHasName) {
    return false;
  }

  return true;
}
