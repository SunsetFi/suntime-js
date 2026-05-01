import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "class.js",
  { tags: ["known-passing"] },
  createTestHandler("language/computed-property-names/to-name-side-effects/class.js"),
);

it(
  "numbers-class.js",
  { tags: ["known-passing"] },
  createTestHandler("language/computed-property-names/to-name-side-effects/numbers-class.js"),
);

it(
  "numbers-object.js",
  { tags: ["known-passing"] },
  createTestHandler("language/computed-property-names/to-name-side-effects/numbers-object.js"),
);

it(
  "object.js",
  { tags: ["known-passing"] },
  createTestHandler("language/computed-property-names/to-name-side-effects/object.js"),
);
