import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { createDataPropertyOrThrow } from "#algorithms/create-data-property-or-throw.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { containerMarkable } from "#memory/implementation/container-markable.js";
import { StaticJsNativeFunctionImpl } from "#types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { StaticJsProxyImpl } from "#types/implementation/StaticJsProxyImpl.js";
import { isStaticJsObject } from "#types/StaticJsObject.js";

import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../apply-intrinsic-properties.js";

const declarations: IntrinsicPropertyDeclaration[] = [];

export function* createProxyConstructor(realm: StaticJsRealm) {
  const ctor = StaticJsNativeFunctionImpl.create(
    realm,
    "Proxy",
    function* () {
      throw yield* Completion.Throw.create(
        "TypeError",
        "Proxy constructor cannot be called as a function",
      );
    },
    {
      *construct(thisArg, target, handler) {
        if (!isStaticJsObject(thisArg)) {
          throw yield* Completion.Throw.create(
            "TypeError",
            "Proxy constructor called on a non-object",
          );
        }

        if (!isStaticJsObject(target)) {
          throw yield* Completion.Throw.create("TypeError", "Proxy target is not an object");
        }

        if (!isStaticJsObject(handler)) {
          throw yield* Completion.Throw.create("TypeError", "Proxy handler is not an object");
        }

        return StaticJsProxyImpl.create(target, handler, realm);
      },
    },
  );

  yield* ctor.defineOwnPropertyEvaluator("revocable", {
    value: StaticJsNativeFunctionImpl.create(
      realm,
      "revocable",
      function* (_thisArg, target, handler) {
        if (!isStaticJsObject(target)) {
          throw yield* Completion.Throw.create("TypeError", "Proxy target is not an object");
        }

        if (!isStaticJsObject(handler)) {
          throw yield* Completion.Throw.create("TypeError", "Proxy handler is not an object");
        }

        const markable = containerMarkable(StaticJsProxyImpl.create(target, handler, realm));
        const revoker = StaticJsNativeFunctionImpl.create(
          realm,
          "revoker",
          function* () {
            const proxy = markable.value;
            if (!proxy) {
              return realm.types.undefined;
            }
            proxy.revoke();
            markable.clear();
            return realm.types.undefined;
          },
          { captures: [markable] },
        );

        const result = realm.types.object();
        yield* createDataPropertyOrThrow(result, "proxy", markable.value!);
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
