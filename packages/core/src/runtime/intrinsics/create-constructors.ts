import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { Constructors } from "./intrinsics.js";

import { createArrayConstructor } from "./Array/index.js";
import { createBooleanConstructor } from "./Boolean.js";
import { createFunctionConstructor } from "./Function/index.js";
import { createNumberConstructor } from "./Number/index.js";
import { createObjectConstructor } from "./Object/index.js";
import { createStringConstructor } from "./String/index.js";
import { createSymbolConstructor } from "./Symbol/index.js";
import { createPromiseConstructor } from "./Promise/index.js";
import { createIteratorConstructor } from "./Iterator/index.js";
import { createSetConstructor } from "./Set/index.js";
import { createMapConstructor } from "./Map/index.js";
import { createErrorConstructor } from "./Error/index.js";
import { createTypeErrorConstructor } from "./TypeError.js";
import { createReferenceErrorConstructor } from "./ReferenceError.js";
import { createSyntaxErrorConstructor } from "./SyntaxError.js";
import { createRangeErrorConstructor } from "./RangeError.js";
import { createEvalErrorConstructor } from "./EvalError.js";
import { createURIErrorConstructor } from "./URIError.js";

export function createConstructors(realm: StaticJsRealm): Constructors {
  const String = createStringConstructor(realm, realm.types.prototypes.stringProto);
  const Number = createNumberConstructor(realm, realm.types.prototypes.numberProto);
  const Boolean = createBooleanConstructor(realm, realm.types.prototypes.booleanProto);
  const Object = createObjectConstructor(realm, realm.types.prototypes.objectProto);
  const Symbol = createSymbolConstructor(realm, realm.types.prototypes.symbolProto);
  const Array = createArrayConstructor(realm, realm.types.prototypes.arrayProto);
  const Function = createFunctionConstructor(realm, realm.types.prototypes.functionProto);
  const Iterator = createIteratorConstructor(realm, realm.types.prototypes.iteratorProto);
  const Promise = createPromiseConstructor(realm, realm.types.prototypes.promiseProto);
  const Set = createSetConstructor(realm, realm.types.prototypes.setProto);
  const Map = createMapConstructor(realm, realm.types.prototypes.mapProto);
  const Error = createErrorConstructor(realm, realm.types.prototypes.errorProto);
  const TypeError = createTypeErrorConstructor(realm, realm.types.prototypes.typeErrorProto);
  const ReferenceError = createReferenceErrorConstructor(
    realm,
    realm.types.prototypes.referenceErrorProto,
  );
  const SyntaxError = createSyntaxErrorConstructor(realm, realm.types.prototypes.syntaxErrorProto);
  const RangeError = createRangeErrorConstructor(realm, realm.types.prototypes.rangeErrorProto);
  const EvalError = createEvalErrorConstructor(realm, realm.types.prototypes.evalErrorProto);
  const URIError = createURIErrorConstructor(realm, realm.types.prototypes.uriErrorProto);

  return {
    String,
    Number,
    Boolean,
    Object,
    Symbol,
    Array,
    Function,
    Iterator,
    Promise,
    Set,
    Map,
    Error,
    TypeError,
    ReferenceError,
    SyntaxError,
    RangeError,
    EvalError,
    URIError,
  };
}
