import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import toString from "../../../algorithms/to-string.js";
import toNumber from "../../../algorithms/to-number.js";

const stringProtoSliceDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "slice",
  func: function* (
    realm,
    thisArg,
    startValue?: StaticJsValue,
    endValue?: StaticJsValue,
  ) {
    let start = 0;
    if (startValue) {
      const startNum = yield* toNumber(startValue, realm);
      start = startNum.value;
    }

    let end = Infinity;
    if (endValue) {
      const endNum = yield* toNumber(endValue, realm);
      end = endNum.value;
    }

    thisArg = yield* toString(thisArg, realm);
    const result = thisArg.value.slice(start, end);

    return realm.types.string(result);
  },
};

export default stringProtoSliceDeclaration;
