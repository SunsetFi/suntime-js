import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import {
  type IntrinsicPropertyDeclaration,
  applyIntrinsicProperties,
} from "../../apply-intrinsic-properties.js";

import symbolProtoToStringDeclaration from "./toString.js";

const declarations: IntrinsicPropertyDeclaration[] = [symbolProtoToStringDeclaration];

export function* populateSymbolPrototype(realm: StaticJsRealm, symbolProto: StaticJsObject) {
  yield* applyIntrinsicProperties(realm, symbolProto, declarations);
}
