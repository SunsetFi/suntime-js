import { toNumber } from "../../../algorithms/to-number.js";
import { toString } from "../../../algorithms/to-string.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

const stringProtoSubstrDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "substr",
  length: 2,
  func: function* (
    realm,
    thisArg,
    startValue = realm.types.undefined,
    lengthValue = realm.types.undefined,
  ) {
    let start = 0;
    if (!isStaticJsUndefined(startValue)) {
      const startNum = yield* toNumber(startValue);
      start = startNum.value;
    }

    let length = Infinity;
    if (!isStaticJsUndefined(lengthValue)) {
      const lengthNum = yield* toNumber(lengthValue);
      length = lengthNum.value;
    }

    thisArg = yield* toString(thisArg);
    const result = thisArg.value.substring(start, start + length);

    return realm.types.string(result);
  },
};

export default stringProtoSubstrDeclaration;
