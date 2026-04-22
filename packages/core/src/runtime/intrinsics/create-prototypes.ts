import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import { StaticJsPlainObjectImpl } from "../types/implementation/objects/StaticJsPlainObjectImpl.js";

import { populateArrayPrototype } from "./Array/index.js";
import { populateArrayIteratorPrototype } from "./ArrayIterator/index.js";
import { populateAsyncFunctionPrototype } from "./AsyncFunction/index.js";
import { populateAsyncGeneratorPrototype } from "./AsyncGenerator/index.js";
import { populateAsyncGeneratorFunctionPrototype } from "./AsyncGeneratorFunction/index.js";
import { populateAsyncIteratorPrototype } from "./AsyncIterator/index.js";
import { populateBooleanPrototype } from "./Boolean.js";
import { populateErrorPrototype } from "./Error/index.js";
import { populateEvalErrorPrototype } from "./EvalError.js";
import { populateFunctionPrototype } from "./Function/index.js";
import { populateGeneratorPrototype } from "./Generator/index.js";
import { populateGeneratorFunctionPrototype } from "./GeneratorFunction/index.js";
import type { Prototypes } from "./intrinsics.js";
import { populateIteratorPrototype } from "./Iterator/index.js";
import { populateIteratorHelperPrototype } from "./IteratorHelper/index.js";
import { populateMapPrototype } from "./Map/index.js";
import { populateNumberPrototype } from "./Number/index.js";
import { populateObjectPrototype } from "./Object/index.js";
import { populatePromisePrototype } from "./Promise/index.js";
import { populateRangeErrorPrototype } from "./RangeError.js";
import { populateReferenceErrorPrototype } from "./ReferenceError.js";
import { populateSetPrototype } from "./Set/index.js";
import { populateStringPrototype } from "./String/index.js";
import { populateStringIteratorPrototype } from "./StringIterator/index.js";
import { populateSymbolPrototype } from "./Symbol/index.js";
import { populateSyntaxErrorPrototype } from "./SyntaxError.js";
import { populateTypeErrorPrototype } from "./TypeError.js";
import { populateURIErrorPrototype } from "./URIError.js";

export function createPrototypes(realm: StaticJsRealm): Prototypes {
  const objectProto = new StaticJsPlainObjectImpl(realm, null);
  const symbolProto = new StaticJsPlainObjectImpl(realm, objectProto);
  const functionProto = new StaticJsPlainObjectImpl(realm, objectProto);

  const stringProto = new StaticJsPlainObjectImpl(realm, objectProto);
  const numberProto = new StaticJsPlainObjectImpl(realm, objectProto);
  const booleanProto = new StaticJsPlainObjectImpl(realm, objectProto);
  const arrayProto = new StaticJsPlainObjectImpl(realm, objectProto);

  const promiseProto = new StaticJsPlainObjectImpl(realm, objectProto);
  const setProto = new StaticJsPlainObjectImpl(realm, objectProto);
  const mapProto = new StaticJsPlainObjectImpl(realm, objectProto);

  const iteratorProto = new StaticJsPlainObjectImpl(realm, objectProto);
  const iteratorHelperProto = new StaticJsPlainObjectImpl(realm, iteratorProto);
  const arrayIteratorProto = new StaticJsPlainObjectImpl(realm, iteratorProto);
  const stringIteratorProto = new StaticJsPlainObjectImpl(realm, iteratorProto);
  const asyncIteratorProto = new StaticJsPlainObjectImpl(realm, iteratorProto);

  const asyncFunctionProto = new StaticJsPlainObjectImpl(realm, functionProto);

  const generatorProto = new StaticJsPlainObjectImpl(realm, iteratorProto);
  const generatorFunctionProto = new StaticJsPlainObjectImpl(realm, functionProto);

  const asyncGeneratorProto = new StaticJsPlainObjectImpl(realm, asyncIteratorProto);
  const asyncGeneratorFunctionProto = new StaticJsPlainObjectImpl(realm, functionProto);

  const errorProto = new StaticJsPlainObjectImpl(realm, objectProto);
  const typeErrorProto = new StaticJsPlainObjectImpl(realm, errorProto);
  const referenceErrorProto = new StaticJsPlainObjectImpl(realm, errorProto);
  const syntaxErrorProto = new StaticJsPlainObjectImpl(realm, errorProto);
  const rangeErrorProto = new StaticJsPlainObjectImpl(realm, errorProto);
  const evalErrorProto = new StaticJsPlainObjectImpl(realm, errorProto);
  const uriErrorProto = new StaticJsPlainObjectImpl(realm, errorProto);

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
    iteratorHelperProto,
    stringIteratorProto,
    asyncIteratorProto,
    setProto,
    mapProto,
    asyncFunctionProto,
    generatorProto,
    generatorFunctionProto,
    asyncGeneratorProto,
    asyncGeneratorFunctionProto,
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

  populateIteratorHelperPrototype(realm, prototypes.iteratorHelperProto);
  populateArrayIteratorPrototype(realm, prototypes.arrayIteratorProto);
  populateStringIteratorPrototype(realm, prototypes.stringIteratorProto);
  populateAsyncIteratorPrototype(realm, prototypes.asyncIteratorProto);

  populateAsyncFunctionPrototype(realm, prototypes.asyncFunctionProto);

  populateGeneratorPrototype(realm, prototypes.generatorProto);
  populateGeneratorFunctionPrototype(realm, prototypes.generatorFunctionProto);

  populateAsyncGeneratorPrototype(realm, prototypes.asyncGeneratorProto);
  populateAsyncGeneratorFunctionPrototype(realm, prototypes.asyncGeneratorFunctionProto);

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
