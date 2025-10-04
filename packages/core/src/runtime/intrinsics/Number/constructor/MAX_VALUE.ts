import StaticJsNumberImpl from "../../../types/implementation/StaticJsNumberImpl.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const numberConstructorMaxValueDeclaration: IntrinsicPropertyDeclaration = {
  key: "MAX_VALUE",
  value(realm) {
    return new StaticJsNumberImpl(realm, Number.MAX_VALUE);
  },
  writable: false,
  enumerable: false,
  configurable: false,
};

export default numberConstructorMaxValueDeclaration;
