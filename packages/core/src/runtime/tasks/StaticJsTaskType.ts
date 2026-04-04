/**
 * The type of a task in the StaticJs runtime.
 *
 * - macrotask
 *   A normal task triggered by evaluateScript, evaluateExpression, or evaluateModule
 * - microtask
 *   A followup for a promise resolution or similar, which runs after the current task completes but before the next macrotask starts.
 *
 */
export type StaticJsTaskType = "macrotask" | "microtask";
