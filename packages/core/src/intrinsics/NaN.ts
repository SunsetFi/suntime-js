import type { IntrinsicPropertyDeclaration } from "./apply-intrinsic-properties.js";

const globalObjectNaNDeclaration: IntrinsicPropertyDeclaration = {
  key: "NaN",
  value: (realm) => realm.types.NaN,
};

export default globalObjectNaNDeclaration;
