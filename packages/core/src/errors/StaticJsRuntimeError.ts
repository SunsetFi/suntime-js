import { isStaticJsObjectLike } from "../runtime/types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

export default class StaticJsRuntimeError extends Error {
  constructor(
    private readonly _thrown: StaticJsValue,
    prefix: string = "Runtime Error: ",
  ) {
    super("StaticJsRuntimeError");
    this.name = "StaticJsRuntimeError";
    this.message = prefix + getMessage(this._thrown);
  }

  get thrown(): StaticJsValue {
    return this._thrown;
  }

  toJSON(): Record<string, unknown> {
    return {
      name: this.name,
      message: this.message,
    };
  }
}

function getMessage(value: StaticJsValue): string {
  if (!isStaticJsObjectLike(value)) {
    return value.toStringSync();
  }

  const hasMessage = value.hasPropertySync("message");
  if (hasMessage) {
    const message = value.getSync("message");
    return message.toStringSync();
  }

  return ``;
}
