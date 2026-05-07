import { FunctionParameter } from "@babel/types";

export function expectedArgumentCount(args: FunctionParameter[]): number {
  let length = 0;
  for (const arg of args) {
    if (arg.type === "RestElement" || arg.type === "AssignmentPattern") {
      break;
    }
    length++;
  }

  return length;
}
