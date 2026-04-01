// TODO REMOVE
// @ts-nocheck

import { Completion } from "../../../evaluator/completions/Completion.js";
import { Q } from "../../../evaluator/completions/Q.js";
import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import call from "../../algorithms/call.js";
import { completePropertyDescriptor } from "../../algorithms/complete-property-descriptor.js";
import { createListFromArrayLike } from "../../algorithms/create-list-from-array-like.js";
import getMethod from "../../algorithms/get-method.js";
import { isCompatiblePropertyDescriptor } from "../../algorithms/validate-and-apply-property-descriptor.js";
import sameValue from "../../algorithms/same-value.js";
import toBoolean from "../../algorithms/to-boolean.js";
import toPropertyDescriptor from "../../algorithms/to-property-descriptor.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { StaticJsRunTaskOptions } from "../../tasks/StaticJsRunTaskOptions.js";
import { toNativeUnwrap } from "../../utils/to-native-unwrap.js";
import { isStaticJsNull } from "../StaticJsNull.js";
import {
  isStaticJsObjectLike,
  StaticJsObjectLike,
  StaticJsPropertyKey,
} from "../StaticJsObjectLike.js";
import {
  isStaticJsDataPropertyDescriptor,
  StaticJsPropertyDescriptor,
} from "../StaticJsPropertyDescriptor.js";
import { isStaticJsSymbol } from "../StaticJsSymbol.js";
import { StaticJsTypeCode } from "../StaticJsTypeCode.js";
import { isStaticJsUndefined } from "../StaticJsUndefined.js";
import { StaticJsValue } from "../StaticJsValue.js";
import { StaticJsEngineError } from "../../../errors/StaticJsEngineError.js";

export class StaticJsProxyImpl implements StaticJsObjectLike /*, StaticJsFunction*/ {
  constructor(
    private readonly _proxyTarget: StaticJsObjectLike,
    private _handler: StaticJsObjectLike,
    private readonly _realm: StaticJsRealm,
  ) {}

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
    return StaticJsTypeCode.Proxy;
  }

  get prototype(): StaticJsObjectLike | null {
    throw new Error("Method not implemented.");
  }

  getPrototypeOfAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsObjectLike | null> {
    return this._realm.invokeEvaluatorAsync(this.getPrototypeOfEvaluator(), opts);
  }

  getPrototypeOfSync(opts?: StaticJsRunTaskOptions): StaticJsObjectLike | null {
    return this._realm.invokeEvaluatorSync(this.getPrototypeOfEvaluator(), opts);
  }

  *getPrototypeOfEvaluator(): EvaluationGenerator<StaticJsObjectLike | null> {
    yield* this._validateNonRevokedProxy();
    const target = this._proxyTarget;
    const handler = this._handler;

    const trap = yield* Q(getMethod(handler, "getPrototypeOf"));
    if (!trap) {
      return yield* Q(target.getPrototypeOfEvaluator());
    }

    const handlerProto = yield* Q(call(trap, handler, [target]));

    if (!isStaticJsObjectLike(handlerProto) && handlerProto !== null) {
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
    prototype: StaticJsObjectLike | null,
    opts?: StaticJsRunTaskOptions,
  ): Promise<boolean> {
    return this._realm.invokeEvaluatorAsync(this.setPrototypeOfEvaluator(prototype), opts);
  }

  setPrototypeOfSync(prototype: StaticJsObjectLike | null, opts?: StaticJsRunTaskOptions): boolean {
    return this._realm.invokeEvaluatorSync(this.setPrototypeOfEvaluator(prototype), opts);
  }

  *setPrototypeOfEvaluator(prototype: StaticJsObjectLike | null): EvaluationGenerator<boolean> {
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
    const ownHasProperty = yield* Q(this.hasOwnPropertyEvaluator(key));
    if (ownHasProperty) {
      return true;
    }

    const proto = yield* Q(this.getPrototypeOfEvaluator());
    if (proto === null) {
      return false;
    }

    return yield* Q(proto.hasPropertyEvaluator(key));
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

    const booleanTrapResult = yield* toBoolean.js(yield* Q(call(trap, handler, [target, key])));
    if (!booleanTrapResult) {
      const targetDesc = yield* Q(target.getPropertyEvaluator(key));
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

    const trapResultObject = yield* Q(call(trap, handler, [target, key]));
    if (!isStaticJsObjectLike(trapResultObject) && !isStaticJsUndefined(trapResultObject)) {
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
    descriptor: Partial<StaticJsPropertyDescriptor>,
    opts?: StaticJsRunTaskOptions,
  ): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  defineOwnPropertySync(
    key: StaticJsPropertyKey,
    descriptor: Partial<StaticJsPropertyDescriptor>,
    opts?: StaticJsRunTaskOptions,
  ): boolean {
    throw new Error("Method not implemented.");
  }
  defineOwnPropertyEvaluator(
    key: StaticJsPropertyKey,
    descriptor: Partial<StaticJsPropertyDescriptor>,
  ): EvaluationGenerator<boolean> {
    throw new Error("Method not implemented.");
  }
  getAsync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<StaticJsValue> {
    throw new Error("Method not implemented.");
  }
  getSync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): StaticJsValue {
    throw new Error("Method not implemented.");
  }
  getEvaluator(key: StaticJsPropertyKey): EvaluationGenerator<StaticJsValue> {
    throw new Error("Method not implemented.");
  }
  setAsync(
    key: StaticJsPropertyKey,
    value: StaticJsValue,
    strict: boolean,
    opts?: StaticJsRunTaskOptions,
  ): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  setSync(
    key: StaticJsPropertyKey,
    value: StaticJsValue,
    strict: boolean,
    opts?: StaticJsRunTaskOptions,
  ): boolean {
    throw new Error("Method not implemented.");
  }
  setEvaluator(
    key: StaticJsPropertyKey,
    value: StaticJsValue,
    strict: boolean,
  ): EvaluationGenerator<boolean> {
    throw new Error("Method not implemented.");
  }
  deleteAsync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  deleteSync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): boolean {
    throw new Error("Method not implemented.");
  }
  deleteEvaluator(key: StaticJsPropertyKey): EvaluationGenerator<boolean> {
    throw new Error("Method not implemented.");
  }

  toJsSync(): unknown {
    throw new Error("Method not implemented.");
  }
  toStringSync(): string {
    throw new Error("Method not implemented.");
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
