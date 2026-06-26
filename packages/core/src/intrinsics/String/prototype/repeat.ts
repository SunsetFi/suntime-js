import { toNumber } from "../../../algorithms/to-number.js";
import { toString } from "../../../algorithms/to-string.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const stringProtoRepeatDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "repeat",
  length: 1,
  func: function* (realm, thisArg, value = realm.types.undefined) {
    const count = yield* toNumber(value);

    const thisStr = yield* toString(thisArg);

    const result = thisStr.value.repeat(count.value);

    return realm.types.string(result);
  },
};

export default stringProtoRepeatDeclaration;
