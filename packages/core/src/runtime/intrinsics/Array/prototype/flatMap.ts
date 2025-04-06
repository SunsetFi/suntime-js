import { isThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import {
  NormalCompletion,
  ThrowCompletion,
} from "../../../../evaluator/internal.js";
import {
  isStaticJsArray,
  isStaticJsFunction,
  StaticJsValue,
} from "../../../types/index.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";
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
      return ThrowCompletion(
        realm.types.string("flatMap mapper function is not callable"),
      );
    }

    const length = yield* getLength(realm, thisObj);
    if (isThrowCompletion(length)) {
      return length;
    }

    const items: StaticJsValue[] = [];
    for (let i = 0; i < length; i++) {
      const hasProperty = yield* thisObj.hasPropertyEvaluator(String(i));
      // flatMap ignores missing items.
      if (!hasProperty) {
        continue;
      }

      const currentItem = yield* thisObj.getPropertyEvaluator(String(i));
      const callCompletion = yield* callback.call(
        thisObj,
        currentItem,
        realm.types.number(i),
        thisObj,
      );
      if (callCompletion.type === "throw") {
        return callCompletion;
      }
      if (callCompletion.type !== "normal" || !callCompletion.value) {
        throw new Error("flatMap callback must return a normal value");
      }

      const result = callCompletion.value;
      // flatMap does not flatten non-array array-likes.
      if (isStaticJsArray(result)) {
        const resultArray = yield* result.sliceNativeEvaluator();
        // flatMap does not preserve missing items in sub-arrays.
        items.push(...resultArray);
      } else {
        items.push(result);
      }
    }

    return NormalCompletion(realm.types.createArray(items));
  },
};

export default arrayProtoFlatMapDeclaration;
