/**
 * The type of a task in the StaticJs runtime.
 *
 * - macrotask
 *   A normal task triggered by evaluateScript, evaluateExpression, or evaluateModule
 * - microtask
 *   A followup for a promise resolution or similar, which runs after the current task completes but before the next macrotask starts.
 * - host-invocation
 *   A task triggered by the host environent, such as through toJsSync.
 * - host-invocation-nested
 *   A nested task triggered by the host environment, occuring while inside an existing macrotask or microtask.
 *
 */
export type StaticJsTaskType = "macrotask" | "microtask" | "host-macrotask" | "host-microtask";
