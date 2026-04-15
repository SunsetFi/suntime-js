import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";
import { StaticJsNativeFunctionImpl } from "../../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { StaticJsProxyImpl } from "../../../types/implementation/StaticJsProxyImpl.js";
import { isStaticJsObject } from "../../../types/StaticJsObject.js";
import { applyIntrinsicProperties, type IntrinsicPropertyDeclaration } from "../../utils.js";

const declarations: IntrinsicPropertyDeclaration[] = [];

export default function createProxyConstructor(realm: StaticJsRealm) {
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

  applyIntrinsicProperties(realm, ctor, declarations);

  return ctor;
}
