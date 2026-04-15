import { isStaticJsPrivateName, StaticJsPrivateName } from "../types/StaticJsPrivateName.js";

import { isPropertyReference } from "./is-property-reference.js";
import {
  StaticJsPropertyReferenceRecord,
  StaticJsReferenceRecord,
} from "./StaticJsReferenceRecord.js";

export function isPrivateReference(
  v: StaticJsReferenceRecord,
): v is StaticJsPropertyReferenceRecord & { referencedName: StaticJsPrivateName } {
  return isPropertyReference(v) && isStaticJsPrivateName(v.referencedName);
}
