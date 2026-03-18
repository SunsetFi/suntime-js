export interface StaticJsTaskSourceLocation {
  /**
   * The name of the source file of the current location in the source code.
   */
  sourceName: string;

  /**
   * The 1-based line number of the current location in the source code.
   */
  line: number;

  /**
   * The 0-based column number of the current location in the source code.
   */
  column: number;

  /**
   * The 0-based character index of the current location in the source code.
   */
  character: number;
}
