import StaticJsRealm from "../realm/interfaces/StaticJsRealm.js";

import { StaticJsObject } from "../types/interfaces/StaticJsObject.js";

import StaticJsObjectImpl from "../types/implementation/StaticJsObjectImpl.js";

export function populateFunctionPrototype(
  realm: StaticJsRealm,
  functionPrototype: StaticJsObject,
) {
  return functionPrototype;
}

export function createFunctionConstructor(
  realm: StaticJsRealm,
  functionPrototype: StaticJsObject,
) {
  const ctor = new StaticJsObjectImpl(realm, null);
  ctor.defineProperty("prototype", {
    value: functionPrototype,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  return ctor;
}
