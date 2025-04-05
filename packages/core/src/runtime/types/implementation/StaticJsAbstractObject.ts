import { runEvaluatorUntilCompletion } from "../../../evaluator/evaluator-runtime.js";
import { EvaluationGenerator } from "../../../evaluator/internal.js";

import { StaticJsRealm } from "../../realm/index.js";

import {
  isStaticJsNull,
  isStaticJsObjectPropertyDescriptorGetter,
  isStaticJsObjectPropertyDescriptorValue,
  isStaticJsValue,
  StaticJsNull,
  StaticJsObject,
  StaticJsObjectPropertyDescriptor,
  StaticJsValue,
  validateStaticJsObjectPropertyDescriptor,
  StaticJsObjectLike,
} from "../interfaces/index.js";
import {} from "../interfaces/StaticJsObject.js";

import StaticJsAbstractPrimitive from "./StaticJsAbstractPrimitive.js";

export default abstract class StaticJsAbstractObject
  extends StaticJsAbstractPrimitive
  implements StaticJsObjectLike
{
  private _prototype: StaticJsObject | null = null;
  private _extensible: boolean = true;

  private _cachedJsObject: unknown | null = null;

  constructor(
    realm: StaticJsRealm,
    prototype: StaticJsObject | StaticJsNull | null,
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

  get prototype(): StaticJsObject | null {
    return this._prototype;
  }

  get extensible(): boolean {
    return this._extensible;
  }

  setPrototypeOf(prototype: StaticJsObject | null): void {
    runEvaluatorUntilCompletion(this.setPrototypeOfEvaluator(prototype));
  }

  *setPrototypeOfEvaluator(
    proto: StaticJsObject | null,
  ): EvaluationGenerator<void> {
    if (!this._extensible) {
      // TODO: Use a real error
      throw new Error("Object is not extensible.");
    }

    this._prototype = proto;
  }

  preventExtension(): void {
    runEvaluatorUntilCompletion(this.preventExtensionEvaluator());
  }

  *preventExtensionEvaluator(): EvaluationGenerator<void> {
    this._extensible = false;
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

  getPropertyDescriptor(
    name: string,
  ): StaticJsObjectPropertyDescriptor | undefined {
    return runEvaluatorUntilCompletion(
      this.getPropertyDescriptorEvaluator(name),
    );
  }

  *getPropertyDescriptorEvaluator(
    name: string,
  ): EvaluationGenerator<StaticJsObjectPropertyDescriptor | undefined> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let target: StaticJsObjectLike | null = this;
    let descr: StaticJsObjectPropertyDescriptor | undefined;
    do {
      descr = yield* target!.getOwnPropertyDescriptorEvaluator(name);
    } while (descr === undefined && (target = target!.prototype));
    return descr;
  }

  getOwnPropertyDescriptor(
    name: string,
  ): StaticJsObjectPropertyDescriptor | undefined {
    return runEvaluatorUntilCompletion(
      this.getOwnPropertyDescriptorEvaluator(name),
    );
  }

  defineProperty(
    name: string,
    descriptor: StaticJsObjectPropertyDescriptor,
  ): void {
    runEvaluatorUntilCompletion(this.definePropertyEvaluator(name, descriptor));
  }

  *definePropertyEvaluator(
    name: string,
    descriptor: StaticJsObjectPropertyDescriptor,
  ): EvaluationGenerator<void> {
    if (!this.extensible) {
      // FIXME: Throw real error
      throw new Error("Object is not extensible.");
    }

    const decl = yield* this.getOwnPropertyDescriptorEvaluator(name);

    if (!decl) {
      yield* this._definePropertyEvaluator(name, descriptor);
      return;
    }

    if (!decl.configurable) {
      // FIXME: Throw real error
      throw new Error(`Cannot redefine property ${name}`);
    }

    yield* this._definePropertyEvaluator(name, descriptor);
  }

  abstract getOwnPropertyDescriptorEvaluator(
    name: string,
  ): EvaluationGenerator<StaticJsObjectPropertyDescriptor | undefined>;

  getProperty(name: string): StaticJsValue {
    return runEvaluatorUntilCompletion(this.getPropertyEvaluator(name));
  }

  *getPropertyEvaluator(name: string): EvaluationGenerator<StaticJsValue> {
    const decl = yield* this.getPropertyDescriptorEvaluator(name);
    if (decl === undefined) {
      return this.realm.types.undefined;
    }

    try {
      validateStaticJsObjectPropertyDescriptor(decl);
    } catch (e: unknown) {
      const err = e as Error;
      err.message = `Property ${name} has an invalid property descriptor: ${(err as Error).message}`;
      throw err;
    }

    let value: unknown;
    if (isStaticJsObjectPropertyDescriptorValue(decl)) {
      value = decl.value;
    } else if (isStaticJsObjectPropertyDescriptorGetter(decl)) {
      value = yield* decl.get.call(this);
    } else {
      return this.realm.types.undefined;
    }

    if (!isStaticJsValue(value)) {
      throw new Error(
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
      if (ownDecl.set) {
        yield* ownDecl.set(value, strict);
        return;
      } else if (ownDecl.writable) {
        yield* this._setWritableDataPropertyEvaluator(name, value);
        return;
      }

      // Fail silently.
      return;
    }

    const decl = yield* this.getPropertyDescriptorEvaluator(name);
    if (decl) {
      if (decl.writable === true || (decl.writable !== false && decl.set)) {
        // It's an inherited writable property.

        // only set if we have a setter.
        if (decl.set) {
          yield* decl.set(value, strict);
        }

        // If no setter but a property, it's a data property.
        // Create a new property on us.
        yield* this._definePropertyEvaluator(name, {
          configurable: true,
          enumerable: true,
          writable: true,
          value,
        });

        return;
      }

      // We are not writable.
      if (strict) {
        // TODO: Throw real error
        throw new Error(`Property ${name} is not writable.`);
      }

      // Fail silently.
      return;
    }

    // Doesn't exist anywhere.  Create it on us.
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
    descriptor: StaticJsObjectPropertyDescriptor,
  ): EvaluationGenerator<void>;

  protected abstract _deleteConfigurablePropertyEvaluator(
    name: string,
  ): EvaluationGenerator<boolean>;
}
