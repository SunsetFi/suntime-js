import { NormalCompletion } from "../../../../evaluator/internal.js";
import sameValueZero from "../../../algorithms/same-value-zero.js";
import toInteger from "../../../algorithms/to-integer.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoIncludesDeclaration: IntrinsicPropertyDeclaration = {
  name: "includes",
  *func(realm, thisArg, value, startFromValue) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    if (!value) {
      return NormalCompletion(realm.types.false);
    }

    const lengthValue = yield* thisObj.getPropertyEvaluator("length");
    const length = toInteger(lengthValue);

    let startFrom = 0;
    if (startFromValue) {
      startFrom = toInteger(startFromValue);
    }

    if (startFrom < 0) {
      startFrom = Math.max(0, length + startFrom);
    }

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
