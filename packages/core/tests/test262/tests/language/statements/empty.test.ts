import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S12.3_A1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/empty/S12.3_A1.js"),
);

it(
  "cptn-value.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/empty/cptn-value.js"),
);
