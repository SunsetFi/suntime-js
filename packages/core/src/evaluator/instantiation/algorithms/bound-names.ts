import type { Node } from "@babel/types";
import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

export default function boundNames(node: Node | Node[]): string[] {
  if (Array.isArray(node)) {
    return node.flatMap(boundNames);
  }

  switch (node.type) {
    case "Identifier":
      return [node.name];

    case "RestElement":
      return boundNames(node.argument);

    case "AssignmentPattern":
      return boundNames(node.left);

    case "ArrayPattern": {
      const names: string[] = [];
      for (const element of node.elements) {
        if (element) {
          names.push(...boundNames(element));
        }
      }
      return names;
    }

    case "ObjectPattern": {
      const names: string[] = [];
      for (const property of node.properties) {
        if (property.type === "RestElement") {
          names.push(...boundNames(property.argument));
        } else {
          names.push(...boundNames(property.value));
        }
      }
      return names;
    }

    case "VariableDeclarator":
      return boundNames(node.id);

    case "VariableDeclaration": {
      const names: string[] = [];
      for (const declarator of node.declarations) {
        names.push(...boundNames(declarator));
      }
      return names;
    }

    case "FunctionDeclaration":
      return node.id ? [node.id.name] : ["*default*"];

    case "ClassDeclaration":
      return node.id ? [node.id.name] : ["*default*"];

    case "FunctionExpression":
    case "ArrowFunctionExpression": {
      const names: string[] = [];
      for (const param of node.params) {
        names.push(...boundNames(param));
      }
      return names;
    }

    case "ImportDeclaration": {
      const names: string[] = [];
      for (const specifier of node.specifiers) {
        names.push(specifier.local.name);
      }
      return names;
    }

    case "ExportNamedDeclaration": {
      if (node.declaration) {
        return boundNames(node.declaration);
      }
      return [];
    }

    case "ExportDefaultDeclaration": {
      const decl = node.declaration;
      if (
        decl.type === "FunctionDeclaration" ||
        decl.type === "ClassDeclaration"
      ) {
        const declarationNames = boundNames(decl);
        if (!declarationNames.includes("*default*")) {
          declarationNames.push("*default*");
        }
        return declarationNames;
      }
      return ["*default*"];
    }

    case "CatchClause": {
      if (node.param) {
        return boundNames(node.param);
      }
      return [];
    }

    case "ForOfStatement":
    case "ForInStatement":
      return boundNames(node.left);
  }

  return [];
}

boundNames.soleElementOf = function (node: Node): string {
  const names = boundNames(node);
  if (names.length !== 1) {
    throw new StaticJsEngineError(
      `Expected exactly one bound name, but found ${names.length}.`,
    );
  }
  return names[0];
};
