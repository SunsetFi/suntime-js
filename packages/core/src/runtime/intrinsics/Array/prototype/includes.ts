import { isThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import { NormalCompletion } from "../../../../evaluator/internal.js";
import sameValueZero from "../../../algorithms/same-value-zero.js";
import toInteger from "../../../algorithms/to-integer.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";
import getLength from "./utils/get-length.js";

const arrayProtoIncludesDeclaration: IntrinsicPropertyDeclaration = {
  name: "includes",
  *func(realm, thisArg, value, startFromValue) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    if (!value) {
      return NormalCompletion(realm.types.false);
    }

    const length = yield* getLength(realm, thisObj);
    if (isThrowCompletion(length)) {
      return length;
    }
    if (length === 0) {
      return NormalCompletion(realm.types.false);
    }

    let startFrom = 0;
    if (startFromValue) {
      startFrom = toInteger(startFromValue);
    }

    if (startFrom < 0) {
      startFrom = length + startFrom;
    }

    startFrom = Math.max(0, startFrom);

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
