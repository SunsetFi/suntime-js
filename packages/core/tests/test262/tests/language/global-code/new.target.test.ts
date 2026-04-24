import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "new.target.js",
  { tags: ["known-failing"] },
  createTestHandler("language/global-code/new.target.js"),
);
