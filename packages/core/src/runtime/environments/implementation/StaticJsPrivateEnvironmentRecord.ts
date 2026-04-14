export interface StaticJsPrivateName {
  type: "private-name";
  description: string;
}

export function isStaticJsPrivateName(value: unknown): value is StaticJsPrivateName {
  return (
    typeof value === "object" && value !== null && "type" in value && value.type === "private-name"
  );
}

export function staticJsPrivateName(description: string): StaticJsPrivateName {
  return { type: "private-name", description };
}

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
