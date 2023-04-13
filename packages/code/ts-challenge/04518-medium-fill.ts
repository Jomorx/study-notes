// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<Fill<[], 0>, []>>,
  Expect<Equal<Fill<[], 0, 0, 3>, []>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 20>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>
]

// ============= Your Code Here =============
type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T["length"],
  A extends any[] = []
> = T extends [infer F, ...infer R]
  ? GreaterEqualThan<A["length"], Start> extends true
    ? GreaterEqualThan<A["length"], End> extends true
      ? Fill<R, N, Start, End, [...A, F]>
      : Fill<R, N, Start, End, [...A, N]>
    : Fill<R, N, Start, End, [...A, F]>
  : A
// >
type GreaterThan<
  T extends number,
  Y extends number,
  A extends any[] = []
> = T extends A["length"]
  ? false
  : Y extends A["length"]
  ? true
  : GreaterThan<T, Y, [0, ...A]>
// > =
type GreaterEqualThan<T extends number, Y extends number> = T extends Y
  ? true
  : GreaterThan<T, Y>

