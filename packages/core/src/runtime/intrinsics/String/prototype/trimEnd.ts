import { toString } from "../../../algorithms/to-string.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

const stringProtoTrimEndDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "trimEnd",
  length: 0,
  func: function* (realm, thisArg) {
    const thisStr = yield* toString(thisArg);

    const result = thisStr.value.trimEnd();

    return realm.types.string(result);
  },
};

export default stringProtoTrimEndDeclaration;
