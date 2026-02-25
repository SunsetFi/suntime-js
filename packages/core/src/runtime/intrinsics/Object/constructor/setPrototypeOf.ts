import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import toObject from "../../../algorithms/to-object.js";

import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import type { StaticJsObjectLike } from "../../../types/StaticJsObjectLike.js";
import { isStaticJsObjectLike } from "../../../types/StaticJsObjectLike.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorSetPrototypeOfDeclaration: IntrinsicPropertyDeclaration = {
  key: "setPrototypeOf",
  *func(realm, thisArg, targetValue, protoValue) {
    const obj = yield* toObject(targetValue ?? realm.types.undefined, realm);

    let proto: StaticJsObjectLike | null;
    if (isStaticJsObjectLike(protoValue)) {
      proto = protoValue;
    } else if (isStaticJsNull(protoValue)) {
      proto = null;
    } else {
      throw new ThrowCompletion(
        realm.types.error("TypeError", "Object prototype may only be an Object or null"),
      );
    }

    yield* obj.setPrototypeOfEvaluator(proto);

    return realm.types.undefined;
  },
};

export default objectCtorSetPrototypeOfDeclaration;
