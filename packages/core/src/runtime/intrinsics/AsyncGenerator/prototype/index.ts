import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../../../types/StaticJsObject.js";

import { applyIntrinsicProperties, type IntrinsicPropertyDeclaration } from "../../utils.js";

import asyncGeneratorProtoNextDeclaration from "./next.js";
import asyncGeneratorProtoReturnDeclaration from "./return.js";
import asyncGeneratorProtoThrowDeclaration from "./throw.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  asyncGeneratorProtoNextDeclaration,
  asyncGeneratorProtoReturnDeclaration,
  asyncGeneratorProtoThrowDeclaration,
];

export default function populateAsyncGeneratorPrototype(
  realm: StaticJsRealm,
  asyncGeneratorProto: StaticJsObject,
): void {
  applyIntrinsicProperties(realm, asyncGeneratorProto, declarations);

  asyncGeneratorProto.defineOwnPropertySync("constructor", {
    value: realm.types.prototypes.asyncGeneratorProto,
    writable: false,
    enumerable: false,
    configurable: true,
  });
}
