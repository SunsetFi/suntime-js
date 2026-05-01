import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "evaluation-order.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/template-literal/evaluation-order.js"),
);

it(
  "invalid-hexidecimal-character-escape-sequence-truncated-1.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/template-literal/invalid-hexidecimal-character-escape-sequence-truncated-1.js",
  ),
);

it(
  "invalid-hexidecimal-character-escape-sequence-truncated-2.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/template-literal/invalid-hexidecimal-character-escape-sequence-truncated-2.js",
  ),
);

it(
  "invalid-hexidecimal-character-escape-sequence-truncated-3.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/template-literal/invalid-hexidecimal-character-escape-sequence-truncated-3.js",
  ),
);

it(
  "invalid-legacy-octal-escape-sequence-8.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/template-literal/invalid-legacy-octal-escape-sequence-8.js",
  ),
);

it(
  "invalid-legacy-octal-escape-sequence-9.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/template-literal/invalid-legacy-octal-escape-sequence-9.js",
  ),
);

it(
  "invalid-legacy-octal-escape-sequence.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/expressions/template-literal/invalid-legacy-octal-escape-sequence.js",
  ),
);

it(
  "invalid-unicode-escape-sequence-1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/invalid-unicode-escape-sequence-1.js"),
);

it(
  "invalid-unicode-escape-sequence-2.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/invalid-unicode-escape-sequence-2.js"),
);

it(
  "invalid-unicode-escape-sequence-3.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/invalid-unicode-escape-sequence-3.js"),
);

it(
  "invalid-unicode-escape-sequence-4.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/invalid-unicode-escape-sequence-4.js"),
);

it(
  "invalid-unicode-escape-sequence-5.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/invalid-unicode-escape-sequence-5.js"),
);

it(
  "invalid-unicode-escape-sequence-6.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/invalid-unicode-escape-sequence-6.js"),
);

it(
  "invalid-unicode-escape-sequence-7.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/invalid-unicode-escape-sequence-7.js"),
);

it(
  "invalid-unicode-escape-sequence-8.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/invalid-unicode-escape-sequence-8.js"),
);

it(
  "literal-expr-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/literal-expr-abrupt.js"),
);

it(
  "literal-expr-function.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/literal-expr-function.js"),
);

it(
  "literal-expr-member-expr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/literal-expr-member-expr.js"),
);

it(
  "literal-expr-method.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/literal-expr-method.js"),
);

it(
  "literal-expr-obj.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/literal-expr-obj.js"),
);

it(
  "literal-expr-primitive.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/literal-expr-primitive.js"),
);

it(
  "literal-expr-template.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/literal-expr-template.js"),
);

it(
  "literal-expr-tostr-error.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/literal-expr-tostr-error.js"),
);

it(
  "middle-list-many-expr-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/middle-list-many-expr-abrupt.js"),
);

it(
  "middle-list-many-expr-function.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/middle-list-many-expr-function.js"),
);

it(
  "middle-list-many-expr-member-expr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/middle-list-many-expr-member-expr.js"),
);

it(
  "middle-list-many-expr-method.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/middle-list-many-expr-method.js"),
);

it(
  "middle-list-many-expr-obj.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/middle-list-many-expr-obj.js"),
);

it(
  "middle-list-many-expr-primitive.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/middle-list-many-expr-primitive.js"),
);

it(
  "middle-list-many-expr-template.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/middle-list-many-expr-template.js"),
);

it(
  "middle-list-many-expr-tostr-error.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/middle-list-many-expr-tostr-error.js"),
);

it(
  "middle-list-one-expr-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/middle-list-one-expr-abrupt.js"),
);

it(
  "middle-list-one-expr-function.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/middle-list-one-expr-function.js"),
);

it(
  "middle-list-one-expr-member-expr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/middle-list-one-expr-member-expr.js"),
);

it(
  "middle-list-one-expr-method.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/middle-list-one-expr-method.js"),
);

it(
  "middle-list-one-expr-obj.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/middle-list-one-expr-obj.js"),
);

it(
  "middle-list-one-expr-primitive.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/middle-list-one-expr-primitive.js"),
);

it(
  "middle-list-one-expr-template.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/middle-list-one-expr-template.js"),
);

it(
  "middle-list-one-expr-tostr-error.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/middle-list-one-expr-tostr-error.js"),
);

it(
  "mongolian-vowel-separator-eval.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/mongolian-vowel-separator-eval.js"),
);

it(
  "mongolian-vowel-separator.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/mongolian-vowel-separator.js"),
);

it(
  "no-sub.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/no-sub.js"),
);

it(
  "tv-character-escape-sequence.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/template-literal/tv-character-escape-sequence.js"),
);

it(
  "tv-hex-escape-sequence.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/template-literal/tv-hex-escape-sequence.js"),
);

it(
  "tv-line-continuation.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/template-literal/tv-line-continuation.js"),
);

it(
  "tv-line-terminator-sequence.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/template-literal/tv-line-terminator-sequence.js"),
);

it(
  "tv-no-substitution.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/template-literal/tv-no-substitution.js"),
);

it(
  "tv-null-character-escape-sequence.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/template-literal/tv-null-character-escape-sequence.js"),
);

it(
  "tv-template-character.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/template-literal/tv-template-character.js"),
);

it(
  "tv-template-characters.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/template-literal/tv-template-characters.js"),
);

it(
  "tv-template-head.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/template-literal/tv-template-head.js"),
);

it(
  "tv-template-middle.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/template-literal/tv-template-middle.js"),
);

it(
  "tv-template-tail.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/template-literal/tv-template-tail.js"),
);

it(
  "tv-utf16-escape-sequence.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/template-literal/tv-utf16-escape-sequence.js"),
);

it(
  "tv-zwnbsp.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/template-literal/tv-zwnbsp.js"),
);

it(
  "unicode-escape-nls-err.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/unicode-escape-nls-err.js"),
);

it(
  "unicode-escape-no-hex-err.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/template-literal/unicode-escape-no-hex-err.js"),
);
