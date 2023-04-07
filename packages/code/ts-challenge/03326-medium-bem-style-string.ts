// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success' >>,
  Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large' >>,
]


// ============= Your Code Here =============
type BEM<B extends string, E extends string[], M extends string[]> = `${Block<B>}${Element<E>}${Modifier<M>}`
type Block<B extends string> = `${B}`
type Element <E extends string[]>  = `__${E[number]}` extends never ? "": `__${E[number]}`
type Modifier <M extends string[]>  = `--${M[number]}` extends never ? "" :`--${M[number]}`

