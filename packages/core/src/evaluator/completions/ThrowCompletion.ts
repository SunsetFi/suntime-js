import StaticJsRuntimeError from "../../errors/StaticJsRuntimeError.js";

import { type StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import { AbnormalCompletionBase } from "./AbnormalCompletionBase.js";

export class ThrowCompletion extends AbnormalCompletionBase {
  constructor(value: StaticJsValue) {
    super("throw", value);
  }

  get value(): StaticJsValue {
    return super.value as StaticJsValue;
  }

  set value(value: StaticJsValue) {
    super.value = value;
  }

  withValue(value: StaticJsValue): this {
    return new ThrowCompletion(value) as this;
  }

  toJs(): unknown {
    return this.value.toJsSync();
  }

  toRuntime(): Error {
    return new StaticJsRuntimeError(this.value);
  }
}
