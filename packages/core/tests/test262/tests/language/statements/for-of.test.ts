import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "Array.prototype.Symbol.iterator.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/Array.prototype.Symbol.iterator.js"),
);

it(
  "Array.prototype.entries.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/Array.prototype.entries.js"),
);

it(
  "Array.prototype.keys.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/Array.prototype.keys.js"),
);

it(
  "arguments-mapped-aliasing.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/arguments-mapped-aliasing.js"),
);

it(
  "arguments-mapped-mutation.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/arguments-mapped-mutation.js"),
);

it(
  "arguments-mapped.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/arguments-mapped.js"),
);

it(
  "arguments-unmapped-aliasing.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/arguments-unmapped-aliasing.js"),
);

it(
  "arguments-unmapped-mutation.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/arguments-unmapped-mutation.js"),
);

it(
  "arguments-unmapped.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/arguments-unmapped.js"),
);

it(
  "array-contract-expand.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/array-contract-expand.js"),
);

it(
  "array-contract.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/array-contract.js"),
);

it(
  "array-expand-contract.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/array-expand-contract.js"),
);

it(
  "array-expand.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/array-expand.js"),
);

it(
  "array-key-get-error.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/array-key-get-error.js"),
);

it(
  "array.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/array.js"),
);

it(
  "body-dstr-assign-error.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/body-dstr-assign-error.js"),
);

it(
  "body-dstr-assign.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/body-dstr-assign.js"),
);

it(
  "body-put-error.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/body-put-error.js"),
);

it(
  "break-from-catch.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/break-from-catch.js"),
);

it(
  "break-from-finally.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/break-from-finally.js"),
);

it(
  "break-from-try.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/break-from-try.js"),
);

it(
  "break-label-from-catch.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/break-label-from-catch.js"),
);

it(
  "break-label-from-finally.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/break-label-from-finally.js"),
);

it(
  "break-label-from-try.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/break-label-from-try.js"),
);

it(
  "break-label.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/break-label.js"),
);

it(
  "break.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/break.js"),
);

it(
  "continue-from-catch.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/continue-from-catch.js"),
);

it(
  "continue-from-finally.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/continue-from-finally.js"),
);

it(
  "continue-from-try.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/continue-from-try.js"),
);

it(
  "continue-label-from-catch.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/continue-label-from-catch.js"),
);

it(
  "continue-label-from-finally.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/continue-label-from-finally.js"),
);

it(
  "continue-label-from-try.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/continue-label-from-try.js"),
);

it(
  "continue-label.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/continue-label.js"),
);

it(
  "continue.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/continue.js"),
);

it(
  "cptn-decl-abrupt-empty.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/cptn-decl-abrupt-empty.js"),
);

it(
  "cptn-decl-itr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/cptn-decl-itr.js"),
);

it(
  "cptn-decl-no-itr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/cptn-decl-no-itr.js"),
);

it(
  "cptn-expr-abrupt-empty.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/cptn-expr-abrupt-empty.js"),
);

it(
  "cptn-expr-itr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/cptn-expr-itr.js"),
);

it(
  "cptn-expr-no-itr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/cptn-expr-no-itr.js"),
);

it(
  "decl-async-fun.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/decl-async-fun.js"),
);

it(
  "decl-async-gen.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/decl-async-gen.js"),
);

it(
  "decl-cls.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/decl-cls.js"),
);

it(
  "decl-const.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/decl-const.js"),
);

it(
  "decl-fun.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/decl-fun.js"),
);

it(
  "decl-gen.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/decl-gen.js"),
);

it(
  "decl-let.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/decl-let.js"),
);

describe("dstr", () => {
  it(
    "array-elem-init-assignment.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-init-assignment.js"),
  );
  it(
    "array-elem-init-evaluation.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-init-evaluation.js"),
  );
  it(
    "array-elem-init-fn-name-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-init-fn-name-arrow.js"),
  );
  it(
    "array-elem-init-fn-name-class.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-init-fn-name-class.js"),
  );
  it(
    "array-elem-init-fn-name-cover.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-init-fn-name-cover.js"),
  );
  it(
    "array-elem-init-fn-name-fn.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-init-fn-name-fn.js"),
  );
  it(
    "array-elem-init-fn-name-gen.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-init-fn-name-gen.js"),
  );
  it(
    "array-elem-init-in.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-init-in.js"),
  );
  it(
    "array-elem-init-let.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-init-let.js"),
  );
  it(
    "array-elem-init-order.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-init-order.js"),
  );
  it(
    "array-elem-init-simple-no-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-init-simple-no-strict.js"),
  );
  it(
    "array-elem-init-yield-expr.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-init-yield-expr.js"),
  );
  it(
    "array-elem-init-yield-ident-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-init-yield-ident-invalid.js"),
  );
  it(
    "array-elem-init-yield-ident-valid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-init-yield-ident-valid.js"),
  );
  it(
    "array-elem-iter-get-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-iter-get-err.js"),
  );
  it(
    "array-elem-iter-nrml-close-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-iter-nrml-close-err.js"),
  );
  it(
    "array-elem-iter-nrml-close-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-iter-nrml-close-null.js"),
  );
  it(
    "array-elem-iter-nrml-close-skip.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-iter-nrml-close-skip.js"),
  );
  it(
    "array-elem-iter-nrml-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-iter-nrml-close.js"),
  );
  it(
    "array-elem-iter-rtrn-close-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-iter-rtrn-close-err.js"),
  );
  it(
    "array-elem-iter-rtrn-close-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-iter-rtrn-close-null.js"),
  );
  it(
    "array-elem-iter-rtrn-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-iter-rtrn-close.js"),
  );
  it(
    "array-elem-iter-thrw-close-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-iter-thrw-close-err.js"),
  );
  it(
    "array-elem-iter-thrw-close-skip.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-iter-thrw-close-skip.js"),
  );
  it(
    "array-elem-iter-thrw-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-iter-thrw-close.js"),
  );
  it(
    "array-elem-nested-array-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-nested-array-invalid.js"),
  );
  it(
    "array-elem-nested-array-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-nested-array-null.js"),
  );
  it(
    "array-elem-nested-array-undefined-hole.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-nested-array-undefined-hole.js"),
  );
  it(
    "array-elem-nested-array-undefined-own.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-nested-array-undefined-own.js"),
  );
  it(
    "array-elem-nested-array-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-nested-array-undefined.js"),
  );
  it(
    "array-elem-nested-array-yield-expr.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-nested-array-yield-expr.js"),
  );
  it(
    "array-elem-nested-array-yield-ident-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-elem-nested-array-yield-ident-invalid.js",
    ),
  );
  it(
    "array-elem-nested-array-yield-ident-valid.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-elem-nested-array-yield-ident-valid.js",
    ),
  );
  it(
    "array-elem-nested-array.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-nested-array.js"),
  );
  it(
    "array-elem-nested-memberexpr-optchain-prop-ref-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-elem-nested-memberexpr-optchain-prop-ref-init.js",
    ),
  );
  it(
    "array-elem-nested-obj-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-nested-obj-invalid.js"),
  );
  it(
    "array-elem-nested-obj-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-nested-obj-null.js"),
  );
  it(
    "array-elem-nested-obj-undefined-hole.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-nested-obj-undefined-hole.js"),
  );
  it(
    "array-elem-nested-obj-undefined-own.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-nested-obj-undefined-own.js"),
  );
  it(
    "array-elem-nested-obj-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-nested-obj-undefined.js"),
  );
  it(
    "array-elem-nested-obj-yield-expr.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-nested-obj-yield-expr.js"),
  );
  it(
    "array-elem-nested-obj-yield-ident-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-elem-nested-obj-yield-ident-invalid.js",
    ),
  );
  it(
    "array-elem-nested-obj-yield-ident-valid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-nested-obj-yield-ident-valid.js"),
  );
  it(
    "array-elem-nested-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-nested-obj.js"),
  );
  it(
    "array-elem-put-const.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-put-const.js"),
  );
  it(
    "array-elem-put-let.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-put-let.js"),
  );
  it(
    "array-elem-put-obj-literal-optchain-prop-ref-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-elem-put-obj-literal-optchain-prop-ref-init.js",
    ),
  );
  it(
    "array-elem-put-obj-literal-prop-ref-init-active.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-elem-put-obj-literal-prop-ref-init-active.js",
    ),
  );
  it(
    "array-elem-put-obj-literal-prop-ref-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-elem-put-obj-literal-prop-ref-init.js",
    ),
  );
  it(
    "array-elem-put-obj-literal-prop-ref.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-put-obj-literal-prop-ref.js"),
  );
  it(
    "array-elem-put-prop-ref-no-get.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-put-prop-ref-no-get.js"),
  );
  it(
    "array-elem-put-prop-ref-user-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-put-prop-ref-user-err.js"),
  );
  it(
    "array-elem-put-prop-ref.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-put-prop-ref.js"),
  );
  it(
    "array-elem-put-unresolvable-no-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-put-unresolvable-no-strict.js"),
  );
  it(
    "array-elem-put-unresolvable-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-put-unresolvable-strict.js"),
  );
  it(
    "array-elem-target-identifier.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-target-identifier.js"),
  );
  it(
    "array-elem-target-simple-no-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-target-simple-no-strict.js"),
  );
  it(
    "array-elem-target-simple-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-target-simple-strict.js"),
  );
  it(
    "array-elem-target-yield-expr.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-target-yield-expr.js"),
  );
  it(
    "array-elem-target-yield-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-target-yield-invalid.js"),
  );
  it(
    "array-elem-target-yield-valid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-target-yield-valid.js"),
  );
  it(
    "array-elem-trlg-iter-elision-iter-abpt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-elision-iter-abpt.js"),
  );
  it(
    "array-elem-trlg-iter-elision-iter-nrml-close-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-elem-trlg-iter-elision-iter-nrml-close-err.js",
    ),
  );
  it(
    "array-elem-trlg-iter-elision-iter-nrml-close-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-elem-trlg-iter-elision-iter-nrml-close-null.js",
    ),
  );
  it(
    "array-elem-trlg-iter-elision-iter-nrml-close-skip.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-elem-trlg-iter-elision-iter-nrml-close-skip.js",
    ),
  );
  it(
    "array-elem-trlg-iter-elision-iter-nrml-close.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-elem-trlg-iter-elision-iter-nrml-close.js",
    ),
  );
  it(
    "array-elem-trlg-iter-get-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-get-err.js"),
  );
  it(
    "array-elem-trlg-iter-list-nrml-close-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-elem-trlg-iter-list-nrml-close-err.js",
    ),
  );
  it(
    "array-elem-trlg-iter-list-nrml-close-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-elem-trlg-iter-list-nrml-close-null.js",
    ),
  );
  it(
    "array-elem-trlg-iter-list-nrml-close-skip.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-elem-trlg-iter-list-nrml-close-skip.js",
    ),
  );
  it(
    "array-elem-trlg-iter-list-nrml-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-list-nrml-close.js"),
  );
  it(
    "array-elem-trlg-iter-list-rtrn-close-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-elem-trlg-iter-list-rtrn-close-err.js",
    ),
  );
  it(
    "array-elem-trlg-iter-list-rtrn-close-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-elem-trlg-iter-list-rtrn-close-null.js",
    ),
  );
  it(
    "array-elem-trlg-iter-list-rtrn-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-list-rtrn-close.js"),
  );
  it(
    "array-elem-trlg-iter-list-thrw-close-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-elem-trlg-iter-list-thrw-close-err.js",
    ),
  );
  it(
    "array-elem-trlg-iter-list-thrw-close-skip.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-elem-trlg-iter-list-thrw-close-skip.js",
    ),
  );
  it(
    "array-elem-trlg-iter-list-thrw-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-list-thrw-close.js"),
  );
  it(
    "array-elem-trlg-iter-rest-nrml-close-skip.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-elem-trlg-iter-rest-nrml-close-skip.js",
    ),
  );
  it(
    "array-elem-trlg-iter-rest-rtrn-close-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-elem-trlg-iter-rest-rtrn-close-err.js",
    ),
  );
  it(
    "array-elem-trlg-iter-rest-rtrn-close-null.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-elem-trlg-iter-rest-rtrn-close-null.js",
    ),
  );
  it(
    "array-elem-trlg-iter-rest-rtrn-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-rest-rtrn-close.js"),
  );
  it(
    "array-elem-trlg-iter-rest-thrw-close-err.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-elem-trlg-iter-rest-thrw-close-err.js",
    ),
  );
  it(
    "array-elem-trlg-iter-rest-thrw-close-skip.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-elem-trlg-iter-rest-thrw-close-skip.js",
    ),
  );
  it(
    "array-elem-trlg-iter-rest-thrw-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elem-trlg-iter-rest-thrw-close.js"),
  );
  it(
    "array-elision-iter-abpt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elision-iter-abpt.js"),
  );
  it(
    "array-elision-iter-get-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elision-iter-get-err.js"),
  );
  it(
    "array-elision-iter-nrml-close-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elision-iter-nrml-close-err.js"),
  );
  it(
    "array-elision-iter-nrml-close-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elision-iter-nrml-close-null.js"),
  );
  it(
    "array-elision-iter-nrml-close-skip.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elision-iter-nrml-close-skip.js"),
  );
  it(
    "array-elision-iter-nrml-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elision-iter-nrml-close.js"),
  );
  it(
    "array-elision-val-array.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elision-val-array.js"),
  );
  it(
    "array-elision-val-bool.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elision-val-bool.js"),
  );
  it(
    "array-elision-val-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elision-val-null.js"),
  );
  it(
    "array-elision-val-num.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elision-val-num.js"),
  );
  it(
    "array-elision-val-string.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elision-val-string.js"),
  );
  it(
    "array-elision-val-symbol.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elision-val-symbol.js"),
  );
  it(
    "array-elision-val-undef.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-elision-val-undef.js"),
  );
  it(
    "array-empty-iter-close-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-empty-iter-close-err.js"),
  );
  it(
    "array-empty-iter-close-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-empty-iter-close-null.js"),
  );
  it(
    "array-empty-iter-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-empty-iter-close.js"),
  );
  it(
    "array-empty-iter-get-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-empty-iter-get-err.js"),
  );
  it(
    "array-empty-val-array.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-empty-val-array.js"),
  );
  it(
    "array-empty-val-bool.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-empty-val-bool.js"),
  );
  it(
    "array-empty-val-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-empty-val-null.js"),
  );
  it(
    "array-empty-val-num.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-empty-val-num.js"),
  );
  it(
    "array-empty-val-string.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-empty-val-string.js"),
  );
  it(
    "array-empty-val-symbol.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-empty-val-symbol.js"),
  );
  it(
    "array-empty-val-undef.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-empty-val-undef.js"),
  );
  it(
    "array-iteration.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-iteration.js"),
  );
  it(
    "array-rest-after-element.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-after-element.js"),
  );
  it(
    "array-rest-after-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-after-elision.js"),
  );
  it(
    "array-rest-before-element.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-before-element.js"),
  );
  it(
    "array-rest-before-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-before-elision.js"),
  );
  it(
    "array-rest-before-rest.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-before-rest.js"),
  );
  it(
    "array-rest-elision-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-elision-invalid.js"),
  );
  it(
    "array-rest-elision-iter-abpt.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-elision-iter-abpt.js"),
  );
  it(
    "array-rest-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-elision.js"),
  );
  it(
    "array-rest-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-init.js"),
  );
  it(
    "array-rest-iter-get-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-iter-get-err.js"),
  );
  it(
    "array-rest-iter-nrml-close-skip.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-iter-nrml-close-skip.js"),
  );
  it(
    "array-rest-iter-rtrn-close-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-iter-rtrn-close-err.js"),
  );
  it(
    "array-rest-iter-rtrn-close-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-iter-rtrn-close-null.js"),
  );
  it(
    "array-rest-iter-rtrn-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-iter-rtrn-close.js"),
  );
  it(
    "array-rest-iter-thrw-close-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-iter-thrw-close-err.js"),
  );
  it(
    "array-rest-iter-thrw-close-skip.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-iter-thrw-close-skip.js"),
  );
  it(
    "array-rest-iter-thrw-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-iter-thrw-close.js"),
  );
  it(
    "array-rest-iteration.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-iteration.js"),
  );
  it(
    "array-rest-lref-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-lref-err.js"),
  );
  it(
    "array-rest-lref.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-lref.js"),
  );
  it(
    "array-rest-nested-array-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-nested-array-invalid.js"),
  );
  it(
    "array-rest-nested-array-iter-thrw-close-skip.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-rest-nested-array-iter-thrw-close-skip.js",
    ),
  );
  it(
    "array-rest-nested-array-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-nested-array-null.js"),
  );
  it(
    "array-rest-nested-array-undefined-hole.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-nested-array-undefined-hole.js"),
  );
  it(
    "array-rest-nested-array-undefined-own.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-nested-array-undefined-own.js"),
  );
  it(
    "array-rest-nested-array-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-nested-array-undefined.js"),
  );
  it(
    "array-rest-nested-array-yield-expr.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-nested-array-yield-expr.js"),
  );
  it(
    "array-rest-nested-array-yield-ident-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-rest-nested-array-yield-ident-invalid.js",
    ),
  );
  it(
    "array-rest-nested-array-yield-ident-valid.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-rest-nested-array-yield-ident-valid.js",
    ),
  );
  it(
    "array-rest-nested-array.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-nested-array.js"),
  );
  it(
    "array-rest-nested-obj-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-nested-obj-invalid.js"),
  );
  it(
    "array-rest-nested-obj-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-nested-obj-null.js"),
  );
  it(
    "array-rest-nested-obj-undefined-hole.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-nested-obj-undefined-hole.js"),
  );
  it(
    "array-rest-nested-obj-undefined-own.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-nested-obj-undefined-own.js"),
  );
  it(
    "array-rest-nested-obj-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-nested-obj-undefined.js"),
  );
  it(
    "array-rest-nested-obj-yield-expr.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-nested-obj-yield-expr.js"),
  );
  it(
    "array-rest-nested-obj-yield-ident-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-rest-nested-obj-yield-ident-invalid.js",
    ),
  );
  it(
    "array-rest-nested-obj-yield-ident-valid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-nested-obj-yield-ident-valid.js"),
  );
  it(
    "array-rest-nested-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-nested-obj.js"),
  );
  it(
    "array-rest-put-const.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-put-const.js"),
  );
  it(
    "array-rest-put-let.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-put-let.js"),
  );
  it(
    "array-rest-put-prop-ref-no-get.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-put-prop-ref-no-get.js"),
  );
  it(
    "array-rest-put-prop-ref-user-err-iter-close-skip.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/array-rest-put-prop-ref-user-err-iter-close-skip.js",
    ),
  );
  it(
    "array-rest-put-prop-ref-user-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-put-prop-ref-user-err.js"),
  );
  it(
    "array-rest-put-prop-ref.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-put-prop-ref.js"),
  );
  it(
    "array-rest-put-unresolvable-no-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-put-unresolvable-no-strict.js"),
  );
  it(
    "array-rest-put-unresolvable-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-put-unresolvable-strict.js"),
  );
  it(
    "array-rest-yield-expr.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-yield-expr.js"),
  );
  it(
    "array-rest-yield-ident-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-yield-ident-invalid.js"),
  );
  it(
    "array-rest-yield-ident-valid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/array-rest-yield-ident-valid.js"),
  );
  it(
    "const-ary-init-iter-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-init-iter-close.js"),
  );
  it(
    "const-ary-init-iter-get-err-array-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/const-ary-init-iter-get-err-array-prototype.js",
    ),
  );
  it(
    "const-ary-init-iter-get-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-init-iter-get-err.js"),
  );
  it(
    "const-ary-init-iter-no-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-init-iter-no-close.js"),
  );
  it(
    "const-ary-name-iter-val.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-name-iter-val.js"),
  );
  it(
    "const-ary-ptrn-elem-ary-elem-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-ary-elem-init.js"),
  );
  it(
    "const-ary-ptrn-elem-ary-elem-iter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-ary-elem-iter.js"),
  );
  it(
    "const-ary-ptrn-elem-ary-elision-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-ary-elision-init.js"),
  );
  it(
    "const-ary-ptrn-elem-ary-elision-iter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-ary-elision-iter.js"),
  );
  it(
    "const-ary-ptrn-elem-ary-empty-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-ary-empty-init.js"),
  );
  it(
    "const-ary-ptrn-elem-ary-empty-iter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-ary-empty-iter.js"),
  );
  it(
    "const-ary-ptrn-elem-ary-rest-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-ary-rest-init.js"),
  );
  it(
    "const-ary-ptrn-elem-ary-rest-iter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-ary-rest-iter.js"),
  );
  it(
    "const-ary-ptrn-elem-ary-val-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-ary-val-null.js"),
  );
  it(
    "const-ary-ptrn-elem-id-init-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-init-exhausted.js"),
  );
  it(
    "const-ary-ptrn-elem-id-init-fn-name-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/const-ary-ptrn-elem-id-init-fn-name-arrow.js",
    ),
  );
  it(
    "const-ary-ptrn-elem-id-init-fn-name-class.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/const-ary-ptrn-elem-id-init-fn-name-class.js",
    ),
  );
  it(
    "const-ary-ptrn-elem-id-init-fn-name-cover.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/const-ary-ptrn-elem-id-init-fn-name-cover.js",
    ),
  );
  it(
    "const-ary-ptrn-elem-id-init-fn-name-fn.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-init-fn-name-fn.js"),
  );
  it(
    "const-ary-ptrn-elem-id-init-fn-name-gen.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-init-fn-name-gen.js"),
  );
  it(
    "const-ary-ptrn-elem-id-init-hole.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-init-hole.js"),
  );
  it(
    "const-ary-ptrn-elem-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-init-skipped.js"),
  );
  it(
    "const-ary-ptrn-elem-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-init-throws.js"),
  );
  it(
    "const-ary-ptrn-elem-id-init-undef.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-init-undef.js"),
  );
  it(
    "const-ary-ptrn-elem-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/const-ary-ptrn-elem-id-init-unresolvable.js",
    ),
  );
  it(
    "const-ary-ptrn-elem-id-iter-complete.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-iter-complete.js"),
  );
  it(
    "const-ary-ptrn-elem-id-iter-done.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-iter-done.js"),
  );
  it(
    "const-ary-ptrn-elem-id-iter-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-iter-step-err.js"),
  );
  it(
    "const-ary-ptrn-elem-id-iter-val-array-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/const-ary-ptrn-elem-id-iter-val-array-prototype.js",
    ),
  );
  it(
    "const-ary-ptrn-elem-id-iter-val-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-iter-val-err.js"),
  );
  it(
    "const-ary-ptrn-elem-id-iter-val.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-id-iter-val.js"),
  );
  it(
    "const-ary-ptrn-elem-obj-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-obj-id-init.js"),
  );
  it(
    "const-ary-ptrn-elem-obj-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-obj-id.js"),
  );
  it(
    "const-ary-ptrn-elem-obj-prop-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-obj-prop-id-init.js"),
  );
  it(
    "const-ary-ptrn-elem-obj-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-obj-prop-id.js"),
  );
  it(
    "const-ary-ptrn-elem-obj-val-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-obj-val-null.js"),
  );
  it(
    "const-ary-ptrn-elem-obj-val-undef.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elem-obj-val-undef.js"),
  );
  it(
    "const-ary-ptrn-elision-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elision-exhausted.js"),
  );
  it(
    "const-ary-ptrn-elision-iter-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elision-iter-close.js"),
  );
  it(
    "const-ary-ptrn-elision-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elision-step-err.js"),
  );
  it(
    "const-ary-ptrn-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-elision.js"),
  );
  it(
    "const-ary-ptrn-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-empty.js"),
  );
  it(
    "const-ary-ptrn-init-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-init-err.js"),
  );
  it(
    "const-ary-ptrn-rest-ary-elem.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-ary-elem.js"),
  );
  it(
    "const-ary-ptrn-rest-ary-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-ary-elision.js"),
  );
  it(
    "const-ary-ptrn-rest-ary-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-ary-empty.js"),
  );
  it(
    "const-ary-ptrn-rest-ary-rest.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-ary-rest.js"),
  );
  it(
    "const-ary-ptrn-rest-id-direct.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-id-direct.js"),
  );
  it(
    "const-ary-ptrn-rest-id-elision-next-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-id-elision-next-err.js"),
  );
  it(
    "const-ary-ptrn-rest-id-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-id-elision.js"),
  );
  it(
    "const-ary-ptrn-rest-id-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-id-exhausted.js"),
  );
  it(
    "const-ary-ptrn-rest-id-iter-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-id-iter-close.js"),
  );
  it(
    "const-ary-ptrn-rest-id-iter-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-id-iter-step-err.js"),
  );
  it(
    "const-ary-ptrn-rest-id-iter-val-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-id-iter-val-err.js"),
  );
  it(
    "const-ary-ptrn-rest-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-id.js"),
  );
  it(
    "const-ary-ptrn-rest-init-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-init-ary.js"),
  );
  it(
    "const-ary-ptrn-rest-init-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-init-id.js"),
  );
  it(
    "const-ary-ptrn-rest-init-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-init-obj.js"),
  );
  it(
    "const-ary-ptrn-rest-not-final-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-not-final-ary.js"),
  );
  it(
    "const-ary-ptrn-rest-not-final-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-not-final-id.js"),
  );
  it(
    "const-ary-ptrn-rest-not-final-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-not-final-obj.js"),
  );
  it(
    "const-ary-ptrn-rest-obj-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-obj-id.js"),
  );
  it(
    "const-ary-ptrn-rest-obj-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-ary-ptrn-rest-obj-prop-id.js"),
  );
  it(
    "const-obj-init-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-init-null.js"),
  );
  it(
    "const-obj-init-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-init-undefined.js"),
  );
  it(
    "const-obj-ptrn-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-empty.js"),
  );
  it(
    "const-obj-ptrn-id-get-value-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-id-get-value-err.js"),
  );
  it(
    "const-obj-ptrn-id-init-fn-name-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-id-init-fn-name-arrow.js"),
  );
  it(
    "const-obj-ptrn-id-init-fn-name-class.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-id-init-fn-name-class.js"),
  );
  it(
    "const-obj-ptrn-id-init-fn-name-cover.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-id-init-fn-name-cover.js"),
  );
  it(
    "const-obj-ptrn-id-init-fn-name-fn.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-id-init-fn-name-fn.js"),
  );
  it(
    "const-obj-ptrn-id-init-fn-name-gen.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-id-init-fn-name-gen.js"),
  );
  it(
    "const-obj-ptrn-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-id-init-skipped.js"),
  );
  it(
    "const-obj-ptrn-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-id-init-throws.js"),
  );
  it(
    "const-obj-ptrn-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-id-init-unresolvable.js"),
  );
  it(
    "const-obj-ptrn-id-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-id-trailing-comma.js"),
  );
  it(
    "const-obj-ptrn-init-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-init-err.js"),
  );
  it(
    "const-obj-ptrn-list-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-list-err.js"),
  );
  it(
    "const-obj-ptrn-prop-ary-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-ary-init.js"),
  );
  it(
    "const-obj-ptrn-prop-ary-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-ary-trailing-comma.js"),
  );
  it(
    "const-obj-ptrn-prop-ary-value-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-ary-value-null.js"),
  );
  it(
    "const-obj-ptrn-prop-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-ary.js"),
  );
  it(
    "const-obj-ptrn-prop-eval-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-eval-err.js"),
  );
  it(
    "const-obj-ptrn-prop-id-get-value-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-id-get-value-err.js"),
  );
  it(
    "const-obj-ptrn-prop-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-id-init-skipped.js"),
  );
  it(
    "const-obj-ptrn-prop-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-id-init-throws.js"),
  );
  it(
    "const-obj-ptrn-prop-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/const-obj-ptrn-prop-id-init-unresolvable.js",
    ),
  );
  it(
    "const-obj-ptrn-prop-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-id-init.js"),
  );
  it(
    "const-obj-ptrn-prop-id-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-id-trailing-comma.js"),
  );
  it(
    "const-obj-ptrn-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-id.js"),
  );
  it(
    "const-obj-ptrn-prop-obj-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-obj-init.js"),
  );
  it(
    "const-obj-ptrn-prop-obj-value-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-obj-value-null.js"),
  );
  it(
    "const-obj-ptrn-prop-obj-value-undef.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-obj-value-undef.js"),
  );
  it(
    "const-obj-ptrn-prop-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-prop-obj.js"),
  );
  it(
    "const-obj-ptrn-rest-getter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-rest-getter.js"),
  );
  it(
    "const-obj-ptrn-rest-skip-non-enumerable.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-rest-skip-non-enumerable.js"),
  );
  it(
    "const-obj-ptrn-rest-val-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/const-obj-ptrn-rest-val-obj.js"),
  );
  it(
    "let-ary-init-iter-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-init-iter-close.js"),
  );
  it(
    "let-ary-init-iter-get-err-array-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/let-ary-init-iter-get-err-array-prototype.js",
    ),
  );
  it(
    "let-ary-init-iter-get-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-init-iter-get-err.js"),
  );
  it(
    "let-ary-init-iter-no-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-init-iter-no-close.js"),
  );
  it(
    "let-ary-name-iter-val.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-name-iter-val.js"),
  );
  it(
    "let-ary-ptrn-elem-ary-elem-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-ary-elem-init.js"),
  );
  it(
    "let-ary-ptrn-elem-ary-elem-iter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-ary-elem-iter.js"),
  );
  it(
    "let-ary-ptrn-elem-ary-elision-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-ary-elision-init.js"),
  );
  it(
    "let-ary-ptrn-elem-ary-elision-iter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-ary-elision-iter.js"),
  );
  it(
    "let-ary-ptrn-elem-ary-empty-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-ary-empty-init.js"),
  );
  it(
    "let-ary-ptrn-elem-ary-empty-iter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-ary-empty-iter.js"),
  );
  it(
    "let-ary-ptrn-elem-ary-rest-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-ary-rest-init.js"),
  );
  it(
    "let-ary-ptrn-elem-ary-rest-iter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-ary-rest-iter.js"),
  );
  it(
    "let-ary-ptrn-elem-ary-val-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-ary-val-null.js"),
  );
  it(
    "let-ary-ptrn-elem-id-init-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-init-exhausted.js"),
  );
  it(
    "let-ary-ptrn-elem-id-init-fn-name-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-init-fn-name-arrow.js"),
  );
  it(
    "let-ary-ptrn-elem-id-init-fn-name-class.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-init-fn-name-class.js"),
  );
  it(
    "let-ary-ptrn-elem-id-init-fn-name-cover.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-init-fn-name-cover.js"),
  );
  it(
    "let-ary-ptrn-elem-id-init-fn-name-fn.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-init-fn-name-fn.js"),
  );
  it(
    "let-ary-ptrn-elem-id-init-fn-name-gen.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-init-fn-name-gen.js"),
  );
  it(
    "let-ary-ptrn-elem-id-init-hole.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-init-hole.js"),
  );
  it(
    "let-ary-ptrn-elem-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-init-skipped.js"),
  );
  it(
    "let-ary-ptrn-elem-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-init-throws.js"),
  );
  it(
    "let-ary-ptrn-elem-id-init-undef.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-init-undef.js"),
  );
  it(
    "let-ary-ptrn-elem-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-init-unresolvable.js"),
  );
  it(
    "let-ary-ptrn-elem-id-iter-complete.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-iter-complete.js"),
  );
  it(
    "let-ary-ptrn-elem-id-iter-done.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-iter-done.js"),
  );
  it(
    "let-ary-ptrn-elem-id-iter-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-iter-step-err.js"),
  );
  it(
    "let-ary-ptrn-elem-id-iter-val-array-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/let-ary-ptrn-elem-id-iter-val-array-prototype.js",
    ),
  );
  it(
    "let-ary-ptrn-elem-id-iter-val-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-iter-val-err.js"),
  );
  it(
    "let-ary-ptrn-elem-id-iter-val.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-id-iter-val.js"),
  );
  it(
    "let-ary-ptrn-elem-obj-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-obj-id-init.js"),
  );
  it(
    "let-ary-ptrn-elem-obj-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-obj-id.js"),
  );
  it(
    "let-ary-ptrn-elem-obj-prop-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-obj-prop-id-init.js"),
  );
  it(
    "let-ary-ptrn-elem-obj-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-obj-prop-id.js"),
  );
  it(
    "let-ary-ptrn-elem-obj-val-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-obj-val-null.js"),
  );
  it(
    "let-ary-ptrn-elem-obj-val-undef.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elem-obj-val-undef.js"),
  );
  it(
    "let-ary-ptrn-elision-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elision-exhausted.js"),
  );
  it(
    "let-ary-ptrn-elision-iter-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elision-iter-close.js"),
  );
  it(
    "let-ary-ptrn-elision-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elision-step-err.js"),
  );
  it(
    "let-ary-ptrn-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-elision.js"),
  );
  it(
    "let-ary-ptrn-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-empty.js"),
  );
  it(
    "let-ary-ptrn-init-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-init-err.js"),
  );
  it(
    "let-ary-ptrn-rest-ary-elem.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-ary-elem.js"),
  );
  it(
    "let-ary-ptrn-rest-ary-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-ary-elision.js"),
  );
  it(
    "let-ary-ptrn-rest-ary-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-ary-empty.js"),
  );
  it(
    "let-ary-ptrn-rest-ary-rest.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-ary-rest.js"),
  );
  it(
    "let-ary-ptrn-rest-id-direct.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-id-direct.js"),
  );
  it(
    "let-ary-ptrn-rest-id-elision-next-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-id-elision-next-err.js"),
  );
  it(
    "let-ary-ptrn-rest-id-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-id-elision.js"),
  );
  it(
    "let-ary-ptrn-rest-id-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-id-exhausted.js"),
  );
  it(
    "let-ary-ptrn-rest-id-iter-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-id-iter-close.js"),
  );
  it(
    "let-ary-ptrn-rest-id-iter-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-id-iter-step-err.js"),
  );
  it(
    "let-ary-ptrn-rest-id-iter-val-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-id-iter-val-err.js"),
  );
  it(
    "let-ary-ptrn-rest-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-id.js"),
  );
  it(
    "let-ary-ptrn-rest-init-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-init-ary.js"),
  );
  it(
    "let-ary-ptrn-rest-init-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-init-id.js"),
  );
  it(
    "let-ary-ptrn-rest-init-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-init-obj.js"),
  );
  it(
    "let-ary-ptrn-rest-not-final-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-not-final-ary.js"),
  );
  it(
    "let-ary-ptrn-rest-not-final-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-not-final-id.js"),
  );
  it(
    "let-ary-ptrn-rest-not-final-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-not-final-obj.js"),
  );
  it(
    "let-ary-ptrn-rest-obj-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-obj-id.js"),
  );
  it(
    "let-ary-ptrn-rest-obj-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-ary-ptrn-rest-obj-prop-id.js"),
  );
  it(
    "let-obj-init-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-init-null.js"),
  );
  it(
    "let-obj-init-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-init-undefined.js"),
  );
  it(
    "let-obj-ptrn-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-empty.js"),
  );
  it(
    "let-obj-ptrn-id-get-value-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-id-get-value-err.js"),
  );
  it(
    "let-obj-ptrn-id-init-fn-name-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-id-init-fn-name-arrow.js"),
  );
  it(
    "let-obj-ptrn-id-init-fn-name-class.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-id-init-fn-name-class.js"),
  );
  it(
    "let-obj-ptrn-id-init-fn-name-cover.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-id-init-fn-name-cover.js"),
  );
  it(
    "let-obj-ptrn-id-init-fn-name-fn.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-id-init-fn-name-fn.js"),
  );
  it(
    "let-obj-ptrn-id-init-fn-name-gen.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-id-init-fn-name-gen.js"),
  );
  it(
    "let-obj-ptrn-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-id-init-skipped.js"),
  );
  it(
    "let-obj-ptrn-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-id-init-throws.js"),
  );
  it(
    "let-obj-ptrn-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-id-init-unresolvable.js"),
  );
  it(
    "let-obj-ptrn-id-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-id-trailing-comma.js"),
  );
  it(
    "let-obj-ptrn-init-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-init-err.js"),
  );
  it(
    "let-obj-ptrn-list-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-list-err.js"),
  );
  it(
    "let-obj-ptrn-prop-ary-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-ary-init.js"),
  );
  it(
    "let-obj-ptrn-prop-ary-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-ary-trailing-comma.js"),
  );
  it(
    "let-obj-ptrn-prop-ary-value-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-ary-value-null.js"),
  );
  it(
    "let-obj-ptrn-prop-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-ary.js"),
  );
  it(
    "let-obj-ptrn-prop-eval-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-eval-err.js"),
  );
  it(
    "let-obj-ptrn-prop-id-get-value-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-id-get-value-err.js"),
  );
  it(
    "let-obj-ptrn-prop-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-id-init-skipped.js"),
  );
  it(
    "let-obj-ptrn-prop-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-id-init-throws.js"),
  );
  it(
    "let-obj-ptrn-prop-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-id-init-unresolvable.js"),
  );
  it(
    "let-obj-ptrn-prop-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-id-init.js"),
  );
  it(
    "let-obj-ptrn-prop-id-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-id-trailing-comma.js"),
  );
  it(
    "let-obj-ptrn-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-id.js"),
  );
  it(
    "let-obj-ptrn-prop-obj-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-obj-init.js"),
  );
  it(
    "let-obj-ptrn-prop-obj-value-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-obj-value-null.js"),
  );
  it(
    "let-obj-ptrn-prop-obj-value-undef.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-obj-value-undef.js"),
  );
  it(
    "let-obj-ptrn-prop-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-prop-obj.js"),
  );
  it(
    "let-obj-ptrn-rest-getter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-rest-getter.js"),
  );
  it(
    "let-obj-ptrn-rest-skip-non-enumerable.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-rest-skip-non-enumerable.js"),
  );
  it(
    "let-obj-ptrn-rest-val-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/let-obj-ptrn-rest-val-obj.js"),
  );
  it(
    "obj-empty-bool.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-empty-bool.js"),
  );
  it(
    "obj-empty-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-empty-null.js"),
  );
  it(
    "obj-empty-num.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-empty-num.js"),
  );
  it(
    "obj-empty-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-empty-obj.js"),
  );
  it(
    "obj-empty-string.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-empty-string.js"),
  );
  it(
    "obj-empty-symbol.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-empty-symbol.js"),
  );
  it(
    "obj-empty-undef.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-empty-undef.js"),
  );
  it(
    "obj-id-identifier-resolution-first.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-identifier-resolution-first.js"),
  );
  it(
    "obj-id-identifier-resolution-last.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-identifier-resolution-last.js"),
  );
  it(
    "obj-id-identifier-resolution-lone.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-identifier-resolution-lone.js"),
  );
  it(
    "obj-id-identifier-resolution-middle.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-identifier-resolution-middle.js"),
  );
  it(
    "obj-id-identifier-resolution-trlng.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-identifier-resolution-trlng.js"),
  );
  it(
    "obj-id-identifier-yield-expr.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-identifier-yield-expr.js"),
  );
  it(
    "obj-id-identifier-yield-ident-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-identifier-yield-ident-invalid.js"),
  );
  it(
    "obj-id-identifier-yield-ident-valid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-identifier-yield-ident-valid.js"),
  );
  it(
    "obj-id-init-assignment-missing.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-init-assignment-missing.js"),
  );
  it(
    "obj-id-init-assignment-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-init-assignment-null.js"),
  );
  it(
    "obj-id-init-assignment-truthy.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-init-assignment-truthy.js"),
  );
  it(
    "obj-id-init-assignment-undef.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-init-assignment-undef.js"),
  );
  it(
    "obj-id-init-evaluation.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-init-evaluation.js"),
  );
  it(
    "obj-id-init-fn-name-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-init-fn-name-arrow.js"),
  );
  it(
    "obj-id-init-fn-name-class.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-init-fn-name-class.js"),
  );
  it(
    "obj-id-init-fn-name-cover.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-init-fn-name-cover.js"),
  );
  it(
    "obj-id-init-fn-name-fn.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-init-fn-name-fn.js"),
  );
  it(
    "obj-id-init-fn-name-gen.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-init-fn-name-gen.js"),
  );
  it(
    "obj-id-init-in.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-init-in.js"),
  );
  it(
    "obj-id-init-let.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-init-let.js"),
  );
  it(
    "obj-id-init-order.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-init-order.js"),
  );
  it(
    "obj-id-init-simple-no-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-init-simple-no-strict.js"),
  );
  it(
    "obj-id-init-simple-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-init-simple-strict.js"),
  );
  it(
    "obj-id-init-yield-expr.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-init-yield-expr.js"),
  );
  it(
    "obj-id-init-yield-ident-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-init-yield-ident-invalid.js"),
  );
  it(
    "obj-id-init-yield-ident-valid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-init-yield-ident-valid.js"),
  );
  it(
    "obj-id-put-const.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-put-const.js"),
  );
  it(
    "obj-id-put-let.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-put-let.js"),
  );
  it(
    "obj-id-put-unresolvable-no-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-put-unresolvable-no-strict.js"),
  );
  it(
    "obj-id-put-unresolvable-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-put-unresolvable-strict.js"),
  );
  it(
    "obj-id-simple-no-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-simple-no-strict.js"),
  );
  it(
    "obj-id-simple-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-id-simple-strict.js"),
  );
  it(
    "obj-prop-elem-init-assignment-missing.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-assignment-missing.js"),
  );
  it(
    "obj-prop-elem-init-assignment-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-assignment-null.js"),
  );
  it(
    "obj-prop-elem-init-assignment-truthy.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-assignment-truthy.js"),
  );
  it(
    "obj-prop-elem-init-assignment-undef.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-assignment-undef.js"),
  );
  it(
    "obj-prop-elem-init-evaluation.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-evaluation.js"),
  );
  it(
    "obj-prop-elem-init-fn-name-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-fn-name-arrow.js"),
  );
  it(
    "obj-prop-elem-init-fn-name-class.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-fn-name-class.js"),
  );
  it(
    "obj-prop-elem-init-fn-name-cover.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-fn-name-cover.js"),
  );
  it(
    "obj-prop-elem-init-fn-name-fn.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-fn-name-fn.js"),
  );
  it(
    "obj-prop-elem-init-fn-name-gen.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-fn-name-gen.js"),
  );
  it(
    "obj-prop-elem-init-in.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-in.js"),
  );
  it(
    "obj-prop-elem-init-let.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-let.js"),
  );
  it(
    "obj-prop-elem-init-yield-expr.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-yield-expr.js"),
  );
  it(
    "obj-prop-elem-init-yield-ident-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-yield-ident-invalid.js"),
  );
  it(
    "obj-prop-elem-init-yield-ident-valid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-elem-init-yield-ident-valid.js"),
  );
  it(
    "obj-prop-elem-target-memberexpr-optchain-prop-ref-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/obj-prop-elem-target-memberexpr-optchain-prop-ref-init.js",
    ),
  );
  it(
    "obj-prop-elem-target-obj-literal-optchain-prop-ref-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/obj-prop-elem-target-obj-literal-optchain-prop-ref-init.js",
    ),
  );
  it(
    "obj-prop-elem-target-obj-literal-prop-ref-init-active.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/obj-prop-elem-target-obj-literal-prop-ref-init-active.js",
    ),
  );
  it(
    "obj-prop-elem-target-obj-literal-prop-ref-init.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/obj-prop-elem-target-obj-literal-prop-ref-init.js",
    ),
  );
  it(
    "obj-prop-elem-target-obj-literal-prop-ref.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/obj-prop-elem-target-obj-literal-prop-ref.js",
    ),
  );
  it(
    "obj-prop-elem-target-yield-expr.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-elem-target-yield-expr.js"),
  );
  it(
    "obj-prop-elem-target-yield-ident-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/obj-prop-elem-target-yield-ident-invalid.js",
    ),
  );
  it(
    "obj-prop-elem-target-yield-ident-valid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-elem-target-yield-ident-valid.js"),
  );
  it(
    "obj-prop-identifier-resolution-first.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-identifier-resolution-first.js"),
  );
  it(
    "obj-prop-identifier-resolution-last.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-identifier-resolution-last.js"),
  );
  it(
    "obj-prop-identifier-resolution-lone.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-identifier-resolution-lone.js"),
  );
  it(
    "obj-prop-identifier-resolution-middle.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-identifier-resolution-middle.js"),
  );
  it(
    "obj-prop-identifier-resolution-trlng.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-identifier-resolution-trlng.js"),
  );
  it(
    "obj-prop-name-evaluation-error.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-name-evaluation-error.js"),
  );
  it(
    "obj-prop-name-evaluation.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-name-evaluation.js"),
  );
  it(
    "obj-prop-nested-array-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-nested-array-invalid.js"),
  );
  it(
    "obj-prop-nested-array-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-nested-array-null.js"),
  );
  it(
    "obj-prop-nested-array-undefined-own.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-nested-array-undefined-own.js"),
  );
  it(
    "obj-prop-nested-array-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-nested-array-undefined.js"),
  );
  it(
    "obj-prop-nested-array-yield-expr.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-nested-array-yield-expr.js"),
  );
  it(
    "obj-prop-nested-array-yield-ident-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/obj-prop-nested-array-yield-ident-invalid.js",
    ),
  );
  it(
    "obj-prop-nested-array-yield-ident-valid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-nested-array-yield-ident-valid.js"),
  );
  it(
    "obj-prop-nested-array.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-nested-array.js"),
  );
  it(
    "obj-prop-nested-obj-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-nested-obj-invalid.js"),
  );
  it(
    "obj-prop-nested-obj-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-nested-obj-null.js"),
  );
  it(
    "obj-prop-nested-obj-undefined-own.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-nested-obj-undefined-own.js"),
  );
  it(
    "obj-prop-nested-obj-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-nested-obj-undefined.js"),
  );
  it(
    "obj-prop-nested-obj-yield-expr.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-nested-obj-yield-expr.js"),
  );
  it(
    "obj-prop-nested-obj-yield-ident-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-nested-obj-yield-ident-invalid.js"),
  );
  it(
    "obj-prop-nested-obj-yield-ident-valid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-nested-obj-yield-ident-valid.js"),
  );
  it(
    "obj-prop-nested-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-nested-obj.js"),
  );
  it(
    "obj-prop-put-const.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-put-const.js"),
  );
  it(
    "obj-prop-put-let.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-put-let.js"),
  );
  it(
    "obj-prop-put-order.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-put-order.js"),
  );
  it(
    "obj-prop-put-prop-ref-no-get.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-put-prop-ref-no-get.js"),
  );
  it(
    "obj-prop-put-prop-ref-user-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-put-prop-ref-user-err.js"),
  );
  it(
    "obj-prop-put-prop-ref.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-put-prop-ref.js"),
  );
  it(
    "obj-prop-put-unresolvable-no-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-put-unresolvable-no-strict.js"),
  );
  it(
    "obj-prop-put-unresolvable-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-prop-put-unresolvable-strict.js"),
  );
  it(
    "obj-rest-computed-property-no-strict.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-rest-computed-property-no-strict.js"),
  );
  it(
    "obj-rest-computed-property.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-rest-computed-property.js"),
  );
  it(
    "obj-rest-descriptors.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-rest-descriptors.js"),
  );
  it(
    "obj-rest-empty-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-rest-empty-obj.js"),
  );
  it(
    "obj-rest-getter-abrupt-get-error.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-rest-getter-abrupt-get-error.js"),
  );
  it(
    "obj-rest-getter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-rest-getter.js"),
  );
  it(
    "obj-rest-non-string-computed-property-1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-rest-non-string-computed-property-1.js"),
  );
  it(
    "obj-rest-non-string-computed-property-1dot.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/obj-rest-non-string-computed-property-1dot.js",
    ),
  );
  it(
    "obj-rest-non-string-computed-property-1dot0.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/obj-rest-non-string-computed-property-1dot0.js",
    ),
  );
  it(
    "obj-rest-non-string-computed-property-1e0.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/obj-rest-non-string-computed-property-1e0.js",
    ),
  );
  it(
    "obj-rest-non-string-computed-property-array-1.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/obj-rest-non-string-computed-property-array-1.js",
    ),
  );
  it(
    "obj-rest-non-string-computed-property-array-1e0.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/obj-rest-non-string-computed-property-array-1e0.js",
    ),
  );
  it(
    "obj-rest-non-string-computed-property-string-1.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/obj-rest-non-string-computed-property-string-1.js",
    ),
  );
  it(
    "obj-rest-not-last-element-invalid.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-rest-not-last-element-invalid.js"),
  );
  it(
    "obj-rest-number.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-rest-number.js"),
  );
  it(
    "obj-rest-order.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-rest-order.js"),
  );
  it(
    "obj-rest-put-const.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-rest-put-const.js"),
  );
  it(
    "obj-rest-same-name.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-rest-same-name.js"),
  );
  it(
    "obj-rest-skip-non-enumerable.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-rest-skip-non-enumerable.js"),
  );
  it(
    "obj-rest-str-val.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-rest-str-val.js"),
  );
  it(
    "obj-rest-symbol-val.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-rest-symbol-val.js"),
  );
  it(
    "obj-rest-to-property-with-setter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-rest-to-property-with-setter.js"),
  );
  it(
    "obj-rest-to-property.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-rest-to-property.js"),
  );
  it(
    "obj-rest-val-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-rest-val-null.js"),
  );
  it(
    "obj-rest-val-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-rest-val-undefined.js"),
  );
  it(
    "obj-rest-valid-object.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/obj-rest-valid-object.js"),
  );
  it(
    "var-ary-init-iter-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-init-iter-close.js"),
  );
  it(
    "var-ary-init-iter-get-err-array-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/var-ary-init-iter-get-err-array-prototype.js",
    ),
  );
  it(
    "var-ary-init-iter-get-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-init-iter-get-err.js"),
  );
  it(
    "var-ary-init-iter-no-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-init-iter-no-close.js"),
  );
  it(
    "var-ary-name-iter-val.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-name-iter-val.js"),
  );
  it(
    "var-ary-ptrn-elem-ary-elem-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-ary-elem-init.js"),
  );
  it(
    "var-ary-ptrn-elem-ary-elem-iter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-ary-elem-iter.js"),
  );
  it(
    "var-ary-ptrn-elem-ary-elision-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-ary-elision-init.js"),
  );
  it(
    "var-ary-ptrn-elem-ary-elision-iter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-ary-elision-iter.js"),
  );
  it(
    "var-ary-ptrn-elem-ary-empty-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-ary-empty-init.js"),
  );
  it(
    "var-ary-ptrn-elem-ary-empty-iter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-ary-empty-iter.js"),
  );
  it(
    "var-ary-ptrn-elem-ary-rest-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-ary-rest-init.js"),
  );
  it(
    "var-ary-ptrn-elem-ary-rest-iter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-ary-rest-iter.js"),
  );
  it(
    "var-ary-ptrn-elem-ary-val-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-ary-val-null.js"),
  );
  it(
    "var-ary-ptrn-elem-id-init-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-init-exhausted.js"),
  );
  it(
    "var-ary-ptrn-elem-id-init-fn-name-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-init-fn-name-arrow.js"),
  );
  it(
    "var-ary-ptrn-elem-id-init-fn-name-class.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-init-fn-name-class.js"),
  );
  it(
    "var-ary-ptrn-elem-id-init-fn-name-cover.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-init-fn-name-cover.js"),
  );
  it(
    "var-ary-ptrn-elem-id-init-fn-name-fn.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-init-fn-name-fn.js"),
  );
  it(
    "var-ary-ptrn-elem-id-init-fn-name-gen.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-init-fn-name-gen.js"),
  );
  it(
    "var-ary-ptrn-elem-id-init-hole.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-init-hole.js"),
  );
  it(
    "var-ary-ptrn-elem-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-init-skipped.js"),
  );
  it(
    "var-ary-ptrn-elem-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-init-throws.js"),
  );
  it(
    "var-ary-ptrn-elem-id-init-undef.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-init-undef.js"),
  );
  it(
    "var-ary-ptrn-elem-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-init-unresolvable.js"),
  );
  it(
    "var-ary-ptrn-elem-id-iter-complete.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-iter-complete.js"),
  );
  it(
    "var-ary-ptrn-elem-id-iter-done.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-iter-done.js"),
  );
  it(
    "var-ary-ptrn-elem-id-iter-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-iter-step-err.js"),
  );
  it(
    "var-ary-ptrn-elem-id-iter-val-array-prototype.js",
    { tags: ["known-passing"] },
    createTestHandler(
      "language/statements/for-of/dstr/var-ary-ptrn-elem-id-iter-val-array-prototype.js",
    ),
  );
  it(
    "var-ary-ptrn-elem-id-iter-val-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-iter-val-err.js"),
  );
  it(
    "var-ary-ptrn-elem-id-iter-val.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-id-iter-val.js"),
  );
  it(
    "var-ary-ptrn-elem-obj-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-obj-id-init.js"),
  );
  it(
    "var-ary-ptrn-elem-obj-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-obj-id.js"),
  );
  it(
    "var-ary-ptrn-elem-obj-prop-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-obj-prop-id-init.js"),
  );
  it(
    "var-ary-ptrn-elem-obj-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-obj-prop-id.js"),
  );
  it(
    "var-ary-ptrn-elem-obj-val-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-obj-val-null.js"),
  );
  it(
    "var-ary-ptrn-elem-obj-val-undef.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elem-obj-val-undef.js"),
  );
  it(
    "var-ary-ptrn-elision-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elision-exhausted.js"),
  );
  it(
    "var-ary-ptrn-elision-iter-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elision-iter-close.js"),
  );
  it(
    "var-ary-ptrn-elision-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elision-step-err.js"),
  );
  it(
    "var-ary-ptrn-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-elision.js"),
  );
  it(
    "var-ary-ptrn-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-empty.js"),
  );
  it(
    "var-ary-ptrn-init-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-init-err.js"),
  );
  it(
    "var-ary-ptrn-rest-ary-elem.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-ary-elem.js"),
  );
  it(
    "var-ary-ptrn-rest-ary-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-ary-elision.js"),
  );
  it(
    "var-ary-ptrn-rest-ary-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-ary-empty.js"),
  );
  it(
    "var-ary-ptrn-rest-ary-rest.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-ary-rest.js"),
  );
  it(
    "var-ary-ptrn-rest-id-direct.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-id-direct.js"),
  );
  it(
    "var-ary-ptrn-rest-id-elision-next-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-id-elision-next-err.js"),
  );
  it(
    "var-ary-ptrn-rest-id-elision.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-id-elision.js"),
  );
  it(
    "var-ary-ptrn-rest-id-exhausted.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-id-exhausted.js"),
  );
  it(
    "var-ary-ptrn-rest-id-iter-close.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-id-iter-close.js"),
  );
  it(
    "var-ary-ptrn-rest-id-iter-step-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-id-iter-step-err.js"),
  );
  it(
    "var-ary-ptrn-rest-id-iter-val-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-id-iter-val-err.js"),
  );
  it(
    "var-ary-ptrn-rest-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-id.js"),
  );
  it(
    "var-ary-ptrn-rest-init-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-init-ary.js"),
  );
  it(
    "var-ary-ptrn-rest-init-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-init-id.js"),
  );
  it(
    "var-ary-ptrn-rest-init-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-init-obj.js"),
  );
  it(
    "var-ary-ptrn-rest-not-final-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-not-final-ary.js"),
  );
  it(
    "var-ary-ptrn-rest-not-final-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-not-final-id.js"),
  );
  it(
    "var-ary-ptrn-rest-not-final-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-not-final-obj.js"),
  );
  it(
    "var-ary-ptrn-rest-obj-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-obj-id.js"),
  );
  it(
    "var-ary-ptrn-rest-obj-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-ary-ptrn-rest-obj-prop-id.js"),
  );
  it(
    "var-obj-init-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-init-null.js"),
  );
  it(
    "var-obj-init-undefined.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-init-undefined.js"),
  );
  it(
    "var-obj-ptrn-empty.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-empty.js"),
  );
  it(
    "var-obj-ptrn-id-get-value-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-id-get-value-err.js"),
  );
  it(
    "var-obj-ptrn-id-init-fn-name-arrow.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-id-init-fn-name-arrow.js"),
  );
  it(
    "var-obj-ptrn-id-init-fn-name-class.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-id-init-fn-name-class.js"),
  );
  it(
    "var-obj-ptrn-id-init-fn-name-cover.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-id-init-fn-name-cover.js"),
  );
  it(
    "var-obj-ptrn-id-init-fn-name-fn.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-id-init-fn-name-fn.js"),
  );
  it(
    "var-obj-ptrn-id-init-fn-name-gen.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-id-init-fn-name-gen.js"),
  );
  it(
    "var-obj-ptrn-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-id-init-skipped.js"),
  );
  it(
    "var-obj-ptrn-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-id-init-throws.js"),
  );
  it(
    "var-obj-ptrn-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-id-init-unresolvable.js"),
  );
  it(
    "var-obj-ptrn-id-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-id-trailing-comma.js"),
  );
  it(
    "var-obj-ptrn-init-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-init-err.js"),
  );
  it(
    "var-obj-ptrn-list-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-list-err.js"),
  );
  it(
    "var-obj-ptrn-prop-ary-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-ary-init.js"),
  );
  it(
    "var-obj-ptrn-prop-ary-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-ary-trailing-comma.js"),
  );
  it(
    "var-obj-ptrn-prop-ary-value-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-ary-value-null.js"),
  );
  it(
    "var-obj-ptrn-prop-ary.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-ary.js"),
  );
  it(
    "var-obj-ptrn-prop-eval-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-eval-err.js"),
  );
  it(
    "var-obj-ptrn-prop-id-get-value-err.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-id-get-value-err.js"),
  );
  it(
    "var-obj-ptrn-prop-id-init-skipped.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-id-init-skipped.js"),
  );
  it(
    "var-obj-ptrn-prop-id-init-throws.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-id-init-throws.js"),
  );
  it(
    "var-obj-ptrn-prop-id-init-unresolvable.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-id-init-unresolvable.js"),
  );
  it(
    "var-obj-ptrn-prop-id-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-id-init.js"),
  );
  it(
    "var-obj-ptrn-prop-id-trailing-comma.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-id-trailing-comma.js"),
  );
  it(
    "var-obj-ptrn-prop-id.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-id.js"),
  );
  it(
    "var-obj-ptrn-prop-obj-init.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-obj-init.js"),
  );
  it(
    "var-obj-ptrn-prop-obj-value-null.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-obj-value-null.js"),
  );
  it(
    "var-obj-ptrn-prop-obj-value-undef.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-obj-value-undef.js"),
  );
  it(
    "var-obj-ptrn-prop-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-prop-obj.js"),
  );
  it(
    "var-obj-ptrn-rest-getter.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-rest-getter.js"),
  );
  it(
    "var-obj-ptrn-rest-skip-non-enumerable.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-rest-skip-non-enumerable.js"),
  );
  it(
    "var-obj-ptrn-rest-val-obj.js",
    { tags: ["known-passing"] },
    createTestHandler("language/statements/for-of/dstr/var-obj-ptrn-rest-val-obj.js"),
  );
});

it(
  "escaped-of.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/escaped-of.js"),
);

it.skip("float32array-mutate.js", () => {
  /* Ignored Test */
});

it.skip("float32array.js", () => {
  /* Ignored Test */
});

it.skip("float64array-mutate.js", () => {
  /* Ignored Test */
});

it.skip("float64array.js", () => {
  /* Ignored Test */
});

it(
  "generator-close-via-break.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/generator-close-via-break.js"),
);

it(
  "generator-close-via-continue.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/generator-close-via-continue.js"),
);

it(
  "generator-close-via-return.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/generator-close-via-return.js"),
);

it(
  "generator-close-via-throw.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/generator-close-via-throw.js"),
);

it(
  "generator-next-error.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/generator-next-error.js"),
);

it(
  "generator.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/generator.js"),
);

it(
  "generic-iterable.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/generic-iterable.js"),
);

it.skip("head-await-using-bound-names-fordecl-tdz.js", () => {
  /* Ignored Test */
});

it.skip("head-await-using-bound-names-in-stmt.js", () => {
  /* Ignored Test */
});

it.skip("head-await-using-bound-names-let.js", () => {
  /* Ignored Test */
});

it.skip("head-await-using-fresh-binding-per-iteration.js", () => {
  /* Ignored Test */
});

it.skip("head-await-using-init.js", () => {
  /* Ignored Test */
});

it(
  "head-const-bound-names-dup.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-const-bound-names-dup.js"),
);

it(
  "head-const-bound-names-fordecl-tdz.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-const-bound-names-fordecl-tdz.js"),
);

it(
  "head-const-bound-names-in-stmt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-const-bound-names-in-stmt.js"),
);

it(
  "head-const-bound-names-let.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-const-bound-names-let.js"),
);

it(
  "head-const-fresh-binding-per-iteration.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-const-fresh-binding-per-iteration.js"),
);

it(
  "head-const-init.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-const-init.js"),
);

it(
  "head-decl-no-expr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-decl-no-expr.js"),
);

it(
  "head-expr-no-expr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-expr-no-expr.js"),
);

it(
  "head-expr-obj-iterator-method.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-expr-obj-iterator-method.js"),
);

it(
  "head-expr-primitive-iterator-method.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-expr-primitive-iterator-method.js"),
);

it(
  "head-expr-to-obj.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-expr-to-obj.js"),
);

it(
  "head-let-bound-names-dup.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-let-bound-names-dup.js"),
);

it(
  "head-let-bound-names-fordecl-tdz.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-let-bound-names-fordecl-tdz.js"),
);

it(
  "head-let-bound-names-in-stmt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-let-bound-names-in-stmt.js"),
);

it(
  "head-let-bound-names-let.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-let-bound-names-let.js"),
);

it(
  "head-let-destructuring.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-let-destructuring.js"),
);

it(
  "head-let-fresh-binding-per-iteration.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-let-fresh-binding-per-iteration.js"),
);

it(
  "head-let-init.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-let-init.js"),
);

it(
  "head-lhs-async-dot.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-lhs-async-dot.js"),
);

it(
  "head-lhs-async-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-lhs-async-escaped.js"),
);

it(
  "head-lhs-async-invalid.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-lhs-async-invalid.js"),
);

it(
  "head-lhs-async-parens.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-lhs-async-parens.js"),
);

it(
  "head-lhs-cover-non-asnmt-trgt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-lhs-cover-non-asnmt-trgt.js"),
);

it(
  "head-lhs-cover.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-lhs-cover.js"),
);

it(
  "head-lhs-invalid-asnmt-ptrn-ary.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-lhs-invalid-asnmt-ptrn-ary.js"),
);

it(
  "head-lhs-invalid-asnmt-ptrn-obj.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-lhs-invalid-asnmt-ptrn-obj.js"),
);

it(
  "head-lhs-let.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-lhs-let.js"),
);

it(
  "head-lhs-member.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-lhs-member.js"),
);

it(
  "head-lhs-non-asnmt-trgt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-lhs-non-asnmt-trgt.js"),
);

it.skip("head-using-bound-names-fordecl-tdz.js", () => {
  /* Ignored Test */
});

it.skip("head-using-bound-names-in-stmt.js", () => {
  /* Ignored Test */
});

it.skip("head-using-bound-names-let.js", () => {
  /* Ignored Test */
});

it.skip("head-using-fresh-binding-per-iteration.js", () => {
  /* Ignored Test */
});

it.skip("head-using-init.js", () => {
  /* Ignored Test */
});

it(
  "head-var-bound-names-dup.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-var-bound-names-dup.js"),
);

it(
  "head-var-bound-names-in-stmt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-var-bound-names-in-stmt.js"),
);

it(
  "head-var-bound-names-let.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-var-bound-names-let.js"),
);

it(
  "head-var-init.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-var-init.js"),
);

it(
  "head-var-no-expr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/head-var-no-expr.js"),
);

it.skip("int16array-mutate.js", () => {
  /* Ignored Test */
});

it.skip("int16array.js", () => {
  /* Ignored Test */
});

it.skip("int32array-mutate.js", () => {
  /* Ignored Test */
});

it.skip("int32array.js", () => {
  /* Ignored Test */
});

it.skip("int8array-mutate.js", () => {
  /* Ignored Test */
});

it.skip("int8array.js", () => {
  /* Ignored Test */
});

it(
  "iterator-as-proxy.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/iterator-as-proxy.js"),
);

it(
  "iterator-close-non-object.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/iterator-close-non-object.js"),
);

it(
  "iterator-close-non-throw-get-method-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/iterator-close-non-throw-get-method-abrupt.js"),
);

it(
  "iterator-close-non-throw-get-method-is-null.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/iterator-close-non-throw-get-method-is-null.js"),
);

it(
  "iterator-close-non-throw-get-method-non-callable.js",
  { tags: ["known-passing"] },
  createTestHandler(
    "language/statements/for-of/iterator-close-non-throw-get-method-non-callable.js",
  ),
);

it(
  "iterator-close-throw-get-method-abrupt.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/iterator-close-throw-get-method-abrupt.js"),
);

it(
  "iterator-close-throw-get-method-non-callable.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/iterator-close-throw-get-method-non-callable.js"),
);

it(
  "iterator-close-via-break.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/iterator-close-via-break.js"),
);

it(
  "iterator-close-via-continue.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/iterator-close-via-continue.js"),
);

it(
  "iterator-close-via-return.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/iterator-close-via-return.js"),
);

it(
  "iterator-close-via-throw.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/iterator-close-via-throw.js"),
);

it(
  "iterator-next-error.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/iterator-next-error.js"),
);

it(
  "iterator-next-reference.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/iterator-next-reference.js"),
);

it(
  "iterator-next-result-done-attr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/iterator-next-result-done-attr.js"),
);

it(
  "iterator-next-result-type.js",
  { tags: ["known-failing"] },
  createTestHandler("language/statements/for-of/iterator-next-result-type.js"),
);

it(
  "iterator-next-result-value-attr-error.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/iterator-next-result-value-attr-error.js"),
);

it(
  "iterator-next-result-value-attr.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/iterator-next-result-value-attr.js"),
);

it(
  "labelled-fn-stmt-const.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/labelled-fn-stmt-const.js"),
);

it(
  "labelled-fn-stmt-let.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/labelled-fn-stmt-let.js"),
);

it(
  "labelled-fn-stmt-lhs.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/labelled-fn-stmt-lhs.js"),
);

it(
  "labelled-fn-stmt-var.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/labelled-fn-stmt-var.js"),
);

it(
  "let-array-with-newline.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/let-array-with-newline.js"),
);

it(
  "let-block-with-newline.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/let-block-with-newline.js"),
);

it(
  "let-identifier-with-newline.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/let-identifier-with-newline.js"),
);

it(
  "map-contract-expand.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/map-contract-expand.js"),
);

it(
  "map-contract.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/map-contract.js"),
);

it(
  "map-expand-contract.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/map-expand-contract.js"),
);

it(
  "map-expand.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/map-expand.js"),
);

it("map.js", { tags: ["known-passing"] }, createTestHandler("language/statements/for-of/map.js"));

it(
  "nested.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/nested.js"),
);

it(
  "return-from-catch.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/return-from-catch.js"),
);

it(
  "return-from-finally.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/return-from-finally.js"),
);

it(
  "return-from-try.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/return-from-try.js"),
);

it(
  "return.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/return.js"),
);

it(
  "scope-body-lex-boundary.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/scope-body-lex-boundary.js"),
);

it(
  "scope-body-lex-close.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/scope-body-lex-close.js"),
);

it(
  "scope-body-lex-open.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/scope-body-lex-open.js"),
);

it(
  "scope-body-var-none.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/scope-body-var-none.js"),
);

it(
  "scope-head-lex-close.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/scope-head-lex-close.js"),
);

it(
  "scope-head-lex-open.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/scope-head-lex-open.js"),
);

it(
  "scope-head-var-none.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/scope-head-var-none.js"),
);

it(
  "set-contract-expand.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/set-contract-expand.js"),
);

it(
  "set-contract.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/set-contract.js"),
);

it(
  "set-expand-contract.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/set-expand-contract.js"),
);

it(
  "set-expand.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/set-expand.js"),
);

it("set.js", { tags: ["known-passing"] }, createTestHandler("language/statements/for-of/set.js"));

it(
  "string-astral-truncated.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/string-astral-truncated.js"),
);

it(
  "string-astral.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/string-astral.js"),
);

it(
  "string-bmp.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/string-bmp.js"),
);

it(
  "throw-from-catch.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/throw-from-catch.js"),
);

it(
  "throw-from-finally.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/throw-from-finally.js"),
);

it(
  "throw.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/throw.js"),
);

it.skip("typedarray-backed-by-resizable-buffer-grow-before-end.js", () => {
  /* Ignored Test */
});

it.skip("typedarray-backed-by-resizable-buffer-grow-mid-iteration.js", () => {
  /* Ignored Test */
});

it.skip("typedarray-backed-by-resizable-buffer-shrink-mid-iteration.js", () => {
  /* Ignored Test */
});

it.skip("typedarray-backed-by-resizable-buffer-shrink-to-zero-mid-iteration.js", () => {
  /* Ignored Test */
});

it.skip("typedarray-backed-by-resizable-buffer.js", () => {
  /* Ignored Test */
});

it.skip("uint16array-mutate.js", () => {
  /* Ignored Test */
});

it.skip("uint16array.js", () => {
  /* Ignored Test */
});

it.skip("uint32array-mutate.js", () => {
  /* Ignored Test */
});

it.skip("uint32array.js", () => {
  /* Ignored Test */
});

it.skip("uint8array-mutate.js", () => {
  /* Ignored Test */
});

it.skip("uint8array.js", () => {
  /* Ignored Test */
});

it.skip("uint8clampedarray-mutate.js", () => {
  /* Ignored Test */
});

it.skip("uint8clampedarray.js", () => {
  /* Ignored Test */
});

it(
  "yield-from-catch.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/yield-from-catch.js"),
);

it(
  "yield-from-finally.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/yield-from-finally.js"),
);

it(
  "yield-from-try.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/yield-from-try.js"),
);

it(
  "yield-star-from-catch.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/yield-star-from-catch.js"),
);

it(
  "yield-star-from-finally.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/yield-star-from-finally.js"),
);

it(
  "yield-star-from-try.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/yield-star-from-try.js"),
);

it(
  "yield-star.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/yield-star.js"),
);

it(
  "yield.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/for-of/yield.js"),
);
