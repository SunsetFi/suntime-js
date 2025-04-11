export default class StaticJsParseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "StaticJsParseError";
  }
}
