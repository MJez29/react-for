# React For

A React component library to create loops in JSX.

[![NPM Version](https://img.shields.io/npm/v/react-for.svg)](https://www.npmjs.com/package/react-for)
[![NPM Downloads](https://img.shields.io/npm/dm/react-for.svg)](https://www.npmjs.com/package/react-for)
[![GitHub stars](https://img.shields.io/github/stars/MJez29/react-for.svg?style=social&label=Star&maxAge=2592000)](https://github.com/MJez29/react-for/stargazers/)

# Installation

```bash
$ npm install --save react-for
```

# Usage

All components require that you pass in a function to be called each loop.

## For Loop

The `For` component emulates a javascript for loop.
```jsx
const arr = [];
for (let i = INITIAL_VALUE; TEST_EXPR; NEXT_OP) {
  const component = CODE_TO_CREATE_COMPONENT;
  arr.push(component);
}
```
Is equivalent to
```jsx
import { For } from 'react-for';
<For start={INITIAL_VALUE} comparator={i => TEST_EXPR} next={i => NEXT_OP}>{
  (i) => {
    CODE_TO_CREATE_COMPONENT;
    return component;
  }
}</For>
```

## For Of

The `ForOf` component emulates a for..of loop.

```jsx
const data = [ 1, 2, 3 ];
const arr = [];
for (const value of data) {
  const component = CODE_TO_CREATE_COMPONENT;
  arr.push(component);
}
```
Is equivalent to
```jsx
import { ForOf } from 'react-for';
const data = [ 1, 2, 3 ];
<ForOf data={data}>{
  (i) => {
    CODE_TO_CREATE_COMPONENT;
    return component;
  }
}</ForOf>
```

## For In

The `ForIn` component emulates a for..in loop.

```jsx
const data = [ 1, 2, 3 ];
const arr = [];
for (const value in data) {
  const component = CODE_TO_CREATE_COMPONENT;
  arr.push(component);
}
```
Is equivalent to
```jsx
import { ForOf } from 'react-for';
const data = [ 1, 2, 3 ];
<ForIn data={data}>{
  (i) => {
    CODE_TO_CREATE_COMPONENT;
    return component;
  }
}</ForIn>
```

## While

The `While` component emulates a while loop.

```jsx
const arr = [];
while (TEST_EXPR) {
  const component = CODE_TO_CREATE_COMPONENT;
  arr.push(component);
}
```
Is equivalent to
```jsx
import { While } from 'react-for';
const data = [ 1, 2, 3 ];
<While test={TEST_EXPR}>{
  (i) => {
    CODE_TO_CREATE_COMPONENT;
    return component;
  }
}</While>
```

## Do While

The `DoWhile` component emulates a do-while loop.

```jsx
const arr = [];
do {
  const component = CODE_TO_CREATE_COMPONENT;
  arr.push(component);
} while (TEST_EXPR)
```
Is equivalent to
```jsx
import { DoWhile } from 'react-for';
const data = [ 1, 2, 3 ];
<DoWhile test={TEST_EXPR}>{
  (i) => {
    CODE_TO_CREATE_COMPONENT;
    return component;
  }
}</DoWhile>
```

## Keying

In React, a key prop should be attached to all components being rendered from a list. The key should be a string that is unique among all components in the list.

```jsx
// The following generates an ascii code table
<table>
  <tr>
    <th>Ascii Code</th>
    <th>Character</th>
  </tr>
  <For start={0} test={i => i < 256} next={i => i + 1}>{
    (i) => (
      <tr key={i}>
        <td>{i}</td>
        <td>{String.fromCharCode(i)}</td>
      </tr>
    )
  }</For>
</table>
```


# Docs

<a id="docs"></a>