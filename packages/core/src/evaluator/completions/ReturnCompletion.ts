import type { StaticJsValue } from "../../index.js";

import { ControlFlowCompletion } from "./ControlFlowCompletion.js";

export class ReturnCompletion extends ControlFlowCompletion {
  constructor(value: StaticJsValue) {
    super("return", value);
  }

  get value(): StaticJsValue {
    return super.value as StaticJsValue;
  }

  set value(value: StaticJsValue) {
    super.value = value;
  }

  withValue(value: StaticJsValue): this {
    return new ReturnCompletion(value) as this;
  }
}
