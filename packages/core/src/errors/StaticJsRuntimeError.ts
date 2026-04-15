import { isStaticJsObject } from "../runtime/types/StaticJsObject.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";
import { symbolInspect } from "../utils/symbol-inspect.js";

export class StaticJsRuntimeError extends Error {
  private _message: string | null = null;
  constructor(
    private readonly _thrown: StaticJsValue,
    private readonly _prefix: string = "Runtime Error: ",
  ) {
    super("StaticJsRuntimeError");

    this.name = "StaticJsRuntimeError";

    // Make the message lazy, because it's heavy, and we generate it in the weird deadzone while
    // a task is completed but not entered.
    // See EvaluationTask.ts _accept unhandledExceptions
    Object.defineProperty(this, "message", {
      get: () => {
        if (this._message === null) {
          this._message = this._prefix + getMessage(this._thrown);
        }
        return this._message;
      },
    });
  }

  get thrown(): StaticJsValue {
    return this._thrown;
  }

  toNativeON(): Record<string, unknown> {
    return {
      name: this.name,
      message: this.message,
    };
  }

  [symbolInspect](): string {
    return `${this.name}: ${this.message}`;
  }
}

function getMessage(value: StaticJsValue): string {
  if (!isStaticJsObject(value)) {
    return value.toStringSync();
  }

  const hasMessage = value.hasPropertySync("message");
  if (hasMessage) {
    const message = value.getSync("message");
    return message.toStringSync();
  }

  return ``;
}
