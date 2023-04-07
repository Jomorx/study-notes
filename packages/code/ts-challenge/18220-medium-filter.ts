// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type Falsy = false | 0 | "" | null | undefined

type cases = [
  Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
  Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
  Expect<Equal<Filter<[0, 1, 2, 0], Falsy>, [0]>>
]

// ============= Your Code Here =============
type Filter<T extends any[], P, A extends any[] = []> = T extends [
  infer F,
  ...infer Rest
]
  ? F extends P
    ? F extends A[number]
      ? Filter<Rest, P, A>
      : Filter<Rest, P, [...A, F]>
    : Filter<Rest, P, A>
  : A
