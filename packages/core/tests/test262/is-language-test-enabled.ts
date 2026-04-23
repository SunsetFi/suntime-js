import compareBaseline from "../env/compare-baseline.js";
import getBaseline from "../get-language-baseline.js";

import makeIsTestEnabled from "./make-is-test-enabled.js";

export default makeIsTestEnabled({
  baselineTests: compareBaseline ? getBaseline() : undefined,
  ignoredTestPaths: [
    // Tests 65535 comment variations, none of which will confuse babel.
    ["language", "comments", "S7.4_A5.js"],
  ],
});
