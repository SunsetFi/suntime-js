export interface StaticJsDebugFrame {
  readonly id: string;
  readonly sourceName: string;
  readonly functionName: string | null;
  readonly line: number;
  readonly column: number;
}
