import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S12.12_A1_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/labeled/S12.12_A1_T1.js"),
);

it(
  "continue.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/labeled/continue.js"),
);

it(
  "cptn-break.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/labeled/cptn-break.js"),
);

it(
  "cptn-nrml.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/labeled/cptn-nrml.js"),
);

it(
  "decl-async-function.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/labeled/decl-async-function.js"),
);

it(
  "decl-async-generator.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/labeled/decl-async-generator.js"),
);

it(
  "decl-cls.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/labeled/decl-cls.js"),
);

it(
  "decl-const.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/labeled/decl-const.js"),
);

it(
  "decl-fun-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/labeled/decl-fun-strict.js"),
);

it(
  "decl-gen.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/labeled/decl-gen.js"),
);

it(
  "decl-let.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/labeled/decl-let.js"),
);

it(
  "let-array-with-newline.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/labeled/let-array-with-newline.js"),
);

it(
  "let-block-with-newline.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/labeled/let-block-with-newline.js"),
);

it(
  "let-identifier-with-newline.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/labeled/let-identifier-with-newline.js"),
);

it(
  "static-init-invalid-await.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/labeled/static-init-invalid-await.js"),
);

it.skip("tco.js", () => {
  /* Ignored Test */
});

it(
  "value-await-module-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/labeled/value-await-module-escaped.js"),
);

it(
  "value-await-module.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/labeled/value-await-module.js"),
);

it(
  "value-await-non-module-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/labeled/value-await-non-module-escaped.js"),
);

it(
  "value-await-non-module.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/labeled/value-await-non-module.js"),
);

it(
  "value-yield-non-strict-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/labeled/value-yield-non-strict-escaped.js"),
);

it(
  "value-yield-non-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/labeled/value-yield-non-strict.js"),
);

it(
  "value-yield-strict-escaped.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/labeled/value-yield-strict-escaped.js"),
);

it(
  "value-yield-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/labeled/value-yield-strict.js"),
);
