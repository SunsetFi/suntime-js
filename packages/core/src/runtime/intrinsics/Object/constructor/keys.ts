import { NormalCompletion } from "../../../../evaluator/internal.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorKeysDeclaration: IntrinsicPropertyDeclaration = {
  name: "keys",
  *func(realm, thisArg, objValue) {
    const obj = (objValue ?? realm.types.undefined).toObject();

    const ownKeys = yield* obj.getOwnKeysEvaluator();

    const result = realm.types.createArray(
      ownKeys.map((key) => realm.types.string(key)),
    );
    return NormalCompletion(result);
  },
};

export default objectCtorKeysDeclaration;
