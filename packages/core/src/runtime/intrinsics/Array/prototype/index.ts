import { StaticJsRealm } from "../../../realm/index.js";
import { StaticJsObject } from "../../../types/index.js";

import {
  applyIntrinsicProperties,
  IntrinsicPropertyDeclaration,
} from "../../utils.js";

import arrayProtoEveryDeclaration from "./every.js";
import arrayProtoFilterDeclaration from "./filter.js";
import arrayProtoForEachDeclaration from "./forEach.js";
import arrayProtoMapDeclaration from "./map.js";
import arrayProtoPopDeclaration from "./pop.js";
import arrayProtoPushDeclaration from "./push.js";
import arrayProtoReduceDeclaration from "./reduce.js";
import arrayProtoShiftDeclaration from "./shift.js";
import arrayProtoSomeDeclaration from "./some.js";
import arrayProtoUnshiftDeclaration from "./unshift.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  arrayProtoEveryDeclaration,
  arrayProtoFilterDeclaration,
  arrayProtoForEachDeclaration,
  arrayProtoMapDeclaration,
  arrayProtoPopDeclaration,
  arrayProtoPushDeclaration,
  arrayProtoReduceDeclaration,
  arrayProtoShiftDeclaration,
  arrayProtoSomeDeclaration,
  arrayProtoUnshiftDeclaration,
];

export default function populateArrayPrototype(
  realm: StaticJsRealm,
  arrayProto: StaticJsObject,
  functionProto: StaticJsObject,
) {
  applyIntrinsicProperties(realm, arrayProto, declarations, functionProto);
}
