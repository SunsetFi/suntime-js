import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";

import { isStaticJsArray } from "../../../types/StaticJsArray.js";
import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import getLength from "./utils/get-length.js";

const arrayProtoFlatMapDeclaration: IntrinsicPropertyDeclaration = {
  name: "flatMap",
  *func(realm, thisArg, callback) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    if (!callback) {
      callback = realm.types.undefined;
    }
    if (!isStaticJsFunction(callback)) {
      // Yes, this error message is different from all the others!
      throw new ThrowCompletion(
        realm.types.error(
          "TypeError",
          "flatMap mapper function is not callable",
        ),
      );
    }

    const length = yield* getLength(realm, thisObj);

    const items: StaticJsValue[] = [];
    for (let i = 0; i < length; i++) {
      const hasProperty = yield* thisObj.hasPropertyEvaluator(String(i));
      // flatMap ignores missing items.
      if (!hasProperty) {
        continue;
      }

      const currentItem = yield* thisObj.getPropertyEvaluator(String(i));
      const result = yield* callback.callEvaluator(
        thisObj,
        currentItem,
        realm.types.number(i),
        thisObj,
      );
      // flatMap does not flatten non-array array-likes.
      if (isStaticJsArray(result)) {
        const resultArray = yield* result.sliceNativeEvaluator();
        // flatMap does not preserve missing items in sub-arrays.
        items.push(...resultArray);
      } else {
        items.push(result);
      }
    }

    return realm.types.array(items);
  },
};

export default arrayProtoFlatMapDeclaration;
