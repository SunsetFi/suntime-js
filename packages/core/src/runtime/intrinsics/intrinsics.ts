import type { StaticJsSymbol } from "../types/StaticJsSymbol.js";
import type { StaticJsFunction } from "../types/StaticJsFunction.js";
import type { StaticJsPlainObject } from "../types/StaticJsPlainObject.js";

export interface Prototypes {
  stringProto: StaticJsPlainObject;
  numberProto: StaticJsPlainObject;
  booleanProto: StaticJsPlainObject;
  objectProto: StaticJsPlainObject;
  arrayProto: StaticJsPlainObject;
  functionProto: StaticJsPlainObject;
  symbolProto: StaticJsPlainObject;
  promiseProto: StaticJsPlainObject;
  setProto: StaticJsPlainObject;
  mapProto: StaticJsPlainObject;

  iteratorProto: StaticJsPlainObject;
  iteratorHelperProto: StaticJsPlainObject;
  arrayIteratorProto: StaticJsPlainObject;
  stringIteratorProto: StaticJsPlainObject;

  generatorProto: StaticJsPlainObject;
  generatorFunctionProto: StaticJsPlainObject;

  asyncGeneratorProto: StaticJsPlainObject;
  asyncGeneratorFunctionProto: StaticJsPlainObject;

  errorProto: StaticJsPlainObject;
  typeErrorProto: StaticJsPlainObject;
  referenceErrorProto: StaticJsPlainObject;
  syntaxErrorProto: StaticJsPlainObject;
  rangeErrorProto: StaticJsPlainObject;
  evalErrorProto: StaticJsPlainObject;
  uriErrorProto: StaticJsPlainObject;
}

export interface Constructors {
  String: StaticJsFunction;
  Number: StaticJsFunction;
  Boolean: StaticJsFunction;
  Object: StaticJsFunction;
  Symbol: StaticJsFunction;
  Array: StaticJsFunction;
  Iterator: StaticJsFunction;
  Promise: StaticJsFunction;
  Proxy: StaticJsFunction;
  Set: StaticJsFunction;
  Map: StaticJsFunction;
  Error: StaticJsFunction;
  TypeError: StaticJsFunction;
  ReferenceError: StaticJsFunction;
  SyntaxError: StaticJsFunction;
  RangeError: StaticJsFunction;
  EvalError: StaticJsFunction;
  URIError: StaticJsFunction;
  Function: StaticJsFunction;
  GeneratorFunction: StaticJsFunction;
  AsyncGeneratorFunction: StaticJsFunction;
}

export interface IntrinsicSymbols {
  asyncDispose: StaticJsSymbol;
  asyncIterator: StaticJsSymbol;
  dispose: StaticJsSymbol;
  hasInstance: StaticJsSymbol;
  isConcatSpreadable: StaticJsSymbol;
  iterator: StaticJsSymbol;
  match: StaticJsSymbol;
  matchAll: StaticJsSymbol;
  observable: StaticJsSymbol;
  replace: StaticJsSymbol;
  search: StaticJsSymbol;
  species: StaticJsSymbol;
  split: StaticJsSymbol;
  toPrimitive: StaticJsSymbol;
  toStringTag: StaticJsSymbol;
  unscopables: StaticJsSymbol;
}
