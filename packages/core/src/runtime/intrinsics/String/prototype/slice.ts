import { toNumber } from "../../../algorithms/to-number.js";
import { toString } from "../../../algorithms/to-string.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

const stringProtoSliceDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "slice",
  func: function* (realm, thisArg, startValue?: StaticJsValue, endValue?: StaticJsValue) {
    let start = 0;
    if (startValue) {
      const startNum = yield* toNumber(startValue);
      start = startNum.value;
    }

    let end = Infinity;
    if (endValue) {
      const endNum = yield* toNumber(endValue);
      end = endNum.value;
    }

    thisArg = yield* toString(thisArg);
    const result = thisArg.value.slice(start, end);

    return realm.types.string(result);
  },
};

export default stringProtoSliceDeclaration;
