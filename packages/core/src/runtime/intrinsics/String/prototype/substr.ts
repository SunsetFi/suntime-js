import { toNumber } from "../../../algorithms/to-number.js";
import { toString } from "../../../algorithms/to-string.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

const stringProtoSubstrDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "substr",
  func: function* (realm, thisArg, startValue?: StaticJsValue, lengthValue?: StaticJsValue) {
    let start = 0;
    if (startValue) {
      const startNum = yield* toNumber(startValue);
      start = startNum.value;
    }

    let length = Infinity;
    if (lengthValue) {
      const lengthNum = yield* toNumber(lengthValue);
      length = lengthNum.value;
    }

    thisArg = yield* toString(thisArg);
    const result = thisArg.value.substring(start, start + length);

    return realm.types.string(result);
  },
};

export default stringProtoSubstrDeclaration;
