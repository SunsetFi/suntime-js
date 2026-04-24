import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("val-do.js", { tags: ["known-passing"] }, createTestHandler("language/identifiers/val-do.js"));
