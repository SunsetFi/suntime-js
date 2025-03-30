import { runEvaluatorUntilCompletion } from "../../../evaluator/evaluator-runtime.js";
import { EvaluationGenerator } from "../../../evaluator/internal.js";
import {
  isStaticJsObjectPropertyDescriptorGetter,
  isStaticJsObjectPropertyDescriptorValue,
  isStaticJsValue,
  StaticJsObject,
  StaticJsObjectPropertyDescriptor,
  StaticJsValue,
  validateStaticJsObjectPropertyDescriptor,
} from "../interfaces/index.js";

import StaticJsEnvUndefined from "./StaticJsEnvUndefined.js";

export default abstract class StaticJsAbstractObject implements StaticJsObject {
  private _extensible: boolean = true;
  constructor(
    private _prototype: StaticJsObject | null,
    private readonly _runtimeTypeSymbol: string,
  ) {}

  get typeOf(): string {
    return "object" as const;
  }

  get runtimeTypeOf(): string {
    return this._runtimeTypeSymbol;
  }

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
    let target: StaticJsObject | null = this;
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
      return StaticJsEnvUndefined.Instance;
    }

    // This validation might be a bit heavy for performance...

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
      value = decl.get();
    } else {
      return StaticJsEnvUndefined.Instance;
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
    const decl = yield* this.getOwnPropertyDescriptorEvaluator(name);
    if (decl === undefined || !decl.configurable) {
      return false;
    }

    return yield* this._deleteConfigurablePropertyEvaluator(name);
  }

  toJs(): unknown {
    // TODO: Cache this?
    // TODO: Use a proxy object and support setting and defining values to it.
    // TODO: Would it be workable to just make the constructor always return an external object and just give it
    // a new object to wrap?
    const result: Record<string, unknown> = {};
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
