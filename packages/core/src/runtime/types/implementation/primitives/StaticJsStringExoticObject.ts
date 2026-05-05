import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import { definePropertyOrThrow } from "../../../algorithms/define-property-or-throw.js";
import { isCompatiblePropertyDescriptor } from "../../../algorithms/is-compatible-property-descriptor.js";
import { toIntegerOrInfinity } from "../../../algorithms/to-integer-or-infinity.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsRunTaskOptions } from "../../../tasks/StaticJsRunTaskOptions.js";
import { StaticJsObject } from "../../StaticJsObject.js";
import type {
  StaticJsPropertyDescriptor,
  StaticJsPropertyDescriptorRecord,
} from "../../StaticJsPropertyDescriptor.js";
import type { StaticJsPropertyKey } from "../../StaticJsPropertyKey.js";
import { isStaticJsSymbol } from "../../StaticJsSymbol.js";
import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { isArrayIndex } from "../objects/is-array-index.js";
import { StaticJsOrdinaryObjectImpl } from "../objects/StaticJsOrdinaryObjectImpl.js";

export class StaticJsStringExoticObject extends StaticJsOrdinaryObjectImpl {
  constructor(
    realm: StaticJsRealm,
    private readonly _value: string,
    prototype: StaticJsObject = realm.intrinsics["String.prototype"],
  ) {
    super(realm, prototype);

    realm.invokeEvaluatorSync(
      definePropertyOrThrow(this, "length", {
        value: realm.types.number(_value.length),
        writable: false,
        enumerable: false,
        configurable: false,
      }),
    );
  }

  get runtimeTypeOf(): string {
    return "object";
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.PlainObject;
  }

  get value(): string {
    return this._value;
  }

  override *getOwnPropertyEvaluator(
    key: StaticJsPropertyKey,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined> {
    const desc = yield* super.getOwnPropertyEvaluator(key);
    if (desc) {
      return desc;
    }

    return yield* this._stringGetOwnPropertyEvaluator(key);
  }

  override *defineOwnPropertyEvaluator(
    key: StaticJsPropertyKey,
    descriptor: StaticJsPropertyDescriptorRecord,
    opts?: StaticJsRunTaskOptions,
  ): EvaluationGenerator<boolean> {
    const stringDesc = yield* this._stringGetOwnPropertyEvaluator(key);
    if (stringDesc) {
      const extensible = yield* this.isExtensibleEvaluator(opts);
      return yield* isCompatiblePropertyDescriptor(extensible, descriptor, stringDesc);
    }

    return yield* super.defineOwnPropertyEvaluator(key, descriptor);
  }

  override *ownPropertyKeysEvaluator(): EvaluationGenerator<StaticJsPropertyKey[]> {
    const keys: StaticJsPropertyKey[] = [];

    const str = this._value;
    const len = str.length;

    for (let i = 0; i < len; i++) {
      keys.push(String(i));
    }

    const ownKeys = yield* super.ownPropertyKeysEvaluator();

    for (const key of ownKeys) {
      if (isArrayIndex(key) && (yield* toIntegerOrInfinity.js(key)) >= len) {
        keys.push(key);
      }
    }

    for (const key of ownKeys) {
      if (typeof key === "string" && !isArrayIndex(key)) {
        keys.push(key);
      }
    }

    for (const key of ownKeys) {
      if (isStaticJsSymbol(key)) {
        keys.push(key);
      }
    }

    return keys;
  }

  override toStringSync(): string {
    return this._value;
  }

  override toNative(): unknown {
    return new Object(this._value);
  }

  private *_stringGetOwnPropertyEvaluator(
    propertyKey: StaticJsPropertyKey,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined> {
    if (typeof propertyKey !== "string") {
      return undefined;
    }

    const index = yield* canonicalNumericStringIndex(propertyKey);
    if (index === undefined || Math.round(index) !== index || index < 0) {
      return undefined;
    }

    if (Object.is(index, -0) || index < 0) {
      return undefined;
    }

    const str = this._value;

    const len = str.length;
    if (index >= len) {
      return undefined;
    }

    return {
      value: this.realm.types.string(str.substring(index, index + 1)),
      writable: false,
      enumerable: true,
      configurable: false,
    };
  }
}

function* canonicalNumericStringIndex(argument: string): EvaluationGenerator<number | undefined> {
  if (argument === "-0") {
    return -0;
  }

  const n = Number(argument);
  const str = String(n);
  if (str === argument) {
    return n;
  }

  return undefined;
}
