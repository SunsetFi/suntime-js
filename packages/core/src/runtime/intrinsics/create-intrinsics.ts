import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import StaticJsObjectImpl from "../types/implementation/StaticJsObjectImpl.js";

import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";

import type { Intrinsics, Prototypes } from "./intrinsics.js";

import {
  createObjectConstructor,
  populateObjectPrototype,
} from "./Object/index.js";
import {
  createSymbolConstructor,
  populateSymbolPrototype,
} from "./Symbol/index.js";
import {
  createArrayConstructor,
  populateArrayPrototype,
} from "./Array/index.js";
import {
  createFunctionConstructor,
  populateFunctionPrototype,
} from "./Function/index.js";
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
import createIntrinsicSymbols from "./Symbol/intrinsic-symbols.js";

import { populateIteratorPrototype } from "./Iterator.js";
import createRangeErrorConstructor, {
  populateRangeErrorPrototype,
} from "./RangeError.js";

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

export function createIntrinsics(realm: StaticJsRealm): Intrinsics {
  // Create the protos.

  // There are some circular references around these, particularly with
  // instantiating functions for properties, so establish them ahead of time.

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

  const prototypes: Prototypes = {
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

  // Populate prototypes

  // These are referenced by most prototypes.
  const symbols = createIntrinsicSymbols(realm, prototypes);

  populateObjectPrototype(realm, objectProto, prototypes, symbols);
  populateSymbolPrototype(realm, symbolProto, prototypes, symbols);
  populateFunctionPrototype(realm, functionProto, prototypes, symbols);

  populateStringPrototype(realm, stringProto, prototypes, symbols);
  populateNumberPrototype(realm, numberProto, prototypes, symbols);
  populateBooleanPrototype(realm, booleanProto, prototypes, symbols);

  populateArrayPrototype(realm, arrayProto, prototypes, symbols);

  populatePromisePrototype(realm, promiseProto, prototypes, symbols);

  populateErrorPrototype(realm, errorProto, prototypes, symbols);
  populateTypeErrorPrototype(realm, typeErrorProto, functionProto, symbols);
  populateReferenceErrorPrototype(
    realm,
    referenceErrorProto,
    functionProto,
    symbols,
  );
  populateSyntaxErrorPrototype(realm, syntaxErrorProto, functionProto, symbols);
  populateRangeErrorPrototype(realm, rangeErrorProto, functionProto, symbols);

  populateIteratorPrototype(realm, iteratorProto, prototypes, symbols);

  // Constructors

  const String = createStringConstructor(realm, stringProto, prototypes);
  const Number = createNumberConstructor(
    realm,
    numberProto,
    prototypes,
    symbols,
  );
  const Boolean = createBooleanConstructor(realm, booleanProto, prototypes);
  const Object = createObjectConstructor(
    realm,
    objectProto,
    prototypes,
    symbols,
  );
  const Symbol = createSymbolConstructor(
    realm,
    symbolProto,
    prototypes,
    symbols,
  );
  const Array = createArrayConstructor(realm, arrayProto, prototypes, symbols);
  const Function = createFunctionConstructor(realm, functionProto);
  const Promise = createPromiseConstructor(
    realm,
    promiseProto,
    prototypes,
    symbols,
  );
  const Error = createErrorConstructor(realm, errorProto, prototypes, symbols);
  const TypeError = createTypeErrorConstructor(
    realm,
    typeErrorProto,
    prototypes,
  );
  const ReferenceError = createReferenceErrorConstructor(
    realm,
    referenceErrorProto,
    prototypes,
  );
  const SyntaxError = createSyntaxErrorConstructor(
    realm,
    syntaxErrorProto,
    prototypes,
  );
  const RangeError = createRangeErrorConstructor(
    realm,
    rangeErrorProto,
    prototypes,
  );

  const Math = createMathStatic(realm, objectProto, prototypes, symbols);

  return {
    prototypes,
    constructors: {
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
      RangeError,
    },
    statics: {
      Math,
    },
    symbols,
  };
}

export function defineGlobalProperties(
  realm: StaticJsRealm,
  globalObject: StaticJsObjectLike,
  intrinsics: Intrinsics,
) {
  applyIntrinsicProperties(
    realm,
    globalObject,
    globalPropertyDeclarations,
    intrinsics.prototypes,
    intrinsics.symbols,
  );

  for (const [key, value] of Object.entries({
    ...intrinsics.constructors,
    ...intrinsics.statics,
  })) {
    globalObject.definePropertySync(key, {
      value,
      writable: true,
      enumerable: false,
      configurable: true,
    });
  }
}
