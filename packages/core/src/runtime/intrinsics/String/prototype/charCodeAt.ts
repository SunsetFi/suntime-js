import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import toString from "../../../algorithms/to-string.js";
import toNumber from "../../../algorithms/to-number.js";

const stringProtoCharCodeAtDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "charCodeAt",
  func: function* (realm, thisArg, indexValue?: StaticJsValue) {
    thisArg = yield* toString(thisArg, realm);

    indexValue = yield* toNumber(indexValue ?? realm.types.undefined, realm);

    const result = thisArg.value.charCodeAt(indexValue.value);

    return realm.types.number(result);
  },
};

export default stringProtoCharCodeAtDeclaration;
