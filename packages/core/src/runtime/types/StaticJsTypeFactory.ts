import type { Prototypes } from "../intrinsics/intrinsics.js";

import type { StaticJsArray } from "./StaticJsArray.js";
import type { StaticJsFunction } from "./StaticJsFunction.js";
import type { StaticJsBoolean } from "./StaticJsBoolean.js";
import type { StaticJsNull } from "./StaticJsNull.js";
import type { StaticJsNumber } from "./StaticJsNumber.js";
import type { StaticJsObject, StaticJsObjectLike } from "./StaticJsObject.js";
import type { StaticJsPropertyDescriptor } from "./StaticJsPropertyDescriptor.js";
import type { StaticJsValue } from "./StaticJsValue.js";
import type { StaticJsString } from "./StaticJsString.js";
import type { StaticJsUndefined } from "./StaticJsUndefined.js";

export type ErrorTypeName =
  | "TypeError"
  | "ReferenceError"
  | "SyntaxError"
  | "Error";

export function isErrorTypeName(name: string): name is ErrorTypeName {
  return ["TypeError", "ReferenceError", "SyntaxError", "Error"].includes(name);
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
    prototype?: StaticJsObjectLike | StaticJsNull | null,
  ): StaticJsObject;

  array(items?: StaticJsValue[]): StaticJsArray;

  error(errorType: ErrorTypeName, message: string): StaticJsObject;
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
