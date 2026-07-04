import { StaticJsNumberImpl } from "#types/implementation/primitives/StaticJsNumberImpl.js";

import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const numberCtorMinValueDeclaration: IntrinsicPropertyDeclaration = {
  key: "MIN_VALUE",
  value(realm) {
    return StaticJsNumberImpl.create(realm, Number.MIN_VALUE);
  },
  writable: false,
  enumerable: false,
  configurable: false,
};

export default numberCtorMinValueDeclaration;
