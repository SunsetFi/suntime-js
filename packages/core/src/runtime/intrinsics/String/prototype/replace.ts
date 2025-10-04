import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import toString from "../../../algorithms/to-string.js";

const stringProtoReplaceDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "replace",
  func: function* (
    realm,
    thisArg,
    search?: StaticJsValue,
    replace?: StaticJsValue,
  ) {
    const thisStr = yield* toString(thisArg, realm);

    if (!replace) {
      return thisStr;
    }

    search = yield* toString(search ?? realm.types.undefined, realm);
    replace = yield* toString(replace, realm);

    const result = thisStr.value.replace(search.value, replace.value);

    return realm.types.string(result);
  },
};

export default stringProtoReplaceDeclaration;
