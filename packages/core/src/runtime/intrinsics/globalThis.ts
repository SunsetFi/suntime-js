import type { IntrinsicPropertyDeclaration } from "./utils.js";

const globalObjectGlobalThisDeclaration: IntrinsicPropertyDeclaration = {
  key: "globalThis",
  value(realm) {
    return realm.globalThis;
  },
  configurable: true,
  writable: true,
};

export default globalObjectGlobalThisDeclaration;
