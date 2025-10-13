import type { IntrinsicPropertyDeclaration } from "./utils.js";

const globalObjectGlobalDeclaration: IntrinsicPropertyDeclaration = {
  key: "global",
  value(realm) {
    return realm.global;
  },
};

export default globalObjectGlobalDeclaration;
