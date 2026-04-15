import type {
  StaticJsEnvironmentReferenceRecord,
  StaticJsReferenceRecord,
} from "./StaticJsReferenceRecord.js";

import { isStaticJsValue } from "../types/StaticJsValue.js";

export function isEnvironmentReference(
  v: StaticJsReferenceRecord,
): v is StaticJsEnvironmentReferenceRecord {
  return v.base !== null && !isStaticJsValue(v.base);
}
