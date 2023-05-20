# Exclude
---

> 欢迎 PR 改进翻译质量。

实现内置的Exclude <T, U>类型，但不能直接使用它本身。

> 从联合类型T中排除U的类型成员，来构造一个新的类型。

例如：

```ts
type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
```

## 测试用例
```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]

```
<!--info-footer-start--><br> <a href="https://tsch.js.org/43/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/43/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&amp;logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->

## 你的代码

```ts
type MyExclude<T, E> = T extends E ? never : T
```
## 总结

> 使用分布式条件判断即可实现Exclude，对于不符合的直接返回never，符合的返回该元素
