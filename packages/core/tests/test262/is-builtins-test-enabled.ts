import compareBuiltinsBaseline from "../env/compare-builtins-baseline.js";
import getBuiltinsBaseline from "../get-builtins-baseline.js";

import makeIsTestEnabled from "./make-is-test-enabled.js";

export default makeIsTestEnabled({
  baselineTests: compareBuiltinsBaseline ? getBuiltinsBaseline() : undefined,
  ignoredTestPaths: [
    // Horrible super laggy long running tests.
    // FIXME: Not all of prototype is this.  Figure out which ones to skip for now
    ["built-ins", "Array", "prototype"],
    // Horrible super laggy long running tests.
    ["built-ins", "decodeURI"],
    ["built-ins", "decodeURIComponent"],
  ],
});
