import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import { AbnormalCompletion } from "./AbnormalCompletion.js";

export class ReturnCompletion extends AbnormalCompletion {
  constructor(public readonly value: StaticJsValue | null = null) {
    super("return");
  }
}
