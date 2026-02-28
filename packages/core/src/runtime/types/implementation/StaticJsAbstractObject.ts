import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import { Completion } from "../../../evaluator/completions/Completion.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import toString from "../../algorithms/to-string.js";
import sameValue from "../../algorithms/same-value.js";

import type { StaticJsRunTaskOptions } from "../../tasks/StaticJsRunTaskOptions.js";

import type {
  StaticJsAccessorPropertyDescriptor,
  StaticJsDataPropertyDescriptor,
  StaticJsPropertyDescriptor,
} from "../StaticJsPropertyDescriptor.js";
import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
  isStaticJsGenericPropertyDescriptor,
  validatePartialStaticJsPropertyDescriptor,
} from "../StaticJsPropertyDescriptor.js";
import type { StaticJsNull } from "../StaticJsNull.js";
import { isStaticJsNull } from "../StaticJsNull.js";
import {
  isStaticJsObjectLike,
  type StaticJsObjectLike,
  type StaticJsPropertyKey,
} from "../StaticJsObjectLike.js";
import { type StaticJsObject } from "../StaticJsObject.js";
import type { StaticJsValue } from "../StaticJsValue.js";
import { isStaticJsValue } from "../StaticJsValue.js";
import type StaticJsTypeCode from "../StaticJsTypeCode.js";
import { isStaticJsSymbol } from "../StaticJsSymbol.js";

import StaticJsAbstractPrimitive from "./StaticJsAbstractPrimitive.js";

import createStaticJsObjectLikeProxy from "./create-object-proxy.js";

export default abstract class StaticJsAbstractObject
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

  abstract readonly runtimeTypeOf: StaticJsObjectLike["runtimeTypeOf"];

  abstract readonly runtimeTypeCode: StaticJsTypeCode;

  get prototype(): StaticJsObjectLike | null {
    return this._prototype;
  }

  get extensible(): boolean {
    return this._extensible;
  }

  getPrototypeOfAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsObjectLike | null> {
    return this.realm.invokeEvaluatorAsync(this.getPrototypeOfEvaluator(), opts);
  }

  getPrototypeOfSync(): StaticJsObjectLike | null {
    return this.realm.invokeEvaluatorSync(this.getPrototypeOfEvaluator());
  }

  *getPrototypeOfEvaluator(): EvaluationGenerator<StaticJsObjectLike | null> {
    return this._prototype;
  }

  async setPrototypeOfAsync(
    prototype: StaticJsObject | null,
    opts?: StaticJsRunTaskOptions,
  ): Promise<void> {
    return this.realm.invokeEvaluatorAsync(this.setPrototypeOfEvaluator(prototype), opts);
  }

  setPrototypeOfSync(prototype: StaticJsObject | null): void {
    this.realm.invokeEvaluatorSync(this.setPrototypeOfEvaluator(prototype));
  }

  *setPrototypeOfEvaluator(proto: StaticJsObjectLike | null): EvaluationGenerator<void> {
    if (!isStaticJsObjectLike(proto) && proto !== null) {
      throw new TypeError(`Prototype must be a StaticJsObjectLike or null`);
    }

    if (!this._extensible) {
      throw Completion.Throw(this.realm.types.error("TypeError", "Object is not extensible."));
    }

    this._prototype = proto;
  }

  async preventExtensionsAsync(opts?: StaticJsRunTaskOptions): Promise<void> {
    return this.realm.invokeEvaluatorAsync(this.preventExtensionsEvaluator(), opts);
  }

  preventExtensionsSync(): void {
    this.realm.invokeEvaluatorSync(this.preventExtensionsEvaluator());
  }

  *preventExtensionsEvaluator(): EvaluationGenerator<void> {
    this._extensible = false;
  }

  ownPropertyKeysAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsPropertyKey[]> {
    return this.realm.invokeEvaluatorAsync(this.ownPropertyKeysEvaluator(), opts);
  }

  ownPropertyKeysSync(): StaticJsPropertyKey[] {
    return this.realm.invokeEvaluatorSync(this.ownPropertyKeysEvaluator());
  }

  abstract ownPropertyKeysEvaluator(): EvaluationGenerator<StaticJsPropertyKey[]>;

  ownEnumerableKeysAsync(opts?: StaticJsRunTaskOptions): Promise<string[]> {
    return this.realm.invokeEvaluatorAsync(this.ownEnumerableKeysEvaluator(), opts);
  }

  ownEnumerableKeysSync(): string[] {
    return this.realm.invokeEvaluatorSync(this.ownEnumerableKeysEvaluator());
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
  hasPropertySync(key: StaticJsPropertyKey): boolean {
    return this.realm.invokeEvaluatorSync(this.hasPropertyEvaluator(key));
  }

  *hasPropertyEvaluator(key: StaticJsPropertyKey): EvaluationGenerator<boolean> {
    const decl = yield* this.getPropertyEvaluator(key);
    return decl !== undefined;
  }

  hasOwnPropertyAsync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<boolean> {
    return this.realm.invokeEvaluatorAsync(this.hasOwnPropertyEvaluator(key), opts);
  }
  hasOwnPropertySync(key: StaticJsPropertyKey): boolean {
    return this.realm.invokeEvaluatorSync(this.hasOwnPropertyEvaluator(key));
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

  getPropertySync(key: StaticJsPropertyKey): StaticJsPropertyDescriptor | undefined {
    return this.realm.invokeEvaluatorSync(this.getPropertyEvaluator(key));
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
  getOwnPropertySync(key: StaticJsPropertyKey): StaticJsPropertyDescriptor | undefined {
    return this.realm.invokeEvaluatorSync(this.getOwnPropertyEvaluator(key));
  }

  defineOwnPropertyAsync(
    key: StaticJsPropertyKey,
    descriptor: StaticJsPropertyDescriptor,
    opts?: StaticJsRunTaskOptions,
  ): Promise<boolean> {
    return this.realm.invokeEvaluatorAsync(this.defineOwnPropertyEvaluator(key, descriptor), opts);
  }

  defineOwnPropertySync(key: StaticJsPropertyKey, descriptor: StaticJsPropertyDescriptor): boolean {
    return this.realm.invokeEvaluatorSync(this.defineOwnPropertyEvaluator(key, descriptor));
  }

  *defineOwnPropertyEvaluator(
    key: StaticJsPropertyKey,
    desc: Partial<StaticJsPropertyDescriptor>,
  ): EvaluationGenerator<boolean> {
    // For abstract objects, implement the 'default' handling of object.[[DefineOwnProperty]], which ultimately
    // is an implementation of ValidateAndApplyPropertyDescriptor:
    // https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-validateandapplypropertydescriptor

    validatePartialStaticJsPropertyDescriptor(desc);

    const current = yield* this.getOwnPropertyEvaluator(key);

    const isCurrentAccessor = isStaticJsAccessorPropertyDescriptor(current);

    const isDescAccessor = isStaticJsAccessorPropertyDescriptor(desc);
    const isDescData = isStaticJsDataPropertyDescriptor(desc);

    if (!current) {
      if (!this.extensible) {
        return false;
      }

      if (isDescAccessor) {
        return yield* this._setPropertyDescriptorEvaluator(key, {
          get: undefined,
          set: undefined,
          enumerable: false,
          configurable: false,
          ...desc,
        });
      } else {
        let value = isDescData ? desc.value : undefined;
        if (value === undefined) {
          // Note: We used to have issues with realm types not being resolved yet during intrinsic instantiation,
          // but that should be solved now.
          value = this.realm.types.undefined;
        }

        return yield* this._setPropertyDescriptorEvaluator(key, {
          value,
          writable: false,
          enumerable: false,
          configurable: false,
          ...desc,
        });
      }
    }

    if (Object.keys(desc).length === 0) {
      return true;
    }

    if (current.configurable === false) {
      if (desc.configurable === true) {
        return false;
      }

      if (desc.enumerable !== undefined && desc.enumerable !== current.enumerable) {
        return false;
      }

      if (!isStaticJsGenericPropertyDescriptor(desc) && isCurrentAccessor !== isDescAccessor) {
        return false;
      }

      // True because of the above check.
      const descriptorAsAccessor = desc as StaticJsAccessorPropertyDescriptor;

      // Will be true in our else-if because of isCurrentAccessor is false and the above.
      const descriptorAsData = desc as StaticJsDataPropertyDescriptor;
      const currentAsData = current as StaticJsDataPropertyDescriptor;

      if (isCurrentAccessor) {
        const { get, set } = current;
        if (get && get !== descriptorAsAccessor.get) {
          return false;
        }

        if (set && set !== descriptorAsAccessor.set) {
          return false;
        }
      } else if (currentAsData.writable === false) {
        if (descriptorAsData.writable === true) {
          return false;
        }

        if (descriptorAsData.value !== undefined) {
          // FIXME: There's confusion here over asserting current as a 'fully populated' data descriptor.
          // See maybe 6.2.6.6 CompletePropertyDescriptor
          // I think our engine should have this always be populated?
          return sameValue(
            descriptorAsData.value,
            currentAsData.value ?? this.realm.types.undefined,
          );
        }
      }
    }

    const configurable = desc.configurable ?? current.configurable;
    const enumerable = desc.enumerable ?? current.enumerable;

    if (isStaticJsDataPropertyDescriptor(current) && isStaticJsAccessorPropertyDescriptor(desc)) {
      return yield* this._setPropertyDescriptorEvaluator(key, {
        get: undefined,
        set: undefined,
        ...desc,
        configurable,
        enumerable,
      });
    } else if (
      isStaticJsAccessorPropertyDescriptor(current) &&
      isStaticJsDataPropertyDescriptor(desc)
    ) {
      return yield* this._setPropertyDescriptorEvaluator(key, {
        value: this.realm.types.undefined,
        writable: false,
        ...desc,
        configurable,
        enumerable,
      });
    } else {
      return yield* this._setPropertyDescriptorEvaluator(key, {
        ...current,
        ...desc,
      });
    }
  }

  abstract getOwnPropertyEvaluator(
    key: StaticJsPropertyKey,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined>;

  getAsync(name: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<StaticJsValue> {
    return this.realm.invokeEvaluatorAsync(this.getEvaluator(name), opts);
  }

  getSync(key: StaticJsPropertyKey): StaticJsValue {
    return this.realm.invokeEvaluatorSync(this.getEvaluator(key));
  }

  *getEvaluator(key: StaticJsPropertyKey): EvaluationGenerator<StaticJsValue> {
    const decl = yield* this.getPropertyEvaluator(key);
    if (decl === undefined) {
      return this.realm.types.undefined;
    }

    try {
      validatePartialStaticJsPropertyDescriptor(decl);
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

  setSync(key: StaticJsPropertyKey, value: StaticJsValue, strict: boolean): boolean {
    return this.realm.invokeEvaluatorSync(this.setEvaluator(key, value, strict));
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

    if (!this.extensible) {
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

  deleteSync(key: StaticJsPropertyKey): boolean {
    return this.realm.invokeEvaluatorSync(this.deleteEvaluator(key));
  }

  *deleteEvaluator(key: StaticJsPropertyKey): EvaluationGenerator<boolean> {
    if (!this.extensible) {
      return false;
    }

    const decl = yield* this.getOwnPropertyEvaluator(key);
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

  toStringSync(): string {
    return this.realm.invokeEvaluatorSync(toString(this, this.realm)).value;
  }

  protected _createToJsProxyTarget(): object {
    return {};
  }

  protected _configureToJsProxy(_traps: ProxyHandler<object>): void {}

  protected abstract _setPropertyDescriptorEvaluator(
    key: StaticJsPropertyKey,
    descriptor: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<boolean>;

  protected abstract _deleteConfigurablePropertyEvaluator(
    key: StaticJsPropertyKey,
  ): EvaluationGenerator<boolean>;

  private *_throwCannotSet(property: StaticJsPropertyKey): EvaluationGenerator<never> {
    const str = yield* toString(this, this.realm);
    throw Completion.Throw(
      this.realm.types.error("TypeError", `Cannot set property ${String(property)} of ${str}`),
    );
  }
}
