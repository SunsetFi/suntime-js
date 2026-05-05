import { Completion } from "../../../../evaluator/completions/Completion.js";
import { createDataPropertyOrThrow } from "../../../algorithms/create-data-property-or-throw.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsNativeFunctionImpl } from "../../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { StaticJsProxyImpl } from "../../../types/implementation/StaticJsProxyImpl.js";
import { isStaticJsObject } from "../../../types/StaticJsObject.js";
import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../apply-intrinsic-properties.js";

const declarations: IntrinsicPropertyDeclaration[] = [];

export function* createProxyConstructor(realm: StaticJsRealm) {
  const ctor = new StaticJsNativeFunctionImpl(
    realm,
    "Proxy",
    function* () {
      throw Completion.Throw("TypeError", "Proxy constructor cannot be called as a function");
    },
    {
      *construct(thisArg, target, handler) {
        if (!isStaticJsObject(thisArg)) {
          throw Completion.Throw("TypeError", "Proxy constructor called on a non-object");
        }

        if (!isStaticJsObject(target)) {
          throw Completion.Throw("TypeError", "Proxy target is not an object");
        }

        if (!isStaticJsObject(handler)) {
          throw Completion.Throw("TypeError", "Proxy handler is not an object");
        }

        return new StaticJsProxyImpl(target, handler, realm);
      },
    },
  );

  yield* ctor.defineOwnPropertyEvaluator("revocable", {
    value: new StaticJsNativeFunctionImpl(
      realm,
      "revocable",
      function* (_thisArg, target, handler) {
        if (!isStaticJsObject(target)) {
          throw Completion.Throw("TypeError", "Proxy target is not an object");
        }

        if (!isStaticJsObject(handler)) {
          throw Completion.Throw("TypeError", "Proxy handler is not an object");
        }

        const proxy = new StaticJsProxyImpl(target, handler, realm);

        const revoker = new StaticJsNativeFunctionImpl(realm, "revoker", function* () {
          proxy.revoke();
          return realm.types.undefined;
        });

        const result = realm.types.object();
        yield* createDataPropertyOrThrow(result, "proxy", proxy);
        yield* createDataPropertyOrThrow(result, "revoke", revoker);
        return result;
      },
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });

  yield* applyIntrinsicProperties(realm, ctor, declarations);

  return ctor;
}
