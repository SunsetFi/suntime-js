import { NormalCompletion } from "../../../../evaluator/completions/index.js";
import toInteger from "../../../algorithms/to-integer.js";
import { isStaticJsUndefined } from "../../../types/index.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoFillDeclaration: IntrinsicPropertyDeclaration = {
  name: "fill",
  *func(realm, thisArg, value, startValue, endValue) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    if (!value) {
      value = realm.types.undefined;
    }

    let lengthValue = yield* thisObj.getPropertyEvaluator("length");
    if (!lengthValue) {
      lengthValue = realm.types.zero;
    }

    const length = toInteger(lengthValue);
    if (length <= 0) {
      return NormalCompletion(thisObj);
    }

    let start = 0;
    if (startValue && !isStaticJsUndefined(startValue)) {
      start = toInteger(startValue);
      if (start < 0) {
        start = Math.max(0, length + start);
      }
    }

    if (start >= length) {
      return NormalCompletion(thisObj);
    }

    let end = length;
    if (endValue && !isStaticJsUndefined(endValue)) {
      end = toInteger(endValue);
      if (end < 0) {
        end = Math.max(0, length + end);
      }
    }

    if (end > length) {
      end = length;
    }

    for (let i = start; i < end; i++) {
      yield* thisObj.setPropertyEvaluator(String(i), value, true);
    }

    return NormalCompletion(thisObj);
  },
};

export default arrayProtoFillDeclaration;
