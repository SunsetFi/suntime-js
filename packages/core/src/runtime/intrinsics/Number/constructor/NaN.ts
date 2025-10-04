import StaticJsNumberImpl from "../../../types/implementation/StaticJsNumberImpl.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const numberConstructorNanDeclaration: IntrinsicPropertyDeclaration = {
  key: "NaN",
  value(realm) {
    // We can't use our prebaked NaN as that isn't initialized yet.
    return new StaticJsNumberImpl(realm, NaN);
  },
  writable: false,
  enumerable: false,
  configurable: false,
};

export default numberConstructorNanDeclaration;
