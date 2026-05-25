export interface StaticJsDebugScope {
  readonly name: string;
  readonly type: "block" | "function" | "module" | "global";
  readonly variablesReference: number;
  readonly expensive: boolean;
}
