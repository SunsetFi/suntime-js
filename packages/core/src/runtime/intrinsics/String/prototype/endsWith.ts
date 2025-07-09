import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";

import toString from "../../../algorithms/to-string.js";

const stringProtoEndsWithDeclaration: FunctionIntrinsicPropertyDeclaration = {
  name: "endsWith",
  func: function* (realm, thisArg, value?: StaticJsValue) {
    if (!value || isStaticJsUndefined(value) || isStaticJsNull(value)) {
      return realm.types.false;
    }

    const valueStr = yield* toString(value, realm);

    const thisStr = yield* toString(thisArg, realm);

    const result = thisStr.value.endsWith(valueStr.value);

    return realm.types.boolean(result);
  },
};

export default stringProtoEndsWithDeclaration;
