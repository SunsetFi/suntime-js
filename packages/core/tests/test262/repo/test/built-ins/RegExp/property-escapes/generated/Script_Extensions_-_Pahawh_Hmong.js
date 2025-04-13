// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Pahawh_Hmong`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v16.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x016B00, 0x016B45],
    [0x016B50, 0x016B59],
    [0x016B5B, 0x016B61],
    [0x016B63, 0x016B77],
    [0x016B7D, 0x016B8F]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Pahawh_Hmong}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Pahawh_Hmong}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Hmng}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Hmng}"
);
testPropertyEscapes(
  /^\p{scx=Pahawh_Hmong}+$/u,
  matchSymbols,
  "\\p{scx=Pahawh_Hmong}"
);
testPropertyEscapes(
  /^\p{scx=Hmng}+$/u,
  matchSymbols,
  "\\p{scx=Hmng}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x016B5A,
    0x016B62
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x016AFF],
    [0x016B46, 0x016B4F],
    [0x016B78, 0x016B7C],
    [0x016B90, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Pahawh_Hmong}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Pahawh_Hmong}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Hmng}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Hmng}"
);
testPropertyEscapes(
  /^\P{scx=Pahawh_Hmong}+$/u,
  nonMatchSymbols,
  "\\P{scx=Pahawh_Hmong}"
);
testPropertyEscapes(
  /^\P{scx=Hmng}+$/u,
  nonMatchSymbols,
  "\\P{scx=Hmng}"
);
