import type { StaticJsRealm } from "../../runtime/realm/StaticJsRealm.js";

import { AbnormalCompletionBase } from "./AbnormalCompletionBase.js";
import type { CompletionValue } from "./CompletionValue.js";
import { ThrowCompletion } from "./ThrowCompletion.js";

export abstract class ControlFlowCompletion extends AbnormalCompletionBase {
  constructor(type: string, value?: CompletionValue) {
    super(type, value);
  }

  abstract withValue(value: CompletionValue): this;

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
