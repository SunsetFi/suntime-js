import type { IntrinsicPropertyDeclaration } from "./utils.js";

const globalObjectNaNDeclaration: IntrinsicPropertyDeclaration = {
  key: "NaN",
  value: (realm) => realm.types.NaN,
};

export default globalObjectNaNDeclaration;
