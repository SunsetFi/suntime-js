import type { StaticJsLaunchRequestArguments } from "./StaticJsLaunchRequestArguments.js";

export interface NormalizedStaticJsLaunchRequestArguments extends StaticJsLaunchRequestArguments {
  readonly sourceName: string;
}
