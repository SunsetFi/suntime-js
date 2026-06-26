import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";

export function* populateNativeErrorPrototype(
  realm: StaticJsRealm,
  name: string,
  proto: StaticJsObject,
) {
  yield* proto.defineOwnPropertyEvaluator("message", {
    value: realm.types.string(""),
    writable: true,
    enumerable: false,
    configurable: true,
  });

  yield* proto.defineOwnPropertyEvaluator("name", {
    value: realm.types.string(name),
    writable: true,
    enumerable: false,
    configurable: true,
  });
}
