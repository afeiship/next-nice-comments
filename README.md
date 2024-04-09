# next-nice-comments
> Build nice comments.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-nice-comments
```

## usage
```js
import '@jswork/next-nice-comments';

const comments = [
  'name: next-nice-comments',
  'description: Just a lite',
  'licence: MIT'
];

// list, type:
nx.niceComments(comments,'js');
nx.niceComments(comments,'css');
nx.niceComments(comments,'html');
nx.niceComments(comments,'raw');

/*!
 * name: next-nice-comments
 * description: Build nice comments.
 * licence: MIT
 */

<!--!
  * name: next-nice-comments
  * description: Build nice comments.
  * licence: MIT
--> 
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-nice-comments/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-nice-comments
[version-url]: https://npmjs.org/package/@jswork/next-nice-comments

[license-image]: https://img.shields.io/npm/l/@jswork/next-nice-comments
[license-url]: https://github.com/afeiship/next-nice-comments/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-nice-comments
[size-url]: https://github.com/afeiship/next-nice-comments/blob/master/dist/next-nice-comments.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-nice-comments
[download-url]: https://www.npmjs.com/package/@jswork/next-nice-comments
