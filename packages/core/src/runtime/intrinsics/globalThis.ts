import type { IntrinsicPropertyDeclaration } from "./utils.js";

const globalObjectGlobalThisDeclaration: IntrinsicPropertyDeclaration = {
  key: "globalThis",
  value(realm) {
    return realm.globalThis;
  },
};

export default globalObjectGlobalThisDeclaration;
