import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import invoke from "../../../algorithms/invoke.js";
import toObject from "../../../algorithms/to-object.js";

const objectProtoToLocaleString: IntrinsicPropertyDeclaration = {
  key: "toLocaleString",
  *func(realm, thisArg = realm.types.undefined) {
    const O = yield* toObject(thisArg);
    return yield* invoke(O, "toString", []);
  },
};

export default objectProtoToLocaleString;
