import StaticJsEnvUndefined from "../implementation/StaticJsEnvUndefined.js";
import { StaticJsUndefined as IStaticJsUndefined } from "../interfaces/index.js";

export default function StaticJsUndefined(): IStaticJsUndefined {
  return StaticJsEnvUndefined.Instance;
}
