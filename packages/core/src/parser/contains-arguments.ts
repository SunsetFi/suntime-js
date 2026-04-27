import { Node } from "@babel/types";

import { traverse } from "./traverse.js";
export function containsArguments(node: Node): boolean {
  let result = false;
  traverse(node, {
    Identifier(path) {
      if (path.node.name === "arguments") {
        path.stop();
        result = true;
      }
    },
    Function(path) {
      path.skip();
    },
  });
  return result;
}
