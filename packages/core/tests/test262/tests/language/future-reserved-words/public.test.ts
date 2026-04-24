import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "public.js",
  { tags: ["known-failing"] },
  createTestHandler("language/future-reserved-words/public.js"),
);
