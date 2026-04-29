import { Completion } from "../../../../evaluator/completions/Completion.js";
import { StaticJsBooleanBoxed } from "../../../types/implementation/primitives/StaticJsBooleanBoxed.js";
import { isStaticJsBoolean } from "../../../types/StaticJsBoolean.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

export const booleanProtoToStringDeclaration: IntrinsicPropertyDeclaration = {
  key: "toString",
  *func(realm, thisArg) {
    // Hack: "Booleean.prototype is itself a Boolean object with value false"
    if (thisArg === realm.types.prototypes.booleanProto) {
      return realm.types.string("false");
    }

    if (!isStaticJsBoolean(thisArg) && thisArg instanceof StaticJsBooleanBoxed === false) {
      throw Completion.Throw("TypeError", "Cannot call Boolean.prototype.toString on non-boolean");
    }

    const value = thisArg.value;
    return realm.types.string(value ? "true" : "false");
  },
};
