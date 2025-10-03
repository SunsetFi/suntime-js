import { isStaticJsObjectLike } from "../runtime/types/StaticJsObjectLike.js";
import { isStaticJsScalar } from "../runtime/types/StaticJsScalar.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

export default class StaticJsRuntimeError extends Error {
  constructor(private readonly _thrown: StaticJsValue) {
    super("StaticJsRuntimeError");

    this.name = getName(this._thrown);
    this.message = getMessage(this._thrown);
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

function getName(value: StaticJsValue): string {
  if (!isStaticJsObjectLike(value)) {
    return `StaticJsRuntimeError: [${value.runtimeTypeOf}]`;
  }

  const hasName = value.hasPropertySync("name");
  if (hasName) {
    const name = value.getPropertySync("name");
    if (!isStaticJsScalar(name)) {
      return `StaticJsRuntimeError: [${value.runtimeTypeOf}]`;
    }

    return `StaticJsRuntimeError: [${name.toStringSync()}]`;
  }

  return `StaticJsRuntimeError: [${value.runtimeTypeOf}]`;
}

function getMessage(value: StaticJsValue): string {
  if (!isStaticJsObjectLike(value)) {
    return ``;
  }

  const hasMessage = value.hasPropertySync("message");
  if (hasMessage) {
    const message = value.getPropertySync("message");
    return message.toStringSync();
  }

  return ``;
}
