import { toString } from "../../../algorithms/to-string.js";
import { StaticJsStringExoticObject } from "../../../types/implementation/primitives/StaticJsStringExoticObject.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

const stringProtoToStringDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "toString",
  func: function* (realm, thisArg) {
    // Unbox
    if (thisArg instanceof StaticJsStringExoticObject) {
      return realm.types.string(thisArg.value);
    }

    return yield* toString(thisArg);
  },
};

export default stringProtoToStringDeclaration;
