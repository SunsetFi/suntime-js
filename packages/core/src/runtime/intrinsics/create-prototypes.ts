import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import StaticJsObjectImpl from "../types/implementation/StaticJsObjectImpl.js";

import type { Prototypes } from "./intrinsics.js";

import { populateArrayPrototype } from "./Array/index.js";
import { populateArrayIteratorPrototype } from "./ArrayIterator/index.js";
import { populateErrorPrototype } from "./Error/index.js";
import { populateFunctionPrototype } from "./Function/index.js";
import { populateIteratorPrototype } from "./Iterator/index.js";
import { populateMapPrototype } from "./Map/index.js";
import { populateNumberPrototype } from "./Number/index.js";
import { populateObjectPrototype } from "./Object/index.js";
import { populatePromisePrototype } from "./Promise/index.js";
import { populateSetPrototype } from "./Set/index.js";
import { populateStringPrototype } from "./String/index.js";
import { populateSymbolPrototype } from "./Symbol/index.js";

import { populateBooleanPrototype } from "./Boolean.js";
import { populateEvalErrorPrototype } from "./EvalError.js";
import { populateRangeErrorPrototype } from "./RangeError.js";
import { populateReferenceErrorPrototype } from "./ReferenceError.js";
import { populateSyntaxErrorPrototype } from "./SyntaxError.js";
import { populateTypeErrorPrototype } from "./TypeError.js";
import { populateURIErrorPrototype } from "./URIError.js";

export function createPrototypes(realm: StaticJsRealm): Prototypes {
  const objectProto = new StaticJsObjectImpl(realm, null);
  const symbolProto = new StaticJsObjectImpl(realm, objectProto);
  const functionProto = new StaticJsObjectImpl(realm, objectProto);

  const stringProto = new StaticJsObjectImpl(realm, objectProto);
  const numberProto = new StaticJsObjectImpl(realm, objectProto);
  const booleanProto = new StaticJsObjectImpl(realm, objectProto);
  const arrayProto = new StaticJsObjectImpl(realm, objectProto);

  const promiseProto = new StaticJsObjectImpl(realm, objectProto);
  const iteratorProto = new StaticJsObjectImpl(realm, objectProto);
  const arrayIteratorProto = new StaticJsObjectImpl(realm, iteratorProto);
  const setProto = new StaticJsObjectImpl(realm, objectProto);
  const mapProto = new StaticJsObjectImpl(realm, objectProto);

  const errorProto = new StaticJsObjectImpl(realm, objectProto);
  const typeErrorProto = new StaticJsObjectImpl(realm, errorProto);
  const referenceErrorProto = new StaticJsObjectImpl(realm, errorProto);
  const syntaxErrorProto = new StaticJsObjectImpl(realm, errorProto);
  const rangeErrorProto = new StaticJsObjectImpl(realm, errorProto);
  const evalErrorProto = new StaticJsObjectImpl(realm, errorProto);
  const uriErrorProto = new StaticJsObjectImpl(realm, errorProto);

  return {
    stringProto,
    numberProto,
    booleanProto,
    objectProto,
    symbolProto,
    arrayProto,
    functionProto,
    promiseProto,
    iteratorProto,
    arrayIteratorProto,
    setProto,
    mapProto,
    errorProto,
    typeErrorProto,
    referenceErrorProto,
    syntaxErrorProto,
    rangeErrorProto,
    evalErrorProto,
    uriErrorProto,
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

  populateIteratorPrototype(realm, prototypes.iteratorProto);
  populateArrayIteratorPrototype(realm, prototypes.arrayIteratorProto);

  populatePromisePrototype(realm, prototypes.promiseProto);
  populateIteratorPrototype(realm, prototypes.iteratorProto);
  populateSetPrototype(realm, prototypes.setProto);
  populateMapPrototype(realm, prototypes.mapProto);

  populateErrorPrototype(realm, prototypes.errorProto);
  populateTypeErrorPrototype(realm, prototypes.typeErrorProto);
  populateReferenceErrorPrototype(realm, prototypes.referenceErrorProto);
  populateSyntaxErrorPrototype(realm, prototypes.syntaxErrorProto);
  populateRangeErrorPrototype(realm, prototypes.rangeErrorProto);
  populateEvalErrorPrototype(realm, prototypes.evalErrorProto);
  populateURIErrorPrototype(realm, prototypes.uriErrorProto);
}
