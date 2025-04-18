import { runEvaluatorUntilCompletion } from "../../../evaluator/evaluator-runtime.js";
import {
  EvaluationGenerator,
  NormalCompletion,
  ThrowCompletion,
} from "../../../evaluator/internal.js";
import StaticJsEngineError from "../../../evaluator/StaticJsEngineError.js";
import hasOwnProperty from "../../../internal/has-own-property.js";

import { StaticJsRealm } from "../../realm/index.js";

import {
  isStaticJsNull,
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
  isStaticJsValue,
  StaticJsNull,
  StaticJsObject,
  StaticJsPropertyDescriptor,
  StaticJsValue,
  validateStaticJsPropertyDescriptor,
  StaticJsObjectLike,
} from "../interfaces/index.js";

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
      return ThrowCompletion(
        this.realm.types.error("TypeError", "Object is not extensible."),
      );
    }

    this._prototype = proto;
    return NormalCompletion(null);
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
        // FIXME: Throw real error
        throw new Error("Object is not extensible.");
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
        // FIXME: Throw real error
        throw new Error(`TypeError: Cannot redefine property ${name}`);
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
    } else if (isStaticJsAccessorPropertyDescriptor(decl)) {
      const completion = yield* decl.get.call(this);
      if (completion.type === "throw") {
        // FIXME: Handle this; these functions should return completions
        // instead of throwing.
        throw new Error(
          `Accessor property ${name} getter threw an error: ${completion.value}`,
        );
      }
      if (completion.type !== "normal" || !completion.value) {
        throw new StaticJsEngineError(
          `Accessor property ${name} getter did not return a normal completion with a value`,
        );
      }

      value = completion.value;
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
          const completion = yield* ownDecl.set.call(this, value);
          if (completion.type === "throw") {
            // FIXME: Evaluator should return completions
            throw new Error(
              `Accessor property ${name} setter threw an error: ${completion.value}`,
            );
          }
          if (completion.type !== "normal") {
            throw new StaticJsEngineError(
              `Accessor property ${name} setter did not return a normal completion`,
            );
          }
          return;
        }
      } else if (isStaticJsDataPropertyDescriptor(ownDecl)) {
        if (ownDecl.writable) {
          yield* this._setWritableDataPropertyEvaluator(name, value);
          return;
        }
      }

      if (strict) {
        // FIXME: Use real error.  Return ThrowCompletion
        throw new Error(
          `TypeError: Cannot set property ${name} of ${this.toString()}`,
        );
      }

      return;
    }

    const decl = yield* this.getPropertyDescriptorEvaluator(name);
    if (decl) {
      if (isStaticJsAccessorPropertyDescriptor(decl)) {
        // Its an inherited accessor property, invoke the accessor
        if (decl.set) {
          const completion = yield* decl.set.call(this, value);
          if (completion.type === "throw") {
            // FIXME: Evaluator should return completions
            throw new Error(
              `Accessor property ${name} setter threw an error: ${completion.value}`,
            );
          }
          if (completion.type !== "normal") {
            throw new StaticJsEngineError(
              `Accessor property ${name} setter did not return a normal completion`,
            );
          }
          return;
        }

        if (strict) {
          throw new Error(
            `TypeError: Cannot set property ${name} of ${this.toString()}`,
          );
        }
        return;
      }

      // Inherited value is not an accessor, fall through to creating a new property on us.
    }

    // Doesn't exist anywhere.  Create it on us if we can.

    if (!this.extensible) {
      if (strict) {
        throw new Error(
          `TypeError: Cannot set property ${name} of ${this.toString()}`,
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

    const result: Record<string, unknown> = {};
    // Set this now in case of circular references.
    this._cachedJsObject = result;

    for (const key of this.getOwnKeys()) {
      result[key] = this.getProperty(key).toJs();
    }

    return result;
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
