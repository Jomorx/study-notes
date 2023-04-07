// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
]

// ============= Your Code Here =============
type Without<T, U extends any[] | number, A extends any[] = []> = T extends [
  infer F,
  ...infer Rest
]
  ? U extends any[]
    ? F extends U[number]
      ? Without<Rest, U, A>
      : Without<Rest, U, [...A, F]>
    : F extends U
    ? Without<Rest, U, A>
    : Without<Rest, U, [...A, F]>
  : A
