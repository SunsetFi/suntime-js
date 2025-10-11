export default class StaticJsConcurrentEvaluationError extends Error {
  constructor(message?: string) {
    super(
      message ??
        "Cannot evaluate expression synchronously while another task is running.",
    );
    this.name = "StaticJsConcurrentEvaluationError";
  }
}
