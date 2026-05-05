import { Completion } from "../../../../evaluator/completions/Completion.js";
import { definePropertyOrThrow } from "../../../algorithms/define-property-or-throw.js";
import { toPropertyDescriptor } from "../../../algorithms/to-property-descriptor.js";
import { isStaticJsObject } from "../../../types/StaticJsObject.js";
import { toPropertyKey } from "../../../utils/to-property-key.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const objectCtorDefinePropertyDeclaration: IntrinsicPropertyDeclaration = {
  key: "defineProperty",
  length: 3,
  *func(
    realm,
    _thisArg,
    O = realm.types.undefined,
    P = realm.types.undefined,
    attributes = realm.types.undefined,
  ) {
    if (!isStaticJsObject(O)) {
      throw Completion.Throw("TypeError", "Object.defineProperty called on non-object");
    }

    const key = yield* toPropertyKey(P);

    const desc = yield* toPropertyDescriptor(attributes);

    yield* definePropertyOrThrow(O, key, desc);

    return O;
  },
};

export default objectCtorDefinePropertyDeclaration;
