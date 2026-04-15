import { toString } from "../../../algorithms/to-string.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

const stringProtoEndsWithDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "endsWith",
  func: function* (realm, thisArg, value?: StaticJsValue) {
    if (!value || isStaticJsUndefined(value) || isStaticJsNull(value)) {
      return realm.types.false;
    }

    const valueStr = yield* toString(value);

    const thisStr = yield* toString(thisArg);

    const result = thisStr.value.endsWith(valueStr.value);

    return realm.types.boolean(result);
  },
};

export default stringProtoEndsWithDeclaration;
