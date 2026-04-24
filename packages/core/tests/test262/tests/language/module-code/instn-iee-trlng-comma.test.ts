import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instn-iee-trlng-comma.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/instn-iee-trlng-comma.js"),
);
