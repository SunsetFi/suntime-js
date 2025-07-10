import type { IntrinsicPropertyDeclaration } from "./utils.js";

import StaticJsUndefinedImpl from "../types/implementation/StaticJsUndefinedImpl.js";

const globalObjectUndefinedDeclaration: IntrinsicPropertyDeclaration = {
  name: "undefined",
  value: (realm) => new StaticJsUndefinedImpl(realm),
};

export default globalObjectUndefinedDeclaration;
