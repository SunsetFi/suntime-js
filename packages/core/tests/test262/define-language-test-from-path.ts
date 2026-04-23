import isTestEnabled from "./is-language-test-enabled.js";
import makeDefineTestFromPath from "./make-define-test-from-path.js";

export default makeDefineTestFromPath(isTestEnabled);
