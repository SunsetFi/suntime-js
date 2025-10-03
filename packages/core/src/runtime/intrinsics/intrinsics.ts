import type { StaticJsFunction } from "../types/StaticJsFunction.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";

export interface Prototypes {
  stringProto: StaticJsObject;
  numberProto: StaticJsObject;
  booleanProto: StaticJsObject;
  objectProto: StaticJsObject;
  arrayProto: StaticJsObject;
  functionProto: StaticJsObject;
  promiseProto: StaticJsObject;
  symbolProto: StaticJsObject;

  errorProto: StaticJsObject;
  typeErrorProto: StaticJsObject;
  referenceErrorProto: StaticJsObject;
  syntaxErrorProto: StaticJsObject;
}

export const prototypeKeys = [
  "stringProto",
  "numberProto",
  "booleanProto",
  "objectProto",
  "symbolProto",
  "arrayProto",
  "functionProto",
  "promiseProto",
  "errorProto",
  "typeErrorProto",
  "referenceErrorProto",
  "syntaxErrorProto",
] as const;

export interface Constructors {
  String: StaticJsFunction;
  Number: StaticJsFunction;
  Boolean: StaticJsFunction;
  Object: StaticJsFunction;
  Symbol: StaticJsFunction;
  Array: StaticJsFunction;
  Function: StaticJsFunction;
  Promise: StaticJsFunction;
  Error: StaticJsFunction;
  TypeError: StaticJsFunction;
  ReferenceError: StaticJsFunction;
  SyntaxError: StaticJsFunction;
}

export const constructorKeys = [
  "String",
  "Number",
  "Boolean",
  "Object",
  "Symbol",
  "Array",
  "Function",
  "Promise",
  "Error",
  "TypeError",
  "ReferenceError",
  "SyntaxError",
] as const;

export interface Statics {
  Math: StaticJsObject;
}

export type Instrinsics = Statics & Prototypes & Constructors;
