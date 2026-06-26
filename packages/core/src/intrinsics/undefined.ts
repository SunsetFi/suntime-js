import type { IntrinsicPropertyDeclaration } from "./apply-intrinsic-properties.js";

const globalObjectUndefinedDeclaration: IntrinsicPropertyDeclaration = {
  key: "undefined",
  value: (realm) => realm.types.undefined,
};

export default globalObjectUndefinedDeclaration;
