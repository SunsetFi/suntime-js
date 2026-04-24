import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instn-resolve-order-src.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/instn-resolve-order-src.js"),
);
