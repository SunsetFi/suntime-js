import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "invoked-with-new.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Symbol/invoked-with-new.js"),
);
