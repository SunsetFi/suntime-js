import { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { StaticJsObject } from "../types/StaticJsObject.js";

import StaticJsObjectImpl from "../types/implementation/StaticJsObjectImpl.js";

export function populateFunctionPrototype(
  realm: StaticJsRealm,
  functionPrototype: StaticJsObject,
) {
  return functionPrototype;
}

export function createFunctionConstructor(
  realm: StaticJsRealm,
  functionProto: StaticJsObject,
) {
  const ctor = new StaticJsObjectImpl(realm, null);
  ctor.defineProperty("prototype", {
    value: functionProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  functionProto.defineProperty("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
