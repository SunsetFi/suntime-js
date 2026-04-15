import { Completion } from "../../../evaluator/completions/Completion.js";
import { Q } from "../../../evaluator/completions/Q.js";
import { createArrayFromList } from "../../algorithms/create-array-from-list.js";
import { isStaticJsObject } from "../../types/StaticJsObject.js";
import { StaticJsString } from "../../types/StaticJsString.js";
import { StaticJsSymbol } from "../../types/StaticJsSymbol.js";
import { toPropertyKey } from "../../utils/to-property-key.js";
import { IntrinsicPropertyDeclaration } from "../utils.js";

export const reflectOwnKeysDeclaration: IntrinsicPropertyDeclaration = {
  key: "ownKeys",
  *func(realm, _thisArg, target = realm.types.undefined) {
    if (!isStaticJsObject(target)) {
      throw Completion.Throw("TypeError", "Reflect.ownKeys called on non-object");
    }

    const ownKeys = yield* Q(target.ownPropertyKeysEvaluator());
    let values: (StaticJsString | StaticJsSymbol)[] = [];
    for (const key of ownKeys) {
      const propertyKey = yield* toPropertyKey(key, true);
      values.push(propertyKey);
    }
    return yield* createArrayFromList(values);
  },
};
