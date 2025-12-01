import toObject from "../../../algorithms/to-object.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorEntriesDeclaration: IntrinsicPropertyDeclaration = {
  key: "entries",
  *func(realm, thisArg, obj) {
    // TODO: This should return an iterator.
    obj = yield* toObject(obj ?? realm.types.undefined, realm);

    const ownKeys = yield* obj.ownEnumerableKeysEvaluator();

    const values: StaticJsValue[] = new Array(ownKeys.length);
    for (let i = 0; i < ownKeys.length; i++) {
      const key = ownKeys[i];
      const value = yield* obj.getEvaluator(key);

      const keyWrapped =
        typeof key === "string" ? realm.types.string(key) : key;
      const item = realm.types.array([keyWrapped, value]);
      values[i] = item;
    }

    const result = realm.types.array(values);
    return result;
  },
};

export default objectCtorEntriesDeclaration;
