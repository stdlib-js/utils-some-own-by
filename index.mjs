// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@v0.2.1-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function n(n,o,d,m){var l,p;if(!s(n))throw new TypeError(i("null3L",n));if(!r(o))throw new TypeError(i("null45",o));if(!e(d))throw new TypeError(i("null3N",d));for(p in l=0,n)if(t(n,p)&&d.call(m,n[p],p,n)&&(l+=1)===o)return!0;return!1}export{n as default};
//# sourceMappingURL=index.mjs.map
