import StaticJsNumberImpl from "../../../types/implementation/StaticJsNumberImpl.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const numberConstructorPositiveInfinityDeclaration: IntrinsicPropertyDeclaration =
  {
    name: "POSITIVE_INFINITY",
    value(realm) {
      // We can't use our prebaked value as that isn't initialized yet.
      return new StaticJsNumberImpl(realm, Number.POSITIVE_INFINITY);
    },
    writable: false,
    enumerable: false,
    configurable: false,
  };

export default numberConstructorPositiveInfinityDeclaration;
