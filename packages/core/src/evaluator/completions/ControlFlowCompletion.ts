import type { StaticJsRealm } from "../../runtime/realm/StaticJsRealm.js";

import { AbnormalCompletion } from "./AbnormalCompletion.js";
import { ThrowCompletion } from "./ThrowCompletion.js";

export abstract class ControlFlowCompletion extends AbnormalCompletion {
  constructor(type: string) {
    super(type);
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
