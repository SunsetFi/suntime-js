import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it("proto.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Iterator/proto.js"));
