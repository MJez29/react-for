
React For
=========

A React component library to create loops in JSX.

[![NPM Version](https://img.shields.io/npm/v/react-for.svg)](https://www.npmjs.com/package/react-for) [![NPM Downloads](https://img.shields.io/npm/dm/react-for.svg)](https://www.npmjs.com/package/react-for) [![GitHub stars](https://img.shields.io/github/stars/MJez29/react-for.svg?style=social&label=Star&maxAge=2592000)](https://github.com/MJez29/react-for/stargazers/)

Installation
============

```bash
$ npm install --save react-for
```

Usage
=====

All components require that you pass in a function to be called each loop.

For Loop
--------

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

For Of
------

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

For In
------

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

While
-----

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

Do While
--------

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

Keying
------

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

Prop Aliasing
=============

Currently the following prop aliases are supported. Create an issue to suggest others. The first prop of each row is the recommended alias and is used in all code examples.

Prop Type

Aliases

Data

`data`, `from`

Next

`next`

Render

`children`, `render`

Start

`start`, `begin`

Test

`test`, `comparator`, `compare`

Docs
====

## Index

### Interfaces

* [IBegin](interfaces/ibegin.md)
* [IComparator](interfaces/icomparator.md)
* [ICompare](interfaces/icompare.md)
* [IData](interfaces/idata.md)
* [IFrom](interfaces/ifrom.md)
* [INext](interfaces/inext.md)
* [IRenderChildren](interfaces/irenderchildren.md)
* [IRenderFunction](interfaces/irenderfunction.md)
* [IStart](interfaces/istart.md)
* [ITest](interfaces/itest.md)

### Type aliases

* [DataProps](#dataprops)
* [ForInProps](#forinprops)
* [ForOfProps](#forofprops)
* [ForProps](#forprops)
* [NextFunction](#nextfunction)
* [NextProps](#nextprops)
* [RenderFunction](#renderfunction)
* [RenderProps](#renderprops)
* [StartProps](#startprops)
* [TestFunction](#testfunction)
* [TestProps](#testprops)
* [WhileProps](#whileprops)

### Functions

* [DoWhile](#dowhile)
* [For](#for)
* [ForIn](#forin)
* [ForOf](#forof)
* [While](#while)

---

## Type aliases

<a id="dataprops"></a>

###  DataProps

**Ƭ DataProps**: *[IData](interfaces/idata.md)<`T`> | [IFrom](interfaces/ifrom.md)<`T`>*

*Defined in [data-props.ts:31](https://github.com/MJez29/react-for/blob/171c15c/src/data-props.ts#L31)*

The union of the various data-related prop interfaces.

___
<a id="forinprops"></a>

###  ForInProps

**Ƭ ForInProps**: *[RenderProps](#renderprops)<`string`> & [DataProps](#dataprops)<`object`>*

*Defined in [for-in.tsx:8](https://github.com/MJez29/react-for/blob/171c15c/src/for-in.tsx#L8)*

The type of the props that get passed to the ForIn component.

___
<a id="forofprops"></a>

###  ForOfProps

**Ƭ ForOfProps**: *[RenderProps](#renderprops)<`T`> & [DataProps](#dataprops)<`object`>*

*Defined in [for-of.tsx:5](https://github.com/MJez29/react-for/blob/171c15c/src/for-of.tsx#L5)*

___
<a id="forprops"></a>

###  ForProps

**Ƭ ForProps**: *[RenderProps](#renderprops)<`T`> & [StartProps](#startprops)<`T`> & [TestProps](#testprops)<`T`> & [NextProps](#nextprops)<`T`>*

*Defined in [for.tsx:10](https://github.com/MJez29/react-for/blob/171c15c/src/for.tsx#L10)*

The type of the props passed into the `For` component.

___
<a id="nextfunction"></a>

###  NextFunction

**Ƭ NextFunction**: *`function`*

*Defined in [next-props.ts:4](https://github.com/MJez29/react-for/blob/171c15c/src/next-props.ts#L4)*

The type of the function that is used to change the loop variable

#### Type declaration
▸(x: *`T`*): `T`

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `T` |

**Returns:** `T`

___
<a id="nextprops"></a>

###  NextProps

**Ƭ NextProps**: *[INext](interfaces/inext.md)<`T`>*

*Defined in [next-props.ts:16](https://github.com/MJez29/react-for/blob/171c15c/src/next-props.ts#L16)*

The union type of all possible next prop interfaces.

___
<a id="renderfunction"></a>

###  RenderFunction

**Ƭ RenderFunction**: *`function`*

*Defined in [render-props.ts:1](https://github.com/MJez29/react-for/blob/171c15c/src/render-props.ts#L1)*

#### Type declaration
▸(x?: *`T`*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` x | `T` |

**Returns:** `any`

___
<a id="renderprops"></a>

###  RenderProps

**Ƭ RenderProps**: *[IRenderChildren](interfaces/irenderchildren.md)<`T`> | [IRenderFunction](interfaces/irenderfunction.md)<`T`>*

*Defined in [render-props.ts:19](https://github.com/MJez29/react-for/blob/171c15c/src/render-props.ts#L19)*

___
<a id="startprops"></a>

###  StartProps

**Ƭ StartProps**: *[IStart](interfaces/istart.md)<`T`> | [IBegin](interfaces/ibegin.md)<`T`>*

*Defined in [start-props.ts:19](https://github.com/MJez29/react-for/blob/171c15c/src/start-props.ts#L19)*

___
<a id="testfunction"></a>

###  TestFunction

**Ƭ TestFunction**: *`function`*

*Defined in [test-props.ts:5](https://github.com/MJez29/react-for/blob/171c15c/src/test-props.ts#L5)*

The type of the function that should be used to determine if a loop should stop. Returns a truthy value to continue and a falsy value to stop.

#### Type declaration
▸(x?: *`T`*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` x | `T` |

**Returns:** `any`

___
<a id="testprops"></a>

###  TestProps

**Ƭ TestProps**: *[ITest](interfaces/itest.md)<`T`> | [IComparator](interfaces/icomparator.md)<`T`> | [ICompare](interfaces/icompare.md)<`T`>*

*Defined in [test-props.ts:52](https://github.com/MJez29/react-for/blob/171c15c/src/test-props.ts#L52)*

The type of all valid sets of test props.

___
<a id="whileprops"></a>

###  WhileProps

**Ƭ WhileProps**: *[RenderProps](#renderprops) & [TestProps](#testprops)<`undefined`>*

*Defined in [while-props.ts:7](https://github.com/MJez29/react-for/blob/171c15c/src/while-props.ts#L7)*

The type of the props passed to the `While` component.

___

## Functions

<a id="dowhile"></a>

### `<Const>` DoWhile

▸ **DoWhile**(props: *[WhileProps](#whileprops)*): `Element`

*Defined in [do-while.tsx:8](https://github.com/MJez29/react-for/blob/171c15c/src/do-while.tsx#L8)*

A do-while loop

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| props | [WhileProps](#whileprops) |  The props passed into the component |

**Returns:** `Element`

___
<a id="for"></a>

### `<Const>` For

▸ **For**<`T`>(props: *[ForProps](#forprops)<`T`>*): `Element`

*Defined in [for.tsx:36](https://github.com/MJez29/react-for/blob/171c15c/src/for.tsx#L36)*

A JSX implementation of the JavaScript `for` loop.

**Type parameters:**

#### T :  `__type`
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| props | [ForProps](#forprops)<`T`> |  The props passed to the component |

**Returns:** `Element`

___
<a id="forin"></a>

### `<Const>` ForIn

▸ **ForIn**(props: *[ForInProps](#forinprops)*): `Element`

*Defined in [for-in.tsx:37](https://github.com/MJez29/react-for/blob/171c15c/src/for-in.tsx#L37)*

`ForIn` implements looping through the provided elements using a `for...in` loop. It iterates over the enumerable properties of an object. See [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) for more detail.

**Parameters:**

| Name | Type |
| ------ | ------ |
| props | [ForInProps](#forinprops) |

**Returns:** `Element`

___
<a id="forof"></a>

### `<Const>` ForOf

▸ **ForOf**<`T`>(props: *[ForOfProps](#forofprops)<`T`>*): `Element`

*Defined in [for-of.tsx:35](https://github.com/MJez29/react-for/blob/171c15c/src/for-of.tsx#L35)*

`ForOf` implements looping through the provided elements using a `for...of` loop. It iterates over the data that an iterable object defines to be iterable over. See [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) for more detail.

**Type parameters:**

#### T :  `__type`
**Parameters:**

| Name | Type |
| ------ | ------ |
| props | [ForOfProps](#forofprops)<`T`> |

**Returns:** `Element`

___
<a id="while"></a>

### `<Const>` While

▸ **While**(props: *[WhileProps](#whileprops)*): `Element`

*Defined in [while.tsx:15](https://github.com/MJez29/react-for/blob/171c15c/src/while.tsx#L15)*

A JSX implementation of a while loop.

```jsx
const PrintHello = ({ i }) => (
  <While test={() => i-- > 0}>{
    () => <h1>Hello World!</h1>
  }</While>
)
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| props | [WhileProps](#whileprops) |  The props passed into the component |

**Returns:** `Element`

___

