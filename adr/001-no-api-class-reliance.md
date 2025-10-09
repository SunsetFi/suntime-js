# No Class Reliance for public APIs

## Decisions

- Do not export any classes or class constructors
- Do not rely on any class instance checks for public APIs in the codebase (IE, with instanceof)
- Internal classes may be used, but if exported, they should be wrapped behind:
  - An exported interface or type
  - An exported factory function

## Justification

Classes are particularly problematic when it comes to libraries that want to accept third party contributions or allow plugin development.

With classes, the following limitations apply:

- If more than one version of static-js ends up in the same runtime, classes from one version will not resolve to instances of another when using 'instaceof'
- If more than one version of static-js ends up in the same typescript project, typescript will (correctly) indicate one is not assignable to the other.

Since we intend to accept plugins in the future, we need to develop this project in a way where such issues will not affect us.
