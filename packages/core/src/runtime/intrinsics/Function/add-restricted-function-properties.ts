import { Completion } from "../../../evaluator/completions/Completion.js";
import { definePropertyOrThrow } from "../../algorithms/define-property-or-throw.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { StaticJsNativeFunctionImpl } from "../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { StaticJsObject } from "../../types/StaticJsObject.js";

export function addRestrictedFunctionProperties(
  functionProto: StaticJsObject,
  realm: StaticJsRealm,
) {
  // Should be an intrinsic, %ThrowTypeError%
  // Currently have a failing test for this, probably because its a different instance than other places it should be being used.
  const thrower = new StaticJsNativeFunctionImpl(realm, null, function* () {
    throw Completion.Throw("TypeError", "Restricted function property cannot be accessed");
  });
  thrower.defineOwnPropertySync("length", {
    writable: false,
    enumerable: false,
    configurable: false,
  });
  thrower.defineOwnPropertySync("name", {
    writable: false,
    enumerable: false,
    configurable: false,
  });
  realm.invokeEvaluatorSync(thrower.preventExtensionsEvaluator());
  // END ThrowTypeError

  realm.invokeEvaluatorSync(
    definePropertyOrThrow(functionProto, "caller", {
      get: thrower,
      set: thrower,
      enumerable: false,
      configurable: true,
    }),
  );
  realm.invokeEvaluatorSync(
    definePropertyOrThrow(functionProto, "arguments", {
      get: thrower,
      set: thrower,
      enumerable: false,
      configurable: true,
    }),
  );
}
