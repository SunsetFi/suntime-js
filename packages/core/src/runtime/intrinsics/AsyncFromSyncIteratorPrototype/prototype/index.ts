import { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsObject } from "../../../types/StaticJsObject.js";
import { applyIntrinsicProperties, IntrinsicPropertyDeclaration } from "../../utils.js";

import { asyncFromSyncIteratorProtoNextDeclaration } from "./next.js";
import { asyncFromSyncIteratorProtoReturnDeclaration } from "./return.js";
import { asyncFromSyncIteratorProtoThrowDeclaration } from "./throw.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  asyncFromSyncIteratorProtoNextDeclaration,
  asyncFromSyncIteratorProtoReturnDeclaration,
  asyncFromSyncIteratorProtoThrowDeclaration,
];

export function populateAsyncFromSyncIteratorPrototype(
  realm: StaticJsRealm,
  asyncFunctionProto: StaticJsObject,
) {
  applyIntrinsicProperties(realm, asyncFunctionProto, declarations);
}
