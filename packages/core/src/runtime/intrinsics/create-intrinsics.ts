import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import StaticJsObjectImpl from "../types/implementation/StaticJsObjectImpl.js";
import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";

import type {
  Constructors,
  Instrinsics,
  Prototypes,
  Statics,
} from "./intrinsics.js";

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
import {
  populateStringPrototype,
  createStringConstructor,
} from "./String/index.js";
import {
  createNumberConstructor,
  populateNumberPrototype,
} from "./Number/index.js";
import {
  createBooleanConstructor,
  populateBooleanPrototype,
} from "./Boolean.js";
import {
  createPromiseConstructor,
  populatePromisePrototype,
} from "./Promise/index.js";
import {
  createErrorConstructor,
  populateErrorPrototype,
} from "./Error/index.js";
import createTypeErrorConstructor, {
  populateTypeErrorPrototype,
} from "./TypeError.js";
import createReferenceErrorConstructor, {
  populateReferenceErrorPrototype,
} from "./ReferenceError.js";
import createSyntaxErrorConstructor, {
  populateSyntaxErrorPrototype,
} from "./SyntaxError.js";
import { createMathStatic } from "./Math/index.js";

import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "./utils.js";

import globalObjectEvalDeclaration from "./eval.js";
import globalObjectInfinityDeclaration from "./Infinity.js";
import globalObjectIsFiniteDeclaration from "./isFinite.js";
import globalObjectIsNaNDeclaration from "./isNaN.js";
import globalObjectNaNDeclaration from "./NaN.js";
import globalObjectParseFloatDeclaration from "./parseFloat.js";
import globalObjectParseIntDeclaration from "./parseInt.js";
import globalObjectUndefinedDeclaration from "./undefined.js";
import {
  createSymbolConstructor,
  populateSymbolPrototype,
} from "./Symbol/index.js";

export type { Instrinsics, Prototypes };

const globalPropertyDeclarations: IntrinsicPropertyDeclaration[] = [
  globalObjectEvalDeclaration,
  globalObjectInfinityDeclaration,
  globalObjectIsFiniteDeclaration,
  globalObjectIsNaNDeclaration,
  globalObjectNaNDeclaration,
  globalObjectParseFloatDeclaration,
  globalObjectParseIntDeclaration,
  globalObjectUndefinedDeclaration,
];

export function createIntrinsics(realm: StaticJsRealm): Instrinsics {
  const protos = createPrototypes(realm);
  const ctors = createConstructors(realm, protos);
  const statics = createStatics(realm, protos);

  return {
    ...protos,
    ...ctors,
    ...statics,
  };
}

function createPrototypes(realm: StaticJsRealm): Prototypes {
  // There are some circular references around these, particularly with
  // instantiating functions for properties, so establish them ahead of time.
  const objectProto = new StaticJsObjectImpl(realm, null);
  const functionProto = new StaticJsObjectImpl(realm, objectProto);

  const stringProto = new StaticJsObjectImpl(realm, objectProto);
  const numberProto = new StaticJsObjectImpl(realm, objectProto);
  const booleanProto = new StaticJsObjectImpl(realm, objectProto);
  const arrayProto = new StaticJsObjectImpl(realm, objectProto);
  const symbolProto = new StaticJsObjectImpl(realm, objectProto);

  const promiseProto = new StaticJsObjectImpl(realm, objectProto);

  const errorProto = new StaticJsObjectImpl(realm, objectProto);
  const typeErrorProto = new StaticJsObjectImpl(realm, errorProto);
  const referenceErrorProto = new StaticJsObjectImpl(realm, errorProto);
  const syntaxErrorProto = new StaticJsObjectImpl(realm, errorProto);

  populateObjectPrototype(realm, objectProto, functionProto);
  populateFunctionPrototype(realm, functionProto);

  populateStringPrototype(realm, stringProto, functionProto);
  populateNumberPrototype(realm, numberProto, functionProto);
  populateBooleanPrototype(realm, booleanProto, functionProto);

  populateArrayPrototype(realm, arrayProto, functionProto);

  populateSymbolPrototype(realm, symbolProto, functionProto);

  populatePromisePrototype(realm, promiseProto, functionProto);

  populateErrorPrototype(realm, errorProto, functionProto);
  populateTypeErrorPrototype(realm, typeErrorProto, functionProto);
  populateReferenceErrorPrototype(realm, referenceErrorProto, functionProto);
  populateSyntaxErrorPrototype(realm, syntaxErrorProto, functionProto);

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
  };
}

function createConstructors(
  realm: StaticJsRealm,
  {
    stringProto,
    numberProto,
    booleanProto,
    objectProto,
    functionProto,
    arrayProto,
    symbolProto,
    promiseProto,
    errorProto,
    typeErrorProto,
    referenceErrorProto,
    syntaxErrorProto,
  }: Prototypes,
): Constructors {
  const String = createStringConstructor(realm, stringProto, functionProto);
  const Number = createNumberConstructor(realm, numberProto, functionProto);
  const Boolean = createBooleanConstructor(realm, booleanProto, functionProto);
  const Object = createObjectConstructor(realm, objectProto, functionProto);
  const Symbol = createSymbolConstructor(realm, symbolProto, functionProto);
  const Array = createArrayConstructor(realm, arrayProto, functionProto);
  const Function = createFunctionConstructor(realm, functionProto);
  const Promise = createPromiseConstructor(realm, promiseProto, functionProto);
  const Error = createErrorConstructor(realm, errorProto, functionProto);
  const TypeError = createTypeErrorConstructor(
    realm,
    typeErrorProto,
    functionProto,
  );
  const ReferenceError = createReferenceErrorConstructor(
    realm,
    referenceErrorProto,
    functionProto,
  );
  const SyntaxError = createSyntaxErrorConstructor(
    realm,
    syntaxErrorProto,
    functionProto,
  );

  return {
    String,
    Number,
    Boolean,
    Object,
    Symbol,
    Array,
    Function,
    Promise,
    Error,
    TypeError,
    ReferenceError,
    SyntaxError,
  };
}

export function defineGlobalProperties(
  realm: StaticJsRealm,
  globalObject: StaticJsObjectLike,
  intrinsics: Instrinsics,
) {
  applyIntrinsicProperties(
    realm,
    globalObject,
    globalPropertyDeclarations,
    intrinsics.functionProto,
  );

  for (const [key, value] of Object.entries(intrinsics)) {
    globalObject.definePropertySync(key, {
      value,
      writable: true,
      enumerable: false,
      configurable: true,
    });
  }
}

function createStatics(realm: StaticJsRealm, protos: Prototypes): Statics {
  const Math = createMathStatic(
    realm,
    protos.objectProto,
    protos.functionProto,
  );

  return {
    Math,
  };
}
