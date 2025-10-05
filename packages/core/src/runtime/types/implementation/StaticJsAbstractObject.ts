import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

import hasOwnProperty from "../../../internal/has-own-property.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import toString from "../../algorithms/to-string.js";

import type { StaticJsPropertyDescriptor } from "../StaticJsPropertyDescriptor.js";
import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
  validateStaticJsPropertyDescriptor,
} from "../StaticJsPropertyDescriptor.js";
import type { StaticJsNull } from "../StaticJsNull.js";
import { isStaticJsNull } from "../StaticJsNull.js";
import {
  isStaticJsObjectLike,
  type StaticJsObjectLike,
  type StaticJsObjectPropertyKey,
} from "../StaticJsObjectLike.js";
import { type StaticJsObject } from "../StaticJsObject.js";
import type { StaticJsValue } from "../StaticJsValue.js";
import { isStaticJsValue } from "../StaticJsValue.js";

import StaticJsAbstractPrimitive from "./StaticJsAbstractPrimitive.js";

import createStaticJsObjectLikeProxy from "./create-object-proxy.js";

export default abstract class StaticJsAbstractObject
  extends StaticJsAbstractPrimitive
  implements StaticJsObjectLike
{
  private _prototype: StaticJsObjectLike | null = null;
  private _extensible: boolean = true;

  private _cachedJsObject: unknown | null = null;

  constructor(
    realm: StaticJsRealm,
    prototype: StaticJsObjectLike | StaticJsNull | null,
  ) {
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

  abstract readonly runtimeTypeOf: StaticJsObjectLike["runtimeTypeOf"];

  get prototype(): StaticJsObjectLike | null {
    return this._prototype;
  }

  get extensible(): boolean {
    return this._extensible;
  }

  setPrototypeOfSync(prototype: StaticJsObject | null): void {
    this.realm.invokeEvaluatorSync(this.setPrototypeOfEvaluator(prototype));
  }

  *setPrototypeOfEvaluator(
    proto: StaticJsObjectLike | null,
  ): EvaluationGenerator {
    if (!isStaticJsObjectLike(proto) && proto !== null) {
      throw new TypeError(`Prototype must be a StaticJsObjectLike or null`);
    }

    if (!this._extensible) {
      throw new ThrowCompletion(
        this.realm.types.error("TypeError", "Object is not extensible."),
      );
    }

    this._prototype = proto;
    return null;
  }

  preventExtensionsSync(): void {
    this.realm.invokeEvaluatorSync(this.preventExtensionsEvaluator());
  }

  *preventExtensionsEvaluator(): EvaluationGenerator<void> {
    this._extensible = false;
  }

  getKeysSync(): string[] {
    return this.realm.invokeEvaluatorSync(this.getKeysEvaluator());
  }

  *getKeysEvaluator(): EvaluationGenerator<string[]> {
    const keys: string[] = [];

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let target: StaticJsObjectLike | null = this;
    do {
      const targetKeys = yield* target!.getOwnKeysEvaluator();
      keys.push(...targetKeys);
    } while ((target = target!.prototype));

    return keys;
  }

  getEnumerableKeysSync(): string[] {
    return this.realm.invokeEvaluatorSync(this.getEnumerableKeysEvaluator());
  }

  *getEnumerableKeysEvaluator(): EvaluationGenerator<string[]> {
    const keys: string[] = [];

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let target: StaticJsObjectLike | null = this;
    do {
      const targetKeys = yield* target!.getOwnEnumerableKeysEvaluator();
      keys.push(...targetKeys);
    } while ((target = target!.prototype));

    return keys;
  }

  getOwnKeysSync(): string[] {
    return this.realm.invokeEvaluatorSync(this.getOwnKeysEvaluator());
  }

  abstract getOwnKeysEvaluator(): EvaluationGenerator<string[]>;

  getOwnEnumerableKeysSync(): string[] {
    return this.realm.invokeEvaluatorSync(this.getOwnEnumerableKeysEvaluator());
  }

  *getOwnEnumerableKeysEvaluator(): EvaluationGenerator<string[]> {
    const ownKeys = yield* this.getOwnKeysEvaluator();
    const filtered: string[] = [];
    for (const key of ownKeys) {
      const decl = yield* this.getPropertyDescriptorEvaluator(key);
      if (decl?.enumerable) {
        filtered.push(key);
      }
    }
    return filtered;
  }

  hasPropertySync(key: StaticJsObjectPropertyKey): boolean {
    return this.realm.invokeEvaluatorSync(this.hasPropertyEvaluator(key));
  }

  *hasPropertyEvaluator(
    key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<boolean> {
    const decl = yield* this.getPropertyDescriptorEvaluator(key);
    return decl !== undefined;
  }

  getPropertyDescriptorSync(
    key: StaticJsObjectPropertyKey,
  ): StaticJsPropertyDescriptor | undefined {
    return this.realm.invokeEvaluatorSync(
      this.getPropertyDescriptorEvaluator(key),
    );
  }

  *getPropertyDescriptorEvaluator(
    key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let target: StaticJsObjectLike | null = this;
    let descr: StaticJsPropertyDescriptor | undefined;
    do {
      descr = yield* target!.getOwnPropertyDescriptorEvaluator(key);
    } while (descr === undefined && (target = target!.prototype));
    return descr;
  }

  getOwnPropertyDescriptorSync(
    key: StaticJsObjectPropertyKey,
  ): StaticJsPropertyDescriptor | undefined {
    return this.realm.invokeEvaluatorSync(
      this.getOwnPropertyDescriptorEvaluator(key),
    );
  }

  definePropertySync(
    key: StaticJsObjectPropertyKey,
    descriptor: StaticJsPropertyDescriptor,
  ): void {
    this.realm.invokeEvaluatorSync(
      this.definePropertyEvaluator(key, descriptor),
    );
  }

  *definePropertyEvaluator(
    key: StaticJsObjectPropertyKey,
    descriptor: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<void> {
    // FIXME: Return throw completion?
    validateStaticJsPropertyDescriptor(descriptor);

    const currentDescriptor =
      yield* this.getOwnPropertyDescriptorEvaluator(key);

    if (!currentDescriptor) {
      if (!this.extensible) {
        throw new ThrowCompletion(
          this.realm.types.error("TypeError", `Object is not extensible`),
        );
      }

      // Apply
      yield* this._definePropertyEvaluator(key, descriptor);
      return;
    }

    if (!currentDescriptor.configurable) {
      // This is okay if we are making the value more strict.
      const isNonStrictWritable =
        hasOwnProperty(descriptor, "writable") && descriptor.writable == true;
      const isNonStrictEnumerable =
        hasOwnProperty(descriptor, "enumerable") &&
        descriptor.enumerable == true;
      const isNonStrictConfigurable =
        hasOwnProperty(descriptor, "configurable") &&
        descriptor.configurable == true;
      const isNonStrictValue = hasOwnProperty(descriptor, "value");
      const isNonStrictAccessor =
        hasOwnProperty(descriptor, "get") || hasOwnProperty(descriptor, "set");

      const isNonStrict =
        isNonStrictWritable ||
        isNonStrictEnumerable ||
        isNonStrictConfigurable ||
        isNonStrictValue ||
        isNonStrictAccessor;

      if (isNonStrict) {
        throw new ThrowCompletion(
          this.realm.types.error(
            "TypeError",
            `Cannot redefine property ${key}`,
          ),
        );
      }
    }

    yield* this._definePropertyEvaluator(key, descriptor);
  }

  abstract getOwnPropertyDescriptorEvaluator(
    key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined>;

  getPropertySync(key: StaticJsObjectPropertyKey): StaticJsValue {
    return this.realm.invokeEvaluatorSync(this.getPropertyEvaluator(key));
  }

  *getPropertyEvaluator(
    key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<StaticJsValue> {
    const decl = yield* this.getPropertyDescriptorEvaluator(key);
    if (decl === undefined) {
      return this.realm.types.undefined;
    }

    try {
      validateStaticJsPropertyDescriptor(decl);
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

  setPropertySync(
    key: StaticJsObjectPropertyKey,
    value: StaticJsValue,
    strict: boolean,
  ): void {
    this.realm.invokeEvaluatorSync(
      this.setPropertyEvaluator(key, value, strict),
    );
  }

  *setPropertyEvaluator(
    key: StaticJsObjectPropertyKey,
    value: StaticJsValue,
    strict: boolean,
  ): EvaluationGenerator<void> {
    if (!isStaticJsValue(value)) {
      throw new TypeError(`Value must be a StaticJsValue instance`);
    }

    const ownDecl = yield* this.getOwnPropertyDescriptorEvaluator(key);
    if (ownDecl) {
      // It's our own.  Set it.
      if (isStaticJsAccessorPropertyDescriptor(ownDecl)) {
        if (ownDecl.set) {
          yield* ownDecl.set.callEvaluator(this, value);
          return;
        }
      } else if (isStaticJsDataPropertyDescriptor(ownDecl)) {
        if (ownDecl.writable) {
          yield* this._setWritableDataPropertyEvaluator(key, value);
          return;
        }
      }

      if (strict) {
        throw new ThrowCompletion(
          this.realm.types.error(
            "TypeError",
            `Cannot set property ${key} of ${this.toStringSync()}`,
          ),
        );
      }

      return;
    }

    const decl = yield* this.getPropertyDescriptorEvaluator(key);
    if (decl) {
      if (isStaticJsAccessorPropertyDescriptor(decl)) {
        // Its an inherited accessor property, invoke the accessor
        if (decl.set) {
          yield* decl.set.callEvaluator(this, value);
          return;
        }

        if (strict) {
          throw new ThrowCompletion(
            this.realm.types.error(
              "TypeError",
              `Cannot set property ${key} of ${this.toStringSync()}`,
            ),
          );
        }
        return;
      }

      // Inherited value is not an accessor, fall through to creating a new property on us.
    }

    // Doesn't exist anywhere.  Create it on us if we can.

    if (!this.extensible) {
      if (strict) {
        throw new ThrowCompletion(
          this.realm.types.error(
            "TypeError",
            `Cannot set property ${key} of ${this.toStringSync()}`,
          ),
        );
      }
      return;
    }

    yield* this._definePropertyEvaluator(key, {
      configurable: true,
      enumerable: true,
      writable: true,
      value,
    });
  }

  deletePropertySync(key: StaticJsObjectPropertyKey): boolean {
    return this.realm.invokeEvaluatorSync(this.deletePropertyEvaluator(key));
  }

  *deletePropertyEvaluator(
    key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<boolean> {
    if (!this.extensible) {
      return false;
    }

    const decl = yield* this.getOwnPropertyDescriptorEvaluator(key);
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
      this._cachedJsObject = createStaticJsObjectLikeProxy(
        this,
        target,
        proxyHandler,
      );
    }

    return this._cachedJsObject;
  }

  toStringSync(): string {
    return this.realm.invokeEvaluatorSync(toString(this, this.realm)).value;
  }

  protected _createToJsProxyTarget(): object {
    return {};
  }

  protected _configureToJsProxy(_traps: ProxyHandler<object>): void {}

  protected abstract _setWritableDataPropertyEvaluator(
    key: StaticJsObjectPropertyKey,
    value: StaticJsValue,
  ): EvaluationGenerator<void>;

  protected abstract _definePropertyEvaluator(
    key: StaticJsObjectPropertyKey,
    descriptor: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<void>;

  protected abstract _deleteConfigurablePropertyEvaluator(
    key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<boolean>;
}
