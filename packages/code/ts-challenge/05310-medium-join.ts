// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<Join<["a", "p", "p", "l", "e"], "-">, "a-p-p-l-e">>,
  Expect<Equal<Join<["Hello", "World"], " ">, "Hello World">>,
  Expect<Equal<Join<["2", "2", "2"], 1>, "21212">>,
  Expect<Equal<Join<["o"], "u">, "o">>
]

// ============= Your Code Here =============
type Join<
  T extends any[],
  U extends string | number | bigint | boolean | null | undefined,
  A extends string = ""
> = T extends [infer F extends string, ...infer Rest]
  ? A extends ""
    ? Join<Rest, U, `${F}`>
    : Join<Rest, U, `${A}${U}${F}`>
  : A
type res = Join<["Hello", "World"], " ">
