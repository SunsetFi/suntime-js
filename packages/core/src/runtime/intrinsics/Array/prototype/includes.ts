import { NormalCompletion } from "../../../../evaluator/internal.js";
import sameValueZero from "../../../algorithms/same-value-zero.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoIncludesDeclaration: IntrinsicPropertyDeclaration = {
  name: "includes",
  func: function* (realm, thisArg, value, startFromValue) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    if (!value) {
      return NormalCompletion(realm.types.false);
    }

    const lengthValue = yield* thisObj.getPropertyEvaluator("length");
    const length = Math.floor(lengthValue.toNumber());

    if (!startFromValue) {
      startFromValue = realm.types.zero;
    }

    // Yay edge cases
    const startFrom = Math.floor(startFromValue.toNumber());

    for (let i = startFrom; i < length; i++) {
      const elementValue = yield* thisObj.getPropertyEvaluator(String(i));
      if (sameValueZero(elementValue, value)) {
        return NormalCompletion(realm.types.true);
      }
    }

    return NormalCompletion(realm.types.false);
  },
};

export default arrayProtoIncludesDeclaration;
