import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import { createArrayFromList } from "../../../algorithms/create-array-from-list.js";
import toString from "../../../algorithms/to-string.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

const stringProtoSplitDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "split",
  func: function* (realm, thisArg, separator?: StaticJsValue) {
    thisArg = yield* toString(thisArg);

    if (!separator || isStaticJsUndefined(separator) || isStaticJsNull(separator)) {
      return yield* createArrayFromList([thisArg]);
    }

    separator = yield* toString(separator);

    const result = thisArg.value.split(separator.value);

    const resultValues = result.map((value) => realm.types.string(value));

    return yield* createArrayFromList(resultValues);
  },
};

export default stringProtoSplitDeclaration;
