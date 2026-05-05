import { createDynamicFunction } from "../../algorithms/create-dynamic-function.js";
import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { StaticJsNativeFunctionImpl } from "../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { StaticJsCallable } from "../../types/StaticJsCallable.js";
import type { StaticJsObject } from "../../types/StaticJsObject.js";

export function* createAsyncGeneratorFunctionConstructor(
  realm: StaticJsRealm,
  asyncGeneratorFunctionProto: StaticJsObject,
  functionConstructor: StaticJsCallable,
) {
  const ctor = new StaticJsNativeFunctionImpl(
    realm,
    "AsyncGeneratorFunction",
    function* (_thisArg, ...args) {
      const parameterArgs = args.length > 1 ? args.slice(0, -1) : [];
      const bodyArg = args.length > 0 ? args[args.length - 1] : realm.types.string("");
      return yield* createDynamicFunction(
        realm.intrinsics.AsyncGeneratorFunction,
        undefined,
        "async-generator",
        parameterArgs,
        bodyArg,
      );
    },
    {
      // What should this be???
      *construct(newTarget, ...args) {
        const parameterArgs = args.length > 1 ? args.slice(0, -1) : [];
        const bodyArg = args.length > 0 ? args[args.length - 1] : realm.types.string("");
        return yield* createDynamicFunction(
          realm.intrinsics.AsyncGeneratorFunction,
          newTarget,
          "async-generator",
          parameterArgs,
          bodyArg,
        );
      },
      length: 1,
      prototype: functionConstructor,
    },
  );

  yield* ctor.defineOwnPropertyEvaluator("prototype", {
    value: asyncGeneratorFunctionProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  yield* asyncGeneratorFunctionProto.defineOwnPropertyEvaluator("constructor", {
    value: ctor,
    writable: false,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
