import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";

import type { IntrinsicSymbols, Prototypes } from "../../intrinsics.js";

import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../utils.js";

import arrayProtoAtDeclaration from "./at.js";
import arrayProtoConcatDeclaration from "./concat.js";
import arrayProtoEntriesDeclaration from "./entries.js";
import arrayProtoEveryDeclaration from "./every.js";
import arrayProtoFillDeclaration from "./fill.js";
import arrayProtoFilterDeclaration from "./filter.js";
import arrayProtoFindDeclaration from "./find.js";
import arrayProtoFindIndexDeclaration from "./findIndex.js";
import arrayProtoFindLastDeclaration from "./findLast.js";
import arrayProtoFindLastIndexDeclaration from "./findLastIndex.js";
import arrayProtoFlatDeclaration from "./flat.js";
import arrayProtoFlatMapDeclaration from "./flatMap.js";
import arrayProtoForEachDeclaration from "./forEach.js";
import arrayProtoIncludesDeclaration from "./includes.js";
import arrayProtoIndexOfDeclaration from "./indexOf.js";
import arrayProtoJoinDeclaration from "./join.js";
import arrayProtoKeysDeclaration from "./keys.js";
import arrayProtoLastIndexOfDeclaration from "./lastIndexOf.js";
import arrayProtoMapDeclaration from "./map.js";
import arrayProtoPopDeclaration from "./pop.js";
import arrayProtoPushDeclaration from "./push.js";
import arrayProtoReduceDeclaration from "./reduce.js";
import arrayProtoReduceRightDeclaration from "./reduceRight.js";
import arrayProtoReverseDeclaration from "./reverse.js";
import arrayProtoShiftDeclaration from "./shift.js";
import arrayProtoSliceDeclaration from "./slice.js";
import arrayProtoSomeDeclaration from "./some.js";
import arrayProtoSortDeclaration from "./sort.js";
import arrayProtoSpliceDeclaration from "./splice.js";
import arrayProtoSymbolIteratorDeclaration from "./symbol_iterator.js";
import arrayProtoSymbolUnscopables from "./symbol_unscopables.js";
import arrayProtoToStringDeclaration from "./toString.js";
import arrayProtoUnshiftDeclaration from "./unshift.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  arrayProtoAtDeclaration,
  arrayProtoConcatDeclaration,
  // TODO: Array.prototype.copyWithin
  // https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.copywithin
  arrayProtoEntriesDeclaration,
  arrayProtoEveryDeclaration,
  arrayProtoFillDeclaration,
  arrayProtoFilterDeclaration,
  arrayProtoFindDeclaration,
  arrayProtoFindIndexDeclaration,
  arrayProtoFlatDeclaration,
  arrayProtoFlatMapDeclaration,
  arrayProtoFindLastDeclaration,
  arrayProtoFindLastIndexDeclaration,
  arrayProtoForEachDeclaration,
  arrayProtoIncludesDeclaration,
  arrayProtoIndexOfDeclaration,
  arrayProtoJoinDeclaration,
  arrayProtoKeysDeclaration,
  arrayProtoLastIndexOfDeclaration,
  arrayProtoMapDeclaration,
  arrayProtoPopDeclaration,
  arrayProtoPushDeclaration,
  arrayProtoReduceDeclaration,
  arrayProtoReduceRightDeclaration,
  arrayProtoReverseDeclaration,
  arrayProtoShiftDeclaration,
  arrayProtoSliceDeclaration,
  arrayProtoSomeDeclaration,
  arrayProtoSortDeclaration,
  arrayProtoSpliceDeclaration,
  arrayProtoSymbolIteratorDeclaration,
  arrayProtoSymbolUnscopables,
  arrayProtoToStringDeclaration,
  arrayProtoUnshiftDeclaration,
];

export default function populateArrayPrototype(
  realm: StaticJsRealm,
  arrayProto: StaticJsObject,
  prototypes: Prototypes,
  intrinsicSymbols: IntrinsicSymbols,
) {
  applyIntrinsicProperties(
    realm,
    arrayProto,
    declarations,
    prototypes,
    intrinsicSymbols,
  );
}
