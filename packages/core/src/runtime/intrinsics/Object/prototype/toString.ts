import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectProtoToStringDeclaration: IntrinsicPropertyDeclaration = {
  name: "toString",
  *func(realm, thisArg) {
    // I'm not too sure on the spec for this...

    if (isStaticJsNull(thisArg)) {
      return realm.types.string("[object Null]");
    }

    if (isStaticJsUndefined(thisArg)) {
      return realm.types.string("[object Undefined]");
    }

    return realm.types.string(`[object ${captitalize(thisArg.runtimeTypeOf)}]`);
  },
};

function captitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default objectProtoToStringDeclaration;
