import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import toString from "../../../algorithms/to-string.js";

const stringProtoTrimDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "trim",
  func: function* (realm, thisArg) {
    const thisStr = yield* toString(thisArg, realm);

    const result = thisStr.value.trim();

    return realm.types.string(result);
  },
};

export default stringProtoTrimDeclaration;
