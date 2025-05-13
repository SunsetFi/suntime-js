import { isThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import { ReturnCompletion } from "../../../../evaluator/completions/ReturnCompletion.js";

import toInteger from "../../../algorithms/to-integer.js";

import { IntrinsicPropertyDeclaration } from "../../utils.js";

import getLength from "./utils/get-length.js";

const arrayProtoAtDeclaration: IntrinsicPropertyDeclaration = {
  name: "at",
  *func(realm, thisArg, indexValue) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    if (!indexValue) {
      indexValue = realm.types.undefined;
    }

    const length = yield* getLength(realm, thisObj);
    if (isThrowCompletion(length)) {
      return length;
    }

    let index = toInteger(indexValue);
    if (index < 0) {
      index = length + index;
    }

    if (index < 0 || index > length) {
      return ReturnCompletion(realm.types.undefined);
    }

    const value = yield* thisObj.getPropertyEvaluator(String(index));
    return ReturnCompletion(value);
  },
};

export default arrayProtoAtDeclaration;
