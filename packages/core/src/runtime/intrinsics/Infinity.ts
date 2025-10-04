import type { IntrinsicPropertyDeclaration } from "./utils.js";

import StaticJsNumberImpl from "../types/implementation/StaticJsNumberImpl.js";

const globalObjectInfinityDeclaration: IntrinsicPropertyDeclaration = {
  key: "Infinity",
  value: (realm) => new StaticJsNumberImpl(realm, Infinity),
};

export default globalObjectInfinityDeclaration;
