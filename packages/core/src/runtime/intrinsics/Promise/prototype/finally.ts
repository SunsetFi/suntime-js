import { Completion } from "../../../../evaluator/completions/Completion.js";

import newPromiseCapability from "../../../algorithms/new-promise-capability.js";

import { StaticJsNativeFunctionImpl } from "../../../types/implementation/functions/StaticJsNativeFunctionImpl.js";

import { isStaticJsFunction, type StaticJsFunction } from "../../../types/StaticJsFunction.js";
import { isStaticJsPromise } from "../../../types/StaticJsPromise.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const promiseProtoFinallyDeclaration: IntrinsicPropertyDeclaration = {
  key: "finally",
  *func(realm, thisArg, onFinally) {
    if (!isStaticJsPromise(thisArg)) {
      throw Completion.Throw("TypeError", "finally called on non-promise");
    }

    if (!onFinally) {
      onFinally = realm.types.undefined;
    }

    let thenFinally: StaticJsFunction | undefined = undefined;
    let catchFinally: StaticJsFunction | undefined = undefined;
    if (isStaticJsFunction(onFinally)) {
      thenFinally = new StaticJsNativeFunctionImpl(realm, "<thenFinally>", function* (value) {
        const result = yield* onFinally.callEvaluator(realm.types.undefined);
        const capability = yield* newPromiseCapability(realm.types.constructors.Promise, realm);
        yield* capability.resolve.callEvaluator(realm.types.undefined, [result]);
        const p = capability.promise;
        const returnValue = new StaticJsNativeFunctionImpl(realm, "<returnValue>", function* () {
          return value;
        });
        return yield* p.thenEvaluator(returnValue, undefined, true);
      });
      catchFinally = new StaticJsNativeFunctionImpl(realm, "<catchFinally>", function* (reason) {
        const result = yield* onFinally.callEvaluator(realm.types.undefined);
        const capability = yield* newPromiseCapability(realm.types.constructors.Promise, realm);
        yield* capability.resolve.callEvaluator(realm.types.undefined, [result]);
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
