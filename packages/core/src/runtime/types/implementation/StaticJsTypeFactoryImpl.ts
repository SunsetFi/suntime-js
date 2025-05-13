import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";

import { StaticJsArray } from "../interfaces/StaticJsArray.js";
import { StaticJsFunction } from "../interfaces/StaticJsFunction.js";
import {
  StaticJsObject,
  StaticJsObjectLike,
} from "../interfaces/StaticJsObject.js";
import { StaticJsPropertyDescriptor } from "../interfaces/StaticJsPropertyDescriptor.js";
import StaticJsTypeFactory, {
  ErrorTypeName,
  isErrorTypeName,
} from "../interfaces/StaticJsTypeFactory.js";
import { isStaticJsValue, StaticJsValue } from "../interfaces/StaticJsValue.js";
import { StaticJsBoolean } from "../interfaces/StaticJsBoolean.js";
import { StaticJsUndefined } from "../interfaces/StaticJsUndefined.js";
import { isStaticJsNull, StaticJsNull } from "../interfaces/StaticJsNull.js";
import { StaticJsNumber } from "../interfaces/StaticJsNumber.js";
import { StaticJsString } from "../interfaces/StaticJsString.js";

import { Prototypes } from "../../intrinsics/intrinsics.js";

import StaticJsArrayImpl from "./StaticJsArrayImpl.js";
import StaticJsBooleanImpl from "./StaticJsBooleanImpl.js";
import StaticJsNullImpl from "./StaticJsNullImpl.js";
import StaticJsNumberImpl from "./StaticJsNumberImpl.js";
import StaticJsObjectImpl from "./StaticJsObjectImpl.js";
import StaticJsStringImpl from "./StaticJsStringImpl.js";
import StaticJsUndefinedImpl from "./StaticJsUndefinedImpl.js";
import StaticJsExternalFunction from "./StaticJsExternalFunction.js";
import StaticJsExternalObject from "./StaticJsExternalObject.js";

export default class StaticJsTypeFactoryImpl implements StaticJsTypeFactory {
  private _zero: StaticJsNumber;
  private _NaN: StaticJsNumber;
  private _Infinity: StaticJsNumber;

  private _false: StaticJsBoolean;
  private _true: StaticJsBoolean;

  constructor(
    private readonly _realm: StaticJsRealm,
    private readonly _prototypes: Prototypes,
  ) {
    this._zero = new StaticJsNumberImpl(_realm, 0);
    this._NaN = new StaticJsNumberImpl(_realm, NaN);
    this._Infinity = new StaticJsNumberImpl(_realm, Infinity);

    this._false = new StaticJsBooleanImpl(_realm, false);
    this._true = new StaticJsBooleanImpl(_realm, true);

    this._prototypes = Object.freeze({ ..._prototypes });
  }

  get prototypes(): Prototypes {
    return this._prototypes;
  }

  get true(): StaticJsBoolean {
    return this._true;
  }

  get false(): StaticJsBoolean {
    return this._false;
  }

  get undefined(): StaticJsUndefined {
    return StaticJsUndefinedImpl.Instance;
  }

  get null(): StaticJsNull {
    return StaticJsNullImpl.Instance;
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
        obj.defineProperty(key, value);
      }
    }

    return obj;
  }

  array(items?: StaticJsValue[]): StaticJsArray {
    return new StaticJsArrayImpl(this._realm, items);
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
    // TODO: Still wrap if its from a different realm.
    if (isStaticJsValue(value)) {
      return value;
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
    return StaticJsNullImpl.Instance;
  }

  private _toStaticJsValueUndefined(): StaticJsUndefined {
    return StaticJsUndefinedImpl.Instance;
  }
}

// Just "typeof f === 'function'" is not enough, because it will type it as Function.
// There is nothing wrong with this, but the linter gets angry, and so this appeases it.
function isFunction(f: unknown): f is (...args: unknown[]) => unknown {
  return typeof f === "function";
}
