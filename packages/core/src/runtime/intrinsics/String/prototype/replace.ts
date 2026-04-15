import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import toString from "../../../algorithms/to-string.js";

const stringProtoReplaceDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "replace",
  func: function* (
    realm,
    thisArg,
    search: StaticJsValue = realm.types.undefined,
    replace?: StaticJsValue,
  ) {
    const thisStr = yield* toString(thisArg);

    if (!replace) {
      return thisStr;
    }

    search = yield* toString(search);
    replace = yield* toString(replace);

    const result = thisStr.value.replace(search.value, replace.value);

    return realm.types.string(result);
  },
};

export default stringProtoReplaceDeclaration;
