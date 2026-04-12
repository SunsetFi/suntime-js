import type { Expression, Function } from "@babel/types";

import { StaticJsPrivateEnvironmentRecord } from "../../../environments/implementation/StaticJsPrivateEnvironmentRecord.js";

import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import { StaticJsObject } from "../../StaticJsObject.js";

import {
  StaticJsAstFunction,
  StaticJsAstFunctionArgument,
  StaticJsAstFunctionOptions,
} from "./StaticJsAstFunction.js";

export type StaticJsClassMethodFunctionOptions = Omit<
  StaticJsAstFunctionOptions,
  "thisMode" | "construct"
> & {
  prototype: StaticJsObject | null;
  privateEnv: StaticJsPrivateEnvironmentRecord | null;
  homeObject: StaticJsObject;
};
export class StaticJsClassMethodFunction extends StaticJsAstFunction {
  private _homeObject: StaticJsObject;

  constructor(
    realm: StaticJsRealm,
    argumentDeclarations: StaticJsAstFunctionArgument[],
    node: Function | Expression,
    opts: StaticJsClassMethodFunctionOptions,
  ) {
    const { homeObject, ...astOpts } = opts;
    // Non-arrow and non-class-method functions are always constructors.
    super(realm, null, argumentDeclarations, node, {
      thisMode: "non-lexical-this",
      construct: false,
      ...astOpts,
    });

    this._homeObject = homeObject;
  }

  isClassConstructor = false;

  get homeObject(): StaticJsObject {
    return this._homeObject;
  }
}
