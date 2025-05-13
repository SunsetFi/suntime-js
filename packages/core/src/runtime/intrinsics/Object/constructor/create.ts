import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import { ReturnCompletion } from "../../../../evaluator/completions/ReturnCompletion.js";

import { isStaticJsNull, isStaticJsObjectLike } from "../../../types/index.js";

import { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorCreateDeclaration: IntrinsicPropertyDeclaration = {
  name: "create",
  *func(realm, thisArg, protoValue) {
    if (!isStaticJsNull(protoValue) && !isStaticJsObjectLike(protoValue)) {
      return ThrowCompletion(
        realm.types.error(
          "TypeError",
          "Object prototype may only be an Object or null",
        ),
      );
    }

    const proto = protoValue.runtimeTypeOf === "null" ? null : protoValue;
    const obj = realm.types.object(undefined, proto);
    return ReturnCompletion(obj);
  },
};

export default objectCtorCreateDeclaration;
