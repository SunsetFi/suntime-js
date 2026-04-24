import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("val-in.js", { tags: ["known-failing"] }, createTestHandler("language/identifiers/val-in.js"));
