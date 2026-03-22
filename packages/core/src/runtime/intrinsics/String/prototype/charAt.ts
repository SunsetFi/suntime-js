import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import toString from "../../../algorithms/to-string.js";
import toNumber from "../../../algorithms/to-number.js";

const stringProtoCharAtDeclaration: IntrinsicPropertyDeclaration = {
  key: "charAt",
  func: function* (realm, thisArg, indexValue: StaticJsValue = realm.types.undefined) {
    thisArg = yield* toString(thisArg);

    indexValue = yield* toNumber(indexValue);

    const result = thisArg.value.charAt(indexValue.value);

    return realm.types.string(result);
  },
};

export default stringProtoCharAtDeclaration;
