import { StaticJsNumberImpl } from "../../../types/implementation/primitives/StaticJsNumberImpl.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const numberCtorNanDeclaration: IntrinsicPropertyDeclaration = {
  key: "NaN",
  value(realm) {
    // We can't use our prebaked NaN as that isn't initialized yet.
    return new StaticJsNumberImpl(realm, NaN);
  },
  writable: false,
  enumerable: false,
  configurable: false,
};

export default numberCtorNanDeclaration;
