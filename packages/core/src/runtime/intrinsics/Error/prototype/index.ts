import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";

import type { IntrinsicSymbols, Prototypes } from "../../intrinsics.js";
import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../utils.js";

const declarations: IntrinsicPropertyDeclaration[] = [];

export default function populateErrorPrototype(
  realm: StaticJsRealm,
  errorProto: StaticJsObject,
  prototypes: Prototypes,
  intrinsicSymbols: IntrinsicSymbols,
) {
  applyIntrinsicProperties(
    realm,
    errorProto,
    declarations,
    prototypes,
    intrinsicSymbols,
  );
}
