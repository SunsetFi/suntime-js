import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "escaped-from.js",
  { tags: ["known-passing"] },
  createTestHandler("language/export/escaped-from.js"),
);
