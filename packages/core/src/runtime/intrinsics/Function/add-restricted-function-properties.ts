import { definePropertyOrThrow } from "../../algorithms/define-property-or-throw.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { StaticJsObject } from "../../types/StaticJsObject.js";

export function* addRestrictedFunctionProperties(
  functionProto: StaticJsObject,
  realm: StaticJsRealm,
) {
  const thrower = realm.intrinsics["ThrowTypeError"];

  yield* definePropertyOrThrow(functionProto, "caller", {
    get: thrower,
    set: thrower,
    enumerable: false,
    configurable: true,
  });

  yield* definePropertyOrThrow(functionProto, "arguments", {
    get: thrower,
    set: thrower,
    enumerable: false,
    configurable: true,
  });
}
