import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import { StaticJsPlainObjectImpl } from "#types/implementation/objects/StaticJsPlainObjectImpl.js";

import type { IntrinsicsRecord } from "./intrinsics.js";

import { populateAggregateErrorIntrinsics } from "./AggregateError/populate-aggregateerror-intrinsics.js";
import { populateArrayIntrinsics } from "./Array/populate-array-intrinsics.js";
import { populateArrayIteratorIntrinsics } from "./ArrayIterator/populate-array-iterator-intrinsics.js";
import { populateAsyncFromSyncIteratorPrototypeIntrinsics } from "./AsyncFromSyncIteratorPrototype/populate-async-from-sync-iterator-prototype-intrinsics.js";
import { populateAsyncFunctionIntrinsics } from "./AsyncFunction/populate-async-function-intrinsics.js";
import { populateAsyncGeneratorFunctionIntrinsics } from "./AsyncGeneratorFunction/populate-async-generator-function-intrinsics.js";
import { populateAsyncGeneratorPrototypeIntrinsics } from "./AsyncGeneratorPrototype/populate-async-generator-intrinsics.js";
import { populateAsyncIteratorIntrinsics } from "./AsyncIteratorPrototype/populate-async-iterator-intrinsics.js";
import { populateBooleanIntrinsics } from "./Boolean/populate-boolean-intrinsics.js";
import { populateErrorIntrinsics } from "./Error/populate-error-intrinsics.js";
import { createEval } from "./eval.js";
import { addRestrictedFunctionProperties } from "./Function/add-restricted-function-properties.js";
import { populateFunctionIntrinsics } from "./Function/populate-function-intrinsics.js";
import { StaticJsFunctionPrototypeImpl } from "./Function/prototype/StaticJsFunctionPrototypeImpl.js";
import { populateGeneratorFunctionIntrinsics } from "./GeneratorFunction/populate-generator-function-intrinsics.js";
import { populateGeneratorIntrinsics } from "./GeneratorPrototype/populate-generator-intrinsics.js";
import { createIsFinite } from "./isFinite.js";
import { createIsNaN } from "./isNaN.js";
import { populateIteratorIntrinsics } from "./Iterator/populate-iterator-intrinsics.js";
import { populateIteratorHelperIntrinsics } from "./IteratorHelper/populate-iterator-helper-intrinsics.js";
import { populateMapIntrinsics } from "./Map/populate-map-intrinsics.js";
import { populateMapIteratorIntrinsics } from "./MapIterator/populate-map-iterator-intrinsics.js";
import { createMath } from "./Math.js";
import { populateNativeErrorIntrinsics } from "./NativeError/populate-nativeerror-intrinsics.js";
import { populateNumberIntrinsics } from "./Number/populate-number-intrinsics.js";
import { populateObjectIntrinsics } from "./Object/populate-object-intrinsics.js";
import { createParseFloat } from "./parseFloat.js";
import { createParseInt } from "./parseInt.js";
import { populatePromiseIntrinsics } from "./Promise/populate-promise-intrinsics.js";
import { populateProxyIntrinsics } from "./Proxy/populate-proxy-intrinsics.js";
import { createReflect } from "./Reflect/create-reflect-intrinsic.js";
import { populateSetIntrinsics } from "./Set/populate-set-intrinsics.js";
import { populateSetIteratorIntrinsics } from "./SetIteratorPrototype/populate-set-iterator-intrinsics.js";
import { populateStringIntrinsics } from "./String/populate-string-intrinsics.js";
import { populateStringIteratorIntrinsics } from "./StringIteratorPrototype/populate-string-iterator-intrinsics.js";
import { createIntrinsicSymbols } from "./Symbol/create-symbols.js";
import { populateSymbolIntrinsics } from "./Symbol/populate-symbol-intrinsics.js";
import { createThrowTypeError } from "./throw-type-error.js";

export function* populateIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const objectProto = StaticJsPlainObjectImpl.create({ realm, prototype: null });
  intrinsics["Object.prototype"] = objectProto;

  intrinsics["Symbol.prototype"] = StaticJsPlainObjectImpl.create({
    realm,
    prototype: objectProto,
  });

  intrinsics["String.prototype"] = StaticJsPlainObjectImpl.create({
    realm,
    prototype: objectProto,
  });
  intrinsics["Number.prototype"] = StaticJsPlainObjectImpl.create({
    realm,
    prototype: objectProto,
  });
  intrinsics["Boolean.prototype"] = StaticJsPlainObjectImpl.create({
    realm,
    prototype: objectProto,
  });

  intrinsics["Array.prototype"] = StaticJsPlainObjectImpl.create({ realm, prototype: objectProto });

  intrinsics["Promise.prototype"] = StaticJsPlainObjectImpl.create({
    realm,
    prototype: objectProto,
  });

  intrinsics["Set.prototype"] = StaticJsPlainObjectImpl.create({ realm, prototype: objectProto });

  intrinsics["Map.prototype"] = StaticJsPlainObjectImpl.create({ realm, prototype: objectProto });

  const iteratorProto = StaticJsPlainObjectImpl.create({ realm, prototype: objectProto });
  intrinsics["Iterator.prototype"] = iteratorProto;
  intrinsics["IteratorHelperPrototype"] = StaticJsPlainObjectImpl.create({
    realm,
    prototype: iteratorProto,
  });
  intrinsics["ArrayIteratorPrototype"] = StaticJsPlainObjectImpl.create({
    realm,
    prototype: iteratorProto,
  });
  intrinsics["StringIteratorPrototype"] = StaticJsPlainObjectImpl.create({
    realm,
    prototype: iteratorProto,
  });
  intrinsics["SetIteratorPrototype"] = StaticJsPlainObjectImpl.create({
    realm,
    prototype: iteratorProto,
  });
  intrinsics["MapIteratorPrototype"] = StaticJsPlainObjectImpl.create({
    realm,
    prototype: iteratorProto,
  });

  const asyncIteratorProto = StaticJsPlainObjectImpl.create({ realm, prototype: iteratorProto });
  intrinsics["AsyncIteratorPrototype"] = asyncIteratorProto;

  intrinsics["AsyncFromSyncIteratorPrototype"] = StaticJsPlainObjectImpl.create({
    realm,
    prototype: asyncIteratorProto,
  });

  const functionProto = StaticJsFunctionPrototypeImpl.create({ realm, prototype: objectProto });
  intrinsics["Function.prototype"] = functionProto;
  intrinsics["AsyncFunction.prototype"] = StaticJsPlainObjectImpl.create({
    realm,
    prototype: functionProto,
  });
  intrinsics["GeneratorFunction.prototype"] = StaticJsPlainObjectImpl.create({
    realm,
    prototype: functionProto,
  });
  intrinsics["GeneratorPrototype"] = StaticJsPlainObjectImpl.create({
    realm,
    prototype: iteratorProto,
  });
  intrinsics["AsyncGeneratorFunction.prototype"] = StaticJsPlainObjectImpl.create({
    realm,
    prototype: functionProto,
  });
  intrinsics["AsyncGeneratorPrototype"] = StaticJsPlainObjectImpl.create({
    realm,
    prototype: asyncIteratorProto,
  });

  const errorProto = StaticJsPlainObjectImpl.create({ realm, prototype: objectProto });
  intrinsics["Error.prototype"] = errorProto;
  intrinsics["AggregateError.prototype"] = StaticJsPlainObjectImpl.create({
    realm,
    prototype: errorProto,
  });
  intrinsics["EvalError.prototype"] = StaticJsPlainObjectImpl.create({
    realm,
    prototype: errorProto,
  });
  intrinsics["RangeError.prototype"] = StaticJsPlainObjectImpl.create({
    realm,
    prototype: errorProto,
  });
  intrinsics["ReferenceError.prototype"] = StaticJsPlainObjectImpl.create({
    realm,
    prototype: errorProto,
  });
  intrinsics["SyntaxError.prototype"] = StaticJsPlainObjectImpl.create({
    realm,
    prototype: errorProto,
  });
  intrinsics["TypeError.prototype"] = StaticJsPlainObjectImpl.create({
    realm,
    prototype: errorProto,
  });
  intrinsics["URIError.prototype"] = StaticJsPlainObjectImpl.create({
    realm,
    prototype: errorProto,
  });

  intrinsics["ThrowTypeError"] = yield* createThrowTypeError(realm);

  yield* populateObjectIntrinsics(realm, intrinsics);

  yield* createIntrinsicSymbols(realm, intrinsics);
  yield* populateSymbolIntrinsics(realm, intrinsics);

  yield* populateStringIntrinsics(realm, intrinsics);
  yield* populateNumberIntrinsics(realm, intrinsics);
  yield* populateBooleanIntrinsics(realm, intrinsics);

  yield* populateFunctionIntrinsics(realm, intrinsics);

  yield* populateArrayIntrinsics(realm, intrinsics);

  yield* populateIteratorIntrinsics(realm, intrinsics);

  yield* populateIteratorHelperIntrinsics(realm, intrinsics);

  yield* populateArrayIteratorIntrinsics(realm, intrinsics);
  yield* populateStringIteratorIntrinsics(realm, intrinsics);

  yield* populateAsyncFromSyncIteratorPrototypeIntrinsics(realm, intrinsics);

  yield* populateAsyncFunctionIntrinsics(realm, intrinsics);
  yield* populateAsyncIteratorIntrinsics(realm, intrinsics);

  yield* populateGeneratorFunctionIntrinsics(realm, intrinsics);
  yield* populateGeneratorIntrinsics(realm, intrinsics);

  yield* populateAsyncGeneratorFunctionIntrinsics(realm, intrinsics);
  yield* populateAsyncGeneratorPrototypeIntrinsics(realm, intrinsics);

  yield* populatePromiseIntrinsics(realm, intrinsics);

  yield* populateSetIntrinsics(realm, intrinsics);
  yield* populateSetIteratorIntrinsics(realm, intrinsics);

  yield* populateMapIntrinsics(realm, intrinsics);
  yield* populateMapIteratorIntrinsics(realm, intrinsics);

  yield* populateProxyIntrinsics(realm, intrinsics);

  yield* populateErrorIntrinsics(realm, intrinsics);

  yield* populateAggregateErrorIntrinsics(realm, intrinsics);
  yield* populateNativeErrorIntrinsics(realm, intrinsics, "EvalError");
  yield* populateNativeErrorIntrinsics(realm, intrinsics, "RangeError");
  yield* populateNativeErrorIntrinsics(realm, intrinsics, "ReferenceError");
  yield* populateNativeErrorIntrinsics(realm, intrinsics, "SyntaxError");
  yield* populateNativeErrorIntrinsics(realm, intrinsics, "TypeError");
  yield* populateNativeErrorIntrinsics(realm, intrinsics, "URIError");

  yield* createEval(realm, intrinsics);
  yield* createIsFinite(realm, intrinsics);
  yield* createIsNaN(realm, intrinsics);
  yield* createParseInt(realm, intrinsics);
  yield* createParseFloat(realm, intrinsics);
  yield* createMath(realm, intrinsics);
  yield* createReflect(realm, intrinsics);

  yield* addRestrictedFunctionProperties(intrinsics["Function.prototype"], realm);
}
