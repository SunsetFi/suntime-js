import type { IntrinsicPropertyDeclaration } from "./apply-intrinsic-properties.js";

const globalObjectInfinityDeclaration: IntrinsicPropertyDeclaration = {
  key: "Infinity",
  value: (realm) => realm.types.Infinity,
};

export default globalObjectInfinityDeclaration;
