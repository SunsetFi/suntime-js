import { StaticJsTaskError } from "./StaticJsTaskError.js";

export class StaticJsTaskCompletedError extends StaticJsTaskError {
  /**
   * Creates a new StaticJsTaskCompletedError.
   * @param message The error message.
   */
  constructor(message: string = "The task was already completed.") {
    super(message);
    this.name = "StaticJsTaskCompletedError";
  }
}
