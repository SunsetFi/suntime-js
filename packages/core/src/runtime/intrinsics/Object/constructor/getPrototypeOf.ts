import { toObject } from "../../../algorithms/to-object.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorGetPrototypeOfDeclaration: IntrinsicPropertyDeclaration = {
  key: "getPrototypeOf",
  *func(realm, _thisArg, targetValue = realm.types.undefined) {
    const obj = yield* toObject(targetValue);

    const proto = yield* obj.getPrototypeOfEvaluator();
    if (proto == null) {
      return realm.types.null;
    }

    return proto;
  },
};

export default objectCtorGetPrototypeOfDeclaration;
