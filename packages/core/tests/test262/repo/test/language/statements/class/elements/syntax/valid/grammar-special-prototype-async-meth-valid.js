// This file was procedurally generated from the following sources:
// - src/class-elements/grammar-special-prototype-async-meth-valid.case
// - src/class-elements/syntax/valid/cls-decl-elements-valid-syntax.template
/*---
description: Async Methods can be named "prototype" (class declaration)
esid: prod-ClassElement
features: [async-functions, class]
flags: [generated]
includes: [propertyHelper.js]
info: |
    Runtime Semantics: ClassDefinitionEvaluation

    ClassTail : ClassHeritage_opt { ClassBody_opt }

    [...]
    6. Let proto be OrdinaryObjectCreate(protoParent).
    [...]
    14. Perform MakeConstructor(F, false, proto).
    [...]
    20. For each ClassElement m in order from methods, do
        a. If IsStatic of m is false, then
            i. Let status be PropertyDefinitionEvaluation of m with arguments proto and false.
    [...]

    Runtime Semantics: PropertyDefinitionEvaluation

    With parameters object and enumerable.

    AsyncMethod : async PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }

    [...]
    8. Let desc be the PropertyDescriptor { [[Value]]: closure, [[Writable]]: true, [[Enumerable]]: enumerable, [[Configurable]]: true }.
    9. Return ? DefinePropertyOrThrow(object, propKey, desc).

---*/


class C {
  async prototype() {}
}

assert(C.hasOwnProperty('prototype'));
assert(C.prototype.hasOwnProperty('prototype'));
assert.notSameValue(C.prototype.prototype, C.prototype);
verifyProperty(C.prototype, 'prototype', {
    writable: true,
    enumerable: false,
    configurable: true,
});
