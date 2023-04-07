// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<If<true, "a", "b">, "a">>,
  Expect<Equal<If<false, "a", 2>, 2>>
];

// @ts-expect-error
type error = If<null, "a", "b">;

// ============= Your Code Here =============
type If<F extends boolean, A, B> = F extends true ? A : B;

