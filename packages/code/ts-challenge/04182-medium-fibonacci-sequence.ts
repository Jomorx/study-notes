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
> = T extends 1
  ? Total["length"]
  : Fibonacci<MinusOne<`${T}`>, Next, Total, [...Next, ...Total]>

type MinusOne<T extends string> = T extends "0" ? -1: ParseInt<RemoveZero<MinusOneForString<T>>>
type MinusMap = {
  "0": 9
  "1": 0
  "2": 1
  "3": 2
  "4": 3
  "5": 4
  "6": 5
  "7": 6
  "8": 7
  "9": 8
}
type ReserveString<T extends string> = T extends `${infer F}${infer L}`
  ? `${ReserveString<L>}${F}`
  : ""
type RemoveLast<T extends string> =
  ReserveString<T> extends `${infer F}${infer L}` ? ReserveString<L> : ""
type ParseInt<T extends string> = T extends `${infer N extends number}`
  ? N
  : never
type RemoveZero<T extends string> = T extends `${infer F}${infer L}`
  ? F extends "0"
    ? RemoveZero<L>
    : T
  : T
type MinusOneForString<T extends string> = T extends `${string}${infer L extends keyof MinusMap}`
  ? L extends "0"
    ? `${MinusOneForString<RemoveLast<T>>}${MinusMap[L]}`
    : `${RemoveLast<T>}${MinusMap[L]}`
  : never
type test =MinusOneForString<"5">
