import type { IntrinsicPropertyDeclaration } from "./utils.js";

const globalObjectInfinityDeclaration: IntrinsicPropertyDeclaration = {
  key: "Infinity",
  value: (realm) => realm.types.Infinity,
};

export default globalObjectInfinityDeclaration;
