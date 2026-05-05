import { toString } from "../../../algorithms/to-string.js";
import { StaticJsStringExoticObject } from "../../../types/implementation/primitives/StaticJsStringExoticObject.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const stringProtoValueOfDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "valueOf",
  length: 0,
  func: function* (realm, thisArg) {
    // Unbox.
    if (thisArg instanceof StaticJsStringExoticObject) {
      return realm.types.string(thisArg.value);
    }

    return yield* toString(thisArg);
  },
};

export default stringProtoValueOfDeclaration;
