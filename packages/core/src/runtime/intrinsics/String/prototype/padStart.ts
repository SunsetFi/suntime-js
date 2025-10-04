import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import toString from "../../../algorithms/to-string.js";
import toNumber from "../../../algorithms/to-number.js";

const stringProtoPadStartDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "padStart",
  func: function* (
    realm,
    thisArg,
    length?: StaticJsValue,
    value?: StaticJsValue,
  ) {
    const thisStr = yield* toString(thisArg, realm);

    length = yield* toNumber(length ?? realm.types.undefined, realm);

    let valueStr = " ";
    if (value && !isStaticJsUndefined(value)) {
      value = yield* toString(value, realm);
      valueStr = value.value;
    }

    const result = thisStr.value.padStart(length.value, valueStr);

    return realm.types.string(result);
  },
};

export default stringProtoPadStartDeclaration;
