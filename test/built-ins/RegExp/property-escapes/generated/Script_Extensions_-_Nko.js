// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Nko`
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
    0x00061B,
    0x00061F
  ],
  ranges: [
    [0x0007C0, 0x0007FA],
    [0x0007FD, 0x0007FF],
    [0x00FD3E, 0x00FD3F]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Nko}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Nko}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Nkoo}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Nkoo}"
);
testPropertyEscapes(
  /^\p{scx=Nko}+$/u,
  matchSymbols,
  "\\p{scx=Nko}"
);
testPropertyEscapes(
  /^\p{scx=Nkoo}+$/u,
  matchSymbols,
  "\\p{scx=Nkoo}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00060B],
    [0x00060D, 0x00061A],
    [0x00061C, 0x00061E],
    [0x000620, 0x0007BF],
    [0x0007FB, 0x0007FC],
    [0x000800, 0x00DBFF],
    [0x00E000, 0x00FD3D],
    [0x00FD40, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Nko}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Nko}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Nkoo}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Nkoo}"
);
testPropertyEscapes(
  /^\P{scx=Nko}+$/u,
  nonMatchSymbols,
  "\\P{scx=Nko}"
);
testPropertyEscapes(
  /^\P{scx=Nkoo}+$/u,
  nonMatchSymbols,
  "\\P{scx=Nkoo}"
);
