<!--info-header-start--><h1>Length of Tuple <img src="https://img.shields.io/badge/-easy-7aad0c" alt="easy"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/></h1>
<!--info-header-end-->

For given a tuple, you need to create a generic `Length`, pick the length of the tuple

For example

```ts
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla> // expected 4
type spaceXLength = Length<spaceX> // expected 5
```

Key points:

1. Access array length with `T['length']`. (?)

JS Solution:

```js
const len = (arr = []) => arr.reduce(sum => sum + 1, 0)
```

So... we can implement a math `add` in ts?

some helpers:

```ts
type NumToTuple<N extends number, T extends true[] = []> = T['length'] extends N ? T : NumToTuple<N, [true, ...T]>

type Rest<A extends readonly any[]> = A extends readonly [any, ...infer U] ? U : never
```

then add using typings:

```ts
type Add<X extends number, Y extends number> = [...NumToTuple<X>, ...NumToTuple<Y>]['length']
```

after all:

```ts
type Length<A extends readonly any[]> = A extends [] ? 0 : Add<1, Length<Rest<A>>>
```


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/18/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/18/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a>
<!--info-footer-end-->
