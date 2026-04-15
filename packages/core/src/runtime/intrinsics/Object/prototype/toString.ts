import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { Q } from "../../../../evaluator/completions/Q.js";
import { X } from "../../../../evaluator/completions/X.js";
import { get } from "../../../algorithms/get.js";
import toObject from "../../../algorithms/to-object.js";
import { StaticJsArgumentsExoticObject } from "../../../types/implementation/functions/StaticJsArgumentsExoticObject.js";
import { isStaticJsArray } from "../../../types/StaticJsArray.js";
import { isStaticJsBoolean } from "../../../types/StaticJsBoolean.js";
import { isStaticJsCallable } from "../../../types/StaticJsCallable.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsNumber } from "../../../types/StaticJsNumber.js";
import { isStaticJsString } from "../../../types/StaticJsString.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

const objectProtoToStringDeclaration: IntrinsicPropertyDeclaration = {
  key: "toString",
  *func(realm, thisArg) {
    // I'm not too sure on the spec for this...

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
    }
    // TODO: Error
    else if (isStaticJsBoolean(O)) {
      builtinTag = "Boolean";
    } else if (isStaticJsNumber(O)) {
      builtinTag = "Number";
    } else if (isStaticJsString(O)) {
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
