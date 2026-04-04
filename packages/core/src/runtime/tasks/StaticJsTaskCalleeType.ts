/**
 * The callee of a StaticJsTask, which indicates how the task was triggered.
 *
 * - evaluate
 *   A task triggered by evaluateScript, evaluateExpression, or evaluateModule
 * - host
 *   A task triggered by the host environment, such as through toJsSync.
 */
export type StaticJsTaskCalleeType = "evaluate" | "host";
