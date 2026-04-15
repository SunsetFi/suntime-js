import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { StaticJsNumberImpl } from "../../../types/implementation/primitives/StaticJsNumberImpl.js";

const numberCtorNegativeInfinityDeclaration: IntrinsicPropertyDeclaration = {
  key: "NEGATIVE_INFINITY",
  value(realm) {
    // We can't use our prebaked value as that isn't initialized yet.
    return new StaticJsNumberImpl(realm, Number.NEGATIVE_INFINITY);
  },
  writable: false,
  enumerable: false,
  configurable: false,
};

export default numberCtorNegativeInfinityDeclaration;
