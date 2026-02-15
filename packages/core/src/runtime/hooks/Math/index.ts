import { mathAcosHookDefault, type MathAcosHook } from "./acos.js";
import { mathAcoshHookDefault, type MathAcoshHook } from "./acosh.js";
import { mathAsinHookDefault, type MathAsinHook } from "./asin.js";
import { mathAsinhHookDefault, type MathAsinhHook } from "./asinh.js";
import { mathAtanHookDefault, type MathAtanHook } from "./atan.js";
import { mathAtan2HookDefault, type MathAtan2Hook } from "./atan2.js";
import { mathAtanhHookDefault, type MathAtanhHook } from "./atanh.js";
import { mathCbrtHookDefault, type MathCbrtHook } from "./cbrt.js";
import { mathCosHookDefault, type MathCosHook } from "./cos.js";
import { mathCoshHookDefault, type MathCoshHook } from "./cosh.js";
import { mathExpHookDefault, type MathExpHook } from "./exp.js";
import { mathExpm1HookDefault, type MathExpm1Hook } from "./expm1.js";
import { mathHypotHookDefault, type MathHypotHook } from "./hypot.js";
import { mathLogHookDefault, type MathLogHook } from "./log.js";
import { mathLog10HookDefault, type MathLog10Hook } from "./log10.js";
import { mathLog1pHookDefault, type MathLog1pHook } from "./log1p.js";
import { mathLog2HookDefault, type MathLog2Hook } from "./log2.js";
import { mathRandomHookDefault, type MathRandomHook } from "./random.js";
import { mathSinHookDefault, type MathSinHook } from "./sin.js";
import { mathSinhHookDefault, type MathSinhHook } from "./sinh.js";
import { mathSqrtHookDefault, type MathSqrtHook } from "./sqrt.js";
import { mathTanHookDefault, type MathTanHook } from "./tan.js";
import { mathTanhHookDefault, type MathTanhHook } from "./tanh.js";

export interface MathHooks {
  acos: MathAcosHook;
  acosh: MathAcoshHook;
  asin: MathAsinHook;
  asinh: MathAsinhHook;
  atan: MathAtanHook;
  atan2: MathAtan2Hook;
  atanh: MathAtanhHook;
  cbrt: MathCbrtHook;
  cos: MathCosHook;
  cosh: MathCoshHook;
  exp: MathExpHook;
  expm1: MathExpm1Hook;
  hypot: MathHypotHook;
  log: MathLogHook;
  log10: MathLog10Hook;
  log1p: MathLog1pHook;
  log2: MathLog2Hook;
  random: MathRandomHook;
  sin: MathSinHook;
  sinh: MathSinhHook;
  sqrt: MathSqrtHook;
  tan: MathTanHook;
  tanh: MathTanhHook;
}

export const mathDefaultHooks: MathHooks = {
  acos: mathAcosHookDefault,
  acosh: mathAcoshHookDefault,
  asin: mathAsinHookDefault,
  asinh: mathAsinhHookDefault,
  atan: mathAtanHookDefault,
  atan2: mathAtan2HookDefault,
  atanh: mathAtanhHookDefault,
  cbrt: mathCbrtHookDefault,
  cos: mathCosHookDefault,
  cosh: mathCoshHookDefault,
  exp: mathExpHookDefault,
  expm1: mathExpm1HookDefault,
  hypot: mathHypotHookDefault,
  log: mathLogHookDefault,
  log10: mathLog10HookDefault,
  log1p: mathLog1pHookDefault,
  log2: mathLog2HookDefault,
  random: mathRandomHookDefault,
  sin: mathSinHookDefault,
  sinh: mathSinhHookDefault,
  sqrt: mathSqrtHookDefault,
  tan: mathTanHookDefault,
  tanh: mathTanhHookDefault,
};
