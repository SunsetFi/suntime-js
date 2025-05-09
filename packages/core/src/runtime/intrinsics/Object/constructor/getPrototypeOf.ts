import { NormalCompletion } from "../../../../evaluator/internal.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorGetPrototypeOfDeclaration: IntrinsicPropertyDeclaration = {
  name: "getPrototypeOf",
  *func(realm, thisArg, targetValue) {
    const obj = (targetValue ?? realm.types.undefined).toObject();

    const proto = obj.prototype;
    if (proto == null) {
      return NormalCompletion(realm.types.null);
    }

    return NormalCompletion(proto);
  },
};

export default objectCtorGetPrototypeOfDeclaration;
