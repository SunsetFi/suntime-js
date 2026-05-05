import { createArrayFromList } from "../../../algorithms/create-array-from-list.js";
import { get } from "../../../algorithms/get.js";
import { toObject } from "../../../algorithms/to-object.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const objectCtorValuesDeclaration: IntrinsicPropertyDeclaration = {
  key: "values",
  length: 1,
  *func(realm, _thisArg, obj = realm.types.undefined) {
    obj = yield* toObject(obj);

    const ownKeys = yield* obj.ownEnumerableKeysEvaluator();

    const values: StaticJsValue[] = [];
    for (let i = 0; i < ownKeys.length; i++) {
      values[i] = yield* get(obj, ownKeys[i]);
    }

    const result = yield* createArrayFromList(values);
    return result;
  },
};

export default objectCtorValuesDeclaration;
