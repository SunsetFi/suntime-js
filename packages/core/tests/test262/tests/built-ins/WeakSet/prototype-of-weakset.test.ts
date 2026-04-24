import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "prototype-of-weakset.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/WeakSet/prototype-of-weakset.js"),
);
