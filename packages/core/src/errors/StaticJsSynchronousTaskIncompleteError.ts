import { symbolInspect } from "../utils/symbol-inspect.js";

export class StaticJsSynchronousTaskIncompleteError extends Error {
  constructor(message?: string) {
    super(message ?? "A synchronous task did not complete synchronously.");
    this.name = "StaticJsSynchronousTaskIncompleteError";
  }

  [symbolInspect](): string {
    return `${this.name}: ${this.message}`;
  }
}
