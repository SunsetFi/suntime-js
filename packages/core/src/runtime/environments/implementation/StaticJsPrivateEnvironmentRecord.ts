import { StaticJsPrivateName } from "../../types/StaticJsPrivateName.js";

export class StaticJsPrivateEnvironmentRecord {
  private readonly _names: StaticJsPrivateName[] = [];
  constructor(private readonly _outerPrivateEnv: StaticJsPrivateEnvironmentRecord | null) {}

  get names(): readonly StaticJsPrivateName[] {
    return this._names;
  }

  hasPrivateName(description: string): boolean {
    return (
      this._names.some((name) => name.description === description) ||
      this._outerPrivateEnv?.hasPrivateName(description) === true
    );
  }

  addPrivateName(description: string): StaticJsPrivateName {
    const privateName = { type: "private-name" as const, description };
    this._names.push(privateName);
    return privateName;
  }
}
