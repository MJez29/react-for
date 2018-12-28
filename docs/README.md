
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

*Defined in [data-props.ts:34](https://github.com/MJez29/react-for/blob/e2516b0/src/data-props.ts#L34)*

The union of the various data-related prop interfaces.
*__type__*: 

___
<a id="forinprops"></a>

###  ForInProps

**Ƭ ForInProps**: *[RenderProps](#renderprops)<`string`> & [DataProps](#dataprops)<`object`>*

*Defined in [for-in.tsx:6](https://github.com/MJez29/react-for/blob/e2516b0/src/for-in.tsx#L6)*

___
<a id="forofprops"></a>

###  ForOfProps

**Ƭ ForOfProps**: *[RenderProps](#renderprops)<`T`> & [DataProps](#dataprops)<`object`>*

*Defined in [for-of.tsx:6](https://github.com/MJez29/react-for/blob/e2516b0/src/for-of.tsx#L6)*

___
<a id="forprops"></a>

###  ForProps

**Ƭ ForProps**: *[RenderProps](#renderprops)<`T`> & [StartProps](#startprops)<`T`> & [TestProps](#testprops)<`T`> & [NextProps](#nextprops)<`T`>*

*Defined in [for.tsx:8](https://github.com/MJez29/react-for/blob/e2516b0/src/for.tsx#L8)*

___
<a id="nextfunction"></a>

###  NextFunction

**Ƭ NextFunction**: *`function`*

*Defined in [next-props.ts:1](https://github.com/MJez29/react-for/blob/e2516b0/src/next-props.ts#L1)*

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

*Defined in [next-props.ts:7](https://github.com/MJez29/react-for/blob/e2516b0/src/next-props.ts#L7)*

___
<a id="renderfunction"></a>

###  RenderFunction

**Ƭ RenderFunction**: *`function`*

*Defined in [render-props.ts:1](https://github.com/MJez29/react-for/blob/e2516b0/src/render-props.ts#L1)*

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

*Defined in [render-props.ts:19](https://github.com/MJez29/react-for/blob/e2516b0/src/render-props.ts#L19)*

___
<a id="startprops"></a>

###  StartProps

**Ƭ StartProps**: *[IStart](interfaces/istart.md)<`T`> | [IBegin](interfaces/ibegin.md)<`T`>*

*Defined in [start-props.ts:19](https://github.com/MJez29/react-for/blob/e2516b0/src/start-props.ts#L19)*

___
<a id="testfunction"></a>

###  TestFunction

**Ƭ TestFunction**: *`function`*

*Defined in [test-props.ts:1](https://github.com/MJez29/react-for/blob/e2516b0/src/test-props.ts#L1)*

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

*Defined in [test-props.ts:45](https://github.com/MJez29/react-for/blob/e2516b0/src/test-props.ts#L45)*

___
<a id="whileprops"></a>

###  WhileProps

**Ƭ WhileProps**: *[RenderProps](#renderprops) & [TestProps](#testprops)<`undefined`>*

*Defined in [while-props.ts:4](https://github.com/MJez29/react-for/blob/e2516b0/src/while-props.ts#L4)*

___

## Functions

<a id="dowhile"></a>

### `<Const>` DoWhile

▸ **DoWhile**(props: *[WhileProps](#whileprops)*): `Element`

*Defined in [do-while.tsx:9](https://github.com/MJez29/react-for/blob/e2516b0/src/do-while.tsx#L9)*

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

*Defined in [for.tsx:28](https://github.com/MJez29/react-for/blob/e2516b0/src/for.tsx#L28)*

**Type parameters:**

#### T :  `__type`
**Parameters:**

| Name | Type |
| ------ | ------ |
| props | [ForProps](#forprops)<`T`> |

**Returns:** `Element`

___
<a id="forin"></a>

### `<Const>` ForIn

▸ **ForIn**(props: *[ForInProps](#forinprops)*): `Element`

*Defined in [for-in.tsx:33](https://github.com/MJez29/react-for/blob/e2516b0/src/for-in.tsx#L33)*

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

*Defined in [for-of.tsx:34](https://github.com/MJez29/react-for/blob/e2516b0/src/for-of.tsx#L34)*

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

*Defined in [while.tsx:18](https://github.com/MJez29/react-for/blob/e2516b0/src/while.tsx#L18)*

A component that takes in a test function and calls a callback function that returns a react component while the test function continues to return true.

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

