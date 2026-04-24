import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "ident-ref-do.js",
  { tags: ["known-failing"] },
  createTestHandler("language/keywords/ident-ref-do.js"),
);
