import { Node } from "@babel/types";

import { traverse } from "./traverse.js";

// TODO: Implement correctly with the spec Contains
// Currently just making stuff up to make tests pass.
export function containsSuperCall(node: Node): boolean {
  let result = false;
  traverse(node, {
    CallExpression(path) {
      if (path.node.callee.type === "Super") {
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
