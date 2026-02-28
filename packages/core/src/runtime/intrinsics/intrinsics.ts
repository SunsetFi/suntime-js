import type { StaticJsSymbol } from "../types/StaticJsSymbol.js";
import type { StaticJsFunction } from "../types/StaticJsFunction.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";

export interface Prototypes {
  stringProto: StaticJsObject;
  numberProto: StaticJsObject;
  booleanProto: StaticJsObject;
  objectProto: StaticJsObject;
  arrayProto: StaticJsObject;
  functionProto: StaticJsObject;
  symbolProto: StaticJsObject;
  promiseProto: StaticJsObject;
  setProto: StaticJsObject;
  mapProto: StaticJsObject;

  errorProto: StaticJsObject;
  typeErrorProto: StaticJsObject;
  referenceErrorProto: StaticJsObject;
  syntaxErrorProto: StaticJsObject;
  rangeErrorProto: StaticJsObject;
  evalErrorProto: StaticJsObject;
  uriErrorProto: StaticJsObject;

  iteratorProto: StaticJsObject;
  arrayIteratorProto: StaticJsObject;
  stringIteratorProto: StaticJsObject;
}

export interface Constructors {
  String: StaticJsFunction;
  Number: StaticJsFunction;
  Boolean: StaticJsFunction;
  Object: StaticJsFunction;
  Symbol: StaticJsFunction;
  Array: StaticJsFunction;
  Function: StaticJsFunction;
  Iterator: StaticJsFunction;
  Promise: StaticJsFunction;
  Set: StaticJsFunction;
  Map: StaticJsFunction;
  Error: StaticJsFunction;
  TypeError: StaticJsFunction;
  ReferenceError: StaticJsFunction;
  SyntaxError: StaticJsFunction;
  RangeError: StaticJsFunction;
  EvalError: StaticJsFunction;
  URIError: StaticJsFunction;
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
