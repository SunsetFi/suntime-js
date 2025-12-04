import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import type { StaticJsReferenceRecord } from "../../runtime/references/StaticJsReferenceRecord.js";

import type { Completion } from "./Completion.js";
import isAbruptCompletion from "./AbruptCompletion.js";

export default function completionValue(
  completion: Completion,
): StaticJsValue | StaticJsReferenceRecord | null {
  if (isAbruptCompletion(completion)) {
    return completion.value;
  }
  return completion;
}
