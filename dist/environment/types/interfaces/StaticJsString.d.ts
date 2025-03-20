import { StaticJsObject } from "./StaticJsObject.js";
export interface StaticJsString extends StaticJsObject<"string"> {}
export declare function isStaticJsString(value: any): value is StaticJsString;
