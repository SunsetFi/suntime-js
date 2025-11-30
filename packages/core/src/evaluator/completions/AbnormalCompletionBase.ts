import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

export class AbnormalCompletionBase {
  constructor(public readonly type: string) {}

  toJs(): unknown {
    return new StaticJsEngineError("Unexpected completion type: " + this.type);
  }

  static handleToJs(e: unknown): never {
    if (e instanceof AbnormalCompletionBase) {
      throw e.toJs();
    }

    throw e;
  }

  toRuntime(): Error {
    return new StaticJsEngineError("Unexpected completion type: " + this.type);
  }
}
