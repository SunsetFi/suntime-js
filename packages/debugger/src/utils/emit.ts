export default function emit<T>(listeners: Set<(event: T) => void>, event: T): void {
  for (const listener of listeners) {
    listener(event);
  }
}