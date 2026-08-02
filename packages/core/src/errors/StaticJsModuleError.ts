import { symbolInspect } from "#utils/symbol-inspect.js";

export class StaticJsModuleError extends Error {
  /**
   * Creates a new StaticJsModuleError.
   * @param message The error message.
   */
  constructor(message: string = "The module encountered an error.") {
    super(message);
    this.name = "StaticJsModuleError";
  }

  [symbolInspect](): string {
    return `${this.name}: ${this.message}`;
  }
}
