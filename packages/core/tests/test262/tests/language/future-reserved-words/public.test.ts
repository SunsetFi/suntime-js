import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "public.js",
  { tags: ["known-passing"] },
  createTestHandler("language/future-reserved-words/public.js"),
);
