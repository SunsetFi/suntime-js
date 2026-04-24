import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("internals", () => {
  describe("DefineOwnProperty", () => {
    it(
      "consistent-value-function-arguments.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Object/internals/DefineOwnProperty/consistent-value-function-arguments.js",
      ),
    );
    it(
      "consistent-value-function-caller.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Object/internals/DefineOwnProperty/consistent-value-function-caller.js",
      ),
    );
    it(
      "consistent-value-regexp-dollar1.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Object/internals/DefineOwnProperty/consistent-value-regexp-dollar1.js",
      ),
    );
    it(
      "consistent-writable-regexp-dollar1.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Object/internals/DefineOwnProperty/consistent-writable-regexp-dollar1.js",
      ),
    );
    it(
      "nan-equivalence-define-own-property-reassign.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Object/internals/DefineOwnProperty/nan-equivalence-define-own-property-reassign.js",
      ),
    );
    it(
      "nan-equivalence-define-own-property-reconfigure.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Object/internals/DefineOwnProperty/nan-equivalence-define-own-property-reconfigure.js",
      ),
    );
  });
});
