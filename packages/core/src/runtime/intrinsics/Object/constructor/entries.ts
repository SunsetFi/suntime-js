import { createArrayFromList } from "../../../algorithms/create-array-from-list.js";
import { get } from "../../../algorithms/get.js";
import toObject from "../../../algorithms/to-object.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorEntriesDeclaration: IntrinsicPropertyDeclaration = {
  key: "entries",
  *func(realm, _thisArg, obj = realm.types.undefined) {
    // TODO: This should return an iterator.
    obj = yield* toObject(obj);

    const ownKeys = yield* obj.ownEnumerableKeysEvaluator();

    const values: StaticJsValue[] = [];
    for (let i = 0; i < ownKeys.length; i++) {
      const key = ownKeys[i];
      const value = yield* get(obj, key);

      const keyWrapped = typeof key === "string" ? realm.types.string(key) : key;
      const item = yield* createArrayFromList([keyWrapped, value]);
      values[i] = item;
    }

    const result = yield* createArrayFromList(values);
    return result;
  },
};

export default objectCtorEntriesDeclaration;
