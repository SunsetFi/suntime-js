import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../../../types/StaticJsObject.js";

import {
  type IntrinsicPropertyDeclaration,
  applyIntrinsicProperties,
} from "../../utils.js";

import setProtoAddDeclaration from "./add.js";
import setProtoClearDeclaration from "./clear.js";
import setProtoDeleteDeclaration from "./delete.js";
import setProtoDifferenceDeclaration from "./difference.js";
import setProtoEntriesDeclaration from "./entries.js";
import setProtoForEachDeclaration from "./forEach.js";
import setProtoHasDeclaration from "./has.js";
import setProtoIntersectionDeclaration from "./intersection.js";
import setProtoIsDisjointFromDeclaration from "./isDisjointFrom.js";
import setProtoIsSubsetOfDeclaration from "./isSubsetOf.js";
import setProtoIsSupersetOfDeclaration from "./isSupersetOf.js";
import setProtoKeysDeclaration from "./keys.js";
import setProtoSizeDeclaration from "./size.js";
import setProtoSymbolIteratorDeclaration from "./symbol_iterator.js";
import setProtoSymmetricDifferenceDeclaration from "./symmetricDifference.js";
import setProtoUnionDeclaration from "./union.js";
import setProtoValuesDeclaration from "./values.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  setProtoAddDeclaration,
  setProtoClearDeclaration,
  setProtoDeleteDeclaration,
  setProtoDifferenceDeclaration,
  setProtoEntriesDeclaration,
  setProtoForEachDeclaration,
  setProtoHasDeclaration,
  setProtoIntersectionDeclaration,
  setProtoIsDisjointFromDeclaration,
  setProtoIsSubsetOfDeclaration,
  setProtoIsSupersetOfDeclaration,
  setProtoKeysDeclaration,
  setProtoSizeDeclaration,
  setProtoSymbolIteratorDeclaration,
  setProtoSymmetricDifferenceDeclaration,
  setProtoUnionDeclaration,
  setProtoValuesDeclaration,
];

export default function populateSetPrototype(
  realm: StaticJsRealm,
  setProto: StaticJsObject,
) {
  applyIntrinsicProperties(realm, setProto, declarations);
}
