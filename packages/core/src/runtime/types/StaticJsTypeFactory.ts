import type { Constructors, Prototypes, IntrinsicSymbols } from "../intrinsics/intrinsics.js";

import type { StaticJsArray } from "./StaticJsArray.js";
import type { StaticJsFunction } from "./StaticJsFunction.js";
import type { StaticJsBoolean } from "./StaticJsBoolean.js";
import type { StaticJsNull } from "./StaticJsNull.js";
import type { StaticJsNumber } from "./StaticJsNumber.js";
import type { StaticJsObjectLike, StaticJsObjectPropertyKey } from "./StaticJsObjectLike.js";
import type { StaticJsObject } from "./StaticJsObject.js";
import type { StaticJsPropertyDescriptor } from "./StaticJsPropertyDescriptor.js";
import type { StaticJsValue } from "./StaticJsValue.js";
import type { StaticJsString } from "./StaticJsString.js";
import type { StaticJsSymbol } from "./StaticJsSymbol.js";
import type { StaticJsUndefined } from "./StaticJsUndefined.js";

export type ErrorTypeName = "TypeError" | "ReferenceError" | "SyntaxError" | "RangeError" | "Error";

export function isErrorTypeName(name: string): name is ErrorTypeName {
  return ["TypeError", "ReferenceError", "SyntaxError", "Error"].includes(name);
}

export type StaticJsTypeCreationPrototype = StaticJsObjectLike | StaticJsNull | null;

export interface StaticJsFunctionTypeCreationOptions {
  isConstructor?: boolean;
  length?: number;
  prototype?: StaticJsTypeCreationPrototype;
}

export default interface StaticJsTypeFactory {
  readonly prototypes: Prototypes;
  readonly constructors: Constructors;
  readonly symbols: IntrinsicSymbols;
  readonly symbolRegistry: Map<string, StaticJsSymbol>;

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
    properties?:
      | Record<string, StaticJsPropertyDescriptor>
      | Map<StaticJsObjectPropertyKey, StaticJsPropertyDescriptor>,
    prototype?: StaticJsTypeCreationPrototype,
  ): StaticJsObject;

  symbol(description?: string): StaticJsSymbol;

  array(itemsOrLength?: StaticJsValue[] | number): StaticJsArray;

  function(
    name: string,
    func: (this: StaticJsValue, ...args: StaticJsValue[]) => StaticJsValue,
    opts?: StaticJsFunctionTypeCreationOptions,
  ): StaticJsFunction;

  error(errorType: ErrorTypeName, message: string): StaticJsObject;
  error(message: string): StaticJsObject;

  toStaticJsValue(value: (...args: unknown[]) => unknown): StaticJsFunction;
  toStaticJsValue(value: boolean): StaticJsBoolean;
  toStaticJsValue(value: number): StaticJsNumber;
  toStaticJsValue(value: string): StaticJsString;
  toStaticJsValue(value: unknown[]): StaticJsArray;
  toStaticJsValue(value: object): StaticJsObject;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  toStaticJsValue(value: Function): StaticJsFunction;
  toStaticJsValue(value: symbol): StaticJsSymbol;
  toStaticJsValue(value: null): StaticJsNull;
  toStaticJsValue(value: undefined): StaticJsUndefined;
  toStaticJsValue(value: unknown): StaticJsValue;
}
