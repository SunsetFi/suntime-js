import StaticJsRealm from "../realm/interfaces/StaticJsRealm.js";

import StaticJsObjectImpl from "../types/implementation/StaticJsObjectImpl.js";

import { StaticJsObject } from "../types/interfaces/StaticJsObject.js";
import { StaticJsFunction } from "../types/interfaces/StaticJsFunction.js";

import {
  createObjectConstructor,
  populateObjectPrototype,
} from "./Object/index.js";
import {
  createArrayConstructor,
  populateArrayPrototype,
} from "./Array/index.js";
import {
  createFunctionConstructor,
  populateFunctionPrototype,
} from "./Function.js";
import { populateStringPrototype, createStringConstructor } from "./String.js";
import { createNumberConstructor, populateNumberPrototype } from "./Number.js";
import {
  createBooleanConstructor,
  populateBooleanPrototype,
} from "./Boolean.js";
import {
  createErrorConstructor,
  populateErrorPrototype,
} from "./Error/index.js";

export interface Prototypes {
  stringProto: StaticJsObject;
  numberProto: StaticJsObject;
  booleanProto: StaticJsObject;
  objectProto: StaticJsObject;
  arrayProto: StaticJsObject;
  functionProto: StaticJsObject;
  errorProto: StaticJsObject;
}

export interface Constructors {
  stringCtor: StaticJsFunction;
  numberCtor: StaticJsFunction;
  booleanCtor: StaticJsFunction;
  objectCtor: StaticJsFunction;
  arrayCtor: StaticJsObject;
  functionCtor: StaticJsObject;
  errorCtor: StaticJsFunction;
}

export function createPrototypes(realm: StaticJsRealm): Prototypes {
  // There are some circular references around these, particularly with
  // instantiating functions for properties, so establish them ahead of time.
  const objectProto = new StaticJsObjectImpl(realm, null);
  const functionProto = new StaticJsObjectImpl(realm, objectProto);

  const stringProto = new StaticJsObjectImpl(realm, objectProto);
  const numberProto = new StaticJsObjectImpl(realm, objectProto);
  const booleanProto = new StaticJsObjectImpl(realm, objectProto);
  const arrayProto = new StaticJsObjectImpl(realm, objectProto);

  const errorProto = new StaticJsObjectImpl(realm, objectProto);

  populateObjectPrototype(realm, objectProto, functionProto);
  populateFunctionPrototype(realm, functionProto);

  populateStringPrototype(realm, stringProto, functionProto);
  populateNumberPrototype(realm, numberProto, functionProto);
  populateBooleanPrototype(realm, booleanProto, functionProto);

  populateArrayPrototype(realm, arrayProto, functionProto);

  populateErrorPrototype(realm, errorProto, functionProto);

  return {
    stringProto,
    numberProto,
    booleanProto,
    objectProto,
    arrayProto,
    functionProto,
    errorProto,
  };
}

export function createConstructors(
  realm: StaticJsRealm,
  {
    stringProto,
    numberProto,
    booleanProto,
    objectProto,
    functionProto,
    arrayProto,
    errorProto,
  }: Prototypes,
): Constructors {
  const stringCtor = createStringConstructor(realm, stringProto, functionProto);
  stringProto.defineProperty("constructor", {
    value: stringCtor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  const numberCtor = createNumberConstructor(realm, numberProto, functionProto);
  numberProto.defineProperty("constructor", {
    value: numberCtor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  const booleanCtor = createBooleanConstructor(
    realm,
    booleanProto,
    functionProto,
  );
  booleanProto.defineProperty("constructor", {
    value: booleanCtor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  const objectCtor = createObjectConstructor(realm, objectProto, functionProto);
  objectProto.defineProperty("constructor", {
    value: objectCtor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  const arrayCtor = createArrayConstructor(realm, arrayProto);
  arrayProto.defineProperty("constructor", {
    value: arrayCtor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  const functionCtor = createFunctionConstructor(realm, functionProto);
  functionProto.defineProperty("constructor", {
    value: functionCtor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  const errorCtor = createErrorConstructor(realm, errorProto, functionProto);
  errorProto.defineProperty("constructor", {
    value: errorCtor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return {
    stringCtor,
    numberCtor,
    booleanCtor,
    objectCtor,
    arrayCtor,
    functionCtor,
    errorCtor,
  };
}
