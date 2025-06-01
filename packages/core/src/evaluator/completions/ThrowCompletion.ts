import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import { AbnormalCompletion } from "./AbnormalCompletion.js";

export class ThrowCompletion extends AbnormalCompletion {
  constructor(public readonly value: StaticJsValue) {
    super("throw");
  }

  toJs(): unknown {
    return this.value.toJs();
  }
}
