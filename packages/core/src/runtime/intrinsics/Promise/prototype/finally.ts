import { Completion } from "../../../../evaluator/completions/Completion.js";
import { call } from "../../../algorithms/call.js";
import { isCallable } from "../../../algorithms/is-callable.js";
import { newPromiseCapability } from "../../../algorithms/new-promise-capability.js";
import { StaticJsNativeFunctionImpl } from "../../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { StaticJsCallable } from "../../../types/StaticJsCallable.js";
import { isStaticJsPromise } from "../../../types/StaticJsPromise.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const promiseProtoFinallyDeclaration: IntrinsicPropertyDeclaration = {
  key: "finally",
  length: 1,
  *func(realm, thisArg, onFinally) {
    if (!isStaticJsPromise(thisArg)) {
      throw Completion.Throw("TypeError", "finally called on non-promise");
    }

    if (!onFinally) {
      onFinally = realm.types.undefined;
    }

    let thenFinally: StaticJsCallable | undefined = undefined;
    let catchFinally: StaticJsCallable | undefined = undefined;
    if (isCallable(onFinally)) {
      thenFinally = new StaticJsNativeFunctionImpl(realm, "<thenFinally>", function* (value) {
        const result = yield* call(onFinally, realm.types.undefined);
        const capability = yield* newPromiseCapability(realm.intrinsics.Promise, realm);
        yield* call(capability.resolve, realm.types.undefined, [result]);
        const p = capability.promise;
        const returnValue = new StaticJsNativeFunctionImpl(realm, "<returnValue>", function* () {
          return value;
        });
        return yield* p.thenEvaluator(returnValue, undefined, true);
      });
      catchFinally = new StaticJsNativeFunctionImpl(realm, "<catchFinally>", function* (reason) {
        const result = yield* call(onFinally, realm.types.undefined);
        const capability = yield* newPromiseCapability(realm.intrinsics.Promise, realm);
        yield* call(capability.resolve, realm.types.undefined, [result]);
        const p = capability.promise;
        const thrower = new StaticJsNativeFunctionImpl(realm, "<thrower>", function* () {
          throw Completion.Throw(reason);
        });
        return yield* p.thenEvaluator(thrower, undefined, true);
      });
    }

    return yield* thisArg.thenEvaluator(thenFinally, catchFinally);
  },
};

export default promiseProtoFinallyDeclaration;
