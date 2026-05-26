import { StaticJsRealm } from "@suntime-js/core";
import { describe, expect, it } from "vitest";

import { serialize } from "./serialize";

const realm = new StaticJsRealm();

describe("serialize", () => {
  it("renders null as 'null'", () => {
    expect(serialize(realm.types.null)).toBe("null");
  });

  it("renders undefined as 'undefined'", () => {
    expect(serialize(realm.types.undefined)).toBe("undefined");
  });

  it("renders numbers via String()", () => {
    expect(serialize(realm.types.number(42))).toBe("42");
    expect(serialize(realm.types.number(NaN))).toBe("NaN");
    expect(serialize(realm.types.number(Infinity))).toBe("Infinity");
  });

  it("renders booleans via String()", () => {
    expect(serialize(realm.types.boolean(true))).toBe("true");
    expect(serialize(realm.types.boolean(false))).toBe("false");
  });

  it("renders strings via String()", () => {
    expect(serialize(realm.types.string("hello"))).toBe("hello");
  });

  it("renders plain objects as JSON", () => {
    expect(
      serialize(
        realm.types.object({
          a: {
            value: realm.types.number(1),
            enumerable: true,
          },
        }),
      ),
    ).toBe('{"a":1}');
  });

  it("renders arrays as JSON", () => {
    expect(
      serialize(
        realm.types.array([realm.types.number(1), realm.types.number(2), realm.types.number(3)]),
      ),
    ).toBe("[1,2,3]");
  });

  it("falls back to String() for non-serializable objects", () => {
    const circular = realm.types.object();
    circular.setSync("self", circular);
    expect(serialize(circular)).toBe("[object Object]");
  });
});
