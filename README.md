# incremental-id-generator

[![NPM Version](https://img.shields.io/npm/v/incremental-id-generator.svg)](https://www.npmjs.com/package/incremental-id-generator)
[![Build Status](https://travis-ci.org/nwoltman/node-incremental-id-generator.svg?branch=master)](https://travis-ci.org/nwoltman/node-incremental-id-generator)
[![Coverage Status](https://coveralls.io/repos/github/nwoltman/node-incremental-id-generator/badge.svg?branch=master)](https://coveralls.io/github/nwoltman/node-incremental-id-generator?branch=master)
[![devDependency Status](https://david-dm.org/nwoltman/node-incremental-id-generator/dev-status.svg)](https://david-dm.org/nwoltman/node-incremental-id-generator?type=dev)

Generates incremental string IDs.


## Installation

```sh
npm install incremental-id-generator --save-dev
```


## Usage

```js
const idGenerator = require('incremental-id-generator');
const nextID = idGenerator('ab');

nextID(); // -> a
nextID(); // -> b
nextID(); // -> aa
nextID(); // -> ab
nextID(); // -> ba
nextID(); // -> bb
nextID(); // -> aaa
nextID(); // -> aab
```


## API

### idGenerator(characters, [options]) ⇒ `function`
Returns a function that will return a new, incrementing ID each time it is called.

| Param | Type | Description |
|-------|------|-------------|
| characters | string | The characters that will be used to encode the ID.<br>Must not contain duplicate characters. |
| [options.prefix] | string | A prefix to prepend to every generated ID. |

**Example**

```js
const idGenerator = require('incremental-id-generator');

const nextBinID = idGenerator('01');
nextBinID(); // -> 0
nextBinID(); // -> 1
nextBinID(); // -> 00
nextBinID(); // -> 01

const nextPrefixedID = idGenerator('abc', {prefix: '_'});
nextPrefixedID(); // -> _a
nextPrefixedID(); // -> _b
nextPrefixedID(); // -> _c
nextPrefixedID(); // -> _aa
nextPrefixedID(); // -> _ab
nextPrefixedID(); // -> _ac
nextPrefixedID(); // -> _ba
```
