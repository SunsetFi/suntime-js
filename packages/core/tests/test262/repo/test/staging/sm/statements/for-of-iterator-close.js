// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
// Tests that IteratorReturn is called when a for-of loop has an abrupt
// completion value during non-iterator code.

function test() {
    var returnCalled = 0;
    var returnCalledExpected = 0;
    var iterable = {};
    iterable[Symbol.iterator] = makeIterator({
        ret: function() {
            returnCalled++;
            return {};
        }
    });

    // break calls iter.return
    for (var x of iterable)
        break;
    assert.sameValue(returnCalled, ++returnCalledExpected);

    // throw in body calls iter.return
    assertThrowsValue(function() {
        for (var x of iterable)
            throw "in body";
    }, "in body");
    assert.sameValue(returnCalled, ++returnCalledExpected);

    // throw in lhs ref calls iter.return
    function throwlhs() {
        throw "in lhs";
    }
    assertThrowsValue(function() {
        for ((throwlhs().x) of iterable)
            continue;
    }, "in lhs");
    assert.sameValue(returnCalled, ++returnCalledExpected);

    // throw in iter.return doesn't re-call iter.return
    iterable[Symbol.iterator] = makeIterator({
        ret: function() {
            returnCalled++;
            throw "in iter.return";
        }
    });
    assertThrowsValue(function() {
        for (var x of iterable)
            break;
    }, "in iter.return");
    assert.sameValue(returnCalled, ++returnCalledExpected);

    // throw in iter.next doesn't call IteratorClose
    iterable[Symbol.iterator] = makeIterator({
        next: function() {
            throw "in next";
        }
    });
    assertThrowsValue(function() {
        for (var x of iterable)
            break;
    }, "in next");
    assert.sameValue(returnCalled, returnCalledExpected);

    // "return" must return an Object.
    iterable[Symbol.iterator] = makeIterator({
        ret: function() {
            returnCalled++;
            return 42;
        }
    });
    assertThrowsInstanceOf(function() {
        for (var x of iterable)
            break;
    }, TypeError);
    assert.sameValue(returnCalled, ++returnCalledExpected);

    // continue doesn't call iter.return for the loop it's continuing
    var i = 0;
    iterable[Symbol.iterator] = makeIterator({
        next: function() {
            return { done: i++ > 5 };
        },
        ret: function() {
            returnCalled++;
            return {};
        }
    });
    for (var x of iterable)
        continue;
    assert.sameValue(returnCalled, returnCalledExpected);

    // continue does call iter.return for loops it skips
    i = 0;
    L: do {
        for (var x of iterable)
            continue L;
    } while (false);
    assert.sameValue(returnCalled, ++returnCalledExpected);
}

test();

