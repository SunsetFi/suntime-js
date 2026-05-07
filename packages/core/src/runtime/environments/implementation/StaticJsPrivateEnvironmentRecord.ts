import { StaticJsEngineError } from "../../../errors/StaticJsEngineError.js";
import { staticJsPrivateName, StaticJsPrivateName } from "../../types/StaticJsPrivateName.js";

export class StaticJsPrivateEnvironmentRecord {
  private readonly _names: StaticJsPrivateName[] = [];
  constructor(private readonly _outerPrivateEnv: StaticJsPrivateEnvironmentRecord | null) {}

  get names(): readonly StaticJsPrivateName[] {
    return this._names;
  }

  hasPrivateName(description: string): boolean {
    return this._names.some((name) => name.description === description);
  }

  addPrivateName(description: string): StaticJsPrivateName {
    const privateName = staticJsPrivateName(description);
    this._names.push(privateName);
    return privateName;
  }

  resolvePrivateIdentifier(identifier: string): StaticJsPrivateName {
    const names = this._names;
    for (const pn of names) {
      if (pn.description === identifier) {
        return pn;
      }
    }

    if (!this._outerPrivateEnv) {
      throw new StaticJsEngineError(
        "Assert failure: Ran out of private environments looking for private identifier",
      );
    }
    return this._outerPrivateEnv.resolvePrivateIdentifier(identifier);
  }
}
