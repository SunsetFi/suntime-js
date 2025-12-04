import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type { NormalCompletion } from "./NormalCompletion.js";

export class AbnormalCompletionBase {
  private _value: NormalCompletion;

  constructor(
    public readonly type: string,
    value: NormalCompletion | null = null,
  ) {
    this._value = value!;
  }

  get value(): NormalCompletion {
    return this._value;
  }

  set value(newValue: NormalCompletion) {
    this._value = newValue;
  }

  updateEmpty(value: NormalCompletion): void {
    if (this._value === null) {
      this._value = value;
    }
  }

  toJs(): unknown {
    return new StaticJsEngineError("Unexpected completion type: " + this.type);
  }

  static handleToJs(e: unknown): never {
    if (e instanceof AbnormalCompletionBase) {
      throw e.toJs();
    }

    throw e;
  }

  toRuntime(): Error {
    return new StaticJsEngineError("Unexpected completion type: " + this.type);
  }
}
