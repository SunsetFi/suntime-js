const perfEnabled = false;

export default function getPerf(): (message: string) => void {
  if (!perfEnabled) {
    return () => {};
  }

  const now = performance.now();
  let last = now;
  return (message) => {
    const time = performance.now() - now;
    const delta = performance.now() - last;
    last = performance.now();
    console.log(`${message}: ${time.toFixed(2)}ms (+${delta.toFixed(2)}ms)`);
  };
}
