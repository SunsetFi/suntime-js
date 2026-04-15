import type {
  StaticJsPropertyReferenceRecord,
  StaticJsReferenceRecord,
} from "./StaticJsReferenceRecord.js";

import { isStaticJsValue } from "../types/StaticJsValue.js";

export function isPropertyReference(
  v: StaticJsReferenceRecord,
): v is StaticJsPropertyReferenceRecord {
  return isStaticJsValue(v.base);
}
