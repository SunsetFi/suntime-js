// Used to squelch vitest dumping the entire realm when an error is thrown.
// We cannot use node:util as we need to run in a web environment.
export const symbolInspect = Symbol.for("nodejs.util.inspect.custom");
