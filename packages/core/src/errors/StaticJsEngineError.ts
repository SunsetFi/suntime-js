import { symbolInspect } from "../utils/symbol-inspect.js";

export class StaticJsEngineError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "StaticJsEngineError";
  }

  [symbolInspect](): string {
    return `${this.name}: ${this.message}`;
  }
}
