import { isThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import { ReturnCompletion } from "../../../../evaluator/completions/ReturnCompletion.js";

import strictEquality from "../../../algorithms/strict-equality.js";

import { IntrinsicPropertyDeclaration } from "../../utils.js";

import getLength from "./utils/get-length.js";

const arrayProtoLastIndexOfDeclaration: IntrinsicPropertyDeclaration = {
  name: "lastIndexOf",
  *func(realm, thisArg, value) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    const length = yield* getLength(realm, thisObj);
    if (isThrowCompletion(length)) {
      return length;
    }

    if (!value) {
      value = realm.types.undefined;
    }

    for (let i = length - 1; i >= 0; i--) {
      const hasProperty = yield* thisObj.hasPropertyEvaluator(String(i));
      if (!hasProperty) {
        continue;
      }
      const valueAtIndex = yield* thisObj.getPropertyEvaluator(String(i));
      if (strictEquality(valueAtIndex, value)) {
        return ReturnCompletion(realm.types.number(i));
      }
    }

    return ReturnCompletion(realm.types.number(-1));
  },
};

export default arrayProtoLastIndexOfDeclaration;
