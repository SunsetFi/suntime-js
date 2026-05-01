import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "escaped-bang-041.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/hashbang/escaped-bang-041.js"),
);

it(
  "escaped-bang-u0021.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/hashbang/escaped-bang-u0021.js"),
);

it(
  "escaped-bang-u21.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/hashbang/escaped-bang-u21.js"),
);

it(
  "escaped-bang-x21.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/hashbang/escaped-bang-x21.js"),
);

it(
  "escaped-hash-043.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/hashbang/escaped-hash-043.js"),
);

it(
  "escaped-hash-u0023.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/hashbang/escaped-hash-u0023.js"),
);

it(
  "escaped-hash-u23.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/hashbang/escaped-hash-u23.js"),
);

it(
  "escaped-hash-x23.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/hashbang/escaped-hash-x23.js"),
);

it(
  "escaped-hashbang.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/hashbang/escaped-hashbang.js"),
);

it(
  "eval-indirect.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/hashbang/eval-indirect.js"),
);

it("eval.js", { tags: ["known-passing"] }, createTestHandler("language/comments/hashbang/eval.js"));

it(
  "function-body.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/hashbang/function-body.js"),
);

it(
  "function-constructor.js",
  { tags: ["known-failing"] },
  createTestHandler("language/comments/hashbang/function-constructor.js"),
);

it(
  "line-terminator-carriage-return.js",
  { tags: ["known-failing"] },
  createTestHandler("language/comments/hashbang/line-terminator-carriage-return.js"),
);

it(
  "line-terminator-line-separator.js",
  { tags: ["known-failing"] },
  createTestHandler("language/comments/hashbang/line-terminator-line-separator.js"),
);

it(
  "line-terminator-paragraph-separator.js",
  { tags: ["known-failing"] },
  createTestHandler("language/comments/hashbang/line-terminator-paragraph-separator.js"),
);

it(
  "module.js",
  { tags: ["known-failing"] },
  createTestHandler("language/comments/hashbang/module.js"),
);

it(
  "multi-line-comment.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/hashbang/multi-line-comment.js"),
);

it(
  "no-line-separator.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/hashbang/no-line-separator.js"),
);

it(
  "not-empty.js",
  { tags: ["known-failing"] },
  createTestHandler("language/comments/hashbang/not-empty.js"),
);

it(
  "preceding-directive-prologue-sc.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/hashbang/preceding-directive-prologue-sc.js"),
);

it(
  "preceding-directive-prologue.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/hashbang/preceding-directive-prologue.js"),
);

it(
  "preceding-empty-statement.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/hashbang/preceding-empty-statement.js"),
);

it(
  "preceding-hashbang.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/hashbang/preceding-hashbang.js"),
);

it(
  "preceding-line-comment.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/hashbang/preceding-line-comment.js"),
);

it(
  "preceding-multi-line-comment.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/hashbang/preceding-multi-line-comment.js"),
);

it(
  "preceding-whitespace.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/hashbang/preceding-whitespace.js"),
);

it(
  "statement-block.js",
  { tags: ["known-passing"] },
  createTestHandler("language/comments/hashbang/statement-block.js"),
);

it(
  "use-strict.js",
  { tags: ["known-failing"] },
  createTestHandler("language/comments/hashbang/use-strict.js"),
);
