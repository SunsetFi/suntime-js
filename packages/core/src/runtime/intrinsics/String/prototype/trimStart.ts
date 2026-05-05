import { toString } from "../../../algorithms/to-string.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const stringProtoTrimStartDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "trimStart",
  length: 0,
  func: function* (realm, thisArg) {
    const thisStr = yield* toString(thisArg);

    const result = thisStr.value.trimStart();

    return realm.types.string(result);
  },
};

export default stringProtoTrimStartDeclaration;
