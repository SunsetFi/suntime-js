import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instn-iee-err-not-found.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/instn-iee-err-not-found.js"),
);
