import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../types/StaticJsObject.js";
import { applyIntrinsicProperties } from "../apply-intrinsic-properties.js";

import { aggregateErrorProtoMessageDeclaration } from "./prototype/message.js";
import { aggregateErrorProtoNameDeclaration } from "./prototype/name.js";

const declarations = [aggregateErrorProtoMessageDeclaration, aggregateErrorProtoNameDeclaration];

export function* populateAggregateErrorPrototype(realm: StaticJsRealm, proto: StaticJsObject) {
  yield* applyIntrinsicProperties(realm, proto, declarations);
}
