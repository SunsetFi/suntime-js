import { StaticJsFunction } from "../types/interfaces/StaticJsFunction.js";
import { StaticJsObject } from "../types/interfaces/StaticJsObject.js";

export interface Prototypes {
  stringProto: StaticJsObject;
  numberProto: StaticJsObject;
  booleanProto: StaticJsObject;
  objectProto: StaticJsObject;
  arrayProto: StaticJsObject;
  functionProto: StaticJsObject;
  errorProto: StaticJsObject;
  typeErrorProto: StaticJsObject;
  referenceErrorProto: StaticJsObject;
  syntaxErrorProto: StaticJsObject;
}

export interface Constructors {
  String: StaticJsFunction;
  Number: StaticJsFunction;
  Boolean: StaticJsFunction;
  Object: StaticJsFunction;
  Array: StaticJsObject;
  Function: StaticJsObject;
  Error: StaticJsFunction;
  TypeError: StaticJsFunction;
  ReferenceError: StaticJsFunction;
  SyntaxError: StaticJsFunction;
}

export interface Statics {
  Math: StaticJsObject;
}

export type Instrinsics = Statics & Prototypes & Constructors;
