import { toString } from "../../../algorithms/to-string.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const stringProtoTrimDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "trim",
  length: 0,
  func: function* (realm, thisArg) {
    const thisStr = yield* toString(thisArg);

    const result = thisStr.value.trim();

    return realm.types.string(result);
  },
};

export default stringProtoTrimDeclaration;
