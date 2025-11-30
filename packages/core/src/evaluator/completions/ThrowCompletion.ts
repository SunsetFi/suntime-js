import StaticJsRuntimeError from "../../errors/StaticJsRuntimeError.js";
import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import { AbnormalCompletionBase } from "./AbnormalCompletionBase.js";

export class ThrowCompletion extends AbnormalCompletionBase {
  constructor(public readonly value: StaticJsValue) {
    super("throw");
  }

  toJs(): unknown {
    return this.value.toJsSync();
  }

  toRuntime(): Error {
    return new StaticJsRuntimeError(this.value);
  }
}
