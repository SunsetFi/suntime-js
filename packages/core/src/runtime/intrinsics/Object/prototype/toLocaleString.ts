import { invoke } from "../../../algorithms/invoke.js";
import { toObject } from "../../../algorithms/to-object.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectProtoToLocaleString: IntrinsicPropertyDeclaration = {
  key: "toLocaleString",
  length: 0,
  *func(realm, thisArg = realm.types.undefined) {
    const O = yield* toObject(thisArg);
    return yield* invoke(O, "toString", []);
  },
};

export default objectProtoToLocaleString;
