import type { Expression, Function } from "@babel/types";

import { StaticJsPrivateEnvironmentRecord } from "../../../environments/implementation/StaticJsPrivateEnvironmentRecord.js";

import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import { StaticJsObjectLike } from "../../StaticJsObjectLike.js";

import {
  StaticJsAstFunction,
  StaticJsAstFunctionArgument,
  StaticJsAstFunctionOptions,
} from "./StaticJsAstFunction.js";

export type StaticJsClassMethodFunctionOptions = Omit<
  StaticJsAstFunctionOptions,
  "thisMode" | "construct"
> & {
  prototype: StaticJsObjectLike | null;
  privateEnv: StaticJsPrivateEnvironmentRecord | null;
  homeObject: StaticJsObjectLike;
};
export class StaticJsClassMethodFunction extends StaticJsAstFunction {
  private _homeObject: StaticJsObjectLike;

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

  get homeObject(): StaticJsObjectLike {
    return this._homeObject;
  }
}
