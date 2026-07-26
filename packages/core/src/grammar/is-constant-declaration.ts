import type { Node } from "@babel/types";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";

export function isConstantDeclaration(node: Node): boolean {
  switch (node.type) {
    case "VariableDeclaration":
      return node.kind === "const";
    // TODO: using statement
    case "FunctionDeclaration":
      return false;
    case "ClassDeclaration":
      return false;
    case "ExportNamedDeclaration":
      return false;
    case "ExportDefaultDeclaration":
      return false;
  }

  throw new StaticJsEngineError(`Unsupported node type in isConstDeclaration: ${node.type}`);
}
