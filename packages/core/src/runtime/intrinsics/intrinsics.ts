import { StaticJsCallable } from "../types/StaticJsCallable.js";
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
  asyncIteratorProto: StaticJsObject;
  setIteratorProto: StaticJsObject;
  mapIteratorProto: StaticJsObject;
  asyncFromSyncIteratorProto: StaticJsObject;

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
  // observable: StaticJsSymbol;
  replace: StaticJsSymbol;
  search: StaticJsSymbol;
  species: StaticJsSymbol;
  split: StaticJsSymbol;
  toPrimitive: StaticJsSymbol;
  toStringTag: StaticJsSymbol;
  unscopables: StaticJsSymbol;
}

export interface NativeErrors {
  EvalError: StaticJsFunction;
  RangeError: StaticJsFunction;
  ReferenceError: StaticJsFunction;
  SyntaxError: StaticJsFunction;
  TypeError: StaticJsFunction;
  URIError: StaticJsFunction;
}

export interface IntrinsicsRecord {
  // AggregateError: StaticJsFunction;

  Array: StaticJsFunction;
  ["Array.prototype"]: StaticJsObject;

  // ArrayBuffer
  ArrayIteratorPrototype: StaticJsObject;

  AsyncFromSyncIteratorPrototype: StaticJsObject;

  AsyncFunction: StaticJsFunction;
  ["AsyncFunction.prototype"]: StaticJsObject;

  AsyncGeneratorFunction: StaticJsFunction;
  ["AsyncGeneratorFunction.prototype"]: StaticJsObject;

  AsyncGeneratorPrototype: StaticJsObject;

  AsyncIteratorPrototype: StaticJsObject;

  // Atomics

  // BigInt

  // BigInt64Array

  // BigUint64Array

  Boolean: StaticJsFunction;
  ["Boolean.prototype"]: StaticJsObject;

  // DataView

  // Date

  // decodeURI

  // decodeURIComponent

  // encodeURI

  // encodeURIComponent

  Error: StaticJsFunction;
  ["Error.prototype"]: StaticJsObject;

  eval: StaticJsFunction;

  EvalError: StaticJsFunction;
  ["EvalError.prototype"]: StaticJsObject;

  // FinalizationRegistry

  // Float16Array

  // Float32Array

  // Float64Array

  ForInIteratorPrototype: StaticJsObject;

  Function: StaticJsFunction;
  ["Function.prototype"]: StaticJsCallable;

  GeneratorFunction: StaticJsFunction;
  ["GeneratorFunction.prototype"]: StaticJsObject;

  GeneratorPrototype: StaticJsObject;

  // Int8Array

  // Int16Array

  // Int32Array

  isFinite: StaticJsFunction;

  isNaN: StaticJsFunction;

  Iterator: StaticJsFunction;
  ["Iterator.prototype"]: StaticJsObject;

  IteratorHelperPrototype: StaticJsObject;

  // JSON

  Map: StaticJsFunction;
  ["Map.prototype"]: StaticJsObject;

  MapIteratorPrototype: StaticJsObject;

  Math: StaticJsObject;

  Number: StaticJsFunction;
  ["Number.prototype"]: StaticJsObject;

  Object: StaticJsFunction;
  ["Object.prototype"]: StaticJsObject;

  parseFloat: StaticJsFunction;

  parseInt: StaticJsFunction;

  Promise: StaticJsFunction;
  ["Promise.prototype"]: StaticJsObject;

  Proxy: StaticJsFunction;

  RangeError: StaticJsFunction;
  ["RangeError.prototype"]: StaticJsObject;

  ReferenceError: StaticJsFunction;
  ["ReferenceError.prototype"]: StaticJsObject;

  Reflect: StaticJsObject;

  // RegExp

  // RegExpStringIteratorPrototype

  Set: StaticJsFunction;
  ["Set.prototype"]: StaticJsObject;

  SetIteratorPrototype: StaticJsObject;

  // SharedArrayBuffer

  String: StaticJsFunction;
  ["String.prototype"]: StaticJsObject;

  StringIteratorPrototype: StaticJsObject;

  Symbol: StaticJsFunction;
  ["Symbol.prototype"]: StaticJsObject;
  ["Symbol.asyncDispose"]: StaticJsSymbol;
  ["Symbol.asyncIterator"]: StaticJsSymbol;
  ["Symbol.dispose"]: StaticJsSymbol;
  ["Symbol.hasInstance"]: StaticJsSymbol;
  ["Symbol.isConcatSpreadable"]: StaticJsSymbol;
  ["Symbol.iterator"]: StaticJsSymbol;
  ["Symbol.match"]: StaticJsSymbol;
  ["Symbol.matchAll"]: StaticJsSymbol;
  ["Symbol.observable"]: StaticJsSymbol;
  ["Symbol.replace"]: StaticJsSymbol;
  ["Symbol.search"]: StaticJsSymbol;
  ["Symbol.species"]: StaticJsSymbol;
  ["Symbol.split"]: StaticJsSymbol;
  ["Symbol.toPrimitive"]: StaticJsSymbol;
  ["Symbol.toStringTag"]: StaticJsSymbol;
  ["Symbol.unscopables"]: StaticJsSymbol;

  SyntaxError: StaticJsFunction;
  ["SyntaxError.prototype"]: StaticJsObject;

  ThrowTypeError: StaticJsFunction;

  // TypedArray

  TypeError: StaticJsFunction;
  ["TypeError.prototype"]: StaticJsObject;

  // Uint8ARray

  // Uint8ClampedArray

  // Uint16Array

  // Uint32Array

  URIError: StaticJsFunction;
  ["URIError.prototype"]: StaticJsObject;

  // WeakMap

  // WeakSet

  // WrapForValidIteratorPrototype
}

export type Intrinsics = Readonly<IntrinsicsRecord>;
