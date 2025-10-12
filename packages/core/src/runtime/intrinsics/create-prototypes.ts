import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import StaticJsObjectImpl from "../types/implementation/StaticJsObjectImpl.js";

import type { Prototypes } from "./intrinsics.js";

import { populateObjectPrototype } from "./Object/index.js";
import { populateSymbolPrototype } from "./Symbol/index.js";
import { populateArrayPrototype } from "./Array/index.js";
import { populateFunctionPrototype } from "./Function/index.js";
import { populateStringPrototype } from "./String/index.js";
import { populateNumberPrototype } from "./Number/index.js";
import { populateBooleanPrototype } from "./Boolean.js";
import { populatePromisePrototype } from "./Promise/index.js";
import { populateErrorPrototype } from "./Error/index.js";
import { populateTypeErrorPrototype } from "./TypeError.js";
import { populateReferenceErrorPrototype } from "./ReferenceError.js";
import { populateSyntaxErrorPrototype } from "./SyntaxError.js";
import { populateIteratorPrototype } from "./Iterator.js";
import { populateRangeErrorPrototype } from "./RangeError.js";

export function createPrototypes(realm: StaticJsRealm): Prototypes {
  const objectProto = new StaticJsObjectImpl(realm, null);
  const symbolProto = new StaticJsObjectImpl(realm, objectProto);
  const functionProto = new StaticJsObjectImpl(realm, objectProto);

  const stringProto = new StaticJsObjectImpl(realm, objectProto);
  const numberProto = new StaticJsObjectImpl(realm, objectProto);
  const booleanProto = new StaticJsObjectImpl(realm, objectProto);
  const arrayProto = new StaticJsObjectImpl(realm, objectProto);

  const promiseProto = new StaticJsObjectImpl(realm, objectProto);

  const errorProto = new StaticJsObjectImpl(realm, objectProto);
  const typeErrorProto = new StaticJsObjectImpl(realm, errorProto);
  const referenceErrorProto = new StaticJsObjectImpl(realm, errorProto);
  const syntaxErrorProto = new StaticJsObjectImpl(realm, errorProto);
  const rangeErrorProto = new StaticJsObjectImpl(realm, errorProto);

  const iteratorProto = new StaticJsObjectImpl(realm, objectProto);

  return {
    stringProto,
    numberProto,
    booleanProto,
    objectProto,
    symbolProto,
    arrayProto,
    functionProto,
    promiseProto,
    errorProto,
    typeErrorProto,
    referenceErrorProto,
    syntaxErrorProto,
    rangeErrorProto,
    iteratorProto,
  };
}

export function instantiatePrototypes(realm: StaticJsRealm) {
  const { prototypes } = realm.types;

  populateObjectPrototype(realm, prototypes.objectProto);
  populateSymbolPrototype(realm, prototypes.symbolProto);
  populateFunctionPrototype(realm, prototypes.functionProto);

  populateStringPrototype(realm, prototypes.stringProto);
  populateNumberPrototype(realm, prototypes.numberProto);
  populateBooleanPrototype(realm, prototypes.booleanProto);

  populateArrayPrototype(realm, prototypes.arrayProto);

  populatePromisePrototype(realm, prototypes.promiseProto);

  populateErrorPrototype(realm, prototypes.errorProto);
  populateTypeErrorPrototype(realm, prototypes.typeErrorProto);
  populateReferenceErrorPrototype(realm, prototypes.referenceErrorProto);
  populateSyntaxErrorPrototype(realm, prototypes.syntaxErrorProto);
  populateRangeErrorPrototype(realm, prototypes.rangeErrorProto);

  populateIteratorPrototype(realm, prototypes.iteratorProto);
}
