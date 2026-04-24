import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instn-star-props-dflt-keep-local.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/instn-star-props-dflt-keep-local.js"),
);
