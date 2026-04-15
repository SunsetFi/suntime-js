import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import type { FunctionIntrinsicPropertyDeclaration } from "../../utils.js";

import { toNumber } from "../../../algorithms/to-number.js";
import { toString } from "../../../algorithms/to-string.js";

const stringProtoRepeatDeclaration: FunctionIntrinsicPropertyDeclaration = {
  key: "repeat",
  func: function* (realm, thisArg, value: StaticJsValue = realm.types.undefined) {
    const count = yield* toNumber(value);

    const thisStr = yield* toString(thisArg);

    const result = thisStr.value.repeat(count.value);

    return realm.types.string(result);
  },
};

export default stringProtoRepeatDeclaration;
