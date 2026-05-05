import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsRealm } from "../realm/StaticJsRealm.js";
import { StaticJsPlainObjectImpl } from "../types/implementation/objects/StaticJsPlainObjectImpl.js";

import { populateArrayIntrinsics } from "./Array/populate-array-intrinsics.js";
import { populateArrayIteratorIntrinsics } from "./ArrayIterator/populate-array-iterator-intrinsics.js";
import { populateAsyncFromSyncIteratorPrototypeIntrinsics } from "./AsyncFromSyncIteratorPrototype/populate-async-from-sync-iterator-prototype-intrinsics.js";
import { populateAsyncFunctionIntrinsics } from "./AsyncFunction/populate-async-function-intrinsics.js";
import { populateAsyncGeneratorFunctionIntrinsics } from "./AsyncGeneratorFunction/populate-async-generator-function-intrinsics.js";
import { populateAsyncGeneratorPrototypeIntrinsics } from "./AsyncGeneratorPrototype/populate-async-generator-intrinsics.js";
import { populateAsyncIteratorIntrinsics } from "./AsyncIteratorPrototype/populate-async-iterator-intrinsics.js";
import { populateBooleanIntrinsics } from "./Boolean/populate-boolean-intrinsics.js";
import { populateErrorIntrinsics } from "./Error/populate-error-intrinsics.js";
import { addRestrictedFunctionProperties } from "./Function/add-restricted-function-properties.js";
import { populateFunctionIntrinsics } from "./Function/populate-function-intrinsics.js";
import { StaticJsFunctionPrototypeImpl } from "./Function/prototype/StaticJsFunctionPrototypeImpl.js";
import { populateGeneratorFunctionIntrinsics } from "./GeneratorFunction/populate-generator-function-intrinsics.js";
import { populateGeneratorIntrinsics } from "./GeneratorPrototype/populate-generator-intrinsics.js";
import { IntrinsicsRecord } from "./intrinsics.js";
import { populateIteratorIntrinsics } from "./Iterator/populate-iterator-intrinsics.js";
import { populateIteratorHelperIntrinsics } from "./IteratorHelper/populate-iterator-helper-intrinsics.js";
import { populateMapIntrinsics } from "./Map/populate-map-intrinsics.js";
import { populateMapIteratorIntrinsics } from "./MapIterator/populate-map-iterator-intrinsics.js";
import { populateNativeErrorIntrinsics } from "./NativeError/populate-nativeerror-intrinsics.js";
import { populateNumberIntrinsics } from "./Number/populate-number-intrinsics.js";
import { populateObjectIntrinsics } from "./Object/populate-object-intrinsics.js";
import { populatePromiseIntrinsics } from "./Promise/populate-promise-intrinsics.js";
import { populateProxyIntrinsics } from "./Proxy/populate-proxy-intrinsics.js";
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
  const objectProto = new StaticJsPlainObjectImpl(realm, null);
  intrinsics["Object.prototype"] = objectProto;

  intrinsics["Symbol.prototype"] = new StaticJsPlainObjectImpl(realm, objectProto);

  intrinsics["String.prototype"] = new StaticJsPlainObjectImpl(realm, objectProto);
  intrinsics["Number.prototype"] = new StaticJsPlainObjectImpl(realm, objectProto);
  intrinsics["Boolean.prototype"] = new StaticJsPlainObjectImpl(realm, objectProto);

  intrinsics["Array.prototype"] = new StaticJsPlainObjectImpl(realm, objectProto);

  intrinsics["Promise.prototype"] = new StaticJsPlainObjectImpl(realm, objectProto);

  intrinsics["Set.prototype"] = new StaticJsPlainObjectImpl(realm, objectProto);

  intrinsics["Map.prototype"] = new StaticJsPlainObjectImpl(realm, objectProto);

  const iteratorProto = new StaticJsPlainObjectImpl(realm, objectProto);
  intrinsics["Iterator.prototype"] = iteratorProto;
  intrinsics["IteratorHelperPrototype"] = new StaticJsPlainObjectImpl(realm, iteratorProto);
  intrinsics["ArrayIteratorPrototype"] = new StaticJsPlainObjectImpl(realm, iteratorProto);
  intrinsics["StringIteratorPrototype"] = new StaticJsPlainObjectImpl(realm, iteratorProto);
  intrinsics["SetIteratorPrototype"] = new StaticJsPlainObjectImpl(realm, iteratorProto);
  intrinsics["MapIteratorPrototype"] = new StaticJsPlainObjectImpl(realm, iteratorProto);

  const asyncIteratorProto = new StaticJsPlainObjectImpl(realm, iteratorProto);
  intrinsics["AsyncIteratorPrototype"] = asyncIteratorProto;

  intrinsics["AsyncFromSyncIteratorPrototype"] = new StaticJsPlainObjectImpl(
    realm,
    asyncIteratorProto,
  );

  const functionProto = new StaticJsFunctionPrototypeImpl(realm, objectProto);
  intrinsics["Function.prototype"] = functionProto;
  intrinsics["AsyncFunction.prototype"] = new StaticJsPlainObjectImpl(realm, functionProto);
  intrinsics["GeneratorFunction.prototype"] = new StaticJsPlainObjectImpl(realm, functionProto);
  intrinsics["GeneratorPrototype"] = new StaticJsPlainObjectImpl(realm, iteratorProto);
  intrinsics["AsyncGeneratorFunction.prototype"] = new StaticJsPlainObjectImpl(
    realm,
    functionProto,
  );
  intrinsics["AsyncGeneratorPrototype"] = new StaticJsPlainObjectImpl(realm, asyncIteratorProto);

  const errorProto = new StaticJsPlainObjectImpl(realm, objectProto);
  intrinsics["Error.prototype"] = errorProto;
  intrinsics["EvalError.prototype"] = new StaticJsPlainObjectImpl(realm, errorProto);
  intrinsics["RangeError.prototype"] = new StaticJsPlainObjectImpl(realm, errorProto);
  intrinsics["ReferenceError.prototype"] = new StaticJsPlainObjectImpl(realm, errorProto);
  intrinsics["SyntaxError.prototype"] = new StaticJsPlainObjectImpl(realm, errorProto);
  intrinsics["TypeError.prototype"] = new StaticJsPlainObjectImpl(realm, errorProto);
  intrinsics["URIError.prototype"] = new StaticJsPlainObjectImpl(realm, errorProto);

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

  yield* populateNativeErrorIntrinsics(realm, intrinsics, "EvalError");
  yield* populateNativeErrorIntrinsics(realm, intrinsics, "RangeError");
  yield* populateNativeErrorIntrinsics(realm, intrinsics, "ReferenceError");
  yield* populateNativeErrorIntrinsics(realm, intrinsics, "SyntaxError");
  yield* populateNativeErrorIntrinsics(realm, intrinsics, "TypeError");
  yield* populateNativeErrorIntrinsics(realm, intrinsics, "URIError");

  yield* addRestrictedFunctionProperties(intrinsics["Function.prototype"], realm);
}
