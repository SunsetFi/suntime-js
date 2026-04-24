import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "with-new-target.js",
  { tags: ["known-failing"] },
  createTestHandler("language/rest-parameters/with-new-target.js"),
);
