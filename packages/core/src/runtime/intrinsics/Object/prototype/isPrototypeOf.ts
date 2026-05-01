import { sameValue } from "../../../algorithms/same-value.js";
import { toObject } from "../../../algorithms/to-object.js";
import { isStaticJsObject, type StaticJsObject } from "../../../types/StaticJsObject.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectProtoIsPrototypeOfDeclaration: IntrinsicPropertyDeclaration = {
  key: "isPrototypeOf",
  length: 1,
  *func(realm, thisArg = realm.types.undefined, proto) {
    if (!isStaticJsObject(proto)) {
      return realm.types.false;
    }

    let V: StaticJsObject | null = proto;

    const O = yield* toObject(thisArg);
    while (true) {
      V = yield* V.getPrototypeOfEvaluator();
      if (V === null) {
        return realm.types.false;
      }
      if (sameValue(O, V)) {
        return realm.types.true;
      }
    }
  },
};

export default objectProtoIsPrototypeOfDeclaration;
