import { Completion } from "../../../../evaluator/completions/Completion.js";
import { StaticJsBooleanBoxed } from "../../../types/implementation/primitives/StaticJsBooleanBoxed.js";
import { isStaticJsBoolean } from "../../../types/StaticJsBoolean.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

export const booleanProtoValueOfDeclaration: IntrinsicPropertyDeclaration = {
  key: "valueOf",
  *func(realm, thisArg) {
    // Hack: "Booleean.prototype is itself a Boolean object with value false"
    if (thisArg === realm.types.prototypes.booleanProto) {
      return realm.types.boolean(false);
    }

    if (!isStaticJsBoolean(thisArg) && !(thisArg instanceof StaticJsBooleanBoxed)) {
      throw Completion.Throw(
        "TypeError",
        "Boolean.prototype.valueOf requires that 'this' be a Boolean",
      );
    }

    return realm.types.boolean(thisArg.value);
  },
};
