import invoke from "../../../algorithms/invoke.js";
import toObject from "../../../algorithms/to-object.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectProtoToLocaleString: IntrinsicPropertyDeclaration = {
  key: "toLocaleString",
  *func(realm, thisArg) {
    const O = yield* toObject(thisArg ?? realm.types.undefined, realm);
    return yield* invoke(O, "toString", [], realm);
  },
};

export default objectProtoToLocaleString;
