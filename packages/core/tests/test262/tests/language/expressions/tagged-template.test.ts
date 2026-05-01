import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "cache-different-functions-same-site.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/tagged-template/cache-different-functions-same-site.js"),
);

it(
  "cache-differing-expressions-eval.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/tagged-template/cache-differing-expressions-eval.js"),
);

it(
  "cache-differing-expressions-new-function.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "language/expressions/tagged-template/cache-differing-expressions-new-function.js",
  ),
);

it(
  "cache-differing-expressions.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/tagged-template/cache-differing-expressions.js"),
);

it(
  "cache-differing-raw-strings.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/tagged-template/cache-differing-raw-strings.js"),
);

it(
  "cache-differing-string-count.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/tagged-template/cache-differing-string-count.js"),
);

it(
  "cache-eval-inner-function.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/tagged-template/cache-eval-inner-function.js"),
);

it(
  "cache-identical-source-eval.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/tagged-template/cache-identical-source-eval.js"),
);

it(
  "cache-identical-source-new-function.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/tagged-template/cache-identical-source-new-function.js"),
);

it(
  "cache-identical-source.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/tagged-template/cache-identical-source.js"),
);

it(
  "cache-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/tagged-template/cache-realm.js"),
);

it(
  "cache-same-site-top-level.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/tagged-template/cache-same-site-top-level.js"),
);

it(
  "cache-same-site.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/tagged-template/cache-same-site.js"),
);

it(
  "call-expression-argument-list-evaluation.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "language/expressions/tagged-template/call-expression-argument-list-evaluation.js",
  ),
);

it(
  "call-expression-context-no-strict.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/tagged-template/call-expression-context-no-strict.js"),
);

it(
  "call-expression-context-strict.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/tagged-template/call-expression-context-strict.js"),
);

it(
  "chained-application.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/tagged-template/chained-application.js"),
);

it(
  "constructor-invocation.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/tagged-template/constructor-invocation.js"),
);

it(
  "invalid-escape-sequences.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/tagged-template/invalid-escape-sequences.js"),
);

it(
  "member-expression-argument-list-evaluation.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "language/expressions/tagged-template/member-expression-argument-list-evaluation.js",
  ),
);

it(
  "member-expression-context.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/tagged-template/member-expression-context.js"),
);

it.skip("tco-call.js", () => {
  /* Ignored Test */
});

it.skip("tco-member.js", () => {
  /* Ignored Test */
});

it(
  "template-object-frozen-non-strict.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/tagged-template/template-object-frozen-non-strict.js"),
);

it(
  "template-object-frozen-strict.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/tagged-template/template-object-frozen-strict.js"),
);

it(
  "template-object-template-map.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/tagged-template/template-object-template-map.js"),
);

it(
  "template-object.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/tagged-template/template-object.js"),
);
