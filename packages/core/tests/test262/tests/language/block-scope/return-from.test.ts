import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("return-from", () => {
it("block-const.js", createTestHandler("language/block-scope/return-from/block-const.js"));
it("block-let.js", createTestHandler("language/block-scope/return-from/block-let.js"));
});
