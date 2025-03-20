export * from "./utils/index.js";
export {
  isStaticJsValue,
  isStaticJsArray,
  isStaticJsFunction,
  isStaticJsObject,
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
declare const StaticJsArray: typeof fStaticJsArray;
type StaticJsFunction<TArgs extends StaticJsValue[] = StaticJsValue[]> =
  IStaticJsFunction<TArgs>;
declare const StaticJsFunction: typeof fStaticJsFunction;
type StaticJsObject = IStaticJsObject;
declare const StaticJsObject: typeof fStaticJsObject;
type StaticJsBoolean = IStaticJsBoolean;
declare const StaticJsBoolean: typeof fStaticJsBoolean;
type StaticJsNull = IStaticJsNull;
declare const StaticJsNull: typeof fStaticJsNull;
type StaticJsNumber = IStaticJsNumber;
declare const StaticJsNumber: typeof fStaticJsNumber;
type StaticJsUndefined = IStaticJsUndefined;
declare const StaticJsUndefined: typeof fStaticJsUndefined;
type StaticJsString = IStaticJsString;
declare const StaticJsString: typeof fStaticJsString;
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
