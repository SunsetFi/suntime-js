import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";

export function populateNativeErrorPrototype(
  realm: StaticJsRealm,
  name: string,
  proto: StaticJsObject,
) {
  proto.defineOwnPropertySync("message", {
    value: realm.types.string(""),
    writable: true,
    enumerable: false,
    configurable: true,
  });
  proto.defineOwnPropertySync("name", {
    value: realm.types.string(name),
    writable: true,
    enumerable: false,
    configurable: true,
  });
}
