import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";

import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsObjectLike } from "../../../types/StaticJsObjectLike.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorCreateDeclaration: IntrinsicPropertyDeclaration = {
  key: "create",
  *func(realm, thisArg, protoValue) {
    if (!isStaticJsNull(protoValue) && !isStaticJsObjectLike(protoValue)) {
      throw new ThrowCompletion(
        realm.types.error(
          "TypeError",
          "Object prototype may only be an Object or null",
        ),
      );
    }

    const proto = protoValue.runtimeTypeOf === "null" ? null : protoValue;
    const obj = realm.types.object(undefined, proto);
    return obj;
  },
};

export default objectCtorCreateDeclaration;
