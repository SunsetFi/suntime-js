import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instn-iee-err-dflt-thru-star-as.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/instn-iee-err-dflt-thru-star-as.js"),
);
