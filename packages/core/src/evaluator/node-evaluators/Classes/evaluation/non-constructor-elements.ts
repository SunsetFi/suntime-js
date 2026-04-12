import {
  ClassAccessorProperty,
  ClassBody,
  ClassMethod,
  ClassPrivateMethod,
  ClassPrivateProperty,
  ClassProperty,
  StaticBlock,
} from "@babel/types";

export type NonConstructorElement =
  | ClassMethod
  | ClassPrivateMethod
  | ClassProperty
  | ClassPrivateProperty
  | ClassAccessorProperty
  | StaticBlock;

export function nonConstructorElements(body: ClassBody): NonConstructorElement[] {
  const elements: NonConstructorElement[] = [];
  for (const element of body.body) {
    switch (element.type) {
      case "ClassMethod": {
        if (element.kind !== "constructor") {
          elements.push(element);
        }
        break;
      }
      case "ClassPrivateMethod":
      case "ClassProperty":
      case "ClassPrivateProperty":
      case "ClassAccessorProperty":
      case "StaticBlock":
        elements.push(element);
        break;
    }
  }

  return elements;
}
