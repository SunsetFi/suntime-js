import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import toString from "../../../algorithms/to-string.js";

const stringProtoTrimStartDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "trimStart",
  func: function* (realm, thisArg) {
    const thisStr = yield* toString(thisArg, realm);

    const result = thisStr.value.trimStart();

    return realm.types.string(result);
  },
};

export default stringProtoTrimStartDeclaration;
