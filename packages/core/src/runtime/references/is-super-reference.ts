import { StaticJsValue } from "../types/StaticJsValue.js";

import {
  StaticJsPropertyReferenceRecord,
  StaticJsReferenceRecord,
} from "./StaticJsReferenceRecord.js";

export function isSuperReference(
  ref: StaticJsReferenceRecord,
): ref is StaticJsPropertyReferenceRecord & { thisValue: StaticJsValue } {
  return ref.thisValue !== null;
}
