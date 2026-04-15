import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { createArrayFromList } from "../../../algorithms/create-array-from-list.js";
import toObject from "../../../algorithms/to-object.js";

const objectCtorKeysDeclaration: IntrinsicPropertyDeclaration = {
  key: "keys",
  *func(realm, _thisArg, objValue = realm.types.undefined) {
    const obj = yield* toObject(objValue);

    const ownKeys = yield* obj.ownEnumerableKeysEvaluator();

    const result = yield* createArrayFromList(ownKeys.map((key) => realm.types.string(key)));
    return result;
  },
};

export default objectCtorKeysDeclaration;
