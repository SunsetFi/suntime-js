import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsArray } from "../StaticJsArray.js";
import type { StaticJsFunction } from "../StaticJsFunction.js";
import type { StaticJsObject, StaticJsObjectLike } from "../StaticJsObject.js";
import type { StaticJsPropertyDescriptor } from "../StaticJsPropertyDescriptor.js";
import type {
  ErrorTypeName,
  StaticJsFunctionTypeCreationOptions,
} from "../StaticJsTypeFactory.js";
import type StaticJsTypeFactory from "../StaticJsTypeFactory.js";
import { isErrorTypeName } from "../StaticJsTypeFactory.js";
import type { StaticJsValue } from "../StaticJsValue.js";
import { isStaticJsValue } from "../StaticJsValue.js";
import type { StaticJsBoolean } from "../StaticJsBoolean.js";
import type { StaticJsUndefined } from "../StaticJsUndefined.js";
import type { StaticJsNull } from "../StaticJsNull.js";
import { isStaticJsNull } from "../StaticJsNull.js";
import type { StaticJsNumber } from "../StaticJsNumber.js";
import type { StaticJsString } from "../StaticJsString.js";

import {
  constructorKeys,
  prototypeKeys,
  type Constructors,
  type Instrinsics,
  type Prototypes,
} from "../../intrinsics/intrinsics.js";

import StaticJsArrayImpl from "./StaticJsArrayImpl.js";
import StaticJsBooleanImpl from "./StaticJsBooleanImpl.js";
import StaticJsNullImpl from "./StaticJsNullImpl.js";
import StaticJsNumberImpl from "./StaticJsNumberImpl.js";
import StaticJsObjectImpl from "./StaticJsObjectImpl.js";
import StaticJsStringImpl from "./StaticJsStringImpl.js";
import StaticJsUndefinedImpl from "./StaticJsUndefinedImpl.js";
import StaticJsExternalFunction from "./StaticJsExternalFunction.js";
import StaticJsExternalObject from "./StaticJsExternalObject.js";
import StaticJsFunctionImpl from "./StaticJsFunctionImpl.js";

export default class StaticJsTypeFactoryImpl implements StaticJsTypeFactory {
  private _prototypes: Prototypes;
  private _constructors: Constructors;

  private _zero: StaticJsNumber;
  private _NaN: StaticJsNumber;
  private _Infinity: StaticJsNumber;

  private _false: StaticJsBoolean;
  private _true: StaticJsBoolean;

  private _null: StaticJsNull;
  private _undefined: StaticJsUndefined;

  constructor(
    private readonly _realm: StaticJsRealm,
    private readonly _instrinsics: Instrinsics,
  ) {
    this._zero = new StaticJsNumberImpl(_realm, 0);
    this._NaN = new StaticJsNumberImpl(_realm, NaN);
    this._Infinity = new StaticJsNumberImpl(_realm, Infinity);

    this._false = new StaticJsBooleanImpl(_realm, false);
    this._true = new StaticJsBooleanImpl(_realm, true);

    this._null = new StaticJsNullImpl(_realm);
    this._undefined = new StaticJsUndefinedImpl(_realm);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this._prototypes = {} as any;
    for (const key of prototypeKeys) {
      this._prototypes[key] = this._instrinsics[key];
    }
    Object.freeze(this._prototypes);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this._constructors = {} as any;
    for (const key of constructorKeys) {
      this._constructors[key] = this._instrinsics[key];
    }
    Object.freeze(this._constructors);
  }

  get prototypes(): Prototypes {
    return this._prototypes;
  }

  get constructors(): Constructors {
    return this._constructors;
  }

  get true(): StaticJsBoolean {
    return this._true;
  }

  get false(): StaticJsBoolean {
    return this._false;
  }

  get undefined(): StaticJsUndefined {
    return this._undefined;
  }

  get null(): StaticJsNull {
    return this._null;
  }

  get zero(): StaticJsNumber {
    return this._zero;
  }

  get NaN(): StaticJsNumber {
    return this._NaN;
  }

  get Infinity(): StaticJsNumber {
    return this._Infinity;
  }

  object(
    properties?: Record<string, StaticJsPropertyDescriptor>,
    prototype?: StaticJsObjectLike | StaticJsNull | null,
  ): StaticJsObject {
    if (prototype === undefined) {
      prototype = this._prototypes.objectProto;
    }
    const obj = new StaticJsObjectImpl(
      this._realm,
      isStaticJsNull(prototype) ? null : prototype,
    );

    if (properties) {
      for (const [key, value] of Object.entries(properties)) {
        obj.definePropertySync(key, value);
      }
    }

    return obj;
  }

  array(items?: StaticJsValue[]): StaticJsArray {
    return new StaticJsArrayImpl(this._realm, items);
  }

  function(
    name: string,
    func: (this: StaticJsValue, ...args: StaticJsValue[]) => StaticJsValue,
    opts: StaticJsFunctionTypeCreationOptions = {},
  ): StaticJsFunction {
    return new StaticJsFunctionImpl(
      this._realm,
      name,
      function* (thisArg: StaticJsValue, ...args: StaticJsValue[]) {
        try {
          const result = func.apply(thisArg, args);
          if (!isStaticJsValue(result)) {
            throw new TypeError(
              `Function ${name} returned non-StaticJsValue: ${result}`,
            );
          }
          return result;
        } catch (e) {
          if (isStaticJsValue(e)) {
            throw new ThrowCompletion(e);
          }

          throw e;
        }
      },
      {
        isConstructor: opts.isConstructor ?? false,
        length: opts.length ?? func.length,
        prototype: opts.prototype ?? this._prototypes.functionProto,
      },
    );
  }

  error(message: string): StaticJsObject;
  error(name: ErrorTypeName, message: string): StaticJsObject;
  error(nameOrMessage: string, message?: string): StaticJsObject {
    let name = "Error";
    if (message !== undefined) {
      name = nameOrMessage;
    } else {
      message = nameOrMessage;
    }

    let proto: StaticJsObject;
    switch (name) {
      case "Error":
      default:
        proto = this._prototypes.errorProto;
        break;
      case "TypeError":
        proto = this._prototypes.typeErrorProto;
        break;
      case "ReferenceError":
        proto = this._prototypes.referenceErrorProto;
        break;
      case "SyntaxError":
        proto = this._prototypes.syntaxErrorProto;
        break;
    }

    const error = this.object(
      {
        name: {
          enumerable: false,
          writable: true,
          configurable: true,
          value: this.string(name),
        },
        message: {
          enumerable: false,
          writable: true,
          configurable: true,
          value: this.string(message),
        },
      },
      proto,
    );
    return error;
  }

  toStaticJsValue(value: boolean): StaticJsBoolean;
  toStaticJsValue(value: number): StaticJsNumber;
  toStaticJsValue(value: string): StaticJsString;
  toStaticJsValue(value: unknown[]): StaticJsArray;
  toStaticJsValue(value: object): StaticJsObject;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  toStaticJsValue(value: Function): StaticJsFunction;
  toStaticJsValue(value: null): StaticJsNull;
  toStaticJsValue(value: undefined): StaticJsUndefined;
  toStaticJsValue(value: unknown): StaticJsValue;
  toStaticJsValue(value: unknown): StaticJsValue {
    if (isStaticJsValue(value)) {
      if (value.realm === this._realm) {
        return value;
      }

      // Unwrap it to re-wrap with our own realm.
      value = value.toJsSync();
    }

    // TODO: Resolve to same instance if this is a toJs() value from an existing object.

    if (value === null) {
      return this._toStaticJsValueNull();
    } else if (value === undefined) {
      return this._toStaticJsValueUndefined();
    } else if (typeof value === "boolean") {
      return this.boolean(value);
    } else if (typeof value === "number") {
      return this.number(value);
    } else if (typeof value === "string") {
      return this.string(value);
    } else if (Array.isArray(value)) {
      return this._toStaticJsValueArray(value);
    } else if (isFunction(value)) {
      return this._toStaticJsValueFunction(value);
    } else if (typeof value === "object") {
      return this._toStaticJsValueObject(value);
    } else {
      throw new Error(
        `Cannot convert ${value} to StaticJsValue: Unknown type.`,
      );
    }
  }

  boolean(value: boolean): StaticJsBoolean {
    if (typeof value !== "boolean") {
      throw new TypeError(
        `Cannot convert ${value} to StaticJsBoolean: Expected boolean.`,
      );
    }

    if (value) {
      return this.true;
    }

    return this.false;
  }

  number(value: number): StaticJsNumber {
    return new StaticJsNumberImpl(this._realm, value);
  }

  string(value: string): StaticJsString {
    return new StaticJsStringImpl(this._realm, value);
  }

  private _toStaticJsValueArray(value: unknown[]): StaticJsArray {
    const values = value.map((v) => this.toStaticJsValue(v));
    return new StaticJsArrayImpl(this._realm, values);
  }

  private _toStaticJsValueFunction(
    value: (...args: unknown[]) => unknown,
  ): StaticJsFunction {
    return new StaticJsExternalFunction(this._realm, value.name, value);
  }

  private _toStaticJsValueObject(value: object): StaticJsObject {
    if (value instanceof Error && isErrorTypeName(value.name)) {
      return this.error(value.name, value.message);
    }

    return new StaticJsExternalObject(this._realm, value);
  }

  private _toStaticJsValueNull(): StaticJsNull {
    return this._null;
  }

  private _toStaticJsValueUndefined(): StaticJsUndefined {
    return this._undefined;
  }
}

// Just "typeof f === 'function'" is not enough, because it will type it as Function.
// There is nothing wrong with this, but the linter gets angry, and so this appeases it.
function isFunction(f: unknown): f is (...args: unknown[]) => unknown {
  return typeof f === "function";
}
