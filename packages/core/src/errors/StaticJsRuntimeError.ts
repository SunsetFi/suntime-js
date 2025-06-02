import { isStaticJsObjectLike } from "../runtime/types/StaticJsObject.js";
import { isStaticJsScalar } from "../runtime/types/StaticJsScalar.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

export default class StaticJsRuntimeError extends Error {
  constructor(private readonly _thrown: StaticJsValue) {
    super("StaticJsRuntimeError");
  }

  get name() {
    if (!isStaticJsObjectLike(this._thrown)) {
      return `StaticJsRuntimeError: [${this._thrown.runtimeTypeOf}]`;
    }

    const hasName = this._thrown.hasPropertySync("name");
    if (hasName) {
      const name = this._thrown.getPropertySync("name");
      if (!isStaticJsScalar(name)) {
        return `StaticJsRuntimeError: [${this._thrown.runtimeTypeOf}]`;
      }

      return `StaticJsRuntimeError: [${name.toStringSync()}]`;
    }

    return `StaticJsRuntimeError: [${this._thrown.runtimeTypeOf}]`;
  }

  get message() {
    if (!isStaticJsObjectLike(this._thrown)) {
      return ``;
    }

    const hasMessage = this._thrown.hasPropertySync("message");
    if (hasMessage) {
      const message = this._thrown.getPropertySync("message");
      if (!isStaticJsScalar(message)) {
        return message.toStringSync();
      }
    }

    return ``;
  }

  get thrown(): StaticJsValue {
    return this._thrown;
  }
}
