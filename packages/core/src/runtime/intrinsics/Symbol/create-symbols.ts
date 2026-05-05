import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { typedEntries } from "../../../utils/typed-entries.js";
import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { StaticJsSymbolImpl } from "../../types/implementation/primitives/StaticJsSymbolImpl.js";
import type { IntrinsicsRecord, IntrinsicSymbols } from "../intrinsics.js";

const intrinsicSymbols: Record<keyof IntrinsicSymbols, symbol | undefined> = {
  // TODO: Implement in engine.
  // May be undefined for older engines.
  asyncDispose: Symbol.asyncDispose,

  // TODO: Implement in engine.
  asyncIterator: Symbol.asyncIterator,

  // TODO: Implement in engine.
  // May be undefined for older engines.
  dispose: Symbol.dispose,

  hasInstance: Symbol.hasInstance,

  isConcatSpreadable: Symbol.isConcatSpreadable,

  iterator: Symbol.iterator,

  // TODO: Implement in engine.
  match: Symbol.match,

  // TODO: Implement in engine.
  matchAll: Symbol.matchAll,

  // TODO: Implement in engine.
  // Note: native symbol may not exist in older engines.
  // observable: Symbol.observable,

  // TODO: Implement in engine.
  replace: Symbol.replace,

  // TODO: Implement in engine.
  search: Symbol.search,

  species: Symbol.species,

  // TODO: Implement in engine.
  split: Symbol.split,

  toPrimitive: Symbol.toPrimitive,

  // TODO: Implement in engine.
  toStringTag: Symbol.toStringTag,

  // TODO: Implement in engine.
  unscopables: Symbol.unscopables,
};

export function* createIntrinsicSymbols(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  for (const [name, symbol] of typedEntries(intrinsicSymbols)) {
    if (!symbol) {
      continue;
    }

    const realmSymbol = new StaticJsSymbolImpl(realm, symbol, intrinsics["Symbol.prototype"]);
    intrinsics[`Symbol.${name}`] = realmSymbol;
  }
}
