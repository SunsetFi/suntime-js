import { StaticJsRealm } from "../../../realm/interfaces/StaticJsRealm.js";
import StaticJsObjectImpl from "../../../types/implementation/StaticJsObjectImpl.js";
import { StaticJsObject } from "../../../types/interfaces/StaticJsObject.js";

export default function createArrayConstructor(
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
  arrayProto.defineProperty("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });
  return ctor;
}
