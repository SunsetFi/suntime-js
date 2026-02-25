import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import toString from "../../../algorithms/to-string.js";
import toNumber from "../../../algorithms/to-number.js";

const stringProtoSubstrDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "substr",
  func: function* (realm, thisArg, startValue?: StaticJsValue, lengthValue?: StaticJsValue) {
    let start = 0;
    if (startValue) {
      const startNum = yield* toNumber(startValue, realm);
      start = startNum.value;
    }

    let length = Infinity;
    if (lengthValue) {
      const lengthNum = yield* toNumber(lengthValue, realm);
      length = lengthNum.value;
    }

    thisArg = yield* toString(thisArg, realm);
    const result = thisArg.value.substring(start, start + length);

    return realm.types.string(result);
  },
};

export default stringProtoSubstrDeclaration;
