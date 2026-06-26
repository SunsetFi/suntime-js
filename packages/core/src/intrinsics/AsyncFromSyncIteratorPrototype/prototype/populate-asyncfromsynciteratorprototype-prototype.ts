import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsObject } from "#types/StaticJsObject.js";

import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../apply-intrinsic-properties.js";

import { asyncFromSyncIteratorProtoNextDeclaration } from "./next.js";
import { asyncFromSyncIteratorProtoReturnDeclaration } from "./return.js";
import { asyncFromSyncIteratorProtoThrowDeclaration } from "./throw.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  asyncFromSyncIteratorProtoNextDeclaration,
  asyncFromSyncIteratorProtoReturnDeclaration,
  asyncFromSyncIteratorProtoThrowDeclaration,
];

export function* populateAsyncFromSyncIteratorPrototype(
  realm: StaticJsRealm,
  asyncFunctionProto: StaticJsObject,
) {
  yield* applyIntrinsicProperties(realm, asyncFunctionProto, declarations);
}
