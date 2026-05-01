// TODO REMOVE

import { StaticJsEngineError } from "../../../errors/StaticJsEngineError.js";
import { Completion } from "../../../evaluator/completions/Completion.js";
import { Q } from "../../../evaluator/completions/Q.js";
import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { call } from "../../algorithms/call.js";
import { completePropertyDescriptor } from "../../algorithms/complete-property-descriptor.js";
import { construct } from "../../algorithms/construct.js";
import { createArrayFromList } from "../../algorithms/create-array-from-list.js";
import { createListFromArrayLike } from "../../algorithms/create-list-from-array-like.js";
import { getMethod } from "../../algorithms/get-method.js";
import { isCompatiblePropertyDescriptor } from "../../algorithms/is-compatible-property-descriptor.js";
import { sameValue } from "../../algorithms/same-value.js";
import { toBoolean } from "../../algorithms/to-boolean.js";
import { toPropertyDescriptor } from "../../algorithms/to-property-descriptor.js";
import { toString } from "../../algorithms/to-string.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { StaticJsRunTaskOptions } from "../../tasks/StaticJsRunTaskOptions.js";
import { fromPropertyDescriptor } from "../../utils/fromPropertyDescriptor.js";
import { isStaticJsCallable, StaticJsCallable } from "../StaticJsCallable.js";
import { isStaticJsNull } from "../StaticJsNull.js";
import { isStaticJsObject, StaticJsObject } from "../StaticJsObject.js";
import { StaticJsPrivateElement } from "../StaticJsPrivateElement.js";
import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
  StaticJsPropertyDescriptor,
  StaticJsPropertyDescriptorRecord,
} from "../StaticJsPropertyDescriptor.js";
import { StaticJsPropertyKey, staticJsPropertyKeyToValue } from "../StaticJsPropertyKey.js";
import { StaticJsProxy } from "../StaticJsProxy.js";
import { isStaticJsSymbol } from "../StaticJsSymbol.js";
import { StaticJsTypeCode } from "../StaticJsTypeCode.js";
import { isStaticJsUndefined } from "../StaticJsUndefined.js";
import { StaticJsValue } from "../StaticJsValue.js";

import { createStaticJsObjectProxy } from "./objects/create-object-proxy.js";

export class StaticJsProxyImpl implements StaticJsProxy {
  private _cachedJsObject: unknown | null = null;

  constructor(
    private readonly _proxyTarget: StaticJsObject,
    private _handler: StaticJsObject,
    private readonly _realm: StaticJsRealm,
  ) {}

  get isConstructor(): boolean {
    return isStaticJsCallable(this._proxyTarget) && this._proxyTarget.isConstructor;
  }

  get realm(): StaticJsRealm {
    return this._realm;
  }

  get runtimeTypeOf() {
    return "proxy" as const;
  }

  get typeOf() {
    return "object" as const;
  }

  get runtimeTypeCode(): StaticJsTypeCode {
    return isStaticJsCallable(this._proxyTarget)
      ? StaticJsTypeCode.ProxyCallable
      : StaticJsTypeCode.Proxy;
  }

  getPrototypeOfAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsObject | null> {
    return this._realm.invokeEvaluatorAsync(this.getPrototypeOfEvaluator(), opts);
  }

  getPrototypeOfSync(opts?: StaticJsRunTaskOptions): StaticJsObject | null {
    return this._realm.invokeEvaluatorSync(this.getPrototypeOfEvaluator(), opts);
  }

  *getPrototypeOfEvaluator(): EvaluationGenerator<StaticJsObject | null> {
    yield* this._validateNonRevokedProxy();
    const target = this._proxyTarget;
    const handler = this._handler;

    const trap = yield* Q(getMethod(handler, "getPrototypeOf"));
    if (!trap) {
      return yield* Q(target.getPrototypeOfEvaluator());
    }

    const handlerProto = yield* Q(call(trap, handler, [target]));

    if (!isStaticJsObject(handlerProto) && handlerProto !== null) {
      throw Completion.Throw(
        "TypeError",
        "Proxy handler's getPrototypeOf trap must return an object or null",
      );
    }

    const extensibleTarget = yield* Q(target.isExtensibleEvaluator());
    if (extensibleTarget) {
      return unwrapNull(handlerProto);
    }

    const targetProto = yield* Q(target.getPrototypeOfEvaluator());
    if (sameValue.nullHack(handlerProto, targetProto)) {
      throw Completion.Throw(
        "TypeError",
        "Proxy handler's getPrototypeOf trap result does not match the target's prototype",
      );
    }
    return unwrapNull(handlerProto);
  }

  setPrototypeOfAsync(
    prototype: StaticJsObject | null,
    opts?: StaticJsRunTaskOptions,
  ): Promise<boolean> {
    return this._realm.invokeEvaluatorAsync(this.setPrototypeOfEvaluator(prototype), opts);
  }

  setPrototypeOfSync(prototype: StaticJsObject | null, opts?: StaticJsRunTaskOptions): boolean {
    return this._realm.invokeEvaluatorSync(this.setPrototypeOfEvaluator(prototype), opts);
  }

  *setPrototypeOfEvaluator(prototype: StaticJsObject | null): EvaluationGenerator<boolean> {
    yield* this._validateNonRevokedProxy();

    const target = this._proxyTarget;
    const handler = this._handler;

    const trap = yield* Q(getMethod(handler, "setPrototypeOf"));
    if (!trap) {
      return yield* Q(target.setPrototypeOfEvaluator(prototype));
    }

    const booleanTrapResult = yield* toBoolean.js(
      yield* Q(call(trap, handler, [target, wrapNull(prototype, this._realm)])),
    );
    if (!booleanTrapResult) {
      return false;
    }

    const extensibleTarget = yield* Q(target.isExtensibleEvaluator());
    if (extensibleTarget) {
      return true;
    }

    const targetProto = yield* Q(target.getPrototypeOfEvaluator());
    if (!sameValue.nullHack(prototype, targetProto)) {
      throw Completion.Throw(
        "TypeError",
        "Proxy handler's setPrototypeOf returned true, but the passed value does not match the target's prototype",
      );
    }

    return true;
  }

  isExtensibleAsync(opts?: StaticJsRunTaskOptions): Promise<boolean> {
    return this._realm.invokeEvaluatorAsync(this.isExtensibleEvaluator(opts), opts);
  }

  isExtensibleSync(opts?: StaticJsRunTaskOptions): boolean {
    return this._realm.invokeEvaluatorSync(this.isExtensibleEvaluator(opts), opts);
  }

  *isExtensibleEvaluator(opts?: StaticJsRunTaskOptions): EvaluationGenerator<boolean> {
    yield* this._validateNonRevokedProxy();

    const target = this._proxyTarget;
    const handler = this._handler;

    const trap = yield* Q(getMethod(handler, "isExtensible"));
    if (!trap) {
      return yield* Q(target.isExtensibleEvaluator(opts));
    }

    const booleanTrapResult = yield* toBoolean.js(yield* Q(call(trap, handler, [target])));
    const targetResult = yield* Q(target.isExtensibleEvaluator(opts));

    if (booleanTrapResult !== targetResult) {
      throw Completion.Throw(
        "TypeError",
        "Proxy handler's isExtensible trap result does not match the target's extensibility",
      );
    }

    return booleanTrapResult;
  }

  preventExtensionsAsync(opts?: StaticJsRunTaskOptions): Promise<boolean> {
    return this._realm.invokeEvaluatorAsync(this.preventExtensionsEvaluator(), opts);
  }

  preventExtensionsSync(opts?: StaticJsRunTaskOptions): boolean {
    return this._realm.invokeEvaluatorSync(this.preventExtensionsEvaluator(), opts);
  }

  *preventExtensionsEvaluator(): EvaluationGenerator<boolean> {
    yield* this._validateNonRevokedProxy();

    const target = this._proxyTarget;
    const handler = this._handler;

    const trap = yield* Q(getMethod(handler, "preventExtensions"));
    if (!trap) {
      return yield* Q(target.preventExtensionsEvaluator());
    }

    const booleanTrapResult = yield* toBoolean.js(yield* Q(call(trap, handler, [target])));
    if (booleanTrapResult) {
      const extensibleTarget = yield* Q(target.isExtensibleEvaluator());
      if (extensibleTarget) {
        throw Completion.Throw(
          "TypeError",
          "Proxy handler's preventExtensions trap returned true, but the target is still extensible",
        );
      }
    }

    return booleanTrapResult;
  }

  ownPropertyKeysAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsPropertyKey[]> {
    return this._realm.invokeEvaluatorAsync(this.ownPropertyKeysEvaluator(), opts);
  }

  ownPropertyKeysSync(opts?: StaticJsRunTaskOptions): StaticJsPropertyKey[] {
    return this._realm.invokeEvaluatorSync(this.ownPropertyKeysEvaluator(), opts);
  }

  *ownPropertyKeysEvaluator(): EvaluationGenerator<StaticJsPropertyKey[]> {
    yield* this._validateNonRevokedProxy();

    const target = this._proxyTarget;
    const handler = this._handler;

    const trap = yield* Q(getMethod(handler, "ownKeys"));
    if (!trap) {
      return yield* Q(target.ownPropertyKeysEvaluator());
    }

    const trapResultArray = yield* Q(call(trap, handler, [target]));
    const trapResult = yield* Q(createListFromArrayLike(trapResultArray, "property-key"));
    if (hasDuplicates(trapResult)) {
      throw Completion.Throw(
        "TypeError",
        "Proxy handler's ownKeys trap returned a list with duplicate keys",
      );
    }

    const extensibleTarget = yield* Q(target.isExtensibleEvaluator());
    const targetKeys = yield* Q(target.ownPropertyKeysEvaluator());

    const targetConfigurableKeys: StaticJsPropertyKey[] = [];
    const targetNonconfigurableKeys: StaticJsPropertyKey[] = [];

    for (const key of targetKeys) {
      const desc = yield* Q(target.getOwnPropertyEvaluator(key));
      if (desc && !desc.configurable) {
        targetNonconfigurableKeys.push(key);
      } else {
        targetConfigurableKeys.push(key);
      }
    }

    if (extensibleTarget && targetNonconfigurableKeys.length === 0) {
      return trapResult;
    }

    const uncheckedResultKeys = new Set(trapResult);
    for (const key of targetNonconfigurableKeys) {
      if (!uncheckedResultKeys.has(key)) {
        throw Completion.Throw(
          "TypeError",
          `Proxy handler's ownKeys trap did not include non-configurable key ${String(key)}`,
        );
      }
      uncheckedResultKeys.delete(key);
    }

    if (extensibleTarget) {
      return trapResult;
    }

    for (const key of targetConfigurableKeys) {
      if (!uncheckedResultKeys.has(key)) {
        throw Completion.Throw(
          "TypeError",
          `Proxy handler's ownKeys trap did not include configurable key ${String(key)} from a non-extensible target`,
        );
      }
      uncheckedResultKeys.delete(key);
    }

    if (uncheckedResultKeys.size > 0) {
      throw Completion.Throw(
        "TypeError",
        `Proxy handler's ownKeys trap included extra keys not found on the non-extensible target: ${[
          ...uncheckedResultKeys,
        ]
          .map((k) => String(k))
          .join(", ")}`,
      );
    }

    return trapResult;
  }

  ownEnumerableKeysAsync(opts?: StaticJsRunTaskOptions): Promise<string[]> {
    return this._realm.invokeEvaluatorAsync(this.ownEnumerableKeysEvaluator(), opts);
  }

  ownEnumerableKeysSync(opts?: StaticJsRunTaskOptions): string[] {
    return this._realm.invokeEvaluatorSync(this.ownEnumerableKeysEvaluator(), opts);
  }

  *ownEnumerableKeysEvaluator(): EvaluationGenerator<string[]> {
    const keys = yield* Q(this.ownPropertyKeysEvaluator());

    const enumerableKeys: string[] = [];
    for (const key of keys) {
      const desc = yield* Q(this.getOwnPropertyEvaluator(key));
      if (desc && desc.enumerable && !isStaticJsSymbol(key)) {
        enumerableKeys.push(key);
      }
    }

    return enumerableKeys;
  }

  hasPropertyAsync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<boolean> {
    return this._realm.invokeEvaluatorAsync(this.hasPropertyEvaluator(key), opts);
  }

  hasPropertySync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): boolean {
    return this._realm.invokeEvaluatorSync(this.hasPropertyEvaluator(key), opts);
  }

  *hasPropertyEvaluator(key: StaticJsPropertyKey): EvaluationGenerator<boolean> {
    // For proxy, this just returns our own trap.
    // This is a spec divergence.  There is no such thing as [[HasOwnProperty]],
    // just [[HasProperty]]
    return yield* Q(this.hasOwnPropertyEvaluator(key));
  }

  hasOwnPropertyAsync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<boolean> {
    return this._realm.invokeEvaluatorAsync(this.hasOwnPropertyEvaluator(key), opts);
  }

  hasOwnPropertySync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): boolean {
    return this._realm.invokeEvaluatorSync(this.hasOwnPropertyEvaluator(key), opts);
  }

  *hasOwnPropertyEvaluator(key: StaticJsPropertyKey): EvaluationGenerator<boolean> {
    yield* this._validateNonRevokedProxy();

    const target = this._proxyTarget;
    const handler = this._handler;

    const trap = yield* Q(getMethod(handler, "has"));
    if (!trap) {
      return yield* Q(target.hasPropertyEvaluator(key));
    }

    const booleanTrapResult = yield* toBoolean.js(
      yield* Q(call(trap, handler, [target, staticJsPropertyKeyToValue(key, this._realm)])),
    );
    if (!booleanTrapResult) {
      const targetDesc = yield* Q(target.getOwnPropertyEvaluator(key));
      if (targetDesc) {
        if (!targetDesc.configurable) {
          throw Completion.Throw(
            "TypeError",
            `Proxy handler's has trap returned false for existing non-configurable property ${String(
              key,
            )}`,
          );
        }
        const extensibleTarget = yield* Q(target.isExtensibleEvaluator());
        if (!extensibleTarget) {
          throw Completion.Throw(
            "TypeError",
            `Proxy handler's has trap returned false for existing property ${String(
              key,
            )} on a non-extensible target`,
          );
        }
      }
    }

    return booleanTrapResult;
  }

  getPropertyAsync(
    key: StaticJsPropertyKey,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsPropertyDescriptor | undefined> {
    return this._realm.invokeEvaluatorAsync(this.getPropertyEvaluator(key), opts);
  }

  getPropertySync(
    key: StaticJsPropertyKey,
    opts?: StaticJsRunTaskOptions,
  ): StaticJsPropertyDescriptor | undefined {
    return this._realm.invokeEvaluatorSync(this.getPropertyEvaluator(key), opts);
  }

  *getPropertyEvaluator(
    key: StaticJsPropertyKey,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined> {
    const ownProperty = yield* Q(this.getOwnPropertyEvaluator(key));
    if (ownProperty) {
      return ownProperty;
    }

    const proto = yield* Q(this.getPrototypeOfEvaluator());
    if (proto === null) {
      return undefined;
    }

    return yield* Q(proto.getPropertyEvaluator(key));
  }

  getOwnPropertyAsync(
    key: StaticJsPropertyKey,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsPropertyDescriptor | undefined> {
    return this._realm.invokeEvaluatorAsync(this.getOwnPropertyEvaluator(key), opts);
  }

  getOwnPropertySync(
    key: StaticJsPropertyKey,
    opts?: StaticJsRunTaskOptions,
  ): StaticJsPropertyDescriptor | undefined {
    return this._realm.invokeEvaluatorSync(this.getOwnPropertyEvaluator(key), opts);
  }

  *getOwnPropertyEvaluator(
    key: StaticJsPropertyKey,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined> {
    yield* this._validateNonRevokedProxy();

    const target = this._proxyTarget;
    const handler = this._handler;

    const trap = yield* Q(getMethod(handler, "getOwnPropertyDescriptor"));
    if (!trap) {
      return yield* Q(target.getOwnPropertyEvaluator(key));
    }

    const trapResultObject = yield* Q(
      call(trap, handler, [target, staticJsPropertyKeyToValue(key, this._realm)]),
    );
    if (!isStaticJsObject(trapResultObject) && !isStaticJsUndefined(trapResultObject)) {
      throw Completion.Throw(
        "TypeError",
        `Proxy handler's getOwnPropertyDescriptor trap must return an object or undefined for property ${String(
          key,
        )}`,
      );
    }

    const targetDesc = yield* Q(target.getOwnPropertyEvaluator(key));
    if (isStaticJsUndefined(trapResultObject)) {
      if (targetDesc === undefined) {
        return undefined;
      }

      if (!targetDesc.configurable) {
        throw Completion.Throw(
          "TypeError",
          `Proxy handler's getOwnPropertyDescriptor trap returned undefined for existing non-configurable property ${String(
            key,
          )}`,
        );
      }

      const extensibleTarget = yield* Q(target.isExtensibleEvaluator());
      if (!extensibleTarget) {
        throw Completion.Throw(
          "TypeError",
          `Proxy handler's getOwnPropertyDescriptor trap returned undefined for existing property ${String(
            key,
          )} on a non-extensible target`,
        );
      }

      return undefined;
    }

    const extensibleTarget = yield* Q(target.isExtensibleEvaluator());

    const resultDesc = completePropertyDescriptor(yield* toPropertyDescriptor(trapResultObject));
    const valid = yield* isCompatiblePropertyDescriptor(extensibleTarget, resultDesc, targetDesc);
    if (!valid) {
      throw Completion.Throw(
        "TypeError",
        `Proxy handler's getOwnPropertyDescriptor trap returned a property descriptor that is not compatible with the target's property descriptor for key ${String(
          key,
        )}`,
      );
    }

    if (resultDesc.configurable === false) {
      if (targetDesc === undefined || targetDesc.configurable) {
        throw Completion.Throw(
          "TypeError",
          `Proxy handler's getOwnPropertyDescriptor trap returned a non-configurable descriptor for property ${String(
            key,
          )} that is configurable or does not exist on the target`,
        );
      }
      if (isStaticJsDataPropertyDescriptor(resultDesc) && resultDesc.writable === false) {
        // Verified by isCompatiblePropertyDescriptor?
        if (!isStaticJsDataPropertyDescriptor(targetDesc)) {
          throw new StaticJsEngineError(
            "Trying to validate a Proxy getOwnPropertyDescriptor result with a data result but a non-data target",
          );
        }

        if (targetDesc.writable) {
          throw Completion.Throw(
            "TypeError",
            `Proxy handler's getOwnPropertyDescriptor trap returned a non-writable data descriptor for property ${String(
              key,
            )} that is writable and nonconfigurable on the target`,
          );
        }
      }
    }

    return resultDesc;
  }

  defineOwnPropertyAsync(
    key: StaticJsPropertyKey,
    descriptor: StaticJsPropertyDescriptorRecord,
    opts?: StaticJsRunTaskOptions,
  ): Promise<boolean> {
    return this._realm.invokeEvaluatorAsync(this.defineOwnPropertyEvaluator(key, descriptor), opts);
  }

  defineOwnPropertySync(
    key: StaticJsPropertyKey,
    descriptor: StaticJsPropertyDescriptorRecord,
    opts?: StaticJsRunTaskOptions,
  ): boolean {
    return this._realm.invokeEvaluatorSync(this.defineOwnPropertyEvaluator(key, descriptor), opts);
  }

  *defineOwnPropertyEvaluator(
    key: StaticJsPropertyKey,
    desc: StaticJsPropertyDescriptorRecord,
  ): EvaluationGenerator<boolean> {
    yield* this._validateNonRevokedProxy();

    const target = this._proxyTarget;
    const handler = this._handler;

    const trap = yield* Q(getMethod(handler, "defineProperty"));
    if (!trap) {
      return yield* Q(target.defineOwnPropertyEvaluator(key, desc));
    }

    const descObj = yield* Q(fromPropertyDescriptor(desc, this._realm));
    const booleanTrapResult = yield* toBoolean.js(
      yield* Q(
        call(trap, handler, [target, staticJsPropertyKeyToValue(key, this._realm), descObj]),
      ),
    );
    if (booleanTrapResult === false) {
      return false;
    }

    const targetDesc = yield* Q(target.getOwnPropertyEvaluator(key));
    const extensibleTarget = yield* Q(target.isExtensibleEvaluator());

    let settingConfigFalse: boolean;
    if ("configurable" in desc && desc.configurable === false) {
      settingConfigFalse = true;
    } else {
      settingConfigFalse = false;
    }

    if (targetDesc === undefined) {
      if (!extensibleTarget) {
        throw Completion.Throw(
          "TypeError",
          `Proxy handler's defineProperty trap returned true for new property ${String(
            key,
          )} on a non-extensible target`,
        );
      }
      if (settingConfigFalse) {
        throw Completion.Throw(
          "TypeError",
          `Proxy handler's defineProperty trap returned true for new property ${String(
            key,
          )} with configurable: false, which is not allowed`,
        );
      }
    } else {
      const isCompatible = yield* isCompatiblePropertyDescriptor(
        extensibleTarget,
        desc,
        targetDesc,
      );
      if (!isCompatible) {
        throw Completion.Throw(
          "TypeError",
          `Proxy handler's defineProperty trap returned true for property ${String(
            key,
          )} but the provided descriptor is not compatible with the target's existing descriptor`,
        );
      }
      if (settingConfigFalse && targetDesc.configurable) {
        throw Completion.Throw(
          "TypeError",
          `Proxy handler's defineProperty trap returned true for property ${String(
            key,
          )} with configurable: false, but the target's existing property is configurable`,
        );
      }
      if (
        isStaticJsDataPropertyDescriptor(targetDesc) &&
        targetDesc.configurable === false &&
        targetDesc.writable === true
      ) {
        if ("writable" in desc && desc.writable === false) {
          throw Completion.Throw(
            "TypeError",
            `Proxy handler's defineProperty trap returned true for property ${String(
              key,
            )} trying to change writable from true to false on a non-configurable data property`,
          );
        }
      }
    }

    return true;
  }

  getAsync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<StaticJsValue> {
    return this._realm.invokeEvaluatorAsync(this.getEvaluator(key, this), opts);
  }

  getSync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): StaticJsValue {
    return this._realm.invokeEvaluatorSync(this.getEvaluator(key, this), opts);
  }

  *getEvaluator(
    key: StaticJsPropertyKey,
    receiver: StaticJsValue,
  ): EvaluationGenerator<StaticJsValue> {
    yield* this._validateNonRevokedProxy();

    const target = this._proxyTarget;
    const handler = this._handler;

    const trap = yield* Q(getMethod(handler, "get"));
    if (!trap) {
      return yield* Q(target.getEvaluator(key, receiver));
    }

    const trapResult = yield* Q(
      call(trap, handler, [target, staticJsPropertyKeyToValue(key, this._realm), receiver]),
    );

    const targetDesc = yield* Q(target.getOwnPropertyEvaluator(key));
    if (targetDesc && !targetDesc.configurable) {
      if (isStaticJsDataPropertyDescriptor(targetDesc) && targetDesc.writable === false) {
        if (!sameValue(trapResult, targetDesc.value)) {
          throw Completion.Throw(
            "TypeError",
            `Proxy handler's get trap returned a value for non-configurable, non-writable data property ${String(
              key,
            )} that does not match the target's property value`,
          );
        }
      }
      if (isStaticJsAccessorPropertyDescriptor(targetDesc) && targetDesc.get === undefined) {
        if (trapResult !== undefined) {
          throw Completion.Throw(
            "TypeError",
            `Proxy handler's get trap returned a non-undefined value for non-configurable accessor property ${String(
              key,
            )} with undefined getter`,
          );
        }
      }
    }

    return trapResult;
  }

  setAsync(
    key: StaticJsPropertyKey,
    value: StaticJsValue,
    opts?: StaticJsRunTaskOptions,
  ): Promise<boolean> {
    return this._realm.invokeEvaluatorAsync(this.setEvaluator(key, value, this), opts);
  }

  setSync(key: StaticJsPropertyKey, value: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean {
    return this._realm.invokeEvaluatorSync(this.setEvaluator(key, value, this), opts);
  }

  *setEvaluator(
    key: StaticJsPropertyKey,
    value: StaticJsValue,
    receiver: StaticJsValue,
  ): EvaluationGenerator<boolean> {
    yield* this._validateNonRevokedProxy();

    const target = this._proxyTarget;
    const handler = this._handler;

    const trap = yield* Q(getMethod(handler, "set"));
    if (!trap) {
      return yield* Q(target.setEvaluator(key, value, receiver));
    }

    const booleanTrapResult = yield* toBoolean.js(
      yield* Q(
        call(trap, handler, [
          target,
          staticJsPropertyKeyToValue(key, this._realm),
          value,
          receiver,
        ]),
      ),
    );
    if (!booleanTrapResult) {
      return false;
    }

    const targetDesc = yield* Q(target.getOwnPropertyEvaluator(key));
    if (targetDesc && !targetDesc.configurable) {
      if (isStaticJsDataPropertyDescriptor(targetDesc) && targetDesc.writable === false) {
        if (!sameValue(value, targetDesc.value)) {
          throw Completion.Throw(
            "TypeError",
            `Proxy handler's set trap returned true for non-configurable, non-writable data property ${String(
              key,
            )} but the value did not match the target's property value`,
          );
        }
      }
      if (isStaticJsAccessorPropertyDescriptor(targetDesc) && targetDesc.set === undefined) {
        throw Completion.Throw(
          "TypeError",
          `Proxy handler's set trap returned true for non-configurable accessor property ${String(
            key,
          )} with undefined setter, which is not allowed`,
        );
      }
    }

    return true;
  }

  deleteAsync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<boolean> {
    return this._realm.invokeEvaluatorAsync(this.deleteEvaluator(key), opts);
  }

  deleteSync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): boolean {
    return this._realm.invokeEvaluatorSync(this.deleteEvaluator(key), opts);
  }

  *deleteEvaluator(key: StaticJsPropertyKey): EvaluationGenerator<boolean> {
    yield* this._validateNonRevokedProxy();

    const target = this._proxyTarget;
    const handler = this._handler;

    const trap = yield* Q(getMethod(handler, "deleteProperty"));
    if (!trap) {
      return yield* Q(target.deleteEvaluator(key));
    }

    const booleanTrapResult = yield* toBoolean.js(
      yield* Q(call(trap, handler, [target, staticJsPropertyKeyToValue(key, this._realm)])),
    );
    if (!booleanTrapResult) {
      return false;
    }

    const targetDesc = yield* Q(target.getOwnPropertyEvaluator(key));
    if (targetDesc === undefined) {
      return true;
    }

    if (targetDesc.configurable === false) {
      throw Completion.Throw(
        "TypeError",
        `Proxy handler's deleteProperty trap returned true for non-configurable property ${String(
          key,
        )}`,
      );
    }

    const extensibleTarget = yield* Q(target.isExtensibleEvaluator());
    if (!extensibleTarget) {
      throw Completion.Throw(
        "TypeError",
        `Proxy handler's deleteProperty trap returned true for property ${String(
          key,
        )} on a non-extensible target`,
      );
    }

    return true;
  }

  callAsync(
    thisArg: StaticJsValue,
    args?: StaticJsValue[],
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsValue> {
    return this._realm.invokeEvaluatorAsync(this.callEvaluator(thisArg, args), opts);
  }

  callSync(
    thisArg: StaticJsValue,
    args?: StaticJsValue[],
    opts?: StaticJsRunTaskOptions,
  ): StaticJsValue {
    return this._realm.invokeEvaluatorSync(this.callEvaluator(thisArg, args), opts);
  }

  *callEvaluator(
    thisArg: StaticJsValue,
    args?: StaticJsValue[],
  ): EvaluationGenerator<StaticJsValue> {
    yield* this._validateNonRevokedProxy();

    const target = this._proxyTarget;
    const handler = this._handler;

    const trap = yield* Q(getMethod(handler, "apply"));
    if (!trap) {
      return yield* Q(call(target, thisArg, args));
    }

    const argArray = yield* createArrayFromList(args ?? []);
    return yield* Q(call(trap, handler, [target, thisArg, argArray]));
  }

  constructAsync(
    args?: StaticJsValue[],
    newTarget?: StaticJsCallable,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsObject> {
    return this._realm.invokeEvaluatorAsync(this.constructEvaluator(args, newTarget), opts);
  }

  constructSync(
    args?: StaticJsValue[],
    newTarget?: StaticJsCallable,
    opts?: StaticJsRunTaskOptions,
  ): StaticJsObject {
    return this._realm.invokeEvaluatorSync(this.constructEvaluator(args, newTarget), opts);
  }

  *constructEvaluator(
    args?: StaticJsValue[],
    // FIXME: What is the default newTarget here.  The target or the proxy?
    newTarget: StaticJsCallable = this,
  ): EvaluationGenerator<StaticJsObject> {
    yield* this._validateNonRevokedProxy();

    const target = this._proxyTarget;
    // FIXME: We are supposed to just not implement [[Construct]] in this case.
    if (!isStaticJsCallable(target) || !target.isConstructor) {
      throw Completion.Throw("TypeError", "Proxy target is not a constructor");
    }

    const handler = this._handler;

    const trap = yield* Q(getMethod(handler, "construct"));
    if (!trap) {
      return yield* construct(target, args, newTarget);
    }

    const argArray = yield* createArrayFromList(args ?? []);
    // FIXME: newTarget
    const newObj = yield* Q(call(trap, handler, [target, argArray, newTarget]));
    if (!isStaticJsObject(newObj)) {
      throw Completion.Throw("TypeError", "Proxy handler's construct trap must return an object");
    }

    return newObj;
  }

  *privateElementFindEvaluator(): EvaluationGenerator<StaticJsPrivateElement | null> {
    throw new StaticJsEngineError("Cannot currently get private methods from proxies.");
  }

  *privateElementAddEvaluator(): EvaluationGenerator<void> {
    throw new StaticJsEngineError("Cannot currently add private methods to proxies.");
  }

  toNative(): unknown {
    if (!this._cachedJsObject) {
      const proxyHandler: ProxyHandler<object> = {};
      const target = {};
      this._cachedJsObject = createStaticJsObjectProxy(this, target, proxyHandler);
    }

    return this._cachedJsObject;
  }

  toStringSync(opts?: StaticJsRunTaskOptions): string {
    return this.realm.invokeEvaluatorSync(toString(this), opts).value;
  }

  private *_validateNonRevokedProxy(): EvaluationGenerator<void> {}
}

// Our prototype system uses engine null but staticjs values.
// We should fix this to always use StaticJsNull.
function wrapNull(value: StaticJsValue | null, realm: StaticJsRealm): StaticJsValue {
  if (value == null) {
    return realm.types.null;
  }
  return value;
}

function unwrapNull<T extends StaticJsValue>(value: T): T | null {
  if (isStaticJsNull(value)) {
    return null;
  }
  return value;
}

function hasDuplicates(array: StaticJsPropertyKey[]): boolean {
  const seen = new Set<StaticJsPropertyKey>();
  for (const item of array) {
    if (seen.has(item)) {
      return true;
    }
    seen.add(item);
  }
  return false;
}
