import type { Node } from "@babel/types";
import traverseNs from "@babel/traverse";
const traverse =
  typeof traverseNs === "function" ? traverseNs : traverseNs.default;

export default function hasTopLevelAwait(node: Node) {
  let found = false;
  traverse(node, {
    AwaitExpression(path) {
      path.stop();
      found = true;
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
