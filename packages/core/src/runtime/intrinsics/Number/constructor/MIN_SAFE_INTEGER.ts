import StaticJsNumberImpl from "../../../types/implementation/StaticJsNumberImpl.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const numberConstructorMinSafeIntegerDeclaration: IntrinsicPropertyDeclaration =
  {
    key: "MIN_SAFE_INTEGER",
    value(realm) {
      return new StaticJsNumberImpl(realm, Number.MIN_SAFE_INTEGER);
    },
    writable: false,
    enumerable: false,
    configurable: false,
  };

export default numberConstructorMinSafeIntegerDeclaration;
