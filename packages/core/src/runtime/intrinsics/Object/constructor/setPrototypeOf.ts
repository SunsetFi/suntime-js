import {
  NormalCompletion,
  ThrowCompletion,
} from "../../../../evaluator/internal.js";
import {
  isStaticJsNull,
  isStaticJsObjectLike,
  StaticJsObjectLike,
} from "../../../types/index.js";
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
        realm.types.string("Object prototype may only be an Object or null"),
      );
    }

    if (!obj.extensible) {
      return ThrowCompletion(
        realm.types.string("Cannot set prototype of a non-extensible object"),
      );
    }

    yield* obj.setPrototypeOfEvaluator(proto);

    return NormalCompletion(obj);
  },
};

export default objectCtorSetPrototypeOfDeclaration;
