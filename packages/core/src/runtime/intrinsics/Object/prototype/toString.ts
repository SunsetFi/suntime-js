import { ReturnCompletion } from "../../../../evaluator/completions/ReturnCompletion.js";

import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectProtoToStringDeclaration: IntrinsicPropertyDeclaration = {
  name: "toString",
  *func(realm, thisArg) {
    // I'm not too sure on the spec for this...

    if (isStaticJsNull(thisArg)) {
      return ReturnCompletion(realm.types.string("[object Null]"));
    }

    if (isStaticJsUndefined(thisArg)) {
      return ReturnCompletion(realm.types.string("[object Undefined]"));
    }

    return ReturnCompletion(
      realm.types.string(`[object ${thisArg.runtimeTypeOf}]`),
    );
  },
};

export default objectProtoToStringDeclaration;
