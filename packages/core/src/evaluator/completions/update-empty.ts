import type { NormalCompletion } from "./NormalCompletion.js";
import isAbruptCompletion from "./AbruptCompletion.js";

export default function updateEmpty(completion: unknown, value: NormalCompletion): void {
  if (isAbruptCompletion(completion)) {
    completion.updateEmpty(value);
  }
}
