import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "eval-rqstd-once.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/eval-rqstd-once.js"),
);
