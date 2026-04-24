import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "tonumber-numeric-separator-literal-dd-dot-dd-ep-sign-minus-dd-nsl-dd.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "built-ins/parseFloat/tonumber-numeric-separator-literal-dd-dot-dd-ep-sign-minus-dd-nsl-dd.js",
  ),
);
