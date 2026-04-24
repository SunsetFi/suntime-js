import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "super-prop.js",
  { tags: ["known-failing"] },
  createTestHandler("language/global-code/super-prop.js"),
);
