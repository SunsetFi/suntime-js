import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "do-while-same-line.js",
  { tags: ["known-failing"] },
  createTestHandler("language/asi/do-while-same-line.js"),
);
