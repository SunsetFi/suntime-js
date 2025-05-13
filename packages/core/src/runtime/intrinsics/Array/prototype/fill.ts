import { ReturnCompletion } from "../../../../evaluator/completions/ReturnCompletion.js";
import { isThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import toInteger from "../../../algorithms/to-integer.js";
import { isStaticJsUndefined } from "../../../types/index.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";
import getLength from "./utils/get-length.js";

const arrayProtoFillDeclaration: IntrinsicPropertyDeclaration = {
  name: "fill",
  *func(realm, thisArg, value, startValue, endValue) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    if (!value) {
      value = realm.types.undefined;
    }

    const length = yield* getLength(realm, thisObj);
    if (isThrowCompletion(length)) {
      return length;
    }
    if (length <= 0) {
      return ReturnCompletion(thisObj);
    }

    let start = 0;
    if (startValue && !isStaticJsUndefined(startValue)) {
      start = toInteger(startValue);
      if (start < 0) {
        start = length + start;
      }
    }

    start = Math.max(0, start);

    if (start >= length) {
      return ReturnCompletion(thisObj);
    }

    let end = length;
    if (endValue && !isStaticJsUndefined(endValue)) {
      end = toInteger(endValue);
      if (end < 0) {
        end = length + end;
      }
    }

    end = Math.max(0, end);

    if (end > length) {
      end = length;
    }

    for (let i = start; i < end; i++) {
      yield* thisObj.setPropertyEvaluator(String(i), value, true);
    }

    return ReturnCompletion(thisObj);
  },
};

export default arrayProtoFillDeclaration;
