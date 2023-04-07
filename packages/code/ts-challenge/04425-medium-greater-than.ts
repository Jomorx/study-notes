// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>
]

// ============= Your Code Here =============
type GreaterThan<
  T extends number,
  U extends number,
  Temp extends number[] = []
> = T extends Temp["length"]
  ? false
  : U extends Temp["length"]
  ? true
  : GreaterThan<T,U,[0,...Temp]>
