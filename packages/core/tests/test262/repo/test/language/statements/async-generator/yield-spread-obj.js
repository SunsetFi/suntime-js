// This file was procedurally generated from the following sources:
// - src/async-generators/yield-spread-obj.case
// - src/async-generators/default/async-declaration.template
/*---
description: Use yield value in a object spread position (Async generator Function declaration)
esid: prod-AsyncGeneratorDeclaration
features: [object-spread, async-iteration]
flags: [generated, async]
info: |
    Async Generator Function Definitions

    AsyncGeneratorDeclaration:
      async [no LineTerminator here] function * BindingIdentifier ( FormalParameters ) {
        AsyncGeneratorBody }


    Spread Properties

    PropertyDefinition[Yield]:
      (...)
      ...AssignmentExpression[In, ?Yield]

---*/


var callCount = 0;

async function *gen() {
  callCount += 1;
  yield {
      ...yield,
      y: 1,
      ...yield yield,
    };
}

var iter = gen();

iter.next();
iter.next({ x: 42 });
iter.next({ x: 'lol' });
var item = iter.next({ y: 39 });

item.then(({ done, value }) => {
  assert.sameValue(value.x, 42);
  assert.sameValue(value.y, 39);
  assert.sameValue(Object.keys(value).length, 2);
  assert.sameValue(done, false);
}).then($DONE, $DONE);

assert.sameValue(callCount, 1);
