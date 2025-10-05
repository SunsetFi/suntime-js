import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../../../types/StaticJsObject.js";

import type { Prototypes, IntrinsicSymbols } from "../../intrinsics.js";

import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../utils.js";

import functionProtoBindDeclaration from "./bind.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  functionProtoBindDeclaration,
];

function populateFunctionPrototype(
  realm: StaticJsRealm,
  functionProto: StaticJsObject,
  prototypes: Prototypes,
  intrinsicSymbols: IntrinsicSymbols,
) {
  applyIntrinsicProperties(
    realm,
    functionProto,
    declarations,
    prototypes,
    intrinsicSymbols,
  );
}

export default populateFunctionPrototype;
