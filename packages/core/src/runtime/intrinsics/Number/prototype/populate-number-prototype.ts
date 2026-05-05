import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../apply-intrinsic-properties.js";

import numberProtoToExponentialDeclaration from "./toExponential.js";
import numberProtoToFixedDeclaration from "./toFixed.js";
import numberProtoToLocaleStringDeclaration from "./toLocaleString.js";
import numberProtoToPrecisionDeclaration from "./toPrecision.js";
import numberProtoToStringDeclaration from "./toString.js";
import numberProtoValueOfDeclaration from "./valueOf.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  numberProtoToExponentialDeclaration,
  numberProtoToFixedDeclaration,
  numberProtoToLocaleStringDeclaration,
  numberProtoToPrecisionDeclaration,
  numberProtoToStringDeclaration,
  numberProtoValueOfDeclaration,
];

export function* populateNumberPrototype(realm: StaticJsRealm, objectProto: StaticJsObject) {
  yield* applyIntrinsicProperties(realm, objectProto, declarations);
}
