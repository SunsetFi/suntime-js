import { StaticJsTaskCompletedError } from "./StaticJsTaskCompletedError.js";

export class StaticJsTaskAbortedError extends StaticJsTaskCompletedError {
  /**
   * Creates a new StaticJsTaskAbortedError.
   * @param message The error message.
   */
  constructor(message: string = "The task was aborted.") {
    super(message);
    this.name = "StaticJsTaskAbortedError";
  }
}
