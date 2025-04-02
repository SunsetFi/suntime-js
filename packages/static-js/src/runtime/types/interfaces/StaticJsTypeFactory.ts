import { StaticJsArray } from "./StaticJsArray.js";
import { StaticJsFunction } from "./StaticJsFunction.js";
import { StaticJsBoolean } from "./StaticJsBoolean.js";
import { StaticJsNull } from "./StaticJsNull.js";
import { StaticJsNumber } from "./StaticJsNumber.js";
import {
  StaticJsObject,
  StaticJsObjectPropertyDescriptor,
} from "./StaticJsObject.js";
import { StaticJsValue } from "./StaticJsValue.js";
import { StaticJsString } from "./StaticJsString.js";
import { StaticJsUndefined } from "./StaticJsUndefined.js";

export default interface StaticJsTypeFactory {
  readonly stringProto: StaticJsObject;
  readonly numberProto: StaticJsObject;
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
    prototype?: StaticJsObject | StaticJsNull | null,
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
