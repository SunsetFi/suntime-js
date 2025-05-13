import { ReturnCompletion } from "../../../../evaluator/completions/ReturnCompletion.js";
import { isThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";
import getLength from "./utils/get-length.js";

const arrayProtoShiftDeclaration: IntrinsicPropertyDeclaration = {
  name: "shift",
  *func(realm, thisArg) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    const length = yield* getLength(realm, thisObj);
    if (isThrowCompletion(length)) {
      return length;
    }

    if (length <= 0) {
      yield* thisObj.setPropertyEvaluator("length", realm.types.zero, true);
      return ReturnCompletion(realm.types.undefined);
    }

    const value = yield* thisObj.getPropertyEvaluator("0");

    for (let i = 0; i < length - 1; i++) {
      const fromProperty = String(i + 1);
      const toProperty = String(i);

      const hasFromProperty = yield* thisObj.hasPropertyEvaluator(fromProperty);

      if (!hasFromProperty) {
        yield* thisObj.deletePropertyEvaluator(toProperty);
        continue;
      }

      const fromValue = yield* thisObj.getPropertyEvaluator(fromProperty);
      yield* thisObj.setPropertyEvaluator(toProperty, fromValue, true);
    }

    yield* thisObj.deletePropertyEvaluator(String(length - 1));
    yield* thisObj.setPropertyEvaluator(
      "length",
      realm.types.number(length - 1),
      true,
    );

    return ReturnCompletion(value);
  },
};

export default arrayProtoShiftDeclaration;
