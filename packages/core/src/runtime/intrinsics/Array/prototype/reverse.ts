import toObject from "../../../algorithms/to-object.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";

const arrayProtoReverseDeclaration: IntrinsicPropertyDeclaration = {
  key: "reverse",
  *func(realm, thisArg) {
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

    const length = yield* lengthOfArrayLike(thisObj, realm);

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

    return thisObj;
  },
};

export default arrayProtoReverseDeclaration;
