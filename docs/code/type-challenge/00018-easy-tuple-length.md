# 获取元组长度
---

> 欢迎 PR 改进翻译质量。

创建一个通用的`Length`，接受一个`readonly`的数组，返回这个数组的长度。

例如：

```ts
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla> // expected 4
type spaceXLength = Length<spaceX> // expected 5
```

## 测试用例
```ts
import type { Equal, Expect } from '@type-challenges/utils'

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<'hello world'>,
]

```
<!--info-footer-start--><br> <a href="https://tsch.js.org/18/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/18/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&amp;logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->

## 你的代码

```ts
type Length<T extends readonly any[]> =T["length"]
```
## 总结

> 对于元组类型，可以获取他的length来获取元组的长度，使用extends 限制泛型传入的类型
