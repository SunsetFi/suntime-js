export type StaticJsCyclicModuleStatus =
  | "new"
  | "unlinked"
  | "linking"
  | "linked"
  | "evaluating"
  | "evaluating-async"
  | "evaluated";

/**
 * "evaluating" | "evaluating-async"
 */
export const EvaluatingStatus = new Set<StaticJsCyclicModuleStatus>([
  "evaluating",
  "evaluating-async",
]);

export const AsyncEvaluatingOrEvaluatedStatus = new Set<StaticJsCyclicModuleStatus>([
  "evaluating-async",
  "evaluated",
]);

/**
 * "evaluating" | "evaluating-async" | "evaluated"
 */
export const EvaluatingOrEvaluatedStatus = new Set<StaticJsCyclicModuleStatus>([
  "evaluating",
  "evaluating-async",
  "evaluated",
]);

/**
 * "linking" | "linked" | "evaluating-async" | "evaluated"
 */
export const AtLeastLinkingStatus = new Set<StaticJsCyclicModuleStatus>([
  "linking",
  "linked",
  "evaluating-async",
  "evaluated",
]);

/**
 * "linked" | "evaluating-async" | "evaluated"
 */
export const AtLeastLinkedStatus = new Set<StaticJsCyclicModuleStatus>([
  "linked",
  "evaluating-async",
  "evaluated",
]);

/**
 * "evaluating-async" | "evaluated"
 */
export const EvaluatingAsyncOrEvaluatedStatus = new Set<StaticJsCyclicModuleStatus>([
  "evaluating-async",
  "evaluated",
]);
