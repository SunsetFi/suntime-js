import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import toString from "../../../algorithms/to-string.js";
import toNumber from "../../../algorithms/to-number.js";

const stringProtoCharAtDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "charAt",
  func: function* (realm, thisArg, indexValue?: StaticJsValue) {
    thisArg = yield* toString(thisArg, realm);

    indexValue = yield* toNumber(indexValue ?? realm.types.undefined, realm);

    const result = thisArg.value.charAt(indexValue.value);

    return realm.types.string(result);
  },
};

export default stringProtoCharAtDeclaration;
