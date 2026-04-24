import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "15.1.2.3-2-1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/parseFloat/15.1.2.3-2-1.js"),
);
