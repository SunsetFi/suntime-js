import { isStaticJsPrivateName, type StaticJsPrivateName } from "#types/StaticJsPrivateName.js";

import type {
  StaticJsPropertyReferenceRecord,
  StaticJsReferenceRecord,
} from "./StaticJsReferenceRecord.js";

import { isPropertyReference } from "./is-property-reference.js";

export function isPrivateReference(
  v: StaticJsReferenceRecord,
): v is StaticJsPropertyReferenceRecord & { referencedName: StaticJsPrivateName } {
  return isPropertyReference(v) && isStaticJsPrivateName(v.referencedName);
}
