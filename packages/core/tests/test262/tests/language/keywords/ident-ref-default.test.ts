import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "ident-ref-default.js",
  { tags: ["known-failing"] },
  createTestHandler("language/keywords/ident-ref-default.js"),
);
