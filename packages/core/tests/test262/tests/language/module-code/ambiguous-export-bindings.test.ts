import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "error-export-from-named-as.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/ambiguous-export-bindings/error-export-from-named-as.js"),
);

it(
  "error-export-from-named.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/ambiguous-export-bindings/error-export-from-named.js"),
);

it(
  "error-import-named-as.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/ambiguous-export-bindings/error-import-named-as.js"),
);

it(
  "error-import-named.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/ambiguous-export-bindings/error-import-named.js"),
);

it(
  "import-and-export-propagates-binding.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "language/module-code/ambiguous-export-bindings/import-and-export-propagates-binding.js",
  ),
);

it(
  "namespace-unambiguous-if-export-star-as-from-and-import-star-as-and-export.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "language/module-code/ambiguous-export-bindings/namespace-unambiguous-if-export-star-as-from-and-import-star-as-and-export.js",
  ),
);

it(
  "namespace-unambiguous-if-export-star-as-from.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "language/module-code/ambiguous-export-bindings/namespace-unambiguous-if-export-star-as-from.js",
  ),
);

it(
  "namespace-unambiguous-if-import-star-as-and-export.js",
  { tags: ["known-failing"] },
  createTestHandler(
    "language/module-code/ambiguous-export-bindings/namespace-unambiguous-if-import-star-as-and-export.js",
  ),
);

it(
  "omitted-from-namespace.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/ambiguous-export-bindings/omitted-from-namespace.js"),
);
