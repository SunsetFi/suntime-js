import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

export class AbnormalCompletion {
  constructor(public readonly type: string) {}

  toJs(): unknown {
    return new StaticJsEngineError("Unexpected completion type: " + this.type);
  }

  static handleToJs(e: unknown): never {
    if (e instanceof AbnormalCompletion) {
      throw e.toJs();
    }

    throw e;
  }
}
