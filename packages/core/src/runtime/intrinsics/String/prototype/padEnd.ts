import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import toString from "../../../algorithms/to-string.js";
import toNumber from "../../../algorithms/to-number.js";

const stringProtoPadEndDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "padEnd",
  func: function* (
    realm,
    thisArg,
    length: StaticJsValue = realm.types.undefined,
    value?: StaticJsValue,
  ) {
    const thisStr = yield* toString(thisArg);

    length = yield* toNumber(length, realm);

    let valueStr = " ";
    if (value && !isStaticJsUndefined(value)) {
      value = yield* toString(value);
      valueStr = value.value;
    }

    const result = thisStr.value.padEnd(length.value, valueStr);

    return realm.types.string(result);
  },
};

export default stringProtoPadEndDeclaration;
