import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";

import { Prototypes } from "../intrinsics/index.js";

import { StaticJsArray } from "../interfaces/StaticJsArray.js";
import { StaticJsFunction } from "../interfaces/StaticJsFunction.js";
import {
  StaticJsObject,
  StaticJsObjectPropertyDescriptor,
} from "../interfaces/StaticJsObject.js";
import StaticJsTypeFactory from "../interfaces/StaticJsTypeFactory.js";
import { isStaticJsValue, StaticJsValue } from "../interfaces/StaticJsValue.js";
import { StaticJsBoolean } from "../interfaces/StaticJsBoolean.js";
import { StaticJsUndefined } from "../interfaces/StaticJsUndefined.js";
import { StaticJsNull } from "../interfaces/StaticJsNull.js";
import { StaticJsNumber } from "../interfaces/StaticJsNumber.js";
import { StaticJsString } from "../interfaces/StaticJsString.js";

import StaticJsArrayImpl from "./StaticJsArrayImpl.js";
import StaticJsBooleanImpl from "./StaticJsBooleanImpl.js";
import StaticJsNullImpl from "./StaticJsNullImpl.js";
import StaticJsNumberImpl from "./StaticJsNumberImpl.js";
import StaticJsObjectImpl from "./StaticJsObjectImpl.js";
import StaticJsStringImpl from "./StaticJsStringImpl.js";
import StaticJsUndefinedImpl from "./StaticJsUndefinedImpl.js";
import StaticJsExternalFunction from "./StaticJsExternalFunction.js";
import StaticJsExternalObject from "./StaticJsExternalObject.js";
import StaticJsStringBoxed from "./StaticJsStringBoxed.js";

export default class StaticJsTypeFactoryImpl implements StaticJsTypeFactory {
  constructor(
    private readonly _realm: StaticJsRealm,
    private readonly _prototypes: Prototypes,
  ) {}

  get stringProto(): StaticJsObject {
    return this._prototypes.stringProto;
  }

  get objectProto(): StaticJsObject {
    return this._prototypes.objectProto;
  }

  get arrayProto(): StaticJsObject {
    return this._prototypes.arrayProto;
  }

  get functionProto(): StaticJsObject {
    return this._prototypes.functionProto;
  }

  get true(): StaticJsBoolean {
    return StaticJsBooleanImpl.true;
  }

  get false(): StaticJsBoolean {
    return StaticJsBooleanImpl.false;
  }

  get undefined(): StaticJsUndefined {
    return StaticJsUndefinedImpl.Instance;
  }

  get null(): StaticJsNull {
    return StaticJsNullImpl.Instance;
  }

  get zero(): StaticJsNumber {
    return StaticJsNumberImpl.zero;
  }

  get NaN(): StaticJsNumber {
    return StaticJsNumberImpl.NaN;
  }

  get Infinity(): StaticJsNumber {
    return StaticJsNumberImpl.Infinity;
  }

  createObject(
    properties?: Record<string, StaticJsObjectPropertyDescriptor>,
    prototype?: StaticJsObject | null,
  ): StaticJsObject {
    if (prototype === undefined) {
      prototype = this.objectProto;
    }
    const obj = new StaticJsObjectImpl(this._realm, prototype);

    if (properties) {
      for (const [key, value] of Object.entries(properties)) {
        obj.defineProperty(key, value);
      }
    }

    return obj;
  }

  createArray(items?: StaticJsValue[]): StaticJsArray {
    return new StaticJsArrayImpl(this._realm, items);
  }

  box(
    value:
      | StaticJsString
      | StaticJsNumber
      | StaticJsBoolean
      | string
      | number
      | boolean,
  ): StaticJsObject {
    if (isStaticJsValue(value)) {
      if (["string", "number", "boolean"].includes(value.runtimeTypeOf)) {
        value = value.toJs() as string | number | boolean;
      } else {
        throw new Error(`Cannot box ${value}.`);
      }
    }

    switch (typeof value) {
      case "string":
        return new StaticJsStringBoxed(this._realm, value);
    }

    throw new Error(`Cannot box ${value}: Unknown type.`);
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
    } else if (typeof value === "function") {
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
    if (value) {
      return this.true;
    }

    return this.false;
  }

  number(value: number): StaticJsNumber {
    return new StaticJsNumberImpl(value);
  }

  string(value: string): StaticJsString {
    return new StaticJsStringImpl(value);
  }

  private _toStaticJsValueArray(value: unknown[]): StaticJsArray {
    const values = value.map((v) => this.toStaticJsValue(v));
    return new StaticJsArrayImpl(this._realm, values);
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  private _toStaticJsValueFunction(value: Function): StaticJsFunction {
    return new StaticJsExternalFunction(this._realm, value.name, value);
  }

  private _toStaticJsValueObject(value: object): StaticJsObject {
    // TODO: Options to control mutatability of the object.
    // IMPORTANT: There are security risks here.  Make sure we can't get access to the underlying object or
    // change its prototype unless opted in.

    return new StaticJsExternalObject(this._realm, value);
  }

  private _toStaticJsValueNull(): StaticJsNull {
    return StaticJsNullImpl.Instance;
  }

  private _toStaticJsValueUndefined(): StaticJsUndefined {
    return StaticJsUndefinedImpl.Instance;
  }
}
