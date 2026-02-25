import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import { isStaticJsNull } from "../../../types/StaticJsNull.js";

import toString from "../../../algorithms/to-string.js";

const stringProtoSplitDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "split",
  func: function* (realm, thisArg, separator?: StaticJsValue) {
    thisArg = yield* toString(thisArg, realm);

    if (!separator || isStaticJsUndefined(separator) || isStaticJsNull(separator)) {
      return realm.types.array([thisArg]);
    }

    separator = yield* toString(separator, realm);

    const result = thisArg.value.split(separator.value);

    const resultValues = result.map((value) => realm.types.string(value));

    return realm.types.array(resultValues);
  },
};

export default stringProtoSplitDeclaration;
