import type { Node } from "@babel/types";

import hasName from "./has-name.js";
import isFunctionDefinition from "./is-function-definition.js";

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
