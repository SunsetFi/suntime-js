import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../../../types/StaticJsObject.js";

import type { IntrinsicSymbols, Prototypes } from "../../intrinsics.js";
import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../utils.js";

import objectProtoHasOwnPropertyDeclaration from "./hasOwnProperty.js";
import objectProtoToStringDeclaration from "./toString.js";
import objectProtoValueOfDeclaration from "./valueOf.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  objectProtoToStringDeclaration,
  objectProtoHasOwnPropertyDeclaration,
  objectProtoValueOfDeclaration,
];

export default function populateObjectPrototype(
  realm: StaticJsRealm,
  objectProto: StaticJsObject,
  prototypes: Prototypes,
  intrinsicSymbols: IntrinsicSymbols,
) {
  applyIntrinsicProperties(
    realm,
    objectProto,
    declarations,
    prototypes,
    intrinsicSymbols,
  );
}
