export * from "./utils/index.js";

export {
  isStaticJsValue,
  assertStaticJsValue,
  isStaticJsArray,
  isStaticJsFunction,
  isStaticJsObject,
  isStaticJsObjectLike,
  isStaticJsBoolean,
  isStaticJsNull,
  isStaticJsNumber,
  isStaticJsUndefined,
  isStaticJsString,
} from "./interfaces/index.js";

import type {
  StaticJsArray as IStaticJsArray,
  StaticJsFunction as IStaticJsFunction,
  StaticJsObject as IStaticJsObject,
  StaticJsPrimitive as IStaticJsPrimitive,
  StaticJsBoolean as IStaticJsBoolean,
  StaticJsNull as IStaticJsNull,
  StaticJsNumber as IStaticJsNumber,
  StaticJsScalar as IStaticJsScalar,
  StaticJsUndefined as IStaticJsUndefined,
  StaticJsString as IStaticJsString,
  StaticJsValue as IStaticJsValue,
} from "./interfaces/index.js";

export type {
  StaticJsObjectConfig,
  StaticJsRuntimeFunctionEvaluate,
} from "./factories/index.js";

import {
  StaticJsArray as fStaticJsArray,
  StaticJsFunction as fStaticJsFunction,
  StaticJsObject as fStaticJsObject,
  StaticJsBoolean as fStaticJsBoolean,
  StaticJsNull as fStaticJsNull,
  StaticJsNumber as fStaticJsNumber,
  StaticJsUndefined as fStaticJsUndefined,
  StaticJsString as fStaticJsString,
} from "./factories/index.js";

type StaticJsArray = IStaticJsArray;
const StaticJsArray = fStaticJsArray;

type StaticJsFunction<TArgs extends StaticJsValue[] = StaticJsValue[]> =
  IStaticJsFunction<TArgs>;
const StaticJsFunction = fStaticJsFunction;

type StaticJsObject = IStaticJsObject;
const StaticJsObject = fStaticJsObject;

type StaticJsBoolean = IStaticJsBoolean;
const StaticJsBoolean = fStaticJsBoolean;

type StaticJsNull = IStaticJsNull;
const StaticJsNull = fStaticJsNull;

type StaticJsNumber = IStaticJsNumber;
const StaticJsNumber = fStaticJsNumber;

type StaticJsUndefined = IStaticJsUndefined;
const StaticJsUndefined = fStaticJsUndefined;

type StaticJsString = IStaticJsString;
const StaticJsString = fStaticJsString;

type StaticJsScalar = IStaticJsScalar;
type StaticJsPrimitive = IStaticJsPrimitive;
type StaticJsValue = IStaticJsValue;

export {
  StaticJsArray,
  StaticJsFunction,
  StaticJsObject,
  StaticJsBoolean,
  StaticJsNull,
  StaticJsNumber,
  StaticJsUndefined,
  StaticJsString,
  type StaticJsScalar,
  type StaticJsPrimitive,
  type StaticJsValue,
};
