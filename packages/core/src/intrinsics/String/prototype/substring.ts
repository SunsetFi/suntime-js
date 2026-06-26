import { toNumber } from "../../../algorithms/to-number.js";
import { toString } from "../../../algorithms/to-string.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const stringProtoSubstringDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "substring",
  length: 2,
  func: function* (
    realm,
    thisArg,
    startValue = realm.types.undefined,
    endValue = realm.types.undefined,
  ) {
    let start = 0;
    if (!isStaticJsUndefined(startValue)) {
      const startNum = yield* toNumber(startValue);
      start = startNum.value;
    }

    let end = Infinity;
    if (!isStaticJsUndefined(endValue)) {
      const endNum = yield* toNumber(endValue);
      end = endNum.value;
    }

    thisArg = yield* toString(thisArg);
    const result = thisArg.value.substring(start, end);

    return realm.types.string(result);
  },
};

export default stringProtoSubstringDeclaration;
