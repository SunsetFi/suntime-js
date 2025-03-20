# static-js

Provides AST-based javascript execution, making an attempt to provide some semblance of security and sandboxing.

A spiritual successor to [static-eval](https://www.npmjs.com/package/static-eval), made to avoid the security pitfalls of the former.

## How is security provided?

The main shortcomming of static-eval is the direct evaluation of properties on objects. This project attempts to restrict that vector of attack by abstracting all constructs (both objects and functions) within the execution environment, and handling all property resolutions manually to prevent unintended properties (such as the object prototype) from getting into the system.

Because of this, interoping with the runtime is not as simple as in static-eval, as all inputs beyond simple scalars must be converted and wrapped for the static-js to access. However, this ensures a much more intentional exposure of your API surface to the scripting engine.

### Is this actually secure?

No idea. I haven't had this security tested or reviewed. While this approach gives me enough confidence to use on my own low-stakes projects, securely interpreting user-provided scripts is a thorny subject. Please do your due-dilligence before using this in any critical applications.

## What is supported

TODO
