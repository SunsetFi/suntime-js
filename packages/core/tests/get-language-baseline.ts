import makeBaselineLoader from "./make-baseline-loader.js";

export default makeBaselineLoader(
  new URL("./test-results-language-baseline.json", import.meta.url).pathname,
);
