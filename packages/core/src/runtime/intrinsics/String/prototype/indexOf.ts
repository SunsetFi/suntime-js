import { toString } from "../../../algorithms/to-string.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

const stringProtoIndexOfDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "indexOf",
  length: 1,
  func: function* (realm, thisArg, value = realm.types.undefined) {
    if (!value || isStaticJsUndefined(value) || isStaticJsNull(value)) {
      return realm.types.number(-1);
    }

    const valueStr = yield* toString(value);

    const thisStr = yield* toString(thisArg);

    const result = thisStr.value.indexOf(valueStr.value);

    return realm.types.number(result);
  },
};

export default stringProtoIndexOfDeclaration;
