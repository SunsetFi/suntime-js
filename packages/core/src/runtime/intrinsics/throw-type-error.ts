import { Completion } from "../../evaluator/completions/Completion.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsRealm } from "../realm/StaticJsRealm.js";
import { StaticJsNativeFunctionImpl } from "../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { StaticJsFunction } from "../types/StaticJsFunction.js";

export function* createThrowTypeError(realm: StaticJsRealm): EvaluationGenerator<StaticJsFunction> {
  const thrower = new StaticJsNativeFunctionImpl(realm, null, function* () {
    throw Completion.Throw("TypeError", "Restricted function property cannot be accessed");
  });

  yield* thrower.defineOwnPropertyEvaluator("length", {
    writable: false,
    enumerable: false,
    configurable: false,
  });
  yield* thrower.defineOwnPropertyEvaluator("name", {
    writable: false,
    enumerable: false,
    configurable: false,
  });

  yield* thrower.preventExtensionsEvaluator();

  return thrower;
}
