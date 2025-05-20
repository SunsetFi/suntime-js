import StaticJsRealmImplementation from "../realm/interfaces/StaticJsRealmImplementation.js";

import { StaticJsObject } from "../types/interfaces/StaticJsObject.js";

import StaticJsObjectImpl from "../types/implementation/StaticJsObjectImpl.js";

export function populateFunctionPrototype(
  realm: StaticJsRealmImplementation,
  functionPrototype: StaticJsObject,
) {
  return functionPrototype;
}

export function createFunctionConstructor(
  realm: StaticJsRealmImplementation,
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
