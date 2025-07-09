import type { StaticJsRealm } from "../../../realm/index.js";
import type { StaticJsObject } from "../../../types/index.js";

import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../utils.js";

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

export default function populateNumberPrototype(
  realm: StaticJsRealm,
  objectProto: StaticJsObject,
  functionProto: StaticJsObject,
) {
  applyIntrinsicProperties(realm, objectProto, declarations, functionProto);
}
