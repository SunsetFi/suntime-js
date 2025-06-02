import toObject from "../../../algorithms/to-object.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorKeysDeclaration: IntrinsicPropertyDeclaration = {
  name: "keys",
  *func(realm, thisArg, objValue) {
    const obj = yield* toObject(objValue ?? realm.types.undefined, realm);

    const ownKeys = yield* obj.getOwnKeysEvaluator();

    const result = realm.types.array(
      ownKeys.map((key) => realm.types.string(key)),
    );
    return result;
  },
};

export default objectCtorKeysDeclaration;
