import ReturnCompletion from "../../../../evaluator/completions/ReturnCompletion.js";

import { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorKeysDeclaration: IntrinsicPropertyDeclaration = {
  name: "keys",
  *func(realm, thisArg, objValue) {
    const obj = (objValue ?? realm.types.undefined).toObject();

    const ownKeys = yield* obj.getOwnKeysEvaluator();

    const result = realm.types.array(
      ownKeys.map((key) => realm.types.string(key)),
    );
    return ReturnCompletion(result);
  },
};

export default objectCtorKeysDeclaration;
