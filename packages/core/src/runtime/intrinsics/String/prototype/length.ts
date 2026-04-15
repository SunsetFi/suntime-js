import { toString } from "../../../algorithms/to-string.js";
import type { AccessorIntrinsicPropertyDeclaration } from "../../utils.js";

const stringProtoLengthDeclaration: AccessorIntrinsicPropertyDeclaration = {
  key: "length",
  get: function* (realm, thisArg) {
    const str = yield* toString(thisArg);
    return realm.types.number(str.value.length);
  },
};

export default stringProtoLengthDeclaration;
