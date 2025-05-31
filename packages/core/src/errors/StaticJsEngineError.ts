export default class StaticJsEngineError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "StaticJsEngineError";
  }
}
