import { NonConstructorElement } from "./non-constructor-elements.js";

export function isStatic(element: NonConstructorElement): boolean {
  switch (element.type) {
    case "StaticBlock":
      return true;
    case "ClassMethod":
    case "ClassPrivateMethod":
    case "ClassProperty":
    case "ClassPrivateProperty":
    case "ClassAccessorProperty":
      return element.static;
  }
  return false;
}
