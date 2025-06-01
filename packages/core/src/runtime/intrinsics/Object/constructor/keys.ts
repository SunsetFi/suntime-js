import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorKeysDeclaration: IntrinsicPropertyDeclaration = {
  name: "keys",
  *func(realm, thisArg, objValue) {
    const obj = (objValue ?? realm.types.undefined).toObject();

    const ownKeys = yield* obj.getOwnKeysEvaluator();

    const result = realm.types.array(
      ownKeys.map((key) => realm.types.string(key)),
    );
    return result;
  },
};

export default objectCtorKeysDeclaration;
