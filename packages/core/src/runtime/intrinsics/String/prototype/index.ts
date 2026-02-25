import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../../../types/StaticJsObject.js";

import { applyIntrinsicProperties, type IntrinsicPropertyDeclaration } from "../../utils.js";

import stringProtoCharAtDeclaration from "./charAt.js";
import stringProtoCharCodeAtDeclaration from "./charCodeAt.js";
import stringProtoConcatDeclaration from "./concat.js";
import stringProtoEndsWithDeclaration from "./endsWith.js";
import stringProtoIncludesDeclaration from "./includes.js";
import stringProtoIndexOfDeclaration from "./indexOf.js";
import stringProtoLastIndexOfDeclaration from "./lastIndexOf.js";
import stringProtoLengthDeclaration from "./length.js";
import stringProtoPadEndDeclaration from "./padEnd.js";
import stringProtoPadStartDeclaration from "./padStart.js";
import stringProtoRepeatDeclaration from "./repeat.js";
import stringProtoReplaceDeclaration from "./replace.js";
import stringProtoReplaceAllDeclaration from "./replaceAll.js";
import stringProtoSliceDeclaration from "./slice.js";
import stringProtoSplitDeclaration from "./split.js";
import stringProtoStartsWithDeclaration from "./startsWith.js";
import stringProtoSubstrDeclaration from "./substr.js";
import stringProtoSubstringDeclaration from "./substring.js";
import stringProtoToLowerCaseDeclaration from "./toLowerCase.js";
import stringProtoToStringDeclaration from "./toString.js";
import stringProtoToUpperCaseDeclaration from "./toUpperCase.js";
import stringProtoTrimDeclaration from "./trim.js";
import stringProtoTrimStartDeclaration from "./trimStart.js";
import stringProtoTrimEndDeclaration from "./trimEnd.js";
import stringProtoValueOfDeclaration from "./valueOf.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  stringProtoCharAtDeclaration,
  stringProtoCharCodeAtDeclaration,
  stringProtoConcatDeclaration,
  stringProtoEndsWithDeclaration,
  stringProtoIncludesDeclaration,
  stringProtoIndexOfDeclaration,
  stringProtoLastIndexOfDeclaration,
  stringProtoLengthDeclaration,
  stringProtoPadEndDeclaration,
  stringProtoPadStartDeclaration,
  stringProtoRepeatDeclaration,
  stringProtoReplaceDeclaration,
  stringProtoReplaceAllDeclaration,
  stringProtoSliceDeclaration,
  stringProtoSplitDeclaration,
  stringProtoStartsWithDeclaration,
  stringProtoSubstrDeclaration,
  stringProtoSubstringDeclaration,
  stringProtoToLowerCaseDeclaration,
  stringProtoToStringDeclaration,
  stringProtoToUpperCaseDeclaration,
  stringProtoTrimDeclaration,
  stringProtoTrimStartDeclaration,
  stringProtoTrimEndDeclaration,
  stringProtoValueOfDeclaration,
];

export default function populateStringPrototype(realm: StaticJsRealm, stringProto: StaticJsObject) {
  applyIntrinsicProperties(realm, stringProto, declarations);
}
