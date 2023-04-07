// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<"a" | "b" | "c" | "d">, true>>,
  Expect<Equal<IsUnion<undefined | null | void | "">, true>>,
  Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string | never>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | any>, false>>,
  Expect<Equal<IsUnion<string | "a">, false>>,
  Expect<Equal<IsUnion<never>, false>>
];

// ============= Your Code Here =============
type IsUnion<T, U = T> = [T] extends [never]
  ? false
  : T extends U
  ? [U] extends [T]
    ? false
    : true
  : false;

type res = test<string | number>;
type res2 = test2<string | number>;

type test<T, U = T> = T extends U ? ([U] extends [T] ? false : true) : false;
type test2<T, U = T> = T extends U ? true : false;

