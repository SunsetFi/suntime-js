import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";

import type { IntrinsicSymbols, Prototypes } from "../../intrinsics.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";
import { applyIntrinsicProperties } from "../../utils.js";

import promiseProtoCatchDeclaration from "./catch.js";
import promiseProtoFinallyDeclaration from "./finally.js";
import promiseProtoThenDeclaration from "./then.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  promiseProtoCatchDeclaration,
  promiseProtoFinallyDeclaration,
  promiseProtoThenDeclaration,
];

export default function populatePromisePrototype(
  realm: StaticJsRealm,
  promiseProto: StaticJsObject,
  prototypes: Prototypes,
  intrinsicSymbols: IntrinsicSymbols,
) {
  applyIntrinsicProperties(
    realm,
    promiseProto,
    declarations,
    prototypes,
    intrinsicSymbols,
  );
}
