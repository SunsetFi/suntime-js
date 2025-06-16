import type { StaticJsRealm } from "../../../realm/index.js";
import type { StaticJsObject } from "../../../types/index.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";
import { applyIntrinsicProperties } from "../../utils.js";

import promiseProtoCatchDeclaration from "./catch.js";
import promiseProtoThenDeclaration from "./then.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  promiseProtoCatchDeclaration,
  promiseProtoThenDeclaration,
];

export default function populatePromisePrototype(
  realm: StaticJsRealm,
  promiseProto: StaticJsObject,
  functionProto: StaticJsObject,
) {
  applyIntrinsicProperties(realm, promiseProto, declarations, functionProto);
}
