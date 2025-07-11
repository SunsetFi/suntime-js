import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import StaticJsStringBoxed from "../../../types/implementation/StaticJsStringBoxed.js";

import toString from "../../../algorithms/to-string.js";

const stringProtoValueOfDeclaration: FunctionIntrinsicPropertyDeclaration = {
  name: "valueOf",
  func: function* (realm, thisArg) {
    // Unbox.
    if (thisArg instanceof StaticJsStringBoxed) {
      return realm.types.string(thisArg.value);
    }

    return yield* toString(thisArg, realm);
  },
};

export default stringProtoValueOfDeclaration;
