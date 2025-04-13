// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Thaana`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v16.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x00060C,
    0x00061F,
    0x00FDF2,
    0x00FDFD
  ],
  ranges: [
    [0x00061B, 0x00061C],
    [0x000660, 0x000669],
    [0x000780, 0x0007B1]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Thaana}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Thaana}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Thaa}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Thaa}"
);
testPropertyEscapes(
  /^\p{scx=Thaana}+$/u,
  matchSymbols,
  "\\p{scx=Thaana}"
);
testPropertyEscapes(
  /^\p{scx=Thaa}+$/u,
  matchSymbols,
  "\\p{scx=Thaa}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00060B],
    [0x00060D, 0x00061A],
    [0x00061D, 0x00061E],
    [0x000620, 0x00065F],
    [0x00066A, 0x00077F],
    [0x0007B2, 0x00DBFF],
    [0x00E000, 0x00FDF1],
    [0x00FDF3, 0x00FDFC],
    [0x00FDFE, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Thaana}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Thaana}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Thaa}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Thaa}"
);
testPropertyEscapes(
  /^\P{scx=Thaana}+$/u,
  nonMatchSymbols,
  "\\P{scx=Thaana}"
);
testPropertyEscapes(
  /^\P{scx=Thaa}+$/u,
  nonMatchSymbols,
  "\\P{scx=Thaa}"
);
