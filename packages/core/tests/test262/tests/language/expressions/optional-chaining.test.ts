import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("optional-chaining", () => {
  it(
    "call-expression-super-no-base.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/optional-chaining/call-expression-super-no-base.js"),
  );
  it(
    "call-expression.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/optional-chaining/call-expression.js"),
  );
  it(
    "early-errors-tail-position-null-op-template-string-esi.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/optional-chaining/early-errors-tail-position-null-op-template-string-esi.js",
    ),
  );
  it(
    "early-errors-tail-position-null-op-template-string.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/optional-chaining/early-errors-tail-position-null-op-template-string.js",
    ),
  );
  it(
    "early-errors-tail-position-null-optchain-template-string-esi.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/optional-chaining/early-errors-tail-position-null-optchain-template-string-esi.js",
    ),
  );
  it(
    "early-errors-tail-position-null-optchain-template-string.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/optional-chaining/early-errors-tail-position-null-optchain-template-string.js",
    ),
  );
  it(
    "early-errors-tail-position-op-template-string-esi.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/optional-chaining/early-errors-tail-position-op-template-string-esi.js",
    ),
  );
  it(
    "early-errors-tail-position-op-template-string.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/optional-chaining/early-errors-tail-position-op-template-string.js",
    ),
  );
  it(
    "early-errors-tail-position-optchain-template-string-esi.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/optional-chaining/early-errors-tail-position-optchain-template-string-esi.js",
    ),
  );
  it(
    "early-errors-tail-position-optchain-template-string.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/optional-chaining/early-errors-tail-position-optchain-template-string.js",
    ),
  );
  it(
    "eval-optional-call.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/optional-chaining/eval-optional-call.js"),
  );
  it(
    "iteration-statement-do.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/optional-chaining/iteration-statement-do.js"),
  );
  it(
    "iteration-statement-for-await-of.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/optional-chaining/iteration-statement-for-await-of.js"),
  );
  it(
    "iteration-statement-for-in.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/optional-chaining/iteration-statement-for-in.js"),
  );
  it(
    "iteration-statement-for-of-type-error.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/optional-chaining/iteration-statement-for-of-type-error.js",
    ),
  );
  it(
    "iteration-statement-for.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/optional-chaining/iteration-statement-for.js"),
  );
  it(
    "iteration-statement-while.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/optional-chaining/iteration-statement-while.js"),
  );
  it(
    "member-expression-async-identifier.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/optional-chaining/member-expression-async-identifier.js",
    ),
  );
  it(
    "member-expression-async-literal.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/optional-chaining/member-expression-async-literal.js"),
  );
  it(
    "member-expression-async-this.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/optional-chaining/member-expression-async-this.js"),
  );
  it(
    "member-expression.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/optional-chaining/member-expression.js"),
  );
  it(
    "new-target-optional-call.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/optional-chaining/new-target-optional-call.js"),
  );
  it(
    "optional-call-preserves-this.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/optional-chaining/optional-call-preserves-this.js"),
  );
  it(
    "optional-chain-async-optional-chain-square-brackets.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/optional-chaining/optional-chain-async-optional-chain-square-brackets.js",
    ),
  );
  it(
    "optional-chain-async-square-brackets.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/optional-chaining/optional-chain-async-square-brackets.js",
    ),
  );
  it(
    "optional-chain-expression-optional-expression.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/optional-chaining/optional-chain-expression-optional-expression.js",
    ),
  );
  it(
    "optional-chain-prod-arguments.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/optional-chaining/optional-chain-prod-arguments.js"),
  );
  it(
    "optional-chain-prod-expression.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/optional-chaining/optional-chain-prod-expression.js"),
  );
  it(
    "optional-chain-prod-identifiername.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/optional-chaining/optional-chain-prod-identifiername.js",
    ),
  );
  it(
    "optional-chain.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/optional-chaining/optional-chain.js"),
  );
  it(
    "optional-expression.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/optional-chaining/optional-expression.js"),
  );
  it(
    "punctuator-decimal-lookahead.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/optional-chaining/punctuator-decimal-lookahead.js"),
  );
  it(
    "runtime-semantics-evaluation.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/optional-chaining/runtime-semantics-evaluation.js"),
  );
  it(
    "short-circuiting.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/optional-chaining/short-circuiting.js"),
  );
  it(
    "static-semantics-simple-assignment.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/expressions/optional-chaining/static-semantics-simple-assignment.js",
    ),
  );
  it(
    "super-property-optional-call.js",
    { tags: ["known-passing"] },
    createTestHandler("language/expressions/optional-chaining/super-property-optional-call.js"),
  );
  it(
    "update-expression-postfix.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/optional-chaining/update-expression-postfix.js"),
  );
  it(
    "update-expression-prefix.js",
    { tags: ["known-failing"] },
    createTestHandler("language/expressions/optional-chaining/update-expression-prefix.js"),
  );
});
