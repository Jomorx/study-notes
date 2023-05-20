# Concat
---

在类型系统里实现 JavaScript 内置的 `Array.concat` 方法，这个类型接受两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。

例如：

```ts
type Result = Concat<[1], [2]> // expected to be [1, 2]
```

## 测试用例
```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]

```
<!--info-footer-start--><br> <a href="https://tsch.js.org/533/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/533/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&amp;logoColor=white" alt="Check out Solutions"/></a> <hr><h3>Related Challenges</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.md" target="_blank"><img src="https://img.shields.io/badge/-3057%E3%83%BBPush-7aad0c" alt="3057・Push"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.md" target="_blank"><img src="https://img.shields.io/badge/-3060%E3%83%BBUnshift-7aad0c" alt="3060・Unshift"/></a> <!--info-footer-end-->

## 你的代码

```ts
type Concat<T extends any[], U extends any[]> = [...T,...U]
```
## 总结

> 使用展开运算符把一个数组展开，整合到一个新数组里面即可
