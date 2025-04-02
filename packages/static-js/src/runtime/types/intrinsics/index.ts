import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";

import StaticJsObjectImpl from "../implementation/StaticJsObjectImpl.js";

import { StaticJsObject } from "../interfaces/StaticJsObject.js";
import { StaticJsFunction } from "../interfaces/StaticJsFunction.js";

import { createObjectConstructor, populateObjectPrototype } from "./Object.js";
import { createArrayConstructor, populateArrayPrototype } from "./Array.js";
import {
  createFunctionConstructor,
  populateFunctionPrototype,
} from "./Function.js";
import { populateStringPrototype, createStringConstructor } from "./String.js";
import { createNumberConstructor, populateNumberPrototype } from "./Number.js";

export interface Prototypes {
  stringProto: StaticJsObject;
  numberProto: StaticJsObject;
  objectProto: StaticJsObject;
  arrayProto: StaticJsObject;
  functionProto: StaticJsObject;
}

export interface Constructors {
  stringCtor: StaticJsFunction;
  numberCtor: StaticJsFunction;
  objectCtor: StaticJsObject;
  arrayCtor: StaticJsObject;
  functionCtor: StaticJsObject;
}

export function createPrototypes(realm: StaticJsRealm): Prototypes {
  // There are some circular references around these, particularly with
  // instantiating functions for properties, so establish them ahead of time.
  const objectProto = new StaticJsObjectImpl(realm, null);

  const stringProto = new StaticJsObjectImpl(realm, objectProto);
  const numberProto = new StaticJsObjectImpl(realm, objectProto);
  const arrayProto = new StaticJsObjectImpl(realm, objectProto);
  const functionProto = new StaticJsObjectImpl(realm, objectProto);

  populateObjectPrototype(realm, objectProto, functionProto);

  populateStringPrototype(realm, stringProto, functionProto);
  populateNumberPrototype(realm, numberProto, functionProto);

  populateArrayPrototype(realm, arrayProto);
  populateFunctionPrototype(realm, functionProto);

  return {
    stringProto,
    numberProto,
    objectProto,
    arrayProto,
    functionProto,
  };
}

export function createConstructors(
  realm: StaticJsRealm,
  {
    stringProto,
    numberProto,
    objectProto,
    functionProto,
    arrayProto,
  }: Prototypes,
): Constructors {
  const stringCtor = createStringConstructor(realm, stringProto, functionProto);
  const numberCtor = createNumberConstructor(realm, numberProto, functionProto);
  const objectCtor = createObjectConstructor(realm, objectProto, functionProto);
  const arrayCtor = createArrayConstructor(realm, arrayProto);
  const functionCtor = createFunctionConstructor(realm, functionProto);
  return {
    stringCtor,
    numberCtor,
    objectCtor,
    arrayCtor,
    functionCtor,
  };
}
