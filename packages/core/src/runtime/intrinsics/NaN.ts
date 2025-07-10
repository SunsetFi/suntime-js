import type { IntrinsicPropertyDeclaration } from "./utils.js";

import StaticJsNumberImpl from "../types/implementation/StaticJsNumberImpl.js";

const globalObjectNaNDeclaration: IntrinsicPropertyDeclaration = {
  name: "NaN",
  value: (realm) => new StaticJsNumberImpl(realm, NaN),
};

export default globalObjectNaNDeclaration;
