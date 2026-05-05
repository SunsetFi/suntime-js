import { toString } from "../../../algorithms/to-string.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const stringProtoEndsWithDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "endsWith",
  length: 1,
  func: function* (realm, thisArg, value = realm.types.undefined) {
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
