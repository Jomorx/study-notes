// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Trim<"str">, "str">>,
  Expect<Equal<Trim<" str">, "str">>,
  Expect<Equal<Trim<"     str">, "str">>,
  Expect<Equal<Trim<"str   ">, "str">>,
  Expect<Equal<Trim<"     str     ">, "str">>,
  Expect<Equal<Trim<"   \n\t foo bar \t">, "foo bar">>,
  Expect<Equal<Trim<"">, "">>,
  Expect<Equal<Trim<" \n\t ">, "">>
];

// ============= Your Code Here =============
type Trim<S extends string> = TrimLeft<TrimRight<S>>;
type TrimLeft<S extends string> = S extends `${infer F}${infer Last}`
  ? F extends " " | "\n" | "\t"
    ? TrimLeft<Last>
    : S
  : "";
type TrimRight<S extends string> = S extends
  | `${infer F} `
  | `${infer F}\n`
  | `${infer F}\t`
    ? TrimRight<F>
  : S;
