import type { StaticJsEnvironment } from "../StaticJsEnvironment.js";

import type StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";

export const StaticJsEnvironmentGetBinding: unique symbol = Symbol(
  "static-js::StaticJsEnvironmentBindingProvider",
);
export default interface StaticJsEnvironmentBindingProvider {
  [StaticJsEnvironmentGetBinding](
    name: string,
  ): StaticJsEnvironmentBinding | undefined;
}
export function isStaticJsEnvironmentBindingProvider(
  value: unknown,
): value is StaticJsEnvironmentBindingProvider {
  return (
    typeof value === "object" &&
    value !== null &&
    StaticJsEnvironmentGetBinding in value
  );
}
export function environmentToBindingProvider(
  env: StaticJsEnvironment,
): StaticJsEnvironment & StaticJsEnvironmentBindingProvider {
  if (isStaticJsEnvironmentBindingProvider(env)) {
    return env;
  }

  throw new TypeError(
    "Environment does not implement StaticJsEnvironmentBindingProvider",
  );
}
