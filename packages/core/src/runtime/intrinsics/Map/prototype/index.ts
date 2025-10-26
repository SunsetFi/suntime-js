import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../../../types/StaticJsObject.js";

import {
  type IntrinsicPropertyDeclaration,
  applyIntrinsicProperties,
} from "../../utils.js";

import mapProtoClearDeclaration from "./clear.js";
import mapProtoDeleteDeclaration from "./delete.js";
import mapProtoEntriesDeclaration from "./entries.js";
import mapProtoForEachDeclaration from "./forEach.js";
import mapProtoGetDeclaration from "./get.js";
import mapProtoKeysDeclaration from "./keys.js";
import mapProtoSetDeclaration from "./set.js";
import mapProtoSizeDeclaration from "./size.js";
import mapProtoValuesDeclaration from "./values.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  mapProtoClearDeclaration,
  mapProtoDeleteDeclaration,
  mapProtoEntriesDeclaration,
  mapProtoForEachDeclaration,
  mapProtoGetDeclaration,
  mapProtoKeysDeclaration,
  mapProtoSetDeclaration,
  mapProtoSizeDeclaration,
  mapProtoValuesDeclaration,
];

export default function populateMapPrototype(
  realm: StaticJsRealm,
  mapPrototype: StaticJsObject,
) {
  applyIntrinsicProperties(realm, mapPrototype, declarations);
}
