import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";
import { captureThrownCompletion } from "../../../../evaluator/completions/capture-thrown-completion.js";

import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import { isStaticJsObject } from "../../../types/StaticJsObject.js";
import type { StaticJsPlainObject } from "../../../types/StaticJsPlainObject.js";
import type { StaticJsPromise } from "../../../types/StaticJsPromise.js";
import { isStaticJsValue } from "../../../types/StaticJsValue.js";

import { StaticJsNativeFunctionImpl } from "../../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { StaticJsPromiseImpl } from "../../../types/implementation/objects/StaticJsPromiseImpl.js";

import { get } from "../../../algorithms/get.js";
import call from "../../../algorithms/call.js";
import { isCallable } from "../../../algorithms/is-callable.js";

import { applyIntrinsicProperties, type IntrinsicPropertyDeclaration } from "../../utils.js";

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
  promiseProto: StaticJsPlainObject,
) {
  const ctor = new StaticJsNativeFunctionImpl(
    realm,
    "Promise",
    function* () {
      throw Completion.Throw("TypeError", "Promise constructor cannot be called as a function");
    },
    {
      *construct(thisArg, func) {
        if (!isStaticJsObject(thisArg)) {
          throw Completion.Throw("TypeError", "Promise constructor called on a non-object");
        }

        if (!isCallable(func)) {
          throw Completion.Throw("TypeError", "Promise resolver is not a function.");
        }

        // Our implementation requires us to take over the object instance,
        // but still obey the prototype in case someone subclasses us.
        let proto = yield* get(thisArg, "prototype");
        if (!isStaticJsObject(proto)) {
          proto = realm.types.prototypes.promiseProto;
        }

        const promise = new StaticJsPromiseImpl(realm, proto);

        const { resolve, reject } = createResolvingFunctions(promise, realm);

        try {
          yield* call(func, realm.types.undefined, [resolve, reject]);
        } catch (e) {
          if (Completion.Throw.is(e)) {
            promise.reject(e.value);
          }

          throw e;
        }

        return promise;
      },
    },
  );

  ctor.defineOwnPropertySync("prototype", {
    value: promiseProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  promiseProto.defineOwnPropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  applyIntrinsicProperties(realm, ctor, declarations);

  return ctor;
}

function createResolvingFunctions(promise: StaticJsPromise, realm: StaticJsRealm) {
  let alreadyResolved = false;

  const resolve = new StaticJsNativeFunctionImpl(
    realm,
    "resolve",
    function* (_thisArg, resolution = realm.types.undefined) {
      if (alreadyResolved) {
        return realm.types.undefined;
      }

      alreadyResolved = true;

      if (resolution === promise) {
        promise.reject(realm.types.error("TypeError", "Cannot resolve promise to itself"));
        return realm.types.undefined;
      }

      if (!isStaticJsObject(resolution)) {
        promise.resolve(resolution);
        return realm.types.undefined;
      }

      const then = yield* captureThrownCompletion(get(resolution, "then"));
      if (Completion.Abrupt.is(then)) {
        const value = then.value;
        if (!isStaticJsValue(value)) {
          throw new StaticJsEngineError("Completion value must be a StaticJsValue.");
        }
        promise.reject(value);
        return realm.types.undefined;
      }

      if (!isCallable(then)) {
        promise.resolve(resolution);
        return realm.types.undefined;
      }

      realm.enqueuePromiseJob(function* () {
        try {
          const { resolve, reject } = createResolvingFunctions(promise, realm);
          yield* call(then, resolution, [resolve, reject]);
        } catch (e) {
          if (Completion.Throw.is(e)) {
            promise.reject(e.value);
            return;
          }

          throw e;
        }
      });

      return realm.types.undefined;
    },
  );

  const reject = new StaticJsNativeFunctionImpl(
    realm,
    "reject",
    function* (_thisArg, reason = realm.types.undefined) {
      if (alreadyResolved) {
        return realm.types.undefined;
      }
      alreadyResolved = true;

      promise.reject(reason);
      return realm.types.undefined;
    },
  );

  return { resolve, reject };
}
