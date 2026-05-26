import {
  isStaticJsModule,
  StaticJsModule,
  StaticJsValue,
  isStaticJsValue,
  isStaticJsObject,
  StaticJsRuntimeError,
} from "@suntime-js/core";

export function serialize(value: StaticJsValue | StaticJsModule | unknown): string {
  if (isStaticJsModule(value)) {
    return `[Module: ${value.name}]`;
  }

  if (isStaticJsValue(value)) {
    return serialize(value.toNative());
  }

  if (value instanceof StaticJsRuntimeError) {
    if (isStaticJsObject(value.thrown)) {
      return serialize(value.thrown.getSync("message"));
    }

    return serialize(value.thrown);
  }

  if (value instanceof Error) {
    return value.message;
  }

  if (value === null) return "null";
  if (value === undefined) return "undefined";
  if (typeof value === "object") {
    try {
      return JSON.stringify(value);
    } catch {
      return String(value);
    }
  }
  return String(value);
}
