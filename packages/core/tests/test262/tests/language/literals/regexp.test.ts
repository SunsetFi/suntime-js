import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("regexp", () => {
  it(
    "7.8.5-1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/7.8.5-1.js"),
  );
  it(
    "7.8.5-1gs.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/7.8.5-1gs.js"),
  );
  it(
    "7.8.5-2gs.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/7.8.5-2gs.js"),
  );
  it(
    "S7.8.5_A1.1_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A1.1_T1.js"),
  );
  it(
    "S7.8.5_A1.1_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A1.1_T2.js"),
  );
  it(
    "S7.8.5_A1.2_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A1.2_T1.js"),
  );
  it(
    "S7.8.5_A1.2_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A1.2_T2.js"),
  );
  it(
    "S7.8.5_A1.2_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A1.2_T3.js"),
  );
  it(
    "S7.8.5_A1.2_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A1.2_T4.js"),
  );
  it(
    "S7.8.5_A1.3_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A1.3_T1.js"),
  );
  it(
    "S7.8.5_A1.3_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A1.3_T2.js"),
  );
  it(
    "S7.8.5_A1.3_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A1.3_T3.js"),
  );
  it(
    "S7.8.5_A1.3_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A1.3_T4.js"),
  );
  it(
    "S7.8.5_A1.3_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A1.3_T5.js"),
  );
  it(
    "S7.8.5_A1.3_T6.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A1.3_T6.js"),
  );
  it(
    "S7.8.5_A1.4_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A1.4_T1.js"),
  );
  it(
    "S7.8.5_A1.4_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A1.4_T2.js"),
  );
  it(
    "S7.8.5_A1.5_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A1.5_T1.js"),
  );
  it(
    "S7.8.5_A1.5_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A1.5_T2.js"),
  );
  it(
    "S7.8.5_A1.5_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A1.5_T3.js"),
  );
  it(
    "S7.8.5_A1.5_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A1.5_T4.js"),
  );
  it(
    "S7.8.5_A1.5_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A1.5_T5.js"),
  );
  it(
    "S7.8.5_A1.5_T6.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A1.5_T6.js"),
  );
  it(
    "S7.8.5_A2.1_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A2.1_T1.js"),
  );
  it(
    "S7.8.5_A2.1_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A2.1_T2.js"),
  );
  it(
    "S7.8.5_A2.2_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A2.2_T1.js"),
  );
  it(
    "S7.8.5_A2.2_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A2.2_T2.js"),
  );
  it(
    "S7.8.5_A2.3_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A2.3_T1.js"),
  );
  it(
    "S7.8.5_A2.3_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A2.3_T2.js"),
  );
  it(
    "S7.8.5_A2.3_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A2.3_T3.js"),
  );
  it(
    "S7.8.5_A2.3_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A2.3_T4.js"),
  );
  it(
    "S7.8.5_A2.3_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A2.3_T5.js"),
  );
  it(
    "S7.8.5_A2.3_T6.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A2.3_T6.js"),
  );
  it(
    "S7.8.5_A2.4_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A2.4_T1.js"),
  );
  it(
    "S7.8.5_A2.4_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A2.4_T2.js"),
  );
  it(
    "S7.8.5_A2.5_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A2.5_T1.js"),
  );
  it(
    "S7.8.5_A2.5_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A2.5_T2.js"),
  );
  it(
    "S7.8.5_A2.5_T3.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A2.5_T3.js"),
  );
  it(
    "S7.8.5_A2.5_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A2.5_T4.js"),
  );
  it(
    "S7.8.5_A2.5_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A2.5_T5.js"),
  );
  it(
    "S7.8.5_A2.5_T6.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A2.5_T6.js"),
  );
  it(
    "S7.8.5_A3.1_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A3.1_T1.js"),
  );
  it(
    "S7.8.5_A3.1_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A3.1_T2.js"),
  );
  it(
    "S7.8.5_A3.1_T3.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A3.1_T3.js"),
  );
  it(
    "S7.8.5_A3.1_T4.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A3.1_T4.js"),
  );
  it(
    "S7.8.5_A3.1_T5.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A3.1_T5.js"),
  );
  it(
    "S7.8.5_A3.1_T6.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A3.1_T6.js"),
  );
  it(
    "S7.8.5_A4.1.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A4.1.js"),
  );
  it(
    "S7.8.5_A4.2.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/S7.8.5_A4.2.js"),
  );
  it(
    "early-err-arithmetic-modifiers-add-remove-i.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/early-err-arithmetic-modifiers-add-remove-i.js"),
  );
  it(
    "early-err-arithmetic-modifiers-add-remove-m.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/early-err-arithmetic-modifiers-add-remove-m.js"),
  );
  it(
    "early-err-arithmetic-modifiers-add-remove-multi-duplicate.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-add-remove-multi-duplicate.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-add-remove-s-escape.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-add-remove-s-escape.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-add-remove-s.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/early-err-arithmetic-modifiers-add-remove-s.js"),
  );
  it(
    "early-err-arithmetic-modifiers-both-empty.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/early-err-arithmetic-modifiers-both-empty.js"),
  );
  it(
    "early-err-arithmetic-modifiers-code-point-repeat-i-1.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-code-point-repeat-i-1.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-code-point-repeat-i-2.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-code-point-repeat-i-2.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-no-colon-1.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/early-err-arithmetic-modifiers-no-colon-1.js"),
  );
  it(
    "early-err-arithmetic-modifiers-no-colon-2.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/early-err-arithmetic-modifiers-no-colon-2.js"),
  );
  it(
    "early-err-arithmetic-modifiers-no-colon-3.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/early-err-arithmetic-modifiers-no-colon-3.js"),
  );
  it(
    "early-err-arithmetic-modifiers-other-code-point-arbitrary.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-other-code-point-arbitrary.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-other-code-point-combining-i.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-other-code-point-combining-i.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-other-code-point-combining-m.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-other-code-point-combining-m.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-other-code-point-combining-s.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-other-code-point-combining-s.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-other-code-point-d.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-other-code-point-d.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-other-code-point-g.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-other-code-point-g.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-other-code-point-non-display-1.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-other-code-point-non-display-1.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-other-code-point-non-display-2.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-other-code-point-non-display-2.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-other-code-point-non-flag.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-other-code-point-non-flag.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-other-code-point-u.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-other-code-point-u.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-other-code-point-uppercase-I.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-other-code-point-uppercase-I.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-other-code-point-y.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-other-code-point-y.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-other-code-point-zwj.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-other-code-point-zwj.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-other-code-point-zwnbsp.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-other-code-point-zwnbsp.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-other-code-point-zwnj.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-other-code-point-zwnj.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-add-remove-i.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-add-remove-i.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-add-remove-m.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-add-remove-m.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-add-remove-multi-duplicate.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-add-remove-multi-duplicate.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-add-remove-s-escape.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-add-remove-s-escape.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-add-remove-s.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-add-remove-s.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-code-point-repeat-i-1.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-code-point-repeat-i-1.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-code-point-repeat-i-2.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-code-point-repeat-i-2.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-other-code-point-arbitrary.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-other-code-point-arbitrary.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-other-code-point-combining-i.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-other-code-point-combining-i.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-other-code-point-combining-m.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-other-code-point-combining-m.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-other-code-point-combining-s.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-other-code-point-combining-s.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-other-code-point-d.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-other-code-point-d.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-other-code-point-g.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-other-code-point-g.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-other-code-point-non-display-1.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-other-code-point-non-display-1.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-other-code-point-non-display-2.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-other-code-point-non-display-2.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-other-code-point-non-flag.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-other-code-point-non-flag.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-other-code-point-u.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-other-code-point-u.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-other-code-point-uppercase-I.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-other-code-point-uppercase-I.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-other-code-point-y.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-other-code-point-y.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-other-code-point-zwj.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-other-code-point-zwj.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-other-code-point-zwnbsp.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-other-code-point-zwnbsp.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-other-code-point-zwnj.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-other-code-point-zwnj.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-should-not-case-fold-i.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-should-not-case-fold-i.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-should-not-case-fold-m.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-should-not-case-fold-m.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-should-not-case-fold-s.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-should-not-case-fold-s.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-should-not-unicode-case-fold-i.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-should-not-unicode-case-fold-i.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-reverse-should-not-unicode-case-fold-s.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-reverse-should-not-unicode-case-fold-s.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-should-not-case-fold-i.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-should-not-case-fold-i.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-should-not-case-fold-m.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-should-not-case-fold-m.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-should-not-case-fold-s.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-should-not-case-fold-s.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-should-not-unicode-case-fold-i.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-should-not-unicode-case-fold-i.js",
    ),
  );
  it(
    "early-err-arithmetic-modifiers-should-not-unicode-case-fold-s.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-arithmetic-modifiers-should-not-unicode-case-fold-s.js",
    ),
  );
  it(
    "early-err-bad-flag.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/early-err-bad-flag.js"),
  );
  it(
    "early-err-dup-flag.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/early-err-dup-flag.js"),
  );
  it(
    "early-err-flags-unicode-escape.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/early-err-flags-unicode-escape.js"),
  );
  it(
    "early-err-modifiers-code-point-repeat-i-1.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/early-err-modifiers-code-point-repeat-i-1.js"),
  );
  it(
    "early-err-modifiers-code-point-repeat-i-2.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/early-err-modifiers-code-point-repeat-i-2.js"),
  );
  it(
    "early-err-modifiers-other-code-point-arbitrary.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/early-err-modifiers-other-code-point-arbitrary.js"),
  );
  it(
    "early-err-modifiers-other-code-point-combining-i.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-modifiers-other-code-point-combining-i.js",
    ),
  );
  it(
    "early-err-modifiers-other-code-point-combining-m.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-modifiers-other-code-point-combining-m.js",
    ),
  );
  it(
    "early-err-modifiers-other-code-point-combining-s.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-modifiers-other-code-point-combining-s.js",
    ),
  );
  it(
    "early-err-modifiers-other-code-point-d.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/early-err-modifiers-other-code-point-d.js"),
  );
  it(
    "early-err-modifiers-other-code-point-g.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/early-err-modifiers-other-code-point-g.js"),
  );
  it(
    "early-err-modifiers-other-code-point-non-display-1.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-modifiers-other-code-point-non-display-1.js",
    ),
  );
  it(
    "early-err-modifiers-other-code-point-non-display-2.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-modifiers-other-code-point-non-display-2.js",
    ),
  );
  it(
    "early-err-modifiers-other-code-point-non-flag.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/early-err-modifiers-other-code-point-non-flag.js"),
  );
  it(
    "early-err-modifiers-other-code-point-u.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/early-err-modifiers-other-code-point-u.js"),
  );
  it(
    "early-err-modifiers-other-code-point-uppercase-I.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-modifiers-other-code-point-uppercase-I.js",
    ),
  );
  it(
    "early-err-modifiers-other-code-point-y.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/early-err-modifiers-other-code-point-y.js"),
  );
  it(
    "early-err-modifiers-other-code-point-zwj.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/early-err-modifiers-other-code-point-zwj.js"),
  );
  it(
    "early-err-modifiers-other-code-point-zwnbsp.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/early-err-modifiers-other-code-point-zwnbsp.js"),
  );
  it(
    "early-err-modifiers-other-code-point-zwnj.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/early-err-modifiers-other-code-point-zwnj.js"),
  );
  it(
    "early-err-modifiers-should-not-case-fold-i.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/early-err-modifiers-should-not-case-fold-i.js"),
  );
  it(
    "early-err-modifiers-should-not-case-fold-m.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/early-err-modifiers-should-not-case-fold-m.js"),
  );
  it(
    "early-err-modifiers-should-not-case-fold-s.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/early-err-modifiers-should-not-case-fold-s.js"),
  );
  it(
    "early-err-modifiers-should-not-unicode-case-fold-i.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-modifiers-should-not-unicode-case-fold-i.js",
    ),
  );
  it(
    "early-err-modifiers-should-not-unicode-case-fold-s.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-modifiers-should-not-unicode-case-fold-s.js",
    ),
  );
  it(
    "early-err-modifiers-should-not-unicode-escape-i.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-modifiers-should-not-unicode-escape-i.js",
    ),
  );
  it(
    "early-err-modifiers-should-not-unicode-escape-m.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-modifiers-should-not-unicode-escape-m.js",
    ),
  );
  it(
    "early-err-modifiers-should-not-unicode-escape-s.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "language/literals/regexp/early-err-modifiers-should-not-unicode-escape-s.js",
    ),
  );
  it(
    "early-err-pattern.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/early-err-pattern.js"),
  );
  it(
    "inequality.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/inequality.js"),
  );
  it(
    "invalid-braced-quantifier-exact.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/invalid-braced-quantifier-exact.js"),
  );
  it(
    "invalid-braced-quantifier-lower.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/invalid-braced-quantifier-lower.js"),
  );
  it(
    "invalid-braced-quantifier-range.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/invalid-braced-quantifier-range.js"),
  );
  it(
    "invalid-optional-lookbehind.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/invalid-optional-lookbehind.js"),
  );
  it(
    "invalid-optional-negative-lookbehind.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/invalid-optional-negative-lookbehind.js"),
  );
  it(
    "invalid-range-lookbehind.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/invalid-range-lookbehind.js"),
  );
  it(
    "invalid-range-negative-lookbehind.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/invalid-range-negative-lookbehind.js"),
  );
  it(
    "lastIndex.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/lastIndex.js"),
  );
  it(
    "mongolian-vowel-separator-eval.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/mongolian-vowel-separator-eval.js"),
  );
  it(
    "mongolian-vowel-separator.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/mongolian-vowel-separator.js"),
  );
  describe("named-groups", () => {
    it(
      "forward-reference.js",
      { tags: ["known-failing"] },
      createTestHandler("language/literals/regexp/named-groups/forward-reference.js"),
    );
    it(
      "invalid-dangling-groupname-2-u.js",
      { tags: ["known-failing"] },
      createTestHandler("language/literals/regexp/named-groups/invalid-dangling-groupname-2-u.js"),
    );
    it(
      "invalid-dangling-groupname-2.js",
      { tags: ["known-failing"] },
      createTestHandler("language/literals/regexp/named-groups/invalid-dangling-groupname-2.js"),
    );
    it(
      "invalid-dangling-groupname-3-u.js",
      { tags: ["known-failing"] },
      createTestHandler("language/literals/regexp/named-groups/invalid-dangling-groupname-3-u.js"),
    );
    it(
      "invalid-dangling-groupname-3.js",
      { tags: ["known-failing"] },
      createTestHandler("language/literals/regexp/named-groups/invalid-dangling-groupname-3.js"),
    );
    it(
      "invalid-dangling-groupname-4-u.js",
      { tags: ["known-failing"] },
      createTestHandler("language/literals/regexp/named-groups/invalid-dangling-groupname-4-u.js"),
    );
    it(
      "invalid-dangling-groupname-4.js",
      { tags: ["known-failing"] },
      createTestHandler("language/literals/regexp/named-groups/invalid-dangling-groupname-4.js"),
    );
    it(
      "invalid-dangling-groupname-5.js",
      { tags: ["known-failing"] },
      createTestHandler("language/literals/regexp/named-groups/invalid-dangling-groupname-5.js"),
    );
    it(
      "invalid-dangling-groupname-u.js",
      { tags: ["known-failing"] },
      createTestHandler("language/literals/regexp/named-groups/invalid-dangling-groupname-u.js"),
    );
    it(
      "invalid-dangling-groupname-without-group-u.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-dangling-groupname-without-group-u.js",
      ),
    );
    it(
      "invalid-dangling-groupname.js",
      { tags: ["known-failing"] },
      createTestHandler("language/literals/regexp/named-groups/invalid-dangling-groupname.js"),
    );
    it(
      "invalid-duplicate-groupspecifier-2-u.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-duplicate-groupspecifier-2-u.js",
      ),
    );
    it(
      "invalid-duplicate-groupspecifier-2.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-duplicate-groupspecifier-2.js",
      ),
    );
    it(
      "invalid-duplicate-groupspecifier-u.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-duplicate-groupspecifier-u.js",
      ),
    );
    it(
      "invalid-duplicate-groupspecifier.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-duplicate-groupspecifier.js",
      ),
    );
    it(
      "invalid-empty-groupspecifier-u.js",
      { tags: ["known-failing"] },
      createTestHandler("language/literals/regexp/named-groups/invalid-empty-groupspecifier-u.js"),
    );
    it(
      "invalid-empty-groupspecifier.js",
      { tags: ["known-failing"] },
      createTestHandler("language/literals/regexp/named-groups/invalid-empty-groupspecifier.js"),
    );
    it(
      "invalid-identity-escape-in-capture-u.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-identity-escape-in-capture-u.js",
      ),
    );
    it(
      "invalid-incomplete-groupname-2-u.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-incomplete-groupname-2-u.js",
      ),
    );
    it(
      "invalid-incomplete-groupname-2.js",
      { tags: ["known-failing"] },
      createTestHandler("language/literals/regexp/named-groups/invalid-incomplete-groupname-2.js"),
    );
    it(
      "invalid-incomplete-groupname-3-u.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-incomplete-groupname-3-u.js",
      ),
    );
    it(
      "invalid-incomplete-groupname-3.js",
      { tags: ["known-failing"] },
      createTestHandler("language/literals/regexp/named-groups/invalid-incomplete-groupname-3.js"),
    );
    it(
      "invalid-incomplete-groupname-4.js",
      { tags: ["known-failing"] },
      createTestHandler("language/literals/regexp/named-groups/invalid-incomplete-groupname-4.js"),
    );
    it(
      "invalid-incomplete-groupname-5.js",
      { tags: ["known-failing"] },
      createTestHandler("language/literals/regexp/named-groups/invalid-incomplete-groupname-5.js"),
    );
    it(
      "invalid-incomplete-groupname-6.js",
      { tags: ["known-failing"] },
      createTestHandler("language/literals/regexp/named-groups/invalid-incomplete-groupname-6.js"),
    );
    it(
      "invalid-incomplete-groupname-u.js",
      { tags: ["known-failing"] },
      createTestHandler("language/literals/regexp/named-groups/invalid-incomplete-groupname-u.js"),
    );
    it(
      "invalid-incomplete-groupname-without-group-2-u.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-incomplete-groupname-without-group-2-u.js",
      ),
    );
    it(
      "invalid-incomplete-groupname-without-group-3-u.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-incomplete-groupname-without-group-3-u.js",
      ),
    );
    it(
      "invalid-incomplete-groupname-without-group-u.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-incomplete-groupname-without-group-u.js",
      ),
    );
    it(
      "invalid-incomplete-groupname.js",
      { tags: ["known-failing"] },
      createTestHandler("language/literals/regexp/named-groups/invalid-incomplete-groupname.js"),
    );
    it(
      "invalid-lone-surrogate-groupname.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-lone-surrogate-groupname.js",
      ),
    );
    it(
      "invalid-non-id-continue-groupspecifier-4-u.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-non-id-continue-groupspecifier-4-u.js",
      ),
    );
    it(
      "invalid-non-id-continue-groupspecifier-4.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-non-id-continue-groupspecifier-4.js",
      ),
    );
    it(
      "invalid-non-id-continue-groupspecifier.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-non-id-continue-groupspecifier.js",
      ),
    );
    it(
      "invalid-non-id-start-groupspecifier-2-u.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-non-id-start-groupspecifier-2-u.js",
      ),
    );
    it(
      "invalid-non-id-start-groupspecifier-2.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-non-id-start-groupspecifier-2.js",
      ),
    );
    it(
      "invalid-non-id-start-groupspecifier-3.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-non-id-start-groupspecifier-3.js",
      ),
    );
    it(
      "invalid-non-id-start-groupspecifier-4-u.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-non-id-start-groupspecifier-4-u.js",
      ),
    );
    it(
      "invalid-non-id-start-groupspecifier-4.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-non-id-start-groupspecifier-4.js",
      ),
    );
    it(
      "invalid-non-id-start-groupspecifier-5-u.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-non-id-start-groupspecifier-5-u.js",
      ),
    );
    it(
      "invalid-non-id-start-groupspecifier-5.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-non-id-start-groupspecifier-5.js",
      ),
    );
    it(
      "invalid-non-id-start-groupspecifier-6.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-non-id-start-groupspecifier-6.js",
      ),
    );
    it(
      "invalid-non-id-start-groupspecifier-7.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-non-id-start-groupspecifier-7.js",
      ),
    );
    it(
      "invalid-non-id-start-groupspecifier-8-u.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-non-id-start-groupspecifier-8-u.js",
      ),
    );
    it(
      "invalid-non-id-start-groupspecifier-8.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-non-id-start-groupspecifier-8.js",
      ),
    );
    it(
      "invalid-non-id-start-groupspecifier-9-u.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-non-id-start-groupspecifier-9-u.js",
      ),
    );
    it(
      "invalid-non-id-start-groupspecifier-u.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-non-id-start-groupspecifier-u.js",
      ),
    );
    it(
      "invalid-non-id-start-groupspecifier.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-non-id-start-groupspecifier.js",
      ),
    );
    it(
      "invalid-numeric-groupspecifier-u.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-numeric-groupspecifier-u.js",
      ),
    );
    it(
      "invalid-numeric-groupspecifier.js",
      { tags: ["known-failing"] },
      createTestHandler("language/literals/regexp/named-groups/invalid-numeric-groupspecifier.js"),
    );
    it(
      "invalid-punctuator-starting-groupspecifier-u.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-punctuator-starting-groupspecifier-u.js",
      ),
    );
    it(
      "invalid-punctuator-starting-groupspecifier.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-punctuator-starting-groupspecifier.js",
      ),
    );
    it(
      "invalid-punctuator-within-groupspecifier-u.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-punctuator-within-groupspecifier-u.js",
      ),
    );
    it(
      "invalid-punctuator-within-groupspecifier.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-punctuator-within-groupspecifier.js",
      ),
    );
    it(
      "invalid-unterminated-groupspecifier-u.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-unterminated-groupspecifier-u.js",
      ),
    );
    it(
      "invalid-unterminated-groupspecifier.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "language/literals/regexp/named-groups/invalid-unterminated-groupspecifier.js",
      ),
    );
  });
  it(
    "regexp-first-char-no-line-separator.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/regexp-first-char-no-line-separator.js"),
  );
  it(
    "regexp-first-char-no-paragraph-separator.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/regexp-first-char-no-paragraph-separator.js"),
  );
  it(
    "regexp-source-char-no-line-separator.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/regexp-source-char-no-line-separator.js"),
  );
  it(
    "regexp-source-char-no-paragraph-separator.js",
    { tags: ["known-passing"] },
    createTestHandler("language/literals/regexp/regexp-source-char-no-paragraph-separator.js"),
  );
  it(
    "u-astral-char-class-invert.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-astral-char-class-invert.js"),
  );
  it(
    "u-astral.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-astral.js"),
  );
  it(
    "u-case-mapping.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-case-mapping.js"),
  );
  it(
    "u-invalid-class-escape.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-invalid-class-escape.js"),
  );
  it(
    "u-invalid-extended-pattern-char.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-invalid-extended-pattern-char.js"),
  );
  it(
    "u-invalid-identity-escape.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-invalid-identity-escape.js"),
  );
  it(
    "u-invalid-legacy-octal-escape.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-invalid-legacy-octal-escape.js"),
  );
  it(
    "u-invalid-non-empty-class-ranges-no-dash-a.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-invalid-non-empty-class-ranges-no-dash-a.js"),
  );
  it(
    "u-invalid-non-empty-class-ranges-no-dash-ab.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-invalid-non-empty-class-ranges-no-dash-ab.js"),
  );
  it(
    "u-invalid-non-empty-class-ranges-no-dash-b.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-invalid-non-empty-class-ranges-no-dash-b.js"),
  );
  it(
    "u-invalid-non-empty-class-ranges.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-invalid-non-empty-class-ranges.js"),
  );
  it(
    "u-invalid-oob-decimal-escape.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-invalid-oob-decimal-escape.js"),
  );
  it(
    "u-invalid-optional-lookahead.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-invalid-optional-lookahead.js"),
  );
  it(
    "u-invalid-optional-lookbehind.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-invalid-optional-lookbehind.js"),
  );
  it(
    "u-invalid-optional-negative-lookahead.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-invalid-optional-negative-lookahead.js"),
  );
  it(
    "u-invalid-optional-negative-lookbehind.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-invalid-optional-negative-lookbehind.js"),
  );
  it(
    "u-invalid-range-lookahead.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-invalid-range-lookahead.js"),
  );
  it(
    "u-invalid-range-lookbehind.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-invalid-range-lookbehind.js"),
  );
  it(
    "u-invalid-range-negative-lookahead.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-invalid-range-negative-lookahead.js"),
  );
  it(
    "u-invalid-range-negative-lookbehind.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-invalid-range-negative-lookbehind.js"),
  );
  it(
    "u-null-character-escape.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-null-character-escape.js"),
  );
  it(
    "u-surrogate-pairs-atom-char-class.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-surrogate-pairs-atom-char-class.js"),
  );
  it(
    "u-surrogate-pairs-atom-dot.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-surrogate-pairs-atom-dot.js"),
  );
  it(
    "u-surrogate-pairs-atom-escape-char-class.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-surrogate-pairs-atom-escape-char-class.js"),
  );
  it(
    "u-surrogate-pairs-atom-escape-decimal.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-surrogate-pairs-atom-escape-decimal.js"),
  );
  it(
    "u-surrogate-pairs.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-surrogate-pairs.js"),
  );
  it(
    "u-unicode-esc-bounds.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-unicode-esc-bounds.js"),
  );
  it(
    "u-unicode-esc-non-hex.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-unicode-esc-non-hex.js"),
  );
  it(
    "u-unicode-esc.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/u-unicode-esc.js"),
  );
  it(
    "unicode-escape-nls-err.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/unicode-escape-nls-err.js"),
  );
  it(
    "y-assertion-start.js",
    { tags: ["known-failing"] },
    createTestHandler("language/literals/regexp/y-assertion-start.js"),
  );
});
