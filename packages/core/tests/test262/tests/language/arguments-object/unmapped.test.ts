import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "Symbol.iterator.js",
  { tags: ["known-passing"] },
  createTestHandler("language/arguments-object/unmapped/Symbol.iterator.js"),
);

it(
  "via-params-dflt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/arguments-object/unmapped/via-params-dflt.js"),
);

it(
  "via-params-dstr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/arguments-object/unmapped/via-params-dstr.js"),
);

it(
  "via-params-rest.js",
  { tags: ["known-passing"] },
  createTestHandler("language/arguments-object/unmapped/via-params-rest.js"),
);

it(
  "via-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/arguments-object/unmapped/via-strict.js"),
);
