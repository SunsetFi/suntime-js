import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";

import { StaticJsObject } from "../interfaces/StaticJsObject.js";

import { createObjectConstructor, populateObjectPrototype } from "./Object.js";
import { createArrayConstructor, populateArrayPrototype } from "./Array.js";
import {
  createFunctionConstructor,
  populateFunctionPrototype,
} from "./Function.js";
import StaticJsObjectImpl from "../implementation/StaticJsObjectImpl.js";

export interface Prototypes {
  objectProto: StaticJsObject;
  arrayProto: StaticJsObject;
  functionProto: StaticJsObject;
}

export interface Constructors {
  objectCtor: StaticJsObject;
  arrayCtor: StaticJsObject;
  functionCtor: StaticJsObject;
}

export function createPrototypes(realm: StaticJsRealm): Prototypes {
  // There are some circular references around these, particularly with
  // instantiating functions for properties, so establish them ahead of time.
  const objectProto = new StaticJsObjectImpl(realm, null);
  const arrayProto = new StaticJsObjectImpl(realm, objectProto);
  const functionProto = new StaticJsObjectImpl(realm, objectProto);

  populateObjectPrototype(realm, objectProto, functionProto);
  populateArrayPrototype(realm, arrayProto, objectProto);
  populateFunctionPrototype(realm, functionProto);

  return {
    objectProto,
    arrayProto,
    functionProto,
  };
}

export function createConstructors(
  realm: StaticJsRealm,
  { objectProto, functionProto, arrayProto }: Prototypes,
): Constructors {
  const objectCtor = createObjectConstructor(realm, objectProto, functionProto);
  const arrayCtor = createArrayConstructor(realm, arrayProto);
  const functionCtor = createFunctionConstructor(realm, functionProto);
  return {
    objectCtor,
    arrayCtor,
    functionCtor,
  };
}
