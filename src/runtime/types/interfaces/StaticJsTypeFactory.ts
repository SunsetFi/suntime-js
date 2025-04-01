import { StaticJsNull } from "../index.js";
import { StaticJsArray } from "./StaticJsArray.js";
import { StaticJsFunction } from "./StaticJsFunction.js";
import {
  StaticJsObject,
  StaticJsObjectPropertyDescriptor,
} from "./StaticJsObject.js";
import {
  StaticJsBoolean,
  StaticJsNumber,
  StaticJsString,
  StaticJsUndefined,
} from "./StaticJsScalar.js";
import { StaticJsValue } from "./StaticJsValue.js";

export default interface StaticJsTypeFactory {
  readonly objectProto: StaticJsObject;
  readonly arrayProto: StaticJsObject;
  readonly functionProto: StaticJsObject;

  readonly undefined: StaticJsUndefined;
  readonly null: StaticJsNull;

  readonly true: StaticJsBoolean;
  readonly false: StaticJsBoolean;

  readonly zero: StaticJsNumber;
  readonly NaN: StaticJsNumber;
  readonly Infinity: StaticJsNumber;

  boolean(value: boolean): StaticJsBoolean;
  number(value: number): StaticJsNumber;
  string(value: string): StaticJsString;

  createObject(
    properties?: Record<string, StaticJsObjectPropertyDescriptor>,
    prototype?: StaticJsObject | null,
  ): StaticJsObject;

  createArray(items?: StaticJsValue[]): StaticJsArray;

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
}
