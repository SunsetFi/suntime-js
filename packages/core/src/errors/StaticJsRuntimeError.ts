import { isStaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";
import { symbolInspect } from "../utils/symbol-inspect.js";

export class StaticJsRuntimeError extends Error {
  private _message: string | null = null;
  constructor(
    private readonly _thrown: StaticJsValue,
    private readonly _prefix: string = "",
  ) {
    super("StaticJsRuntimeError");

    this.name = "StaticJsRuntimeError";

    // Make the message lazy, because it's heavy, and we generate it in the weird deadzone while
    // a task is completed but not entered.
    // See EvaluationTask.ts _accept unhandledExceptions

    // oxlint-disable-next-line typescript/no-this-alias
    const err = this;
    Object.defineProperty(this, "message", {
      get: () => {
        if (this._message === null) {
          this._message = err._prefix + getMessage(err._thrown);
        }
        Object.defineProperty(err, "message", {
          value: err._message,
          writable: true,
          configurable: true,
          enumerable: false,
        });
        return err._message;
      },
      set: () => {
        Object.defineProperty(err, "message", {
          value: err._message,
          writable: true,
          configurable: true,
          enumerable: false,
        });
      },
    });
  }

  get thrown(): StaticJsValue {
    return this._thrown;
  }

  toNative(): Record<string, unknown> {
    return {
      name: this.name,
      message: this.message,
    };
  }

  [symbolInspect](): string {
    return `${this.name}: ${this.message}`;
  }

  get [Symbol.toStringTag](): string {
    return `StaticJsRuntimeError`;
  }

  toJSON(): Record<string, unknown> {
    return {
      name: this.name,
      message: this.message,
    };
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
