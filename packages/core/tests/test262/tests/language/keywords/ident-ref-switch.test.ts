import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "ident-ref-switch.js",
  { tags: ["known-failing"] },
  createTestHandler("language/keywords/ident-ref-switch.js"),
);
