import { toNumber } from "../../../algorithms/to-number.js";
import { toString } from "../../../algorithms/to-string.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const stringProtoCharCodeAtDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "charCodeAt",
  length: 1,
  func: function* (realm, thisArg, indexValue: StaticJsValue = realm.types.undefined) {
    thisArg = yield* toString(thisArg);

    indexValue = yield* toNumber(indexValue);

    const result = thisArg.value.charCodeAt(indexValue.value);

    return realm.types.number(result);
  },
};

export default stringProtoCharCodeAtDeclaration;
