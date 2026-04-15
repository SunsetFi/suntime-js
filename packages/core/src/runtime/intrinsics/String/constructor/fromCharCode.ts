import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { toUint16 } from "../../../algorithms/to-uint-16.js";

const stringCtorFromCharCodeDeclaration: IntrinsicPropertyDeclaration = {
  key: "fromCharCode",
  *func(realm, _thisArg, ...values) {
    const chars: string[] = [];
    for (const value of values) {
      // Undefined is only to guard against missing values, and is not actually passed as a value.
      const int = yield* toUint16(value!, realm);
      chars.push(String.fromCharCode(int.value));
    }

    return realm.types.string(chars.join(""));
  },
};

export default stringCtorFromCharCodeDeclaration;
