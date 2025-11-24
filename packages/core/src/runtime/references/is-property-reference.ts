import { isStaticJsValue } from "../types/StaticJsValue.js";

import type {
  StaticJsPropertyReferenceRecord,
  StaticJsReferenceRecord,
} from "./StaticJsReferenceRecord.js";

export function isPropertyReference(
  v: StaticJsReferenceRecord,
): v is StaticJsPropertyReferenceRecord {
  return isStaticJsValue(v.base);
}
