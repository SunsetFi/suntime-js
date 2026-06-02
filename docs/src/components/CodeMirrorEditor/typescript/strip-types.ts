import tsBlankSpace from "ts-blank-space";

/**
 * Removes TypeScript type annotations from `code`, returning runnable
 * JavaScript.
 *
 * This is a purely syntactic erasure: each type-only span is overwritten with
 * whitespace rather than the file being re-emitted, so line and column numbers
 * are preserved exactly. That keeps editor line numbers, breakpoints, and the
 * paused-line highlight aligned with the stripped source the evaluator runs.
 *
 * No type checking is performed and diagnostics are not reported, so type
 * errors never block execution. The evaluator supports modern ECMAScript, so
 * no syntax downleveling (and therefore no sourcemap) is needed.
 */
export function stripTypes(code: string): string {
  return tsBlankSpace(code);
}
