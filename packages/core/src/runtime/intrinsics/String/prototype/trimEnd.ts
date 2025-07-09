import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import toString from "../../../algorithms/to-string.js";

const stringProtoTrimEndDeclaration: FunctionIntrinsicPropertyDeclaration = {
  name: "trimEnd",
  func: function* (realm, thisArg) {
    const thisStr = yield* toString(thisArg, realm);

    const result = thisStr.value.trimEnd();

    return realm.types.string(result);
  },
};

export default stringProtoTrimEndDeclaration;
