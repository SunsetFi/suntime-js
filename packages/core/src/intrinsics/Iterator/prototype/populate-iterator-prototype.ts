import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../apply-intrinsic-properties.js";

import iteratorProtoDropDeclaration from "./drop.js";
import iteratorProtoEveryDeclaration from "./every.js";
import iteratorProtoFilterDeclaration from "./filter.js";
import iteratorProtoFindDeclaration from "./find.js";
import iteratorProtoFlatMapDeclaration from "./flatMap.js";
import iteratorProtoForEachDeclaration from "./forEach.js";
import iteratorProtoMapDeclaration from "./map.js";
import iteratorProtoReduceDeclaration from "./reduce.js";
import iteratorProtoSomeDeclaration from "./some.js";
import iteratorProtoSymbolIteratorDeclaration from "./symbol_iterator.js";
import iteratorProtoSymbolToStringTagDeclaration from "./symbol_toStringTag.js";
import iteratorProtoTakeDeclaration from "./take.js";
import iteratorProtoToArrayDeclaration from "./toArray.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  iteratorProtoDropDeclaration,
  iteratorProtoEveryDeclaration,
  iteratorProtoFilterDeclaration,
  iteratorProtoFindDeclaration,
  iteratorProtoFlatMapDeclaration,
  iteratorProtoForEachDeclaration,
  iteratorProtoMapDeclaration,
  iteratorProtoReduceDeclaration,
  iteratorProtoSomeDeclaration,
  iteratorProtoSymbolIteratorDeclaration,
  iteratorProtoSymbolToStringTagDeclaration,
  iteratorProtoTakeDeclaration,
  iteratorProtoToArrayDeclaration,
];

export function* populateIteratorPrototype(
  realm: StaticJsRealm,
  iteratorPrototype: StaticJsObject,
) {
  yield* applyIntrinsicProperties(realm, iteratorPrototype, declarations);
}
