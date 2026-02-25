import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type { CompletionValue } from "./CompletionValue.js";

export abstract class AbnormalCompletionBase {
  private _value: CompletionValue;

  constructor(
    public readonly type: string,
    value: CompletionValue = null,
  ) {
    this._value = value;
  }

  get value(): CompletionValue {
    return this._value;
  }

  set value(newValue: CompletionValue) {
    this._value = newValue;
  }

  abstract withValue(value: CompletionValue): this;

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
