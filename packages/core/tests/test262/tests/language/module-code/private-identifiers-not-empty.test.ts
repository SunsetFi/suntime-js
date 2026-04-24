import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "private-identifiers-not-empty.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/private-identifiers-not-empty.js"),
);
