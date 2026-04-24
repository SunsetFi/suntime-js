import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "return-false-on-nan-or-infinities.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/isFinite/return-false-on-nan-or-infinities.js"),
);
