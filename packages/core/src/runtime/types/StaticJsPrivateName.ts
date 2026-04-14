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
