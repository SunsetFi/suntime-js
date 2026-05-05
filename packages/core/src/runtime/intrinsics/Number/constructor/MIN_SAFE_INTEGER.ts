import { StaticJsNumberImpl } from "../../../types/implementation/primitives/StaticJsNumberImpl.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const numberCtorMinSafeIntegerDeclaration: IntrinsicPropertyDeclaration = {
  key: "MIN_SAFE_INTEGER",
  value(realm) {
    return new StaticJsNumberImpl(realm, Number.MIN_SAFE_INTEGER);
  },
  writable: false,
  enumerable: false,
  configurable: false,
};

export default numberCtorMinSafeIntegerDeclaration;
