import { NormalCompletion } from "../../../../evaluator/completions/index.js";
import { isThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import { isStaticJsFunction } from "../../../types/index.js";
import createTypeErrorCompletion from "../../errors/TypeError.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";
import getLength from "./utils/get-length.js";

const arrayProtoForEachDeclaration: IntrinsicPropertyDeclaration = {
  name: "forEach",
  *func(realm, thisArg, callback, providedThisArg) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    if (!callback) {
      callback = realm.types.undefined;
    }

    if (!isStaticJsFunction(callback)) {
      return createTypeErrorCompletion(
        `${callback.toString()} is not a function`,
        realm,
      );
    }

    const length = yield* getLength(realm, thisObj);
    if (isThrowCompletion(length)) {
      return length;
    }

    for (let i = 0; i < length; i++) {
      const property = String(i);
      const hasProperty = yield* thisObj.hasPropertyEvaluator(property);
      if (!hasProperty) {
        continue;
      }

      const elementValue = yield* thisObj.getPropertyEvaluator(property);
      const resultCompletion = yield* callback.call(
        providedThisArg ?? thisObj,
        elementValue,
        realm.types.number(i),
        thisObj,
      );
      if (resultCompletion.type === "throw") {
        return resultCompletion;
      }
      if (resultCompletion.type !== "normal") {
        throw new Error(
          "Expected result completion to return normal or throw, but got " +
            resultCompletion.type,
        );
      }
    }

    return NormalCompletion(realm.types.undefined);
  },
};

export default arrayProtoForEachDeclaration;
