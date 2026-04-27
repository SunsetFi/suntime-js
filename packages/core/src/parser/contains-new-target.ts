import { Node } from "@babel/types";

import { traverse } from "./traverse.js";
export function containsNewTarget(node: Node): boolean {
  let result = false;
  traverse(node, {
    MetaProperty(path) {
      if (path.node.meta.name === "new" && path.node.property.name === "target") {
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
