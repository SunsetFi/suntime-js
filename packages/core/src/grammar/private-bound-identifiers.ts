import { ClassBody, Node } from "@babel/types";

export function privateBoundIdentifiers(node: ClassBody): string[] {
  return privateBoundIdentifiersOfNode(node);
}

function privateBoundIdentifiersOfNode(node: Node): string[] {
  switch (node.type) {
    case "ClassBody":
      return node.body.flatMap(privateBoundIdentifiersOfNode);
    case "ClassPrivateProperty":
      return node.key.type === "PrivateName" ? ["#" + node.key.id.name] : [];
    case "ClassPrivateMethod":
      return node.key.type === "PrivateName" ? ["#" + node.key.id.name] : [];
  }
  return [];
}
