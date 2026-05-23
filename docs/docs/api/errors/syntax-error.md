# StaticJsSyntaxError

Thrown when source text cannot be parsed.

**Import**

```ts
import { StaticJsSyntaxError, type SyntaxErrorLocation } from "@suntime-js/core";
```

---

## Extends

`Error` → `StaticJsSyntaxError`

## When thrown

Thrown by `evaluateScript`, `evaluateScriptSync`, `evaluateExpression`, `evaluateExpressionSync`, and `evaluateModule` when the provided source is not valid JavaScript. The `loc` property gives the exact position of the parse error in the source text.

## Properties

### loc

Type: `SyntaxErrorLocation | null`

The source position of the syntax error, or `null` if the parser did not provide location information.

#### `SyntaxErrorLocation`

| Property | Type     | Description                                       |
| -------- | -------- | ------------------------------------------------- |
| `line`   | `number` | 1-based line number.                              |
| `column` | `number` | 0-based column index on the given line.           |
| `index`  | `number` | 0-based character index in the raw source string. |
