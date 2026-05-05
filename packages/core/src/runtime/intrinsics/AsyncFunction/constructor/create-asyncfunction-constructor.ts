import { createDynamicFunction } from "../../../algorithms/create-dynamic-function.js";
import { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsNativeFunctionImpl } from "../../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { StaticJsCallable } from "../../../types/StaticJsCallable.js";
import { StaticJsObject } from "../../../types/StaticJsObject.js";

export function* createAsyncFunctionConstructor(
  realm: StaticJsRealm,
  asyncFunctionProto: StaticJsObject,
  functionConstructor: StaticJsCallable,
) {
  const ctor = new StaticJsNativeFunctionImpl(
    realm,
    "AsyncFunction",
    function* (_thisArg, ...args) {
      const parameterArgs = args.length > 1 ? args.slice(0, -1) : [];
      const bodyArg = args.length > 0 ? args[args.length - 1] : realm.types.string("");
      return yield* createDynamicFunction(
        realm.intrinsics.AsyncFunction,
        undefined,
        "async",
        parameterArgs,
        bodyArg,
      );
    },
    {
      prototype: functionConstructor,
      *construct(newTarget, ...args) {
        const parameterArgs = args.length > 1 ? args.slice(0, -1) : [];
        const bodyArg = args.length > 0 ? args[args.length - 1] : realm.types.string("");
        return yield* createDynamicFunction(
          realm.intrinsics.AsyncFunction,
          newTarget,
          "async",
          parameterArgs,
          bodyArg,
        );
      },
    },
  );

  yield* ctor.defineOwnPropertyEvaluator("prototype", {
    value: asyncFunctionProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  yield* asyncFunctionProto.defineOwnPropertyEvaluator("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
