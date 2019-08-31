# next-xhr-header
> XHR header for next.

## installation
```bash
npm install -S afeiship/next-xhr-header --registry=https://registry.npm.taobao.org
```

## apis
| api     | params     | description     |
| ------- | ---------- | --------------- |
| request | set/getter | An object / null |

## usage
```js
import NxXhrHeader from 'next-xhr-header';
const xhr = new XMLHttpRequest();
const header = new NxXhrHeader(xhr);

// header.request
```
