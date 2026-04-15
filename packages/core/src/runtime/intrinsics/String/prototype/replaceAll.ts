import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import toString from "../../../algorithms/to-string.js";

const stringProtoReplaceAllDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "replaceAll",
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

    const result = thisStr.value.replaceAll(search.value, replace.value);

    return realm.types.string(result);
  },
};

export default stringProtoReplaceAllDeclaration;
