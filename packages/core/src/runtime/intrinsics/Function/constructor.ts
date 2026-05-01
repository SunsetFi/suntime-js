import { createDynamicFunction } from "../../algorithms/create-dynamic-function.js";
import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { StaticJsNativeFunctionImpl } from "../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import type { StaticJsObject } from "../../types/StaticJsObject.js";

export default function createFunctionConstructor(
  realm: StaticJsRealm,
  functionProto: StaticJsObject,
) {
  const ctor = new StaticJsNativeFunctionImpl(
    realm,
    "Function",
    function* (_thisArg, ...args) {
      const parameterArgs = args.length > 1 ? args.slice(0, -1) : [];
      const bodyArg = args.length > 0 ? args[args.length - 1] : realm.types.string("");
      return yield* createDynamicFunction(
        realm.types.constructors.Function,
        undefined,
        "normal",
        parameterArgs,
        bodyArg,
      );
    },
    {
      prototype: functionProto,
      *construct(newTarget, ...args) {
        const parameterArgs = args.length > 1 ? args.slice(0, -1) : [];
        const bodyArg = args.length > 0 ? args[args.length - 1] : realm.types.string("");
        return yield* createDynamicFunction(
          realm.types.constructors.Function,
          newTarget,
          "normal",
          parameterArgs,
          bodyArg,
        );
      },
    },
  );

  ctor.defineOwnPropertySync("prototype", {
    value: functionProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  functionProto.defineOwnPropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
