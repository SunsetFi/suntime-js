import { StaticJsTaskError } from "./StaticJsTaskError.js";

export class StaticJsTaskAbortedError extends StaticJsTaskError {
  /**
   * Creates a new StaticJsTaskAbortedError.
   * @param message The error message.
   */
  constructor(message: string = "The task was aborted.") {
    super(message);
    this.name = "StaticJsTaskAbortedError";
  }
}
