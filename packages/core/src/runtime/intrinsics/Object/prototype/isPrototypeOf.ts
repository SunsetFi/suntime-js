import sameValue from "../../../algorithms/same-value.js";
import toObject from "../../../algorithms/to-object.js";

import {
  isStaticJsObjectLike,
  type StaticJsObjectLike,
} from "../../../types/StaticJsObjectLike.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectProtoIsPrototypeOfDeclaration: IntrinsicPropertyDeclaration = {
  key: "isPrototypeOf",
  *func(realm, thisArg, proto) {
    if (!isStaticJsObjectLike(proto)) {
      return realm.types.false;
    }

    let V: StaticJsObjectLike | null = proto;

    const O = yield* toObject(thisArg ?? realm.types.undefined, realm);
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
