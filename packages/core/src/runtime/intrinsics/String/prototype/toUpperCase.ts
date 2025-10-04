import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import toString from "../../../algorithms/to-string.js";

const stringProtoToUpperCaseDeclaration: FunctionIntrinsicPropertyDeclaration =
  {
    key: "toUpperCase",
    func: function* (realm, thisArg) {
      const thisStr = yield* toString(thisArg, realm);

      const result = thisStr.value.toUpperCase();

      return realm.types.string(result);
    },
  };

export default stringProtoToUpperCaseDeclaration;
