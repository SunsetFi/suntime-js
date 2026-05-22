export function drainIterator<TIter = unknown, TReturn = unknown>(
  task: Iterator<TIter, TReturn>,
): TReturn {
  while (true) {
    const { done, value } = task.next();
    if (done) {
      return value;
    }
  }
}
