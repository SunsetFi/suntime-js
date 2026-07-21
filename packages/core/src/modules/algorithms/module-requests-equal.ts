import type { StaticJsImportAttribute } from "#modules/implementation-v2/StaticJsImportAttribute.js";
import type { StaticJsModuleRequest } from "#modules/implementation-v2/StaticJsModuleRequest.js";

export function moduleRequestsEqual(x: StaticJsModuleRequest, y: StaticJsModuleRequest): boolean {
  if (x.specifier !== y.specifier) {
    return false;
  }

  const xAttrs = x.attributes;
  const yAttrs = y.attributes;

  if (xAttrs.length !== yAttrs.length) {
    return false;
  }

  for (const x of xAttrs) {
    const y = yAttrs.find((y) => importAttributesEqual(x, y));
    if (!y) {
      return false;
    }
  }

  return true;
}

function importAttributesEqual(x: StaticJsImportAttribute, y: StaticJsImportAttribute): boolean {
  return x.key === y.key && x.value === y.value;
}
