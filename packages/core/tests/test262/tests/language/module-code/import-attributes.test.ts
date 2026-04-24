import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("import-attributes", () => {
  it(
    "allow-nlt-before-with.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/import-attributes/allow-nlt-before-with.js"),
  );
  it(
    "early-dup-attribute-key-export.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/import-attributes/early-dup-attribute-key-export.js"),
  );
  it(
    "early-dup-attribute-key-import-nobinding.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/module-code/import-attributes/early-dup-attribute-key-import-nobinding.js",
    ),
  );
  it(
    "early-dup-attribute-key-import-withbinding.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/module-code/import-attributes/early-dup-attribute-key-import-withbinding.js",
    ),
  );
  it(
    "import-attribute-empty.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/import-attributes/import-attribute-empty.js"),
  );
  it(
    "import-attribute-key-identifiername.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/module-code/import-attributes/import-attribute-key-identifiername.js",
    ),
  );
  it(
    "import-attribute-key-string-double.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/module-code/import-attributes/import-attribute-key-string-double.js",
    ),
  );
  it(
    "import-attribute-key-string-single.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/module-code/import-attributes/import-attribute-key-string-single.js",
    ),
  );
  it(
    "import-attribute-many.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/import-attributes/import-attribute-many.js"),
  );
  it(
    "import-attribute-newlines.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/import-attributes/import-attribute-newlines.js"),
  );
  it(
    "import-attribute-trlng-comma.js",
    { tags: ["known-failing"] },
    createTestHandler("language/module-code/import-attributes/import-attribute-trlng-comma.js"),
  );
  it(
    "import-attribute-value-string-double.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/module-code/import-attributes/import-attribute-value-string-double.js",
    ),
  );
  it(
    "import-attribute-value-string-single.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/module-code/import-attributes/import-attribute-value-string-single.js",
    ),
  );
});
