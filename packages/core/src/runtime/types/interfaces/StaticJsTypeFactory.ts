import { StaticJsArray } from "./StaticJsArray.js";
import { StaticJsFunction } from "./StaticJsFunction.js";
import { StaticJsBoolean } from "./StaticJsBoolean.js";
import { StaticJsNull } from "./StaticJsNull.js";
import { StaticJsNumber } from "./StaticJsNumber.js";
import { StaticJsObject } from "./StaticJsObject.js";
import { StaticJsPropertyDescriptor } from "./StaticJsPropertyDescriptor.js";
import { StaticJsValue } from "./StaticJsValue.js";
import { StaticJsString } from "./StaticJsString.js";
import { StaticJsUndefined } from "./StaticJsUndefined.js";

export type ErrorTypeName =
  | "TypeError"
  | "ReferenceError"
  | "SyntaxError"
  | "Error";

export function isErrorTypeName(name: string): name is ErrorTypeName {
  return ["TypeError", "ReferenceError", "SyntaxError", "Error"].includes(name);
}

export interface Prototypes {
  stringProto: StaticJsObject;
  numberProto: StaticJsObject;
  booleanProto: StaticJsObject;
  objectProto: StaticJsObject;
  arrayProto: StaticJsObject;
  functionProto: StaticJsObject;
  errorProto: StaticJsObject;
  typeErrorProto: StaticJsObject;
  referenceErrorProto: StaticJsObject;
  syntaxErrorProto: StaticJsObject;
}

export interface Constructors {
  String: StaticJsFunction;
  Number: StaticJsFunction;
  Boolean: StaticJsFunction;
  Object: StaticJsFunction;
  Array: StaticJsObject;
  Function: StaticJsObject;
  Error: StaticJsFunction;
  TypeError: StaticJsFunction;
  ReferenceError: StaticJsFunction;
  SyntaxError: StaticJsFunction;
}

export default interface StaticJsTypeFactory {
  readonly prototypes: Prototypes;

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

  object(
    properties?: Record<string, StaticJsPropertyDescriptor>,
    prototype?: StaticJsObject | StaticJsNull | null,
  ): StaticJsObject;

  array(items?: StaticJsValue[]): StaticJsArray;

  error(name: ErrorTypeName, message: string): StaticJsObject;
  error(message: string): StaticJsObject;

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
