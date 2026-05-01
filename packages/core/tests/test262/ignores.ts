import Test262File from "./Test262File.js";
import arrayStartsWith from "./utils/array-starts-with.js";

// For now.  Eventually we should cover everything.
const ignoredFeatures = [
  "TypedArray",
  "tail-call-optimization",
  "explicit-resource-management",
  "resizable-arraybuffer",
  "dynamic-import",
  // This is something we can probably implement without much trouble.
  // Maybe wait for real stack traces.
  "caller",
];

const ignoredPaths = [
  // Horrible super laggy long running tests.
  // FIXME: Not all of prototype is this.  Figure out which ones to skip for now
  ["built-ins", "Array", "prototype"],
  // Horrible super laggy long running tests.
  // Also, not currently implemented.
  ["built-ins", "decodeURI"],
  ["built-ins", "decodeURIComponent"],
  ["built-ins", "encodeURI"],
  ["built-ins", "encodeURIComponent"],
  // Stuff we don't yet support
  ["built-ins", "RegExp"],
  ["built-ins", "Temporal"],
  ["built-ins", "WeakMap"],
  ["built-ins", "WeakSet"],
  ["built-ins", "TypedArray"],
  ["built-ins", "AsyncDisposableStack"],
  ["built-ins", "DisposableStack"],
  ["built-ins", "ShadowRealm"],
  // Really?  We should implement this.
  ["built-ins", "JSON"],
  // Takes forever and tests 65535 comment variations, none of which will confuse babel.
  ["language", "comments", "S7.4_A5.js"],
];

export function isTestIgnored(test: Test262File): boolean {
  if (test.features.some((x) => ignoredFeatures.includes(x))) {
    return true;
  }

  if (ignoredPaths.some((path) => arrayStartsWith(test.testPathParts, path))) {
    return true;
  }

  return false;
}
