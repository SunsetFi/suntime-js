import StaticJsEnvNull from "../implementation/StaticJsEnvNull.js";
import { StaticJsNull as IStaticJsNull } from "../interfaces/index.js";

export default function StaticJsNull(): IStaticJsNull {
  return StaticJsEnvNull.Instance;
}
