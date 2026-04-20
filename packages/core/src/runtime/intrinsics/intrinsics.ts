import type { StaticJsFunction } from "../types/StaticJsFunction.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsSymbol } from "../types/StaticJsSymbol.js";

// Hack: We really don't fit the createInstrinics spec at all...
// These need to be separate as we drop them into realm.types so that the rest of the creation process can reference them correctly.
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

  iteratorProto: StaticJsObject;
  iteratorHelperProto: StaticJsObject;
  arrayIteratorProto: StaticJsObject;
  stringIteratorProto: StaticJsObject;

  asyncFunctionProto: StaticJsObject;

  generatorProto: StaticJsObject;
  generatorFunctionProto: StaticJsObject;

  asyncGeneratorProto: StaticJsObject;
  asyncGeneratorFunctionProto: StaticJsObject;

  errorProto: StaticJsObject;
  typeErrorProto: StaticJsObject;
  referenceErrorProto: StaticJsObject;
  syntaxErrorProto: StaticJsObject;
  rangeErrorProto: StaticJsObject;
  evalErrorProto: StaticJsObject;
  uriErrorProto: StaticJsObject;
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
  AsyncFunction: StaticJsFunction;
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
