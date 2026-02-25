import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import toString from "../../../algorithms/to-string.js";
import toNumber from "../../../algorithms/to-number.js";

const stringProtoSubstringDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "substring",
  func: function* (realm, thisArg, startValue?: StaticJsValue, endValue?: StaticJsValue) {
    let start = 0;
    if (startValue) {
      const startNum = yield* toNumber(startValue, realm);
      start = startNum.value;
    }

    let end = Infinity;
    if (endValue) {
      const lengthNum = yield* toNumber(endValue, realm);
      end = lengthNum.value;
    }

    thisArg = yield* toString(thisArg, realm);
    const result = thisArg.value.substring(start, end);

    return realm.types.string(result);
  },
};

export default stringProtoSubstringDeclaration;
