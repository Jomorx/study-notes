# 实现 Pick
---

> 欢迎 PR 改进翻译质量。

实现 TS 内置的 `Pick<T, K>`，但不可以使用它。

**从类型 `T` 中选择出属性 `K`，构造成一个新的类型**。

例如：

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
```

## 测试用例
```ts
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}

```
<!--info-footer-start--><br> <a href="https://tsch.js.org/4/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/4/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&amp;logoColor=white" alt="Check out Solutions"/></a> <hr><h3>Related Challenges</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md" target="_blank"><img src="https://img.shields.io/badge/-3%E3%83%BBOmit-d9901a" alt="3・Omit"/></a> <!--info-footer-end-->

## 你的代码

```ts
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

```
## 总结

> 使用 in 来对联合类型进行遍历，再从接口中使用T[P]对接口中的key进行筛选，随后使用一个{}进行包裹返回一个对象类型
