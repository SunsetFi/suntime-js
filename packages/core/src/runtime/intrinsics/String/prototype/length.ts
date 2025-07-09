import type { AccessorIntrinsicPropertyDeclaration } from "../../utils.js";

import toString from "../../../algorithms/to-string.js";

const stringProtoLengthDeclaration: AccessorIntrinsicPropertyDeclaration = {
  name: "length",
  get: function* (realm, thisArg) {
    const str = yield* toString(thisArg, realm);
    return realm.types.number(str.value.length);
  },
};

export default stringProtoLengthDeclaration;
