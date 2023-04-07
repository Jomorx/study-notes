// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<KebabCase<"FooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"fooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"foo-bar">, "foo-bar">>,
  Expect<Equal<KebabCase<"foo_bar">, "foo_bar">>,
  Expect<Equal<KebabCase<"Foo-Bar">, "foo--bar">>,
  Expect<Equal<KebabCase<"ABC">, "a-b-c">>,
  Expect<Equal<KebabCase<"-">, "-">>,
  Expect<Equal<KebabCase<"">, "">>,
  Expect<Equal<KebabCase<"😎">, "😎">>
];

// ============= Your Code Here =============
type KebabCase<
  S extends string,
  Temp extends string = ""
> = S extends `${infer F}${infer L}`
  ? Temp extends ""
    ? KebabCase<L, Lowercase<F>>
    : F extends "-" | "_"
    ? KebabCase<L, `${Temp}${F}`>
    : F extends Lowercase<F>
    ? KebabCase<L, `${Temp}${F}`>
    : KebabCase<L, `${Temp}-${Lowercase<F>}`>
  : Temp;