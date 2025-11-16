import type { IntrinsicPropertyDeclaration } from "./utils.js";

const globalObjectUndefinedDeclaration: IntrinsicPropertyDeclaration = {
  key: "undefined",
  value: (realm) => realm.types.undefined,
};

export default globalObjectUndefinedDeclaration;
