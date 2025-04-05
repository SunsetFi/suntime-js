import { NormalCompletion } from "../../../../evaluator/internal.js";
import toInteger from "../../../algorithms/to-integer.js";
import {
  isStaticJsArray,
  isStaticJsFunction,
  StaticJsValue,
} from "../../../types/index.js";
import createTypeErrorCompletion from "../../errors/TypeError.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoMapDeclaration: IntrinsicPropertyDeclaration = {
  name: "map",
  *func(realm, thisArg, callback, providedThisArg) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    if (!isStaticJsArray(thisArg)) {
      // Seems to do nothing in NodeJs.
      return NormalCompletion(realm.types.undefined);
    }

    if (!callback) {
      callback = realm.types.undefined;
    }

    if (!isStaticJsFunction(callback)) {
      return createTypeErrorCompletion(
        `${callback.toString()} is not a function`,
        realm,
      );
    }

    const lengthValue = yield* thisObj.getPropertyEvaluator("length");
    const length = toInteger(lengthValue);

    const resultArray: StaticJsValue[] = new Array(length);
    for (let i = 0; i < length; i++) {
      const property = String(i);
      const hasProperty = yield* thisObj.hasPropertyEvaluator(property);
      if (!hasProperty) {
        // map does not invoke for, and preserves, empties.
        continue;
      }

      const elementValue = yield* thisArg.getPropertyEvaluator(property);
      const resultCompletion = yield* callback.call(
        providedThisArg ?? thisArg,
        elementValue,
        realm.types.number(i),
        thisArg,
      );
      if (resultCompletion.type === "throw") {
        return resultCompletion;
      }
      if (
        resultCompletion.type !== "normal" ||
        resultCompletion.value == null
      ) {
        throw new Error(
          "Expected result completion to return a value, but got undefined",
        );
      }

      resultArray[i] = resultCompletion.value;
    }

    return NormalCompletion(realm.types.createArray(resultArray));
  },
};

export default arrayProtoMapDeclaration;
