import { NormalCompletion } from "../../../../evaluator/internal.js";
import { isStaticJsArray } from "../../../types/index.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoAtDeclaration: IntrinsicPropertyDeclaration = {
  name: "at",
  *func(realm, thisArg, indexValue) {
    // Seems this actually checks for if it is an array
    if (!isStaticJsArray(thisArg)) {
      return NormalCompletion(realm.types.undefined);
    }

    if (!indexValue) {
      indexValue = realm.types.undefined;
    }

    const length = yield* thisArg.getLengthEvaluator();

    let index = Math.floor(indexValue.toNumber());
    if (index < 0) {
      index = length + index;
    }

    if (index < 0 || index > length) {
      return NormalCompletion(realm.types.undefined);
    }

    const value = yield* thisArg.getEvaluator(index);
    return NormalCompletion(value);
  },
};

export default arrayProtoAtDeclaration;
