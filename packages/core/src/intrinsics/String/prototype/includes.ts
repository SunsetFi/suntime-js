import { toString } from "../../../algorithms/to-string.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const stringProtoIncludesDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "includes",
  length: 1,
  func: function* (realm, thisArg, value: StaticJsValue = realm.types.undefined) {
    if (!value || isStaticJsUndefined(value) || isStaticJsNull(value)) {
      return realm.types.false;
    }

    const valueStr = yield* toString(value);

    const thisStr = yield* toString(thisArg);

    const result = thisStr.value.includes(valueStr.value);

    return realm.types.boolean(result);
  },
};

export default stringProtoIncludesDeclaration;
