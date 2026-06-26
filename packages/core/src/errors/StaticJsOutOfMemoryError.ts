import { symbolInspect } from "#utils/symbol-inspect.js";

export class StaticJsOutOfMemoryError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "StaticJsOutOfMemoryError";
  }

  [symbolInspect](): string {
    return `${this.name}: ${this.message}`;
  }
}
