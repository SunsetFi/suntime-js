import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import type { StaticJsRunTaskOptions } from "../../tasks/StaticJsRunTaskOptions.js";
import type { StaticJsNull } from "../StaticJsNull.js";
import type {
  StaticJsPropertyDescriptor,
  StaticJsPropertyDescriptorRecord,
} from "../StaticJsPropertyDescriptor.js";
import type { StaticJsTypeCode } from "../StaticJsTypeCode.js";
import type { StaticJsValue } from "../StaticJsValue.js";

import { StaticJsEngineError } from "../../../errors/StaticJsEngineError.js";
import { Completion } from "../../../evaluator/completions/Completion.js";
import call from "../../algorithms/call.js";
import toString from "../../algorithms/to-string.js";
import { validateAndApplyPropertyDescriptor } from "../../algorithms/validate-and-apply-property-descriptor.js";
import { isStaticJsNull } from "../StaticJsNull.js";
import { isStaticJsObject, type StaticJsObject } from "../StaticJsObject.js";
import { type StaticJsPlainObject } from "../StaticJsPlainObject.js";
import { StaticJsPrivateElement } from "../StaticJsPrivateElement.js";
import { StaticJsPrivateName } from "../StaticJsPrivateName.js";
import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
  validateStaticJsPropertyDescriptorRecord,
} from "../StaticJsPropertyDescriptor.js";
import { type StaticJsPropertyKey } from "../StaticJsPropertyKey.js";
import { isStaticJsSymbol } from "../StaticJsSymbol.js";
import { isStaticJsValue } from "../StaticJsValue.js";
import {
  createStaticJsObjectProxy,
  StaticJsObjectProxyTarget,
} from "./objects/create-object-proxy.js";
import { StaticJsAbstractPrimitive } from "./StaticJsAbstractPrimitive.js";

export abstract class StaticJsAbstractObject
  extends StaticJsAbstractPrimitive
  implements StaticJsObject
{
  private readonly _privateElements: StaticJsPrivateElement[] = [];

  private _prototype: StaticJsObject | null = null;
  private _extensible: boolean = true;

  private _cachedJsObject: unknown | null = null;

  constructor(realm: StaticJsRealm, prototype: StaticJsObject | StaticJsNull | null) {
    super(realm);
    if (isStaticJsNull(prototype)) {
      this._prototype = null;
    } else {
      this._prototype = prototype;
    }
  }

  get typeOf(): string {
    return "object" as const;
  }

  abstract override readonly runtimeTypeOf: StaticJsObject["runtimeTypeOf"];

  abstract override readonly runtimeTypeCode: StaticJsTypeCode;

  getPrototypeOfAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsObject | null> {
    return this.realm.invokeEvaluatorAsync(this.getPrototypeOfEvaluator(), opts);
  }

  getPrototypeOfSync(opts?: StaticJsRunTaskOptions): StaticJsObject | null {
    return this.realm.invokeEvaluatorSync(this.getPrototypeOfEvaluator(), opts);
  }

  *getPrototypeOfEvaluator(): EvaluationGenerator<StaticJsObject | null> {
    return this._prototype;
  }

  async setPrototypeOfAsync(
    prototype: StaticJsPlainObject | null,
    opts?: StaticJsRunTaskOptions,
  ): Promise<boolean> {
    return this.realm.invokeEvaluatorAsync(this.setPrototypeOfEvaluator(prototype), opts);
  }

  setPrototypeOfSync(
    prototype: StaticJsPlainObject | null,
    opts?: StaticJsRunTaskOptions,
  ): boolean {
    return this.realm.invokeEvaluatorSync(this.setPrototypeOfEvaluator(prototype), opts);
  }

  *setPrototypeOfEvaluator(proto: StaticJsObject | null): EvaluationGenerator<boolean> {
    if (!isStaticJsObject(proto) && proto !== null) {
      throw new TypeError(`Prototype must be a StaticJsObject or null`);
    }

    if (!this._extensible) {
      return false;
    }

    this._prototype = proto;
    return true;
  }

  isExtensibleAsync(opts?: StaticJsRunTaskOptions): Promise<boolean> {
    return this.realm.invokeEvaluatorAsync(this.isExtensibleEvaluator(opts), opts);
  }

  isExtensibleSync(opts?: StaticJsRunTaskOptions): boolean {
    return this.realm.invokeEvaluatorSync(this.isExtensibleEvaluator(opts), opts);
  }

  *isExtensibleEvaluator(_opts?: StaticJsRunTaskOptions): EvaluationGenerator<boolean> {
    return this._extensible;
  }

  async preventExtensionsAsync(opts?: StaticJsRunTaskOptions): Promise<boolean> {
    return this.realm.invokeEvaluatorAsync(this.preventExtensionsEvaluator(), opts);
  }

  preventExtensionsSync(opts?: StaticJsRunTaskOptions): boolean {
    return this.realm.invokeEvaluatorSync(this.preventExtensionsEvaluator(), opts);
  }

  *preventExtensionsEvaluator(): EvaluationGenerator<boolean> {
    this._extensible = false;
    return true;
  }

  ownPropertyKeysAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsPropertyKey[]> {
    return this.realm.invokeEvaluatorAsync(this.ownPropertyKeysEvaluator(), opts);
  }

  ownPropertyKeysSync(opts?: StaticJsRunTaskOptions): StaticJsPropertyKey[] {
    return this.realm.invokeEvaluatorSync(this.ownPropertyKeysEvaluator(), opts);
  }

  abstract ownPropertyKeysEvaluator(): EvaluationGenerator<StaticJsPropertyKey[]>;

  ownEnumerableKeysAsync(opts?: StaticJsRunTaskOptions): Promise<string[]> {
    return this.realm.invokeEvaluatorAsync(this.ownEnumerableKeysEvaluator(), opts);
  }

  ownEnumerableKeysSync(opts?: StaticJsRunTaskOptions): string[] {
    return this.realm.invokeEvaluatorSync(this.ownEnumerableKeysEvaluator(), opts);
  }

  *ownEnumerableKeysEvaluator(): EvaluationGenerator<string[]> {
    const ownKeys = yield* this.ownPropertyKeysEvaluator();
    const filtered: string[] = [];
    for (const key of ownKeys) {
      // Symbols are never enumerable
      if (isStaticJsSymbol(key)) {
        continue;
      }

      const decl = yield* this.getPropertyEvaluator(key);
      if (decl?.enumerable) {
        filtered.push(key);
      }
    }
    return filtered;
  }

  hasPropertyAsync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<boolean> {
    return this.realm.invokeEvaluatorAsync(this.hasPropertyEvaluator(key), opts);
  }
  hasPropertySync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): boolean {
    return this.realm.invokeEvaluatorSync(this.hasPropertyEvaluator(key), opts);
  }

  *hasPropertyEvaluator(key: StaticJsPropertyKey): EvaluationGenerator<boolean> {
    const decl = yield* this.getPropertyEvaluator(key);
    return decl !== undefined;
  }

  hasOwnPropertyAsync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<boolean> {
    return this.realm.invokeEvaluatorAsync(this.hasOwnPropertyEvaluator(key), opts);
  }
  hasOwnPropertySync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): boolean {
    return this.realm.invokeEvaluatorSync(this.hasOwnPropertyEvaluator(key), opts);
  }

  *hasOwnPropertyEvaluator(key: StaticJsPropertyKey): EvaluationGenerator<boolean> {
    const decl = yield* this.getOwnPropertyEvaluator(key);
    return decl !== undefined;
  }

  getPropertyAsync(
    key: StaticJsPropertyKey,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsPropertyDescriptor | undefined> {
    return this.realm.invokeEvaluatorAsync(this.getPropertyEvaluator(key), opts);
  }

  getPropertySync(
    key: StaticJsPropertyKey,
    opts?: StaticJsRunTaskOptions,
  ): StaticJsPropertyDescriptor | undefined {
    return this.realm.invokeEvaluatorSync(this.getPropertyEvaluator(key), opts);
  }

  *getPropertyEvaluator(
    key: StaticJsPropertyKey,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let target: StaticJsObject | null = this;
    while (true) {
      const descr = yield* target.getOwnPropertyEvaluator(key);
      if (descr) {
        return descr;
      }
      target = yield* target.getPrototypeOfEvaluator();
      if (target === null) {
        return undefined;
      }
    }
  }

  getOwnPropertyAsync(
    key: StaticJsPropertyKey,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsPropertyDescriptor | undefined> {
    return this.realm.invokeEvaluatorAsync(this.getOwnPropertyEvaluator(key), opts);
  }
  getOwnPropertySync(
    key: StaticJsPropertyKey,
    opts?: StaticJsRunTaskOptions,
  ): StaticJsPropertyDescriptor | undefined {
    return this.realm.invokeEvaluatorSync(this.getOwnPropertyEvaluator(key), opts);
  }

  defineOwnPropertyAsync(
    key: StaticJsPropertyKey,
    descriptor: StaticJsPropertyDescriptorRecord,
    opts?: StaticJsRunTaskOptions,
  ): Promise<boolean> {
    return this.realm.invokeEvaluatorAsync(this.defineOwnPropertyEvaluator(key, descriptor), opts);
  }

  defineOwnPropertySync(
    key: StaticJsPropertyKey,
    descriptor: StaticJsPropertyDescriptorRecord,
    opts?: StaticJsRunTaskOptions,
  ): boolean {
    return this.realm.invokeEvaluatorSync(this.defineOwnPropertyEvaluator(key, descriptor), opts);
  }

  *defineOwnPropertyEvaluator(
    key: StaticJsPropertyKey,
    desc: StaticJsPropertyDescriptorRecord,
  ): EvaluationGenerator<boolean> {
    validateStaticJsPropertyDescriptorRecord(desc);

    const current = yield* this.getOwnPropertyEvaluator(key);
    const extensible = current === undefined ? yield* this.isExtensibleEvaluator() : true;
    const setSlot = (k: StaticJsPropertyKey, d: StaticJsPropertyDescriptor) =>
      this._setPropertyDescriptorEvaluator(k, d);

    return yield* validateAndApplyPropertyDescriptor(
      setSlot,
      key,
      extensible,
      desc,
      current,
      this.realm,
    );
  }

  abstract getOwnPropertyEvaluator(
    key: StaticJsPropertyKey,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined>;

  getAsync(name: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<StaticJsValue> {
    return this.realm.invokeEvaluatorAsync(this.getEvaluator(name, this), opts);
  }

  getSync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): StaticJsValue {
    return this.realm.invokeEvaluatorSync(this.getEvaluator(key, this), opts);
  }

  *getEvaluator(
    key: StaticJsPropertyKey,
    receiver: StaticJsValue,
  ): EvaluationGenerator<StaticJsValue> {
    const decl = yield* this.getPropertyEvaluator(key);
    if (decl === undefined) {
      return this.realm.types.undefined;
    }

    try {
      validateStaticJsPropertyDescriptorRecord(decl);
    } catch (err: unknown) {
      throw new StaticJsEngineError(
        `Property ${key} has an invalid property descriptor: ${(err as Error).message}`,
      );
    }

    let value: unknown;
    if (isStaticJsDataPropertyDescriptor(decl)) {
      value = decl.value;
    } else if (isStaticJsAccessorPropertyDescriptor(decl) && decl.get) {
      value = yield* call(decl.get, receiver);
    } else {
      return this.realm.types.undefined;
    }

    if (!isStaticJsValue(value)) {
      throw new StaticJsEngineError(
        `Property ${key} descriptor returned an invalid value: ${value}`,
      );
    }

    return value;
  }

  setAsync(
    key: StaticJsPropertyKey,
    value: StaticJsValue,
    opts?: StaticJsRunTaskOptions,
  ): Promise<boolean> {
    return this.realm.invokeEvaluatorAsync(this.setEvaluator(key, value, this), opts);
  }

  setSync(key: StaticJsPropertyKey, value: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean {
    return this.realm.invokeEvaluatorSync(this.setEvaluator(key, value, this), opts);
  }

  *setEvaluator(
    key: StaticJsPropertyKey,
    value: StaticJsValue,
    receiver: StaticJsValue,
  ): EvaluationGenerator<boolean> {
    if (!isStaticJsValue(value)) {
      throw new TypeError(`Value must be a StaticJsValue instance`);
    }

    let ownDecl = yield* this.getOwnPropertyEvaluator(key);

    // Below is ordinarySetWithOwnDescriptor.
    if (!ownDecl) {
      const parent = yield* this.getPrototypeOfEvaluator();
      if (parent) {
        return yield* parent.setEvaluator(key, value, receiver);
      }

      ownDecl = {
        value: this.realm.types.undefined,
        writable: true,
        enumerable: true,
        configurable: true,
      };
    }

    if (isStaticJsDataPropertyDescriptor(ownDecl)) {
      if (ownDecl.writable === false) {
        return false;
      }

      if (!isStaticJsObject(receiver)) {
        return false;
      }

      const existingDescriptor = yield* receiver.getOwnPropertyEvaluator(key);
      if (!existingDescriptor) {
        return yield* receiver.defineOwnPropertyEvaluator(key, {
          value,
          writable: true,
          enumerable: true,
          configurable: true,
        });
      }

      if (isStaticJsAccessorPropertyDescriptor(existingDescriptor)) {
        return false;
      }

      if (!existingDescriptor.writable) {
        return false;
      }

      const valueDesc: StaticJsPropertyDescriptorRecord = {
        value,
      };
      return yield* receiver.defineOwnPropertyEvaluator(key, valueDesc);
    }

    const setter = ownDecl.set;
    if (!setter) {
      return false;
    }

    yield* call(setter, receiver, [value]);
    return true;
  }

  deleteAsync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<boolean> {
    return this.realm.invokeEvaluatorAsync(this.deleteEvaluator(key), opts);
  }

  deleteSync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): boolean {
    return this.realm.invokeEvaluatorSync(this.deleteEvaluator(key), opts);
  }

  *deleteEvaluator(key: StaticJsPropertyKey): EvaluationGenerator<boolean> {
    const decl = yield* this.getOwnPropertyEvaluator(key);
    if (decl === undefined) {
      // If the property didn't exist, return true (delete is a no-op)
      return true;
    }

    if (decl === undefined || !decl.configurable) {
      return false;
    }

    return yield* this._deleteConfigurablePropertyEvaluator(key);
  }

  *privateElementFindEvaluator(
    p: StaticJsPrivateName,
  ): EvaluationGenerator<StaticJsPrivateElement | null> {
    return this._privateElements.find((pe) => pe.key === p) ?? null;
  }

  *privateElementAddEvaluator(element: StaticJsPrivateElement): EvaluationGenerator<void> {
    const entry = yield* this.privateElementFindEvaluator(element.key);
    if (entry) {
      throw Completion.Throw(
        "TypeError",
        `Cannot redeclare private field ${element.key.description}`,
      );
    }

    this._privateElements.push(element);
  }

  toNative(): unknown {
    if (!this._cachedJsObject) {
      const proxyHandler: ProxyHandler<object> = {};
      this._configuretoNativeProxy(proxyHandler);
      const target = this._createtoNativeProxyTarget();
      this._cachedJsObject = createStaticJsObjectProxy(this, target, proxyHandler);
    }

    return this._cachedJsObject;
  }

  toStringSync(opts?: StaticJsRunTaskOptions): string {
    return this.realm.invokeEvaluatorSync(toString(this), opts).value;
  }

  protected _createtoNativeProxyTarget(): StaticJsObjectProxyTarget {
    return {};
  }

  protected _configuretoNativeProxy(_traps: ProxyHandler<StaticJsObjectProxyTarget>): void {}

  protected abstract _setPropertyDescriptorEvaluator(
    key: StaticJsPropertyKey,
    descriptor: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<boolean>;

  protected abstract _deleteConfigurablePropertyEvaluator(
    key: StaticJsPropertyKey,
  ): EvaluationGenerator<boolean>;
}
