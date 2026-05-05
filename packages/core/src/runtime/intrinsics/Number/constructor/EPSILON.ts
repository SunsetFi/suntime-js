import { StaticJsNumberImpl } from "../../../types/implementation/primitives/StaticJsNumberImpl.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

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
