import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import { ControlFlowCompletion } from "./ControlFlowCompletion.js";

export class ReturnCompletion extends ControlFlowCompletion {
  constructor(value: StaticJsValue | null = null) {
    super("return", value);
  }

  get value(): StaticJsValue | null {
    return super.value as StaticJsValue | null;
  }

  set value(val: StaticJsValue | null) {
    super.value = val;
  }
}
