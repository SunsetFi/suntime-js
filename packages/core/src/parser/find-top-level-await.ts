import type { AwaitExpression, Node } from "@babel/types";

import { traverse } from "./traverse.js";

export function findTopLevelAwait(node: Node): AwaitExpression | null {
  let found: AwaitExpression | null = null;
  traverse(node, {
    AwaitExpression(path) {
      path.stop();
      found = path.node;
    },
    FunctionExpression(path) {
      path.skip();
    },
    FunctionDeclaration(path) {
      path.skip();
    },
    ArrowFunctionExpression(path) {
      path.skip();
    },
  });

  return found;
}
