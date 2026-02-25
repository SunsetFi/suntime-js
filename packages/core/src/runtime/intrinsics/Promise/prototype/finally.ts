import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";

import newPromiseCapability from "../../../algorithms/new-promise-capability.js";

import StaticJsFunctionImpl from "../../../types/implementation/StaticJsFunctionImpl.js";

import { isStaticJsFunction, type StaticJsFunction } from "../../../types/StaticJsFunction.js";
import { isStaticJsPromise } from "../../../types/StaticJsPromise.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const promiseProtoFinallyDeclaration: IntrinsicPropertyDeclaration = {
  key: "finally",
  *func(realm, thisArg, onFinally) {
    if (!isStaticJsPromise(thisArg)) {
      throw new ThrowCompletion(realm.types.error("TypeError", "finally called on non-promise"));
    }

    if (!onFinally) {
      onFinally = realm.types.undefined;
    }

    let thenFinally: StaticJsFunction | undefined = undefined;
    let catchFinally: StaticJsFunction | undefined = undefined;
    if (isStaticJsFunction(onFinally)) {
      thenFinally = new StaticJsFunctionImpl(realm, "<thenFinally>", function* (value) {
        const result = yield* onFinally.callEvaluator(realm.types.undefined);
        const capability = yield* newPromiseCapability(realm.types.constructors.Promise, realm);
        yield* capability.resolve.callEvaluator(realm.types.undefined, [result]);
        const p = capability.promise;
        const returnValue = new StaticJsFunctionImpl(realm, "<returnValue>", function* () {
          return value;
        });
        return yield* p.thenEvaluator(returnValue);
      });
      catchFinally = new StaticJsFunctionImpl(realm, "<catchFinally>", function* (reason) {
        const result = yield* onFinally.callEvaluator(realm.types.undefined);
        const capability = yield* newPromiseCapability(realm.types.constructors.Promise, realm);
        yield* capability.resolve.callEvaluator(realm.types.undefined, [result]);
        const p = capability.promise;
        const thrower = new StaticJsFunctionImpl(realm, "<thrower>", function* () {
          throw new ThrowCompletion(reason);
        });
        return yield* p.thenEvaluator(thrower);
      });
    }

    return yield* thisArg.thenEvaluator(thenFinally, catchFinally);
  },
};

export default promiseProtoFinallyDeclaration;
