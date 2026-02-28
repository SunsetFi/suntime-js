import { Completion } from "../../../../evaluator/completions/Completion.js";

import { isStaticJsObjectLike } from "../../../types/StaticJsObjectLike.js";

import toPropertyDescriptor from "../../../algorithms/to-property-descriptor.js";
import definePropertyOrThrow from "../../../algorithms/define-property-or-throw.js";

import toPropertyKey from "../../../utils/to-property-key.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorDefinePropertyDeclaration: IntrinsicPropertyDeclaration = {
  key: "defineProperty",
  *func(
    realm,
    _thisArg,
    O = realm.types.undefined,
    P = realm.types.undefined,
    attributes = realm.types.undefined,
  ) {
    if (!isStaticJsObjectLike(O)) {
      throw Completion.Throw(
        realm.types.error("TypeError", "Object.defineProperty called on non-object"),
      );
    }

    const key = yield* toPropertyKey(P, realm);

    const desc = yield* toPropertyDescriptor(attributes, realm);

    yield* definePropertyOrThrow(O, key, desc, realm);

    return O;
  },
};

export default objectCtorDefinePropertyDeclaration;
