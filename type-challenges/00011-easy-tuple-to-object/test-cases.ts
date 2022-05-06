import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>

// JS
const tupleToObject = (tuple = []) => tuple.reduce((obj, key) => ({ ...obj, [key]: key }), {})

// TS
type r1 = typeof tuple
type r2 = Keys<r1>
type r3 = TupleToObject<r1>

const tuple2 = [[1, 2], {}]
type r4 = typeof tuple2

type Keys<T> = T extends readonly any[] ? T[number] : never

// Solution
type TupleToObject<T extends readonly string[]> = {
  [K in Keys<T>]: K
}
