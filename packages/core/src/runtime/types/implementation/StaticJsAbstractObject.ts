import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import { runEvaluatorUntilCompletion } from "../../../evaluator/evaluator-runtime.js";

import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

import hasOwnProperty from "../../../internal/has-own-property.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsPropertyDescriptor } from "../StaticJsPropertyDescriptor.js";
import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
  validateStaticJsPropertyDescriptor,
} from "../StaticJsPropertyDescriptor.js";
import type { StaticJsNull } from "../StaticJsNull.js";
import { isStaticJsNull } from "../StaticJsNull.js";
import type { StaticJsObject, StaticJsObjectLike } from "../StaticJsObject.js";
import type { StaticJsValue } from "../StaticJsValue.js";
import { isStaticJsValue } from "../StaticJsValue.js";

import StaticJsAbstractPrimitive from "./StaticJsAbstractPrimitive.js";

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

  setPrototypeOf(prototype: StaticJsObject | null): void {
    runEvaluatorUntilCompletion(this.setPrototypeOfEvaluator(prototype));
  }

  *setPrototypeOfEvaluator(
    proto: StaticJsObjectLike | null,
  ): EvaluationGenerator {
    if (!this._extensible) {
      throw new ThrowCompletion(
        this.realm.types.error("TypeError", "Object is not extensible."),
      );
    }

    this._prototype = proto;
    return null;
  }

  preventExtensions(): void {
    runEvaluatorUntilCompletion(this.preventExtensionsEvaluator());
  }

  *preventExtensionsEvaluator(): EvaluationGenerator<void> {
    this._extensible = false;
  }

  getKeys(): string[] {
    return runEvaluatorUntilCompletion(this.getKeysEvaluator());
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

  getEnumerableKeys(): string[] {
    return runEvaluatorUntilCompletion(this.getEnumerableKeysEvaluator());
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

  getOwnKeys(): string[] {
    return runEvaluatorUntilCompletion(this.getOwnKeysEvaluator());
  }

  abstract getOwnKeysEvaluator(): EvaluationGenerator<string[]>;

  getOwnEnumerableKeys(): string[] {
    return runEvaluatorUntilCompletion(this.getOwnEnumerableKeysEvaluator());
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

  hasProperty(name: string): boolean {
    return runEvaluatorUntilCompletion(this.hasPropertyEvaluator(name));
  }

  *hasPropertyEvaluator(name: string): EvaluationGenerator<boolean> {
    const decl = yield* this.getPropertyDescriptorEvaluator(name);
    return decl !== undefined;
  }

  getPropertyDescriptor(name: string): StaticJsPropertyDescriptor | undefined {
    return runEvaluatorUntilCompletion(
      this.getPropertyDescriptorEvaluator(name),
    );
  }

  *getPropertyDescriptorEvaluator(
    name: string,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let target: StaticJsObjectLike | null = this;
    let descr: StaticJsPropertyDescriptor | undefined;
    do {
      descr = yield* target!.getOwnPropertyDescriptorEvaluator(name);
    } while (descr === undefined && (target = target!.prototype));
    return descr;
  }

  getOwnPropertyDescriptor(
    name: string,
  ): StaticJsPropertyDescriptor | undefined {
    return runEvaluatorUntilCompletion(
      this.getOwnPropertyDescriptorEvaluator(name),
    );
  }

  defineProperty(name: string, descriptor: StaticJsPropertyDescriptor): void {
    runEvaluatorUntilCompletion(this.definePropertyEvaluator(name, descriptor));
  }

  *definePropertyEvaluator(
    name: string,
    descriptor: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<void> {
    // FIXME: Return throw completion?
    validateStaticJsPropertyDescriptor(descriptor);

    const currentDescriptor =
      yield* this.getOwnPropertyDescriptorEvaluator(name);

    if (!currentDescriptor) {
      if (!this.extensible) {
        throw new ThrowCompletion(
          this.realm.types.error("TypeError", `Object is not extensible`),
        );
      }

      // Apply
      yield* this._definePropertyEvaluator(name, descriptor);
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
            `Cannot redefine property ${name}`,
          ),
        );
      }
    }

    yield* this._definePropertyEvaluator(name, descriptor);
  }

  abstract getOwnPropertyDescriptorEvaluator(
    name: string,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined>;

  getProperty(name: string): StaticJsValue {
    return runEvaluatorUntilCompletion(this.getPropertyEvaluator(name));
  }

  *getPropertyEvaluator(name: string): EvaluationGenerator<StaticJsValue> {
    const decl = yield* this.getPropertyDescriptorEvaluator(name);
    if (decl === undefined) {
      return this.realm.types.undefined;
    }

    try {
      validateStaticJsPropertyDescriptor(decl);
    } catch (err: unknown) {
      throw new StaticJsEngineError(
        `Property ${name} has an invalid property descriptor: ${(err as Error).message}`,
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
        `Property ${name} descriptor returned an invalid value: ${value}`,
      );
    }

    return value;
  }

  setProperty(name: string, value: StaticJsValue, strict: boolean): void {
    runEvaluatorUntilCompletion(this.setPropertyEvaluator(name, value, strict));
  }

  *setPropertyEvaluator(
    name: string,
    value: StaticJsValue,
    strict: boolean,
  ): EvaluationGenerator<void> {
    const ownDecl = yield* this.getOwnPropertyDescriptorEvaluator(name);
    if (ownDecl) {
      // It's our own.  Set it.
      if (isStaticJsAccessorPropertyDescriptor(ownDecl)) {
        if (ownDecl.set) {
          yield* ownDecl.set.callEvaluator(this, value);
          return;
        }
      } else if (isStaticJsDataPropertyDescriptor(ownDecl)) {
        if (ownDecl.writable) {
          yield* this._setWritableDataPropertyEvaluator(name, value);
          return;
        }
      }

      if (strict) {
        throw new ThrowCompletion(
          this.realm.types.error(
            "TypeError",
            `Cannot set property ${name} of ${this.toString()}`,
          ),
        );
      }

      return;
    }

    const decl = yield* this.getPropertyDescriptorEvaluator(name);
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
              `Cannot set property ${name} of ${this.toString()}`,
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
            `Cannot set property ${name} of ${this.toString()}`,
          ),
        );
      }
      return;
    }

    yield* this._definePropertyEvaluator(name, {
      configurable: true,
      enumerable: true,
      writable: true,
      value,
    });
  }

  deleteProperty(name: string): boolean {
    return runEvaluatorUntilCompletion(this.deletePropertyEvaluator(name));
  }

  *deletePropertyEvaluator(name: string): EvaluationGenerator<boolean> {
    if (!this.extensible) {
      return false;
    }

    const decl = yield* this.getOwnPropertyDescriptorEvaluator(name);
    if (decl === undefined || !decl.configurable) {
      return false;
    }

    return yield* this._deleteConfigurablePropertyEvaluator(name);
  }

  toJs(): unknown {
    if (this._cachedJsObject) {
      return this._cachedJsObject;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const target = {} as any;

    const getOwnPropertyDescriptor = (propertyName: string) => {
      if (typeof propertyName !== "string") {
        // Dont yet support symbols.
        return undefined;
      }

      const descriptor = this.getOwnPropertyDescriptor(propertyName);
      if (!descriptor) {
        return undefined;
      }

      // So apparently if we can't change this WE MUST RETURN THE SAME REFERENCE
      // What even is the point of proxy objects!  They make the object have all the same values anyway!
      // What the hell is Proxy even for!  Whose use case is this!  Why force me to mantain my object identically!!!
      // The only use of this is that I can actually capture the events, and force my target up to date.
      // This is so, so, so, so stupid.
      const existingDef = Object.getOwnPropertyDescriptor(target, propertyName);
      if (existingDef && !existingDef.configurable) {
        // Well, the good news is if its not configrable, it wouldn't have been configurable
        // on the 'real' runtime object, which means it can never change.
        // HOWEVER
        // we still need to update the value if its a value descriptor!
        // SIGH.............
        if (
          isStaticJsDataPropertyDescriptor(descriptor) &&
          descriptor.writable
        ) {
          target[propertyName] = this.getProperty(propertyName).toJs();
          return Object.getOwnPropertyDescriptor(target, propertyName);
        }
        return existingDef;
      }

      const jsDescriptor: PropertyDescriptor = {};
      if (descriptor.configurable !== undefined) {
        jsDescriptor.configurable = descriptor.configurable;
      }
      if (descriptor.enumerable !== undefined) {
        jsDescriptor.enumerable = descriptor.enumerable;
      }

      if (isStaticJsAccessorPropertyDescriptor(descriptor)) {
        if (descriptor.get) {
          jsDescriptor.get = () => {
            return this.getProperty(propertyName).toJs();
          };
        }
        if (descriptor.set) {
          jsDescriptor.set = (value: unknown) => {
            const staticJsValue = this.realm.types.toStaticJsValue(value);
            this.setProperty(propertyName, staticJsValue, false);
          };
        } else {
          // Huh... This needs to be set apparently.
          // FIXME: Should we define this explicity in our engine object get descriptor?
          jsDescriptor.set = undefined;
        }
      } else if (isStaticJsDataPropertyDescriptor(descriptor)) {
        jsDescriptor.writable = descriptor.writable;
        jsDescriptor.value = this.getProperty(propertyName).toJs();
      }

      // Proxy is incredibly stupid in that it forces you to have the target match.
      // So like, what's the point...
      // Just... set it now.  Whatever.
      Object.defineProperty(target, propertyName, jsDescriptor);

      return jsDescriptor;
    };

    const ownKeys = () => {
      const keys = this.getOwnKeys();
      for (const key of keys) {
        // Do this to poke the descriptors...
        // Sigh...
        getOwnPropertyDescriptor(key);
      }
      return keys;
    };

    this._cachedJsObject = new Proxy(target, {
      get(_target, p) {
        if (typeof p !== "string") {
          // Don't yet support symbols.
          return undefined;
        }

        const descr = getOwnPropertyDescriptor(p);
        if (!descr) {
          return undefined;
        }

        if (descr.value !== undefined) {
          return descr.value;
        } else if (descr.get) {
          return descr.get();
        }

        return undefined;
      },
      ownKeys,
      getOwnPropertyDescriptor: (_target, p) => {
        if (typeof p !== "string") {
          // Don't yet support symbols.
          return undefined;
        }

        return getOwnPropertyDescriptor(p);
      },
      has(_target, p) {
        if (typeof p !== "string") {
          // Don't yet support symbols.
          return false;
        }
        return getOwnPropertyDescriptor(p) !== undefined;
      },
      // TODO: Writable traps
      defineProperty() {
        return false;
      },
      deleteProperty() {
        return false;
      },
      isExtensible() {
        return false;
      },
      preventExtensions() {
        return true;
      },
      set() {
        return false;
      },
      setPrototypeOf() {
        return false;
      },
      getPrototypeOf() {
        return Object.prototype;
      },
      apply() {
        // FIXME: It might be!!!
        // We need to make Function ObjectLikes handle this!
        throw new TypeError("Object is not a function.");
      },
      construct() {
        throw new TypeError("Object is not a constructor.");
      },
    });

    return this._cachedJsObject;
  }

  toString(): string {
    return "[object Object]";
  }

  toNumber(): number {
    return Number.NaN;
  }

  toBoolean(): boolean {
    return true;
  }

  toObject() {
    return this;
  }

  protected abstract _setWritableDataPropertyEvaluator(
    name: string,
    value: StaticJsValue,
  ): EvaluationGenerator<void>;

  protected abstract _definePropertyEvaluator(
    name: string,
    descriptor: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<void>;

  protected abstract _deleteConfigurablePropertyEvaluator(
    name: string,
  ): EvaluationGenerator<boolean>;
}
