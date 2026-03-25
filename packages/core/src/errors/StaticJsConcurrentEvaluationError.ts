import { symbolInspect } from "../utils/symbol-inspect.js";

export class StaticJsConcurrentEvaluationError extends Error {
  constructor(message?: string) {
    super(message ?? "Cannot run a synchronous task while another task is running.");
    this.name = "StaticJsConcurrentEvaluationError";
  }

  [symbolInspect](): string {
    return `${this.name}: ${this.message}`;
  }
}
