import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import typedKeys from "../../../utils/typed-keys.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { isStaticJsArray } from "../StaticJsArray.js";
import { StaticJsCallable } from "../StaticJsCallable.js";
import { StaticJsFunction } from "../StaticJsFunction.js";
import { isStaticJsObject, StaticJsObject } from "../StaticJsObject.js";
import { StaticJsPropertyDescriptorRecord } from "../StaticJsPropertyDescriptor.js";
import { staticJsValueToPropertyKey } from "../StaticJsPropertyKey.js";
import {
  StaticJsProxy,
  StaticJsProxyHandlerKeys,
  StaticJsProxyHandlers,
  StaticJsProxyTarget,
} from "../StaticJsProxy.js";
import { StaticJsValue } from "../StaticJsValue.js";

import { StaticJsNativeFunctionImpl } from "./functions/StaticJsNativeFunctionImpl.js";
import { StaticJsProxyImpl } from "./StaticJsProxyImpl.js";

export function createHostDefinedProxy(
  target: StaticJsProxyTarget,
  handlers: StaticJsProxyHandlers,
  realm: StaticJsRealm,
): StaticJsProxy {
  const handlerKeys = typedKeys(handlers);
  const unknownKey = handlerKeys.find(
    (x) => !StaticJsProxyHandlerKeys.includes(x) || typeof handlers[x] !== "function",
  );
  if (unknownKey) {
    throw new TypeError(`Invalid proxy handler key: ${unknownKey}`);
  }

  let resolvedTarget: StaticJsObject | StaticJsCallable;
  if (target === "object") {
    resolvedTarget = realm.types.object();
  } else if (target === "function") {
    resolvedTarget = realm.types.function("proxyTargetFunction", () => realm.types.undefined);
  } else if (isStaticJsObject(target)) {
    resolvedTarget = target;
  } else {
    throw new TypeError(
      `Invalid proxy target: ${target}. Must be an object, function, "object", or "function".`,
    );
  }

  const handlersResolved: Partial<Record<keyof StaticJsProxyHandlers, StaticJsFunction>> = {};
  for (const key of handlerKeys) {
    const converter = proxyHandlerConverters[key];
    const handlerValue = handlers[key]!;
    // FIXME: Support actually doing async evaluation in these
    const handlerFunc = new StaticJsNativeFunctionImpl(
      realm,
      key,
      function* (_thisArg: StaticJsValue, ...args: StaticJsValue[]) {
        let invokeArgs: unknown[];
        if (converter) {
          invokeArgs = args.map((arg, index) => (converter[index] ? converter[index](arg) : arg));
        } else {
          invokeArgs = args;
        }
        const result = (handlerValue as any).apply(undefined, invokeArgs);
        const evaluated = yield* EvaluationGenerator(result);
        return realm.types.toStaticJsValue(evaluated);
      },
    );
    handlersResolved[key] = handlerFunc;
  }

  const descriptors = Object.fromEntries(
    Object.entries(handlersResolved).map(([key, value]) => [
      key,
      {
        value,
        writable: true,
        enumerable: true,
        configurable: true,
      },
    ]),
  ) as Record<string, StaticJsPropertyDescriptorRecord>;
  const handlersObject = realm.types.object(descriptors);

  return new StaticJsProxyImpl(resolvedTarget, handlersObject, realm);
}

const convertIdentity = (x: StaticJsValue) => x;
function sandboxArrayToNative(array: StaticJsValue): unknown[] {
  if (!isStaticJsArray(array)) {
    throw new TypeError(`Expected a StaticJsArray, got ${array}`);
  }
  const length = Number(array.getSync("length").toNative());
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(array.getSync(String(i)));
  }
  return result;
}
const proxyHandlerConverters: Partial<
  Record<keyof StaticJsProxyHandlers, ((value: StaticJsValue) => unknown)[]>
> = {
  getOwnPropertyDescriptor: [convertIdentity, staticJsValueToPropertyKey],
  defineProperty: [convertIdentity, staticJsValueToPropertyKey, convertIdentity],
  has: [convertIdentity, staticJsValueToPropertyKey],
  get: [convertIdentity, staticJsValueToPropertyKey, convertIdentity],
  set: [convertIdentity, staticJsValueToPropertyKey, convertIdentity, convertIdentity],
  deleteProperty: [convertIdentity, staticJsValueToPropertyKey],
  apply: [convertIdentity, convertIdentity, sandboxArrayToNative],
  construct: [convertIdentity, sandboxArrayToNative, convertIdentity],
};
