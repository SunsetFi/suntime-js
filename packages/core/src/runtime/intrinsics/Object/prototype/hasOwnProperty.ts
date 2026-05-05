import { Q } from "../../../../evaluator/completions/Q.js";
import { hasOwnProperty } from "../../../algorithms/has-own-property.js";
import { toObject } from "../../../algorithms/to-object.js";
import { toPropertyKey } from "../../../utils/to-property-key.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const objectProtoHasOwnPropertyDeclaration: IntrinsicPropertyDeclaration = {
  key: "hasOwnProperty",
  length: 1,
  *func(realm, thisArg, V) {
    // This ordering is important for what exceptions trigger first.
    const P = yield* Q(toPropertyKey(V));
    const O = yield* toObject(thisArg);
    const hasProperty = yield* hasOwnProperty(O, P);
    return realm.types.boolean(hasProperty);
  },
};

export default objectProtoHasOwnPropertyDeclaration;
