import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import StaticJsObjectImpl from "../../../types/implementation/StaticJsObjectImpl.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";

export default function createArrayConstructor(
  realm: StaticJsRealm,
  arrayProto: StaticJsObject,
) {
  const ctor = new StaticJsObjectImpl(realm, null);
  ctor.definePropertySync("prototype", {
    value: arrayProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  arrayProto.definePropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });
  return ctor;
}
