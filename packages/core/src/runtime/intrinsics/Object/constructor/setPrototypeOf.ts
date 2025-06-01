import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";

import { isStaticJsNull } from "../../../types/interfaces/StaticJsNull.js";
import {
  StaticJsObjectLike,
  isStaticJsObjectLike,
} from "../../../types/interfaces/StaticJsObject.js";

import { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorSetPrototypeOfDeclaration: IntrinsicPropertyDeclaration = {
  name: "setPrototypeOf",
  *func(realm, thisArg, targetValue, protoValue) {
    const obj = (targetValue ?? realm.types.undefined).toObject();

    let proto: StaticJsObjectLike | null;
    if (isStaticJsObjectLike(protoValue)) {
      proto = protoValue;
    } else if (isStaticJsNull(protoValue)) {
      proto = null;
    } else {
      return ThrowCompletion(
        realm.types.error(
          "TypeError",
          "Object prototype may only be an Object or null",
        ),
      );
    }

    return yield* obj.setPrototypeOfEvaluator(proto);
  },
};

export default objectCtorSetPrototypeOfDeclaration;
