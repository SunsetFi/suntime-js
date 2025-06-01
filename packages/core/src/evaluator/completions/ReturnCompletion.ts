import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import { ControlFlowCompletion } from "./ControlFlowCompletion.js";

export class ReturnCompletion extends ControlFlowCompletion {
  constructor(public readonly value: StaticJsValue | null = null) {
    super("return");
  }
}
