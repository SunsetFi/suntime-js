import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import type { StaticJsPlainObject } from "../../../types/StaticJsPlainObject.js";

import { applyIntrinsicProperties, type IntrinsicPropertyDeclaration } from "../../utils.js";

import generatorProtoNextDeclaration from "./next.js";
import generatorProtoReturnDeclaration from "./return.js";
import generatorProtoThrowDeclaration from "./throw.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  generatorProtoNextDeclaration,
  generatorProtoReturnDeclaration,
  generatorProtoThrowDeclaration,
];

export default function populateGeneratorPrototype(
  realm: StaticJsRealm,
  generatorProto: StaticJsPlainObject,
): void {
  applyIntrinsicProperties(realm, generatorProto, declarations);

  generatorProto.defineOwnPropertySync("constructor", {
    value: generatorProto,
    writable: false,
    enumerable: false,
    configurable: true,
  });
}
