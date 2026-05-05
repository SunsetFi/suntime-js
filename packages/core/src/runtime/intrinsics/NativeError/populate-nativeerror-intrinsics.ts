import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { IntrinsicsRecord, NativeErrors, Prototypes } from "../intrinsics.js";

import { createNativeErrorConstructor } from "./constructor/create-nativeerror-constructor.js";
import { populateNativeErrorPrototype } from "./prototype/populate-nativeerror-prototype.js";

const nativeErrorLegacyProtoKeysHack: Record<string, keyof Prototypes> = {
  EvalError: "evalErrorProto",
  RangeError: "rangeErrorProto",
  ReferenceError: "referenceErrorProto",
  SyntaxError: "syntaxErrorProto",
  TypeError: "typeErrorProto",
  URIError: "uriErrorProto",
};

export function* populateNativeErrorIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
  name: keyof NativeErrors,
): EvaluationGenerator<void> {
  const protoName = `${name}.prototype` as keyof IntrinsicsRecord;
  const proto = intrinsics[protoName];
  yield* populateNativeErrorPrototype(realm, name, proto);
  intrinsics[name] = yield* createNativeErrorConstructor(
    realm,
    name,
    nativeErrorLegacyProtoKeysHack[name],
  );
}
