import { symbolInspect } from "../utils/symbol-inspect.js";

export class StaticJsTaskAbortedError extends Error {
  /**
   * Creates a new StaticJsTaskAbortedError.
   * @param message The error message.
   */
  constructor(message: string = "The task was aborted.") {
    super(message);
    this.name = "StaticJsTaskAbortedError";
  }

  [symbolInspect](): string {
    return `${this.name}: ${this.message}`;
  }
}
