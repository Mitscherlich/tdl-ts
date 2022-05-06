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

// JS
const len = (arr = []) => arr.reduce(total => total + 1, 0)

const numberToTuple = (size = 0, arr = []) => arr.length !== size
  ? numberToTuple(size, [true, ...arr])
  : arr

// TS
type r1 = 0 extends 0 ? true : false

type NumberToTuple<N extends number, T extends true[] = []> = T['length'] extends N ? T : NumberToTuple<N, [true, ...T]>
type r2 = NumberToTuple<1>

type Add<X extends number, Y extends number> = [...NumberToTuple<X>, ...NumberToTuple<Y>]['length']
type r3 = Add<1, 1>

type Rest<T extends readonly any[]> = T extends readonly [any, ...infer U] ? U : never
type r4 = Rest<[1, 2, 3]>

// Solution
// type Length<T extends readonly any[]> = T extends [] ? 0 : Add<1, Length<Rest<T>>>
// type r5 = Length<typeof tesla>

type Length<T extends readonly any[]> = T['length']
