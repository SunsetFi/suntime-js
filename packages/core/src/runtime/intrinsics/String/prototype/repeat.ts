import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import toString from "../../../algorithms/to-string.js";
import toNumber from "../../../algorithms/to-number.js";

const stringProtoRepeatDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "repeat",
  func: function* (realm, thisArg, value: StaticJsValue = realm.types.undefined) {
    const count = yield* toNumber(value, realm);

    const thisStr = yield* toString(thisArg, realm);

    const result = thisStr.value.repeat(count.value);

    return realm.types.string(result);
  },
};

export default stringProtoRepeatDeclaration;
