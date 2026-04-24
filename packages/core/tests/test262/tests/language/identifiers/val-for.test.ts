import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("val-for.js", { tags: ["known-passing"] }, createTestHandler("language/identifiers/val-for.js"));
