import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import { StaticJsPlainObjectImpl } from "../types/implementation/objects/StaticJsPlainObjectImpl.js";

import { populateArrayPrototype } from "./Array/index.js";
import { populateArrayIteratorPrototype } from "./ArrayIterator/index.js";
import { populateAsyncFromSyncIteratorPrototype } from "./AsyncFromSyncIteratorPrototype/index.js";
import { populateAsyncFunctionPrototype } from "./AsyncFunction/index.js";
import { populateAsyncGeneratorPrototype } from "./AsyncGenerator/index.js";
import { populateAsyncGeneratorFunctionPrototype } from "./AsyncGeneratorFunction/index.js";
import { populateAsyncIteratorPrototype } from "./AsyncIterator/index.js";
import { populateBooleanPrototype } from "./Boolean/index.js";
import { populateErrorPrototype } from "./Error/index.js";
import { populateFunctionPrototype } from "./Function/index.js";
import { populateGeneratorPrototype } from "./Generator/index.js";
import { populateGeneratorFunctionPrototype } from "./GeneratorFunction/index.js";
import type { Prototypes } from "./intrinsics.js";
import { populateIteratorPrototype } from "./Iterator/index.js";
import { populateIteratorHelperPrototype } from "./IteratorHelper/index.js";
import { populateMapPrototype } from "./Map/index.js";
import { populateMapIteratorPrototype } from "./MapIterator/index.js";
import { populateNativeErrorPrototype } from "./NativeError/index.js";
import { populateNumberPrototype } from "./Number/index.js";
import { populateObjectPrototype } from "./Object/index.js";
import { populatePromisePrototype } from "./Promise/index.js";
import { populateSetPrototype } from "./Set/index.js";
import { populateSetIteratorPrototype } from "./SetIterator/index.js";
import { populateStringPrototype } from "./String/index.js";
import { populateStringIteratorPrototype } from "./StringIterator/index.js";
import { populateSymbolPrototype } from "./Symbol/index.js";

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
  const setIteratorProto = new StaticJsPlainObjectImpl(realm, iteratorProto);
  const mapIteratorProto = new StaticJsPlainObjectImpl(realm, iteratorProto);
  const asyncFromSyncIteratorProto = new StaticJsPlainObjectImpl(realm, asyncIteratorProto);

  const asyncFunctionProto = new StaticJsPlainObjectImpl(realm, functionProto);

  const generatorProto = new StaticJsPlainObjectImpl(realm, iteratorProto);
  const generatorFunctionProto = new StaticJsPlainObjectImpl(realm, functionProto);

  const asyncGeneratorProto = new StaticJsPlainObjectImpl(realm, asyncIteratorProto);
  const asyncGeneratorFunctionProto = new StaticJsPlainObjectImpl(realm, functionProto);

  const errorProto = new StaticJsPlainObjectImpl(realm, objectProto);

  const evalErrorProto = new StaticJsPlainObjectImpl(realm, errorProto);
  const rangeErrorProto = new StaticJsPlainObjectImpl(realm, errorProto);
  const referenceErrorProto = new StaticJsPlainObjectImpl(realm, errorProto);
  const syntaxErrorProto = new StaticJsPlainObjectImpl(realm, errorProto);
  const typeErrorProto = new StaticJsPlainObjectImpl(realm, errorProto);
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
    setIteratorProto,
    mapIteratorProto,
    asyncFromSyncIteratorProto,
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
  populateSetIteratorPrototype(realm, prototypes.setIteratorProto);
  populateMapIteratorPrototype(realm, prototypes.mapIteratorProto);
  populateAsyncFromSyncIteratorPrototype(realm, prototypes.asyncFromSyncIteratorProto);

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

  populateNativeErrorPrototype(realm, "EvalError", prototypes.evalErrorProto);
  populateNativeErrorPrototype(realm, "RangeError", prototypes.rangeErrorProto);
  populateNativeErrorPrototype(realm, "ReferenceError", prototypes.referenceErrorProto);
  populateNativeErrorPrototype(realm, "SyntaxError", prototypes.syntaxErrorProto);
  populateNativeErrorPrototype(realm, "TypeError", prototypes.typeErrorProto);
  populateNativeErrorPrototype(realm, "URIError", prototypes.uriErrorProto);
}
