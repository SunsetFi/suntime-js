export function drainIterator(task: Iterator<unknown>) {
  while (true) {
    const { done } = task.next();
    if (done) {
      break;
    }
  }
}
