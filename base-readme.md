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

# Docs

<a id="docs"></a>