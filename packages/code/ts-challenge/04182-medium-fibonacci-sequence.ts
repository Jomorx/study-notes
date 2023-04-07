// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"
// 0 0 1    0 1 1    1 1 2
type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>
]

// ============= Your Code Here =============
type Fibonacci<
  T extends number,
  Prev extends number[] = [],
  Next extends number[] = [],
  Total extends number[] = [0]
> = T extends 1 ? Total["length"] : Fibonacci<decrementOne<T>,Next,Total,[...Next,...Total]>

type decrementOne<
  T extends number,
  Temp extends number[] = []
> = T extends Temp["length"]
  ? Temp extends [infer F, ...infer Rest]
    ? Rest["length"]
    : 0
  : decrementOne<T,[0, ...Temp]>
