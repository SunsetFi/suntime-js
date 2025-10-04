import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";

import type { IntrinsicSymbols, Prototypes } from "../../intrinsics.js";
import {
  type IntrinsicPropertyDeclaration,
  applyIntrinsicProperties,
} from "../../utils.js";

import symbolProtoToStringDeclaration from "./toString.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  symbolProtoToStringDeclaration,
];

export default function populateSymbolPrototype(
  realm: StaticJsRealm,
  symbolProto: StaticJsObject,
  prototypes: Prototypes,
  intrinsicSymbols: IntrinsicSymbols,
) {
  applyIntrinsicProperties(
    realm,
    symbolProto,
    declarations,
    prototypes,
    intrinsicSymbols,
  );
}
