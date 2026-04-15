import { toString } from "../../../algorithms/to-string.js";
import { StaticJsStringBoxed } from "../../../types/implementation/primitives/StaticJsStringBoxed.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

const stringProtoValueOfDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "valueOf",
  func: function* (realm, thisArg) {
    // Unbox.
    if (thisArg instanceof StaticJsStringBoxed) {
      return realm.types.string(thisArg.value);
    }

    return yield* toString(thisArg);
  },
};

export default stringProtoValueOfDeclaration;
