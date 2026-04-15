import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { StaticJsNumberImpl } from "../../../types/implementation/primitives/StaticJsNumberImpl.js";

const numberCtorMaxValueDeclaration: IntrinsicPropertyDeclaration = {
  key: "MAX_VALUE",
  value(realm) {
    return new StaticJsNumberImpl(realm, Number.MAX_VALUE);
  },
  writable: false,
  enumerable: false,
  configurable: false,
};

export default numberCtorMaxValueDeclaration;
