import StaticJsNumberImpl from "../../../types/implementation/StaticJsNumberImpl.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const numberConstructorMaxSafeIntegerDeclaration: IntrinsicPropertyDeclaration =
  {
    name: "MAX_SAFE_INTEGER",
    value(realm) {
      return new StaticJsNumberImpl(realm, Number.MAX_SAFE_INTEGER);
    },
    writable: false,
    enumerable: false,
    configurable: false,
  };

export default numberConstructorMaxSafeIntegerDeclaration;
