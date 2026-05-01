import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "block-const.js",
  { tags: ["known-passing"] },
  createTestHandler("language/block-scope/return-from/block-const.js"),
);

it(
  "block-let.js",
  { tags: ["known-passing"] },
  createTestHandler("language/block-scope/return-from/block-let.js"),
);
