import { Q } from "../../../../evaluator/completions/Q.js";
import { X } from "../../../../evaluator/completions/X.js";
import { get } from "../../../algorithms/get.js";
import { toObject } from "../../../algorithms/to-object.js";
import { StaticJsArgumentsExoticObject } from "../../../types/implementation/functions/StaticJsArgumentsExoticObject.js";
import { StaticJsBooleanBoxed } from "../../../types/implementation/primitives/StaticJsBooleanBoxed.js";
import { StaticJsNumberBoxed } from "../../../types/implementation/primitives/StaticJsNumberBoxed.js";
import { StaticJsStringExoticObject } from "../../../types/implementation/primitives/StaticJsStringExoticObject.js";
import { isStaticJsArray } from "../../../types/StaticJsArray.js";
import { isStaticJsBoolean } from "../../../types/StaticJsBoolean.js";
import { isStaticJsCallable } from "../../../types/StaticJsCallable.js";
import { isStaticJsError } from "../../../types/StaticJsError.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsNumber } from "../../../types/StaticJsNumber.js";
import { isStaticJsString } from "../../../types/StaticJsString.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const objectProtoToStringDeclaration: IntrinsicPropertyDeclaration = {
  key: "toString",
  length: 0,
  *func(realm, thisArg) {
    if (isStaticJsUndefined(thisArg)) {
      return realm.types.string("[object Undefined]");
    }

    if (isStaticJsNull(thisArg)) {
      return realm.types.string("[object Null]");
    }

    const O = yield* X(toObject(thisArg));

    let builtinTag: string;
    if (isStaticJsArray(O)) {
      builtinTag = "Array";
    } else if (O instanceof StaticJsArgumentsExoticObject) {
      builtinTag = "Arguments";
    } else if (isStaticJsCallable(O)) {
      // Defined as object having [[Call]]
      builtinTag = "Function";
    } else if (isStaticJsError(O)) {
      // Defined as object having [[ErrorData]]
      builtinTag = "Error";
    }
    // HACK: Boolean.prototype is supposed to be a 'false' value while still being an object.
    // This means when Object.prototype.toString gets called from a Boolean.prototype, we should
    // detect it as a boolean.
    else if (thisArg === realm.intrinsics["Boolean.prototype"]) {
      builtinTag = "Boolean";
    } else if (isStaticJsBoolean(O) || O instanceof StaticJsBooleanBoxed) {
      // Spec defines as having [[BooleanData]]
      builtinTag = "Boolean";
    } else if (isStaticJsNumber(O) || O instanceof StaticJsNumberBoxed) {
      // Spec defines as having [[NumberData]]
      builtinTag = "Number";
    } else if (isStaticJsString(O) || O instanceof StaticJsStringExoticObject) {
      // Spec defines as having [[StringData]]
      builtinTag = "String";
    }
    // TODO: Date
    // TODO: regex
    else {
      builtinTag = "Object";
    }

    let tag = yield* Q(get(O, realm.types.symbols.toStringTag));
    if (!isStaticJsString(tag)) {
      tag = realm.types.string(builtinTag);
    }

    return realm.types.string(`[object ${tag.value}]`);
  },
};

export default objectProtoToStringDeclaration;
