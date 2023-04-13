// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>
]

// ============= Your Code Here =============
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
type RemoveLast<T extends string> =
  ReserveString<T> extends `${infer F}${infer R}` ? ReserveString<R> : T
type ReserveString<T extends string> = T extends `${infer F}${infer R}`
  ? `${ReserveString<R>}${F}`
  : ""
type ParseInt<T extends string> = T extends `${infer N extends number}`
  ? N
  : never
type RemoveZero<T extends string> = T extends "0"
  ? "0"
  : T extends `0${infer R}`
  ? RemoveZero<R>
  : T
type MinusOneForString<T extends string> = T extends `${RemoveLast<T>}${infer L extends keyof MinusMap}`    ? L extends '0'
? `${MinusOneForString<RemoveLast<T>>}${MinusMap[L]}`
: `${RemoveLast<T>}${MinusMap[L]}`
: never

type MinusOne<T extends number> = T extends 0 ? -1 : ParseInt<RemoveZero<MinusOneForString<`${T}`>>>
