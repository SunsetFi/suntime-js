export default class StaticJsSyntaxError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "StaticJsParseError";
  }
}
