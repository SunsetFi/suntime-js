import type { Node, FunctionDeclaration } from "@babel/types";

export default function collectAnnexBFunctionDeclarations(
  node: Node,
  inCollectionNOde = false,
): FunctionDeclaration[] {
  switch (node.type) {
    case "File":
      return collectAnnexBFunctionDeclarations(node.program);
    case "Program": {
      const funcs: FunctionDeclaration[] = [];
      for (const stmt of node.body) {
        const innerFuncs = collectAnnexBFunctionDeclarations(stmt);
        funcs.push(...innerFuncs);
      }
      return funcs;
    }
    case "BlockStatement": {
      const funcs: FunctionDeclaration[] = [];
      for (const stmt of node.body) {
        const innerFuncs = collectAnnexBFunctionDeclarations(stmt, true);
        funcs.push(...innerFuncs);
      }
      return funcs;
    }
    case "SwitchStatement": {
      for (const switchCase of node.cases) {
        const funcs: FunctionDeclaration[] = [];
        const innerFuncs = collectAnnexBFunctionDeclarations(switchCase, true);
        funcs.push(...innerFuncs);
        return funcs;
      }
      return [];
    }
    case "SwitchCase": {
      const funcs: FunctionDeclaration[] = [];
      for (const stmt of node.consequent) {
        const innerFuncs = collectAnnexBFunctionDeclarations(stmt);
        funcs.push(...innerFuncs);
      }
      return funcs;
    }
    case "FunctionDeclaration":
      if (inCollectionNOde) {
        return [node];
      }
  }

  return [];
}
