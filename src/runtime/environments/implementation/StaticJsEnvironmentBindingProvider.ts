import StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";

export const StaticJsEnvironmentGetBinding: unique symbol = Symbol(
  "static-js::StaticJsEnvironmentBindingProvider",
);
export default interface StaticJsEnvironmentBindingProvider {
  [StaticJsEnvironmentGetBinding](
    name: string,
  ): StaticJsEnvironmentBinding | undefined;
}
export function isStaticJsEnvironmentBindingProvider(
  value: any,
): value is StaticJsEnvironmentBindingProvider {
  return (
    typeof value === "object" &&
    value !== null &&
    StaticJsEnvironmentGetBinding in value
  );
}
