import createBaseline from "./env/create-baseline.js";

if (createBaseline) {
  Error.stackTraceLimit = 0;
  Error.captureStackTrace = () => {};
} else {
  Error.stackTraceLimit = Infinity;
}
