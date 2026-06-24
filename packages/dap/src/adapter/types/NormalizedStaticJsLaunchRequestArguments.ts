import type { StaticJsLaunchRequestArguments } from "./StaticJsLaunchRequestArguments.js";

export interface NormalizedStaticJsLaunchRequestArguments extends Readonly<StaticJsLaunchRequestArguments> {
  readonly sourceName: string;
}
