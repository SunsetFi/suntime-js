import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { StaticJsNumberImpl } from "../../../types/implementation/primitives/StaticJsNumberImpl.js";

const numberCtorEpsilonDeclaration: IntrinsicPropertyDeclaration = {
  key: "EPSILON",
  value(realm) {
    return new StaticJsNumberImpl(realm, Number.EPSILON);
  },
  writable: false,
  enumerable: false,
  configurable: false,
};

export default numberCtorEpsilonDeclaration;
