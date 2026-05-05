import { toNumber } from "../../../algorithms/to-number.js";
import { toString } from "../../../algorithms/to-string.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const stringProtoPadEndDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "padEnd",
  length: 1,
  func: function* (realm, thisArg, length = realm.types.undefined, value = realm.types.undefined) {
    const thisStr = yield* toString(thisArg);

    length = yield* toNumber(length);

    let valueStr = " ";
    if (!isStaticJsUndefined(value)) {
      value = yield* toString(value);
      valueStr = value.value;
    }

    const result = thisStr.value.padEnd(length.value, valueStr);

    return realm.types.string(result);
  },
};

export default stringProtoPadEndDeclaration;
