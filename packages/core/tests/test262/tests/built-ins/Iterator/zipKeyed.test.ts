import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "basic-longest.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/basic-longest.js"),
);

it(
  "basic-shortest.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/basic-shortest.js"),
);

it(
  "basic-strict.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/basic-strict.js"),
);

it(
  "is-function.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/is-function.js"),
);

it(
  "iterables-containing-string-objects.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/iterables-containing-string-objects.js"),
);

it(
  "iterables-iteration-after-reading-options.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/iterables-iteration-after-reading-options.js"),
);

it(
  "iterables-iteration-deleted.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/iterables-iteration-deleted.js"),
);

it(
  "iterables-iteration-enumerable.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/iterables-iteration-enumerable.js"),
);

it(
  "iterables-iteration-get-abrupt-completion.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/iterables-iteration-get-abrupt-completion.js"),
);

it(
  "iterables-iteration-get-iterator-flattenable-abrupt-completion.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Iterator/zipKeyed/iterables-iteration-get-iterator-flattenable-abrupt-completion.js",
  ),
);

it(
  "iterables-iteration-get-own-property-abrupt-completion.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Iterator/zipKeyed/iterables-iteration-get-own-property-abrupt-completion.js",
  ),
);

it(
  "iterables-iteration-inherited.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/iterables-iteration-inherited.js"),
);

it(
  "iterables-iteration-symbol-key.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/iterables-iteration-symbol-key.js"),
);

it(
  "iterables-iteration-undefined.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/iterables-iteration-undefined.js"),
);

it(
  "iterables-iteration.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/iterables-iteration.js"),
);

it(
  "iterables-primitive.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/iterables-primitive.js"),
);

it(
  "iterator-zip-iteration-iterator-close-abrupt-completion.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Iterator/zipKeyed/iterator-zip-iteration-iterator-close-abrupt-completion.js",
  ),
);

it(
  "iterator-zip-iteration-iterator-step-value-abrupt-completion.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Iterator/zipKeyed/iterator-zip-iteration-iterator-step-value-abrupt-completion.js",
  ),
);

it(
  "iterator-zip-iteration-longest-iterator-close-abrupt-completion.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Iterator/zipKeyed/iterator-zip-iteration-longest-iterator-close-abrupt-completion.js",
  ),
);

it(
  "iterator-zip-iteration-shortest-iterator-close-abrupt-completion.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Iterator/zipKeyed/iterator-zip-iteration-shortest-iterator-close-abrupt-completion.js",
  ),
);

it(
  "iterator-zip-iteration-strict-iterator-close-i-is-not-zero-abrupt-completion.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Iterator/zipKeyed/iterator-zip-iteration-strict-iterator-close-i-is-not-zero-abrupt-completion.js",
  ),
);

it(
  "iterator-zip-iteration-strict-iterator-close-i-is-zero-abrupt-completion.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Iterator/zipKeyed/iterator-zip-iteration-strict-iterator-close-i-is-zero-abrupt-completion.js",
  ),
);

it(
  "iterator-zip-iteration-strict-iterator-step-abrupt-completion.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Iterator/zipKeyed/iterator-zip-iteration-strict-iterator-step-abrupt-completion.js",
  ),
);

it(
  "iterator-zip-iteration.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/iterator-zip-iteration.js"),
);

it(
  "length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/length.js"),
);

it(
  "name.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/name.js"),
);

it(
  "non-constructible.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/non-constructible.js"),
);

it(
  "options-mode.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/options-mode.js"),
);

it(
  "options-padding.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/options-padding.js"),
);

it(
  "options.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/options.js"),
);

it(
  "padding-iteration-get-abrupt-completion.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/padding-iteration-get-abrupt-completion.js"),
);

it(
  "padding-iteration.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/padding-iteration.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/prop-desc.js"),
);

it(
  "proto.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/proto.js"),
);

it(
  "result-is-iterator.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/result-is-iterator.js"),
);

it(
  "results-object-from-array.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/results-object-from-array.js"),
);

it(
  "results-object-has-default-attributes.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/results-object-has-default-attributes.js"),
);

it(
  "results-object-has-no-undefined-iterables-properties.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "built-ins/Iterator/zipKeyed/results-object-has-no-undefined-iterables-properties.js",
  ),
);

it(
  "suspended-start-iterator-close-calls-next.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/suspended-start-iterator-close-calls-next.js"),
);

it(
  "suspended-start-iterator-close-calls-return.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/suspended-start-iterator-close-calls-return.js"),
);

it(
  "suspended-yield-iterator-close-calls-next.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/suspended-yield-iterator-close-calls-next.js"),
);

it(
  "suspended-yield-iterator-close-calls-return.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Iterator/zipKeyed/suspended-yield-iterator-close-calls-return.js"),
);
