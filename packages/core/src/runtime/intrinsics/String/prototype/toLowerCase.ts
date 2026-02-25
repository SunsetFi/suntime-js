import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import toString from "../../../algorithms/to-string.js";

const stringProtoToLowerCaseDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "toLowerCase",
  func: function* (realm, thisArg) {
    const thisStr = yield* toString(thisArg, realm);

    const result = thisStr.value.toLowerCase();

    return realm.types.string(result);
  },
};

export default stringProtoToLowerCaseDeclaration;
