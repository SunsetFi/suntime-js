import StaticJsRealm from "../realm/interfaces/StaticJsRealm.js";

import StaticJsObjectImpl from "../types/implementation/StaticJsObjectImpl.js";
import { StaticJsObjectLike } from "../types/interfaces/StaticJsObject.js";
import {
  Constructors,
  Prototypes,
} from "../types/interfaces/StaticJsTypeFactory.js";

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
import createTypeErrorConstructor, {
  populateTypeErrorPrototype,
} from "./TypeError.js";
import createReferenceErrorConstructor, {
  populateReferenceErrorPrototype,
} from "./ReferenceError.js";
import createSyntaxErrorConstructor, {
  populateSyntaxErrorPrototype,
} from "./SyntaxError.js";

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
  const typeErrorProto = new StaticJsObjectImpl(realm, errorProto);
  const referenceErrorProto = new StaticJsObjectImpl(realm, errorProto);
  const syntaxErrorProto = new StaticJsObjectImpl(realm, errorProto);

  populateObjectPrototype(realm, objectProto, functionProto);
  populateFunctionPrototype(realm, functionProto);

  populateStringPrototype(realm, stringProto, functionProto);
  populateNumberPrototype(realm, numberProto, functionProto);
  populateBooleanPrototype(realm, booleanProto, functionProto);

  populateArrayPrototype(realm, arrayProto, functionProto);

  populateErrorPrototype(realm, errorProto, functionProto);
  populateTypeErrorPrototype(realm, typeErrorProto, functionProto);
  populateReferenceErrorPrototype(realm, referenceErrorProto, functionProto);
  populateSyntaxErrorPrototype(realm, syntaxErrorProto, functionProto);

  return {
    stringProto,
    numberProto,
    booleanProto,
    objectProto,
    arrayProto,
    functionProto,
    errorProto,
    typeErrorProto,
    referenceErrorProto,
    syntaxErrorProto,
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
    typeErrorProto,
    referenceErrorProto,
    syntaxErrorProto,
  }: Prototypes,
): Constructors {
  const String = createStringConstructor(realm, stringProto, functionProto);
  const Number = createNumberConstructor(realm, numberProto, functionProto);
  const Boolean = createBooleanConstructor(realm, booleanProto, functionProto);
  const Object = createObjectConstructor(realm, objectProto, functionProto);
  const Array = createArrayConstructor(realm, arrayProto);
  const Function = createFunctionConstructor(realm, functionProto);
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
    Array,
    Function,
    Error,
    TypeError,
    ReferenceError,
    SyntaxError,
  };
}

export function defineGlobalProperties(
  realm: StaticJsRealm,
  globalObject: StaticJsObjectLike,
  constructors: Constructors,
) {
  globalObject.defineProperty("undefined", {
    value: realm.types.undefined,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  globalObject.defineProperty("NaN", {
    value: realm.types.NaN,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  globalObject.defineProperty("Infinity", {
    value: realm.types.Infinity,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  for (const [key, value] of Object.entries(constructors)) {
    globalObject.defineProperty(key, {
      value,
      writable: true,
      enumerable: false,
      configurable: true,
    });
  }
}
