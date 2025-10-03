import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsSymbol } from "../StaticJsSymbol.js";

import StaticJsObjectLikeImpl from "./StaticJsObjectLikeImpl.js";

export default class StaticJsSymbolImpl
  extends StaticJsObjectLikeImpl
  implements StaticJsSymbol
{
  get runtimeTypeOf(): "symbol" {
    return "symbol";
  }

  get typeOf(): string {
    return "symbol";
  }

  constructor(
    realm: StaticJsRealm,
    public readonly description: string | undefined = undefined,
  ) {
    super(realm, realm.types.prototypes.symbolProto);
  }
}
