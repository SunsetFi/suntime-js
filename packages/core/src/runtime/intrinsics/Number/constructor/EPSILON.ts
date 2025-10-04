import StaticJsNumberImpl from "../../../types/implementation/StaticJsNumberImpl.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const numberConstructorEpsilonDeclaration: IntrinsicPropertyDeclaration = {
  key: "EPSILON",
  value(realm) {
    return new StaticJsNumberImpl(realm, Number.EPSILON);
  },
  writable: false,
  enumerable: false,
  configurable: false,
};

export default numberConstructorEpsilonDeclaration;
