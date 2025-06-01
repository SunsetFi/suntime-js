# All abornal completions should be implemented as thrown values.

# Decision

Developing the chain of calls using retuned Completion objects has resulted in a glut of boilerplate code simply checking responses and returning them up the chain
if the response is not a NormalCompletion.

Since all abnornal completions want to be passed up the call stack and are only rarely handled, they will be implemented using try/catch to alleviate the requirement of implementing
ThrowCompletion handlers at every level for every operation.
