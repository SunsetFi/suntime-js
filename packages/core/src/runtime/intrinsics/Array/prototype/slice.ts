import { ReturnCompletion } from "../../../../evaluator/completions/ReturnCompletion.js";
import { isThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import toInteger from "../../../algorithms/to-integer.js";
import { StaticJsValue } from "../../../types/index.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";
import getLength from "./utils/get-length.js";

const arrayProtoSliceDeclaration: IntrinsicPropertyDeclaration = {
  name: "slice",
  *func(realm, thisArg, startValue, endValue) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    const length = yield* getLength(realm, thisObj);
    if (isThrowCompletion(length)) {
      return length;
    }

    let start = startValue ? toInteger(startValue) : 0;
    if (start < 0) {
      start = length + start;
    }

    start = Math.max(0, start);

    if (start >= length) {
      return ReturnCompletion(realm.types.array([]));
    }

    let end = endValue ? toInteger(endValue) : length;
    if (end < 0) {
      end = length + end;
    }
    if (end > length) {
      end = length;
    }

    end = Math.max(0, end);

    if (end <= start) {
      return ReturnCompletion(realm.types.array([]));
    }

    const sliceLength = end - start;
    const items: StaticJsValue[] = new Array(sliceLength);
    for (let i = 0; i < sliceLength; i++) {
      const property = String(start + i);
      const hasProperty = yield* thisObj.hasPropertyEvaluator(property);
      if (!hasProperty) {
        // Leave the gap.
        continue;
      }

      const value = yield* thisObj.getPropertyEvaluator(property);
      items[i] = value;
    }

    return ReturnCompletion(realm.types.array(items));
  },
};

export default arrayProtoSliceDeclaration;
