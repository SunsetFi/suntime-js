export {
  type StaticJsObjectPropertyDescriptor,
  isStaticJsValue,
  isStaticJsScalar,
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

export type { StaticJsObjectConfig } from "./factories/StaticJsObject.js";

import fStaticJsArray from "./factories/StaticJsArray.js";
import fStaticJsFunction from "./factories/StaticJsFunction.js";
import fStaticJsObject from "./factories/StaticJsObject.js";
import fStaticJsBoolean from "./factories/StaticJsBoolean.js";
import fStaticJsNull from "./factories/StaticJsNull.js";
import fStaticJsNumber from "./factories/StaticJsNumber.js";
import fStaticJsUndefined from "./factories/StaticJsUndefined.js";
import fStaticJsString from "./factories/StaticJsString.js";
import fStaticJsValue from "./factories/StaticJsValue.js";

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
const StaticJsValue = fStaticJsValue;

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
  StaticJsValue,
};
