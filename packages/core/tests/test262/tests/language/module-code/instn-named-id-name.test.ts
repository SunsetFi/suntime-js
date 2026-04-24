import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instn-named-id-name.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/instn-named-id-name.js"),
);
