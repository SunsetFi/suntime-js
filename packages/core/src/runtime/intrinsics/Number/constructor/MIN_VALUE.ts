import StaticJsNumberImpl from "../../../types/implementation/StaticJsNumberImpl.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

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
