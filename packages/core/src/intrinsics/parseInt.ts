import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { toInt32 } from "#algorithms/to-int-32.js";
import { toString } from "#algorithms/to-string.js";
import { Q } from "#evaluator/completions/Q.js";
import { StaticJsNativeFunctionImpl } from "#types/implementation/functions/StaticJsNativeFunctionImpl.js";

import type { IntrinsicPropertyDeclaration } from "./apply-intrinsic-properties.js";
import type { IntrinsicsRecord } from "./intrinsics.js";

export function* createParseInt(realm: StaticJsRealm, intrinsics: IntrinsicsRecord) {
  const func = StaticJsNativeFunctionImpl.create(
    realm,
    "parseInt",
    function* (_thisArg, string = realm.types.undefined, radix = realm.types.undefined) {
      const inputString = yield* Q(toString.js(string));

      let trimmedString = inputString.trimStart();

      let sign = 1;
      if (trimmedString.startsWith("-")) {
        sign = -1;
      }

      if (trimmedString.startsWith("-") || trimmedString.startsWith("+")) {
        trimmedString = trimmedString.slice(1);
      }

      let radixMV = Math.round(yield* toInt32.js(radix));
      let stripPrefix = true;
      if (radixMV !== 0) {
        if (radixMV < 2 || radixMV > 36) {
          return realm.types.NaN;
        }
        if (radixMV !== 16) {
          stripPrefix = false;
        }
      } else {
        radixMV = 10;
      }

      if (stripPrefix) {
        if (trimmedString.length > 2 && trimmedString.slice(0, 2).toLowerCase() === "0x") {
          trimmedString = trimmedString.slice(2);
          radixMV = 16;
        }
      }

      let end = trimmedString.length;
      const digits = getDigits(radixMV);
      for (let i = 0; i < trimmedString.length; i++) {
        if (!digits.includes(trimmedString[i].toUpperCase())) {
          end = i;
          break;
        }
      }

      const numberString = trimmedString.slice(0, end);
      if (numberString.length === 0) {
        return realm.types.NaN;
      }

      const mathInt = parseInt(numberString, radixMV);
      if (mathInt === 0) {
        if (sign === -1) {
          return realm.types.number(-0);
        }
        return realm.types.number(0);
      }

      return realm.types.number(sign * mathInt);
    },
    { length: 2 },
  );

  intrinsics["parseInt"] = func;
}

export const globalObjectParseIntDeclaration: IntrinsicPropertyDeclaration = {
  key: "parseInt",
  writable: true,
  configurable: true,
  value: (realm) => realm.intrinsics.parseInt,
};

function getDigits(base: number) {
  return "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(0, base);
}
// let radixMVDigits = [
//   "01",
//   "012",
//   "0123",
//   "01234",
//   "012345",
//   "0123456",
//   "01234567",
//   "012345678",
//   "0123456789",
//   "0123456789A",
//   "0123456789AB",
//   "0123456789ABC",
//   "0123456789ABCD",
//   "0123456789ABCDE",
//   "0123456789ABCDEF",
//   "0123456789ABCDEFG",
//   "0123456789ABCDEFGH",
//   "0123456789ABCDEFGHI",
//   "0123456789ABCDEFGHIJ",
//   "0123456789ABCDEFGHIJK",
//   "0123456789ABCDEFGHIJKL",
//   "0123456789ABCDEFGHIJKLM",
//   "0123456789ABCDEFGHIJKLMN",
//   "0123456789ABCDEFGHIJKLMNO",
//   "0123456789ABCDEFGHIJKLMNOP",
//   "0123456789ABCDEFGHIJKLMNOPQ",
//   "0123456789ABCDEFGHIJKLMNOPQR",
//   "0123456789ABCDEFGHIJKLMNOPQRS",
//   "0123456789ABCDEFGHIJKLMNOPQRST",
//   "0123456789ABCDEFGHIJKLMNOPQRSTU",
//   "0123456789ABCDEFGHIJKLMNOPQRSTUV",
//   "0123456789ABCDEFGHIJKLMNOPQRSTUVW",
//   "0123456789ABCDEFGHIJKLMNOPQRSTUVWX",
//   "0123456789ABCDEFGHIJKLMNOPQRSTUVWXY",
//   "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
// ];
