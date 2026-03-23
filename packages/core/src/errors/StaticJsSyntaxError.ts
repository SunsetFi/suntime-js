export interface SyntaxErrorLocation {
  line: number;
  column: number;
  index: number;
}

export class StaticJsSyntaxError extends Error {
  constructor(
    message: string,
    private _loc: SyntaxErrorLocation | null,
  ) {
    super(message);
    this.name = "StaticJsParseError";
  }

  get loc(): SyntaxErrorLocation | null {
    return this._loc;
  }
}
