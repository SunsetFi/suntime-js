export default class StaticJsSynchronousTaskIncompleteError extends Error {
  constructor(message?: string) {
    super(message ?? "A synchronous task did not complete synchronously.");
    this.name = "StaticJsSynchronousTaskIncompleteError";
  }
}
