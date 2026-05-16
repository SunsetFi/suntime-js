import { Completion } from "../../../evaluator/completions/Completion.js";
import { Q } from "../../../evaluator/completions/Q.js";
import { createArrayFromList } from "../../algorithms/create-array-from-list.js";
import { isStaticJsObject } from "../../types/StaticJsObject.js";
import { StaticJsValue } from "../../types/StaticJsValue.js";
import { toPropertyKey } from "../../utils/to-property-key.js";
import { IntrinsicPropertyDeclaration } from "../apply-intrinsic-properties.js";

export const reflectOwnKeysDeclaration: IntrinsicPropertyDeclaration = {
  key: "ownKeys",
  length: 1,
  *func(realm, _thisArg, target = realm.types.undefined) {
    if (!isStaticJsObject(target)) {
      throw Completion.Throw("TypeError", "Reflect.ownKeys called on non-object");
    }

    const ownKeys = yield* Q(target.ownPropertyKeysEvaluator());
    let values: StaticJsValue[] = [];
    for (const key of ownKeys) {
      const propertyKeyValue = yield* toPropertyKey(key);
      let propertyKey: StaticJsValue;
      if (typeof propertyKeyValue === "string") {
        propertyKey = realm.types.string(propertyKeyValue);
      } else {
        propertyKey = propertyKeyValue;
      }

      values.push(propertyKey);
    }
    return yield* createArrayFromList(values);
  },
};
