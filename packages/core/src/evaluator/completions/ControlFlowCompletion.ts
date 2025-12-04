import type { StaticJsRealm } from "../../runtime/realm/StaticJsRealm.js";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import { AbnormalCompletionBase } from "./AbnormalCompletionBase.js";
import { ThrowCompletion } from "./ThrowCompletion.js";

export abstract class ControlFlowCompletion extends AbnormalCompletionBase {
  constructor(type: string, value?: StaticJsValue | null) {
    super(type, value);
  }

  static handleUnexpected(realm: StaticJsRealm, e: unknown) {
    if (e instanceof ControlFlowCompletion) {
      throw new ThrowCompletion(
        realm.types.error(
          "SyntaxError",
          "Unexpected control flow completion: " + e.type,
        ),
      );
    }

    throw e;
  }
}
