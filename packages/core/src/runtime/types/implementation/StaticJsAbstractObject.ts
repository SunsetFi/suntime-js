import { StaticJsEngineError } from "../../../errors/StaticJsEngineError.js";

import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import { Completion } from "../../../evaluator/completions/Completion.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import toString from "../../algorithms/to-string.js";

import type { StaticJsRunTaskOptions } from "../../tasks/StaticJsRunTaskOptions.js";

import type {
  StaticJsPropertyDescriptor,
  StaticJsPropertyDescriptorRecord,
} from "../StaticJsPropertyDescriptor.js";
import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
  validateStaticJsPropertyDescriptorRecord,
} from "../StaticJsPropertyDescriptor.js";
import { validateAndApplyPropertyDescriptor } from "../../algorithms/validate-and-apply-property-descriptor.js";
import type { StaticJsNull } from "../StaticJsNull.js";
import { isStaticJsNull } from "../StaticJsNull.js";
import { isStaticJsObjectLike, type StaticJsObjectLike } from "../StaticJsObjectLike.js";
import { type StaticJsPropertyKey } from "../StaticJsPropertyKey.js";
import { type StaticJsObject } from "../StaticJsObject.js";
import type { StaticJsValue } from "../StaticJsValue.js";
import { isStaticJsValue } from "../StaticJsValue.js";
import type { StaticJsTypeCode } from "../StaticJsTypeCode.js";
import { isStaticJsSymbol } from "../StaticJsSymbol.js";

import { StaticJsAbstractPrimitive } from "./StaticJsAbstractPrimitive.js";

import {
  createStaticJsObjectLikeProxy,
  StaticJsObjectProxyTarget,
} from "./objects/create-object-proxy.js";

export abstract class StaticJsAbstractObject
  extends StaticJsAbstractPrimitive
  implements StaticJsObjectLike
{
  private _prototype: StaticJsObjectLike | null = null;
  private _extensible: boolean = true;

  private _cachedJsObject: unknown | null = null;

  constructor(realm: StaticJsRealm, prototype: StaticJsObjectLike | StaticJsNull | null) {
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

  abstract override readonly runtimeTypeOf: StaticJsObjectLike["runtimeTypeOf"];

  abstract override readonly runtimeTypeCode: StaticJsTypeCode;

  get prototype(): StaticJsObjectLike | null {
    return this._prototype;
  }

  getPrototypeOfAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsObjectLike | null> {
    return this.realm.invokeEvaluatorAsync(this.getPrototypeOfEvaluator(), opts);
  }

  getPrototypeOfSync(opts?: StaticJsRunTaskOptions): StaticJsObjectLike | null {
    return this.realm.invokeEvaluatorSync(this.getPrototypeOfEvaluator(), opts);
  }

  *getPrototypeOfEvaluator(): EvaluationGenerator<StaticJsObjectLike | null> {
    return this._prototype;
  }

  async setPrototypeOfAsync(
    prototype: StaticJsObject | null,
    opts?: StaticJsRunTaskOptions,
  ): Promise<boolean> {
    return this.realm.invokeEvaluatorAsync(this.setPrototypeOfEvaluator(prototype), opts);
  }

  setPrototypeOfSync(prototype: StaticJsObject | null, opts?: StaticJsRunTaskOptions): boolean {
    return this.realm.invokeEvaluatorSync(this.setPrototypeOfEvaluator(prototype), opts);
  }

  *setPrototypeOfEvaluator(proto: StaticJsObjectLike | null): EvaluationGenerator<boolean> {
    if (!isStaticJsObjectLike(proto) && proto !== null) {
      throw new TypeError(`Prototype must be a StaticJsObjectLike or null`);
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
    let target: StaticJsObjectLike | null = this;
    let descr: StaticJsPropertyDescriptor | undefined;
    do {
      descr = yield* target!.getOwnPropertyEvaluator(key);
    } while (descr === undefined && (target = target!.prototype));
    return descr;
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
    return this.realm.invokeEvaluatorAsync(this.getEvaluator(name), opts);
  }

  getSync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): StaticJsValue {
    return this.realm.invokeEvaluatorSync(this.getEvaluator(key), opts);
  }

  *getEvaluator(key: StaticJsPropertyKey): EvaluationGenerator<StaticJsValue> {
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
      value = yield* decl.get.callEvaluator(this);
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
    strict: boolean,
    opts?: StaticJsRunTaskOptions,
  ): Promise<boolean> {
    return this.realm.invokeEvaluatorAsync(this.setEvaluator(key, value, strict), opts);
  }

  setSync(
    key: StaticJsPropertyKey,
    value: StaticJsValue,
    strict: boolean,
    opts?: StaticJsRunTaskOptions,
  ): boolean {
    return this.realm.invokeEvaluatorSync(this.setEvaluator(key, value, strict), opts);
  }

  *setEvaluator(
    key: StaticJsPropertyKey,
    value: StaticJsValue,
    strict: boolean,
  ): EvaluationGenerator<boolean> {
    if (!isStaticJsValue(value)) {
      throw new TypeError(`Value must be a StaticJsValue instance`);
    }

    const ownDecl = yield* this.getOwnPropertyEvaluator(key);
    if (ownDecl) {
      // It's our own.  Set it.
      if (isStaticJsAccessorPropertyDescriptor(ownDecl)) {
        if (ownDecl.set) {
          yield* ownDecl.set.callEvaluator(this, [value]);
          return true;
        }
      } else if (isStaticJsDataPropertyDescriptor(ownDecl)) {
        if (ownDecl.writable) {
          yield* this._setPropertyDescriptorEvaluator(key, {
            ...ownDecl,
            value,
          });
          return true;
        }
      }

      if (strict) {
        yield* this._throwCannotSet(key);
      }

      return false;
    }

    const decl = yield* this.getPropertyEvaluator(key);
    if (decl) {
      if (isStaticJsAccessorPropertyDescriptor(decl)) {
        // Its an inherited accessor property, invoke the accessor
        if (decl.set) {
          yield* decl.set.callEvaluator(this, [value]);
          return true;
        }

        if (strict) {
          yield* this._throwCannotSet(key);
        }

        return false;
      }

      // Inherited value is not an accessor, fall through to creating a new property on us.
    }

    // Doesn't exist anywhere, or is a parent data property.  Create it on us if we can.

    const extensible = yield* this.isExtensibleEvaluator();
    if (!extensible) {
      if (strict) {
        yield* this._throwCannotSet(key);
      }

      return false;
    }

    return yield* this._setPropertyDescriptorEvaluator(key, {
      configurable: true,
      enumerable: true,
      writable: true,
      value,
    });
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

  toJsSync(): unknown {
    if (!this._cachedJsObject) {
      const proxyHandler: ProxyHandler<object> = {};
      this._configureToJsProxy(proxyHandler);
      const target = this._createToJsProxyTarget();
      this._cachedJsObject = createStaticJsObjectLikeProxy(this, target, proxyHandler);
    }

    return this._cachedJsObject;
  }

  toStringSync(opts?: StaticJsRunTaskOptions): string {
    return this.realm.invokeEvaluatorSync(toString(this), opts).value;
  }

  protected _createToJsProxyTarget(): StaticJsObjectProxyTarget {
    return {};
  }

  protected _configureToJsProxy(_traps: ProxyHandler<StaticJsObjectProxyTarget>): void {}

  protected abstract _setPropertyDescriptorEvaluator(
    key: StaticJsPropertyKey,
    descriptor: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<boolean>;

  protected abstract _deleteConfigurablePropertyEvaluator(
    key: StaticJsPropertyKey,
  ): EvaluationGenerator<boolean>;

  private *_throwCannotSet(property: StaticJsPropertyKey): EvaluationGenerator<never> {
    const str = yield* toString(this);
    throw Completion.Throw("TypeError", `Cannot set property ${String(property)} of ${str}`);
  }
}
