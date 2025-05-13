import ReturnCompletion from "../../../../evaluator/completions/ReturnCompletion.js";

import { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorGetPrototypeOfDeclaration: IntrinsicPropertyDeclaration = {
  name: "getPrototypeOf",
  *func(realm, thisArg, targetValue) {
    const obj = (targetValue ?? realm.types.undefined).toObject();

    const proto = obj.prototype;
    if (proto == null) {
      return ReturnCompletion(realm.types.null);
    }

    return ReturnCompletion(proto);
  },
};

export default objectCtorGetPrototypeOfDeclaration;
