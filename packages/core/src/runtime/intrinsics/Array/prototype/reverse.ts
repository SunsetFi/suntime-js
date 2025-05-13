import { isThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import { ReturnCompletion } from "../../../../evaluator/completions/ReturnCompletion.js";

import { IntrinsicPropertyDeclaration } from "../../utils.js";

import getLength from "./utils/get-length.js";

const arrayProtoReverseDeclaration: IntrinsicPropertyDeclaration = {
  name: "reverse",
  *func(realm, thisArg) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    const length = yield* getLength(realm, thisObj);
    if (isThrowCompletion(length)) {
      return length;
    }

    for (let i = 0; i < length / 2; i++) {
      const leftProperty = String(i);
      const rightProperty = String(length - 1 - i);

      const hasLeftValue = yield* thisObj.hasPropertyEvaluator(leftProperty);
      const hasRightValue = yield* thisObj.hasPropertyEvaluator(rightProperty);

      const leftValue = hasLeftValue
        ? yield* thisObj.getPropertyEvaluator(leftProperty)
        : null;
      const rightValue = hasRightValue
        ? yield* thisObj.getPropertyEvaluator(rightProperty)
        : null;

      if (leftValue) {
        yield* thisObj.setPropertyEvaluator(rightProperty, leftValue, true);
      } else if (hasRightValue) {
        yield* thisObj.deletePropertyEvaluator(rightProperty);
      }

      if (rightValue) {
        yield* thisObj.setPropertyEvaluator(leftProperty, rightValue, true);
      } else if (hasLeftValue) {
        yield* thisObj.deletePropertyEvaluator(leftProperty);
      }
    }

    return ReturnCompletion(thisObj);
  },
};

export default arrayProtoReverseDeclaration;
