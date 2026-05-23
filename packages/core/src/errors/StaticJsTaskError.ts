import { symbolInspect } from "../utils/symbol-inspect.js";

export class StaticJsTaskError extends Error {
  /**
   * Creates a new StaticJsTaskError.
   * @param message The error message.
   */
  constructor(message: string = "The task encountered an error.") {
    super(message);
    this.name = "StaticJsTaskError";
  }

  [symbolInspect](): string {
    return `${this.name}: ${this.message}`;
  }
}
