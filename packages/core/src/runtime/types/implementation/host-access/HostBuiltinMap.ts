import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../StaticJsObject.js";

export type HostBuiltinMap = ReadonlyMap<object, StaticJsObject>;

export function buildHostBuiltinMap(realm: StaticJsRealm): HostBuiltinMap {
  const i = realm.intrinsics;
  const map = new Map<object, StaticJsObject>();

  // Derived constructor references (not directly reachable as globals)
  const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor as Function;
  const GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor as Function;
  const AsyncGeneratorFunction = Object.getPrototypeOf(async function* () {})
    .constructor as Function;

  // Prototype instances for deriving iterator/generator prototypes
  const generatorInstance = (function* () {})();
  const asyncGeneratorInstance = (async function* () {})();
  const arrayIterator = [][Symbol.iterator]();
  const stringIterator = ""[Symbol.iterator]();
  const setIterator = new Set()[Symbol.iterator]();
  const mapIterator = new Map()[Symbol.iterator]();

  function setEntry(key: object, intrinsicName: keyof typeof i) {
    const value = i[intrinsicName];
    if (!value) {
      throw new Error(`Missing intrinsic for host builtin: ${intrinsicName}`);
    }
    map.set(key, value);
  }

  // Constructors
  setEntry(AggregateError, "AggregateError");
  setEntry(Array, "Array");
  setEntry(AsyncFunction, "AsyncFunction");
  setEntry(AsyncGeneratorFunction, "AsyncGeneratorFunction");
  setEntry(Boolean, "Boolean");
  setEntry(Error, "Error");
  setEntry(EvalError, "EvalError");
  setEntry(Function, "Function");
  setEntry(GeneratorFunction, "GeneratorFunction");
  setEntry(Iterator, "Iterator");
  setEntry(Map, "Map");
  setEntry(Number, "Number");
  setEntry(Object, "Object");
  setEntry(Promise, "Promise");
  setEntry(Proxy, "Proxy");
  setEntry(RangeError, "RangeError");
  setEntry(ReferenceError, "ReferenceError");
  setEntry(Set, "Set");
  setEntry(String, "String");
  setEntry(Symbol, "Symbol");
  setEntry(SyntaxError, "SyntaxError");
  setEntry(TypeError, "TypeError");
  setEntry(URIError, "URIError");

  // Non-constructor function globals
  setEntry(eval, "eval");
  setEntry(isFinite, "isFinite");
  setEntry(isNaN, "isNaN");
  setEntry(parseFloat, "parseFloat");
  setEntry(parseInt, "parseInt");

  // Plain-object globals
  setEntry(Math, "Math");
  setEntry(Reflect, "Reflect");

  // Prototypes — error hierarchy
  setEntry(Error.prototype, "Error.prototype");
  setEntry(AggregateError.prototype, "AggregateError.prototype");
  setEntry(EvalError.prototype, "EvalError.prototype");
  setEntry(RangeError.prototype, "RangeError.prototype");
  setEntry(ReferenceError.prototype, "ReferenceError.prototype");
  setEntry(SyntaxError.prototype, "SyntaxError.prototype");
  setEntry(TypeError.prototype, "TypeError.prototype");
  setEntry(URIError.prototype, "URIError.prototype");

  // Prototypes — standard constructors
  setEntry(Array.prototype, "Array.prototype");
  setEntry(Boolean.prototype, "Boolean.prototype");
  setEntry(Function.prototype, "Function.prototype");
  setEntry(Map.prototype, "Map.prototype");
  setEntry(Number.prototype, "Number.prototype");
  setEntry(Object.prototype, "Object.prototype");
  setEntry(Promise.prototype, "Promise.prototype");
  setEntry(Set.prototype, "Set.prototype");
  setEntry(String.prototype, "String.prototype");
  setEntry(Symbol.prototype, "Symbol.prototype");

  // Prototypes — async/generator families
  setEntry(AsyncFunction.prototype, "AsyncFunction.prototype");
  setEntry(AsyncGeneratorFunction.prototype, "AsyncGeneratorFunction.prototype");
  setEntry(
    Object.getPrototypeOf(Object.getPrototypeOf(asyncGeneratorInstance)),
    "AsyncGeneratorPrototype",
  );
  setEntry(
    Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(asyncGeneratorInstance))),
    "AsyncIteratorPrototype",
  );
  setEntry(GeneratorFunction.prototype, "GeneratorFunction.prototype");
  setEntry(Object.getPrototypeOf(Object.getPrototypeOf(generatorInstance)), "GeneratorPrototype");

  // Prototypes — Iterator and helpers
  setEntry(Iterator.prototype, "Iterator.prototype");
  setEntry(Object.getPrototypeOf([].values().map((x) => x)), "IteratorHelperPrototype");

  // Prototypes — iterator instances
  setEntry(Object.getPrototypeOf(arrayIterator), "ArrayIteratorPrototype");
  setEntry(Object.getPrototypeOf(mapIterator), "MapIteratorPrototype");
  setEntry(Object.getPrototypeOf(setIterator), "SetIteratorPrototype");
  setEntry(Object.getPrototypeOf(stringIterator), "StringIteratorPrototype");

  return map;
}
