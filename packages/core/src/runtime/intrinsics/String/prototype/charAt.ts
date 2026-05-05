import { toNumber } from "../../../algorithms/to-number.js";
import { toString } from "../../../algorithms/to-string.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const stringProtoCharAtDeclaration: IntrinsicPropertyDeclaration = {
  key: "charAt",
  length: 1,
  func: function* (realm, thisArg, indexValue: StaticJsValue = realm.types.undefined) {
    thisArg = yield* toString(thisArg);

    indexValue = yield* toNumber(indexValue);

    const result = thisArg.value.charAt(indexValue.value);

    return realm.types.string(result);
  },
};

export default stringProtoCharAtDeclaration;
