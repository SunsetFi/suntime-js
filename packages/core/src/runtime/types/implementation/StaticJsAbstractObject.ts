import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import toString from "../../algorithms/to-string.js";
import sameValue from "../../algorithms/same-value.js";

import type {
  StaticJsAccessorPropertyDescriptor,
  StaticJsDataPropertyDescriptor,
  StaticJsPropertyDescriptor,
} from "../StaticJsPropertyDescriptor.js";
import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
  isStaticJsGenericPropertyDescriptor,
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

  abstract readonly runtimeTypeCode: StaticJsTypeCode;

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
  ): EvaluationGenerator<void> {
    if (!isStaticJsObjectLike(proto) && proto !== null) {
      throw new TypeError(`Prototype must be a StaticJsObjectLike or null`);
    }

    if (!this._extensible) {
      throw new ThrowCompletion(
        this.realm.types.error("TypeError", "Object is not extensible."),
      );
    }

    this._prototype = proto;
  }

  preventExtensionsSync(): void {
    this.realm.invokeEvaluatorSync(this.preventExtensionsEvaluator());
  }

  *preventExtensionsEvaluator(): EvaluationGenerator<void> {
    this._extensible = false;
  }

  ownPropertyKeysSync(): StaticJsObjectPropertyKey[] {
    return this.realm.invokeEvaluatorSync(this.ownPropertyKeysEvaluator());
  }

  abstract ownPropertyKeysEvaluator(): EvaluationGenerator<
    StaticJsObjectPropertyKey[]
  >;

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

  hasPropertySync(key: StaticJsObjectPropertyKey): boolean {
    return this.realm.invokeEvaluatorSync(this.hasPropertyEvaluator(key));
  }

  *hasPropertyEvaluator(
    key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<boolean> {
    const decl = yield* this.getPropertyEvaluator(key);
    return decl !== undefined;
  }

  hasOwnPropertySync(key: StaticJsObjectPropertyKey): boolean {
    return this.realm.invokeEvaluatorSync(this.hasOwnPropertyEvaluator(key));
  }

  *hasOwnPropertyEvaluator(
    key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<boolean> {
    const decl = yield* this.getOwnPropertyEvaluator(key);
    return decl !== undefined;
  }

  getPropertySync(
    key: StaticJsObjectPropertyKey,
  ): StaticJsPropertyDescriptor | undefined {
    return this.realm.invokeEvaluatorSync(this.getPropertyEvaluator(key));
  }

  *getPropertyEvaluator(
    key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let target: StaticJsObjectLike | null = this;
    let descr: StaticJsPropertyDescriptor | undefined;
    do {
      descr = yield* target!.getOwnPropertyEvaluator(key);
    } while (descr === undefined && (target = target!.prototype));
    return descr;
  }

  getOwnPropertySync(
    key: StaticJsObjectPropertyKey,
  ): StaticJsPropertyDescriptor | undefined {
    return this.realm.invokeEvaluatorSync(this.getOwnPropertyEvaluator(key));
  }

  definePropertySync(
    key: StaticJsObjectPropertyKey,
    descriptor: StaticJsPropertyDescriptor,
  ): boolean {
    return this.realm.invokeEvaluatorSync(
      this.definePropertyEvaluator(key, descriptor),
    );
  }

  *definePropertyEvaluator(
    key: StaticJsObjectPropertyKey,
    desc: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<boolean> {
    // For abstract objects, implement the 'default' handling of object.[[DefineOwnProperty]], which ultimately
    // is an implementation of ValidateAndApplyPropertyDescriptor:
    // https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-validateandapplypropertydescriptor

    validateStaticJsPropertyDescriptor(desc);

    const current = yield* this.getOwnPropertyEvaluator(key);

    const isCurrentAccessor = isStaticJsAccessorPropertyDescriptor(current);
    // const isCurrentData = isStaticJsDataPropertyDescriptor(current);

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
          if (this.realm.types === undefined) {
            throw new StaticJsEngineError(
              "When defining object properties during realm initialization, value must be provided.",
            );
          }
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

      if (
        desc.enumerable !== undefined &&
        desc.enumerable !== current.enumerable
      ) {
        return false;
      }

      if (
        !isStaticJsGenericPropertyDescriptor(desc) &&
        isCurrentAccessor !== isDescAccessor
      ) {
        return false;
      }

      // True because of the above check.
      const descriptorAsAccessor = desc as StaticJsAccessorPropertyDescriptor;

      // Will be true in our else-if because of isCurrentAccessor is false and the above.
      const descriptorAsData = desc as StaticJsDataPropertyDescriptor;
      const currentAsData = current as StaticJsDataPropertyDescriptor;

      if (isCurrentAccessor) {
        if (current.get && current.get !== descriptorAsAccessor.get) {
          return false;
        }

        if (current.set && current.set !== descriptorAsAccessor.set) {
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

    if (
      isStaticJsDataPropertyDescriptor(current) &&
      isStaticJsAccessorPropertyDescriptor(desc)
    ) {
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
    key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined>;

  getSync(key: StaticJsObjectPropertyKey): StaticJsValue {
    return this.realm.invokeEvaluatorSync(this.getEvaluator(key));
  }

  *getEvaluator(
    key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<StaticJsValue> {
    const decl = yield* this.getPropertyEvaluator(key);
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

  setSync(
    key: StaticJsObjectPropertyKey,
    value: StaticJsValue,
    strict: boolean,
  ): boolean {
    return this.realm.invokeEvaluatorSync(
      this.setEvaluator(key, value, strict),
    );
  }

  *setEvaluator(
    key: StaticJsObjectPropertyKey,
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
          yield* ownDecl.set.callEvaluator(this, value);
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
        throw new ThrowCompletion(
          this.realm.types.error(
            "TypeError",
            `Cannot set property ${key} of ${this.toStringSync()}`,
          ),
        );
      }

      return false;
    }

    const decl = yield* this.getPropertyEvaluator(key);
    if (decl) {
      if (isStaticJsAccessorPropertyDescriptor(decl)) {
        // Its an inherited accessor property, invoke the accessor
        if (decl.set) {
          yield* decl.set.callEvaluator(this, value);
          return true;
        }

        if (strict) {
          throw new ThrowCompletion(
            this.realm.types.error(
              "TypeError",
              `Cannot set property ${key} of ${this.toStringSync()}`,
            ),
          );
        }

        return false;
      }

      // Inherited value is not an accessor, fall through to creating a new property on us.
    }

    // Doesn't exist anywhere, or is a parent data property.  Create it on us if we can.

    if (!this.extensible) {
      if (strict) {
        throw new ThrowCompletion(
          this.realm.types.error(
            "TypeError",
            `Cannot set property ${key} of ${this.toStringSync()}`,
          ),
        );
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

  deleteSync(key: StaticJsObjectPropertyKey): boolean {
    return this.realm.invokeEvaluatorSync(this.deleteEvaluator(key));
  }

  *deleteEvaluator(
    key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<boolean> {
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

  protected abstract _setPropertyDescriptorEvaluator(
    key: StaticJsObjectPropertyKey,
    descriptor: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<boolean>;

  protected abstract _deleteConfigurablePropertyEvaluator(
    key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<boolean>;
}
