// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, "a"], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, "a", any], any>, 4>>,
  Expect<Equal<IndexOf<[string, "a"], "a">, 1>>,
  Expect<Equal<IndexOf<[any, 1], 1>, 1>>
]

// ============= Your Code Here =============
type IndexOf<T, U, A extends number[] = []> = T extends [infer F, ...infer Rest]
  ? F extends U
    ? U extends F
      ? A["length"]
      : IndexOf<Rest, U, [0, ...A]>
    : IndexOf<Rest, U, [0, ...A]>
  : -1
type res = IndexOf<[any, 1], 1>
