import type { AwaitExpression, Node } from "@babel/types";

import traverseNs from "@babel/traverse";

// Node's ESM/CJS interop exposes @babel/traverse as a namespace object at runtime.
// Note that we must use the typeof import here, not reference traverseNs
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type TraverseFn = (typeof import("@babel/traverse"))["default"];
type TraverseCompat = TraverseFn | { default: TraverseFn };
const traverseModule = traverseNs as TraverseCompat;
const traverse = typeof traverseModule === "function" ? traverseModule : traverseModule.default;

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
