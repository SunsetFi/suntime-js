import { isStaticJsObjectLike } from "../runtime/types/interfaces/StaticJsObject.js";
import { isStaticJsScalar } from "../runtime/types/interfaces/StaticJsScalar.js";
import { StaticJsValue } from "../runtime/types/interfaces/StaticJsValue.js";

export default class StaticJsRuntimeError extends Error {
  constructor(private readonly _thrown: StaticJsValue) {
    super("StaticJsRuntimeError");
  }

  get name() {
    if (!isStaticJsObjectLike(this._thrown)) {
      return `StaticJsRuntimeError: [${this._thrown.runtimeTypeOf}]`;
    }

    const hasName = this._thrown.hasProperty("name");
    if (hasName) {
      const name = this._thrown.getProperty("name");
      if (!isStaticJsScalar(name)) {
        return `StaticJsRuntimeError: [${this._thrown.runtimeTypeOf}]`;
      }

      return `StaticJsRuntimeError: [${name.toString()}]`;
    }

    return `StaticJsRuntimeError: [${this._thrown.runtimeTypeOf}]`;
  }

  get message() {
    if (!isStaticJsObjectLike(this._thrown)) {
      return ``;
    }

    const hasMessage = this._thrown.hasProperty("message");
    if (hasMessage) {
      const message = this._thrown.getProperty("message");
      if (!isStaticJsScalar(message)) {
        return message.toString();
      }
    }

    return ``;
  }

  get thrown(): StaticJsValue {
    return this._thrown;
  }
}
