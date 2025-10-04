import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";

import toString from "../../../algorithms/to-string.js";

const stringProtoIndexOfDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "indexOf",
  func: function* (realm, thisArg, value?: StaticJsValue) {
    if (!value || isStaticJsUndefined(value) || isStaticJsNull(value)) {
      return realm.types.number(-1);
    }

    const valueStr = yield* toString(value ?? realm.types.undefined, realm);

    const thisStr = yield* toString(thisArg, realm);

    const result = thisStr.value.indexOf(valueStr.value);

    return realm.types.number(result);
  },
};

export default stringProtoIndexOfDeclaration;
