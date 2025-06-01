import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorGetPrototypeOfDeclaration: IntrinsicPropertyDeclaration = {
  name: "getPrototypeOf",
  *func(realm, thisArg, targetValue) {
    const obj = (targetValue ?? realm.types.undefined).toObject();

    const proto = obj.prototype;
    if (proto == null) {
      return realm.types.null;
    }

    return proto;
  },
};

export default objectCtorGetPrototypeOfDeclaration;
