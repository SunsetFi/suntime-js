import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { StaticJsNumberImpl } from "../../../types/implementation/primitives/StaticJsNumberImpl.js";

const numberCtorMinValueDeclaration: IntrinsicPropertyDeclaration = {
  key: "MIN_VALUE",
  value(realm) {
    return new StaticJsNumberImpl(realm, Number.MIN_VALUE);
  },
  writable: false,
  enumerable: false,
  configurable: false,
};

export default numberCtorMinValueDeclaration;
