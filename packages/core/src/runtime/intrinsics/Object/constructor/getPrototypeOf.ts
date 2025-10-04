import toObject from "../../../algorithms/to-object.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorGetPrototypeOfDeclaration: IntrinsicPropertyDeclaration = {
  key: "getPrototypeOf",
  *func(realm, thisArg, targetValue) {
    const obj = yield* toObject(targetValue ?? realm.types.undefined, realm);

    const proto = obj.prototype;
    if (proto == null) {
      return realm.types.null;
    }

    return proto;
  },
};

export default objectCtorGetPrototypeOfDeclaration;
