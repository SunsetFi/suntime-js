import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";
import { isStaticJsObjectLike } from "../../../types/StaticJsObjectLike.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import type { StaticJsPromise } from "../../../types/StaticJsPromise.js";

import StaticJsFunctionImpl from "../../../types/implementation/StaticJsFunctionImpl.js";
import StaticJsPromiseImpl from "../../../types/implementation/StaticJsPromiseImpl.js";

import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../utils.js";

import promiseCtorRejectDeclaration from "./reject.js";
import promiseCtorResolveDeclaration from "./resolve.js";
import promiseConstructorSymbolSpeciesDeclaration from "./symbol_species.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  promiseCtorRejectDeclaration,
  promiseCtorResolveDeclaration,
  promiseConstructorSymbolSpeciesDeclaration,
];

export default function createPromiseConstructor(
  realm: StaticJsRealm,
  promiseProto: StaticJsObject,
) {
  const ctor = new StaticJsFunctionImpl(
    realm,
    "Promise",
    function* (thisArg, func) {
      if (!isStaticJsObjectLike(thisArg)) {
        throw new ThrowCompletion(
          realm.types.error(
            "TypeError",
            "Promise constructor called on a non-object",
          ),
        );
      }

      if (!isStaticJsFunction(func)) {
        throw new ThrowCompletion(
          realm.types.error("TypeError", "Promise resolver is not a function."),
        );
      }

      // Our implementation requires us to take over the object instance,
      // but still obey the prototype in case someone subclasses us.
      let proto = yield* thisArg.getEvaluator("prototype");
      if (!isStaticJsObjectLike(proto)) {
        proto = realm.types.prototypes.promiseProto;
      }

      const promise = new StaticJsPromiseImpl(realm, proto);

      const resolve = createPromiseResolveFunction(promise, realm);
      const reject = createPromiseRejectFunction(promise, realm);

      try {
        yield* func.callEvaluator(realm.types.undefined, [resolve, reject]);
      } catch (e) {
        if (e instanceof ThrowCompletion) {
          promise.reject(e.value);
        }

        throw e;
      }

      return promise;
    },
    { construct: true },
  );

  ctor.definePropertySync("prototype", {
    value: promiseProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  promiseProto.definePropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  applyIntrinsicProperties(realm, ctor, declarations);

  return ctor;
}

function createPromiseResolveFunction(
  promise: StaticJsPromise,
  realm: StaticJsRealm,
): StaticJsFunctionImpl {
  let alreadyResolved = false;

  return new StaticJsFunctionImpl(realm, "resolve", function* (
    _thisArg,
    resolution = realm.types.undefined,
  ) {
    if (alreadyResolved) {
      return realm.types.undefined;
    }

    alreadyResolved = true;

    if (resolution === promise) {
      promise.reject(
        realm.types.error("TypeError", "Cannot resolve promise to itself"),
      );
      return realm.types.undefined;
    }

    if (!isStaticJsObjectLike(resolution)) {
      promise.resolve(resolution);
      return realm.types.undefined;
    }

    let then;
    try {
      then = yield* resolution.getEvaluator("then");
    } catch (e) {
      if (e instanceof ThrowCompletion) {
        promise.reject(e.value);
        return realm.types.undefined;
      }

      throw e;
    }

    if (!isStaticJsFunction(then)) {
      promise.resolve(resolution);
      return realm.types.undefined;
    }

    realm.enqueueMicrotask(function* () {
      try {
        const resolve = createPromiseResolveFunction(promise, realm);
        const reject = createPromiseRejectFunction(promise, realm);
        yield* then.callEvaluator(resolution, [resolve, reject]);
      } catch (e) {
        if (e instanceof ThrowCompletion) {
          promise.reject(e.value);
          return;
        }

        throw e;
      }
    });

    return realm.types.undefined;
  });
}

function createPromiseRejectFunction(
  promise: StaticJsPromise,
  realm: StaticJsRealm,
) {
  let alreadyResolved = false;

  return new StaticJsFunctionImpl(realm, "reject", function* (
    _thisArg,
    reason = realm.types.undefined,
  ) {
    if (alreadyResolved) {
      return realm.types.undefined;
    }
    alreadyResolved = true;

    promise.reject(reason);
    return realm.types.undefined;
  });
}
