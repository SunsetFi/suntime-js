import { Completion } from "../../../evaluator/completions/Completion.js";
import { StaticJsBooleanBoxed } from "../../../types/implementation/primitives/StaticJsBooleanBoxed.js";
import { isStaticJsBoolean } from "../../../types/StaticJsBoolean.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

export const booleanProtoToStringDeclaration: IntrinsicPropertyDeclaration = {
  key: "toString",
  *func(realm, thisArg) {
    // Hack: "Booleean.prototype is itself a Boolean object with value false"
    if (thisArg === realm.intrinsics["Boolean.prototype"]) {
      return realm.types.string("false");
    }

    if (!isStaticJsBoolean(thisArg) && thisArg instanceof StaticJsBooleanBoxed === false) {
      throw yield* Completion.Throw.create(
        "TypeError",
        "Cannot call Boolean.prototype.toString on non-boolean",
      );
    }

    const value = thisArg.value;
    return realm.types.string(value ? "true" : "false");
  },
};
