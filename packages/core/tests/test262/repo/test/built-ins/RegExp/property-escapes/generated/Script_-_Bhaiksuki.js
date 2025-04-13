// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Bhaiksuki`
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
    [0x011C00, 0x011C08],
    [0x011C0A, 0x011C36],
    [0x011C38, 0x011C45],
    [0x011C50, 0x011C6C]
  ]
});
testPropertyEscapes(
  /^\p{Script=Bhaiksuki}+$/u,
  matchSymbols,
  "\\p{Script=Bhaiksuki}"
);
testPropertyEscapes(
  /^\p{Script=Bhks}+$/u,
  matchSymbols,
  "\\p{Script=Bhks}"
);
testPropertyEscapes(
  /^\p{sc=Bhaiksuki}+$/u,
  matchSymbols,
  "\\p{sc=Bhaiksuki}"
);
testPropertyEscapes(
  /^\p{sc=Bhks}+$/u,
  matchSymbols,
  "\\p{sc=Bhks}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x011C09,
    0x011C37
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x011BFF],
    [0x011C46, 0x011C4F],
    [0x011C6D, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Bhaiksuki}+$/u,
  nonMatchSymbols,
  "\\P{Script=Bhaiksuki}"
);
testPropertyEscapes(
  /^\P{Script=Bhks}+$/u,
  nonMatchSymbols,
  "\\P{Script=Bhks}"
);
testPropertyEscapes(
  /^\P{sc=Bhaiksuki}+$/u,
  nonMatchSymbols,
  "\\P{sc=Bhaiksuki}"
);
testPropertyEscapes(
  /^\P{sc=Bhks}+$/u,
  nonMatchSymbols,
  "\\P{sc=Bhks}"
);
