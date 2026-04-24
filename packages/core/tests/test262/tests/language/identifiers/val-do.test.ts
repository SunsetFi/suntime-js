import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("val-do.js", { tags: ["known-failing"] }, createTestHandler("language/identifiers/val-do.js"));
