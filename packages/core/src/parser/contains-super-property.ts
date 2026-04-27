import { Node } from "@babel/types";

import { traverse } from "./traverse.js";
export function containsSuperProperty(node: Node): boolean {
  let result = false;
  traverse(node, {
    MemberExpression(path) {
      if (path.node.object.type === "Super") {
        path.stop();
        result = true;
      }
    },
    Function(path) {
      if (!path.isArrowFunctionExpression()) {
        path.skip();
      }
    },
  });
  return result;
}
