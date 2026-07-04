import type { StaticJsCallable } from "#types/StaticJsCallable.js";

import { call } from "#algorithms/call.js";
import { isCallable } from "#algorithms/is-callable.js";
import { newPromiseCapability } from "#algorithms/new-promise-capability.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { StaticJsNativeFunctionImpl } from "#types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { isStaticJsPromise } from "#types/StaticJsPromise.js";

import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const promiseProtoFinallyDeclaration: IntrinsicPropertyDeclaration = {
  key: "finally",
  length: 1,
  *func(realm, thisArg, onFinally) {
    if (!isStaticJsPromise(thisArg)) {
      throw yield* Completion.Throw.create("TypeError", "finally called on non-promise");
    }

    if (!onFinally) {
      onFinally = realm.types.undefined;
    }

    let thenFinally: StaticJsCallable | undefined = undefined;
    let catchFinally: StaticJsCallable | undefined = undefined;
    if (isCallable(onFinally)) {
      thenFinally = StaticJsNativeFunctionImpl.create(
        realm,
        "<thenFinally>",
        function* (value) {
          const result = yield* call(onFinally, realm.types.undefined);
          const capability = yield* newPromiseCapability(realm.intrinsics.Promise);
          yield* call(capability.resolve, realm.types.undefined, [result]);
          const p = capability.promise;
          const returnValue = StaticJsNativeFunctionImpl.create(
            realm,
            "<returnValue>",
            function* () {
              return value;
            },
            { captures: [value] },
          );
          return yield* p.thenEvaluator(returnValue, undefined, true);
        },
        {
          captures: [onFinally],
        },
      );
      catchFinally = StaticJsNativeFunctionImpl.create(
        realm,
        "<catchFinally>",
        function* (reason) {
          const result = yield* call(onFinally, realm.types.undefined);
          const capability = yield* newPromiseCapability(realm.intrinsics.Promise);
          yield* call(capability.resolve, realm.types.undefined, [result]);
          const p = capability.promise;
          const thrower = StaticJsNativeFunctionImpl.create(
            realm,
            "<thrower>",
            function* () {
              throw Completion.Throw(reason);
            },
            {
              captures: [reason],
            },
          );
          return yield* p.thenEvaluator(thrower, undefined, true);
        },
        {
          captures: [onFinally],
        },
      );
    }

    return yield* thisArg.thenEvaluator(thenFinally, catchFinally);
  },
};

export default promiseProtoFinallyDeclaration;
