import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "escaped-default.js",
  { tags: ["known-failing"] },
  createTestHandler("language/export/escaped-default.js"),
);
