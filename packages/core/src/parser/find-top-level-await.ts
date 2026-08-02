import type { AwaitExpression, File } from "@babel/types";

import { traverse } from "./traverse.js";

export function findTopLevelAwait(file: File): AwaitExpression | null {
  let found: AwaitExpression | null = null;
  // Note: This crashes in mysterious ways in certain AST formations if we pass anything
  // but a top-level File.
  // Seen with an export default function on a module.
  traverse(file, {
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
