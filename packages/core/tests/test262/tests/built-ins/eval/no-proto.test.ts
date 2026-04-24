import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("no-proto.js", { tags: ["known-passing"] }, createTestHandler("built-ins/eval/no-proto.js"));
