import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";

import { StaticJsObject } from "../interfaces/StaticJsObject.js";

import StaticJsObjectImpl from "../implementation/StaticJsObjectImpl.js";

export function populateArrayPrototype(
  _realm: StaticJsRealm,
  arrayProto: StaticJsObject,
  _objectProto: StaticJsObject,
) {
  return arrayProto;
}

export function createArrayConstructor(
  realm: StaticJsRealm,
  arrayProto: StaticJsObject,
) {
  const ctor = new StaticJsObjectImpl(realm, null);
  ctor.defineProperty("prototype", {
    value: arrayProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  return ctor;
}
