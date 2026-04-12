import { ClassBody, ClassMethod } from "@babel/types";

export function constructorMethod(body: ClassBody): ClassMethod | null {
  for (const element of body.body) {
    if (element.type === "ClassMethod" && element.kind === "constructor") {
      return element;
    }
  }

  return null;
}
