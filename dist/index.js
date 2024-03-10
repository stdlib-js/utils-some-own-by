"use strict";var m=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=m(function(p,s){
var f=require('@stdlib/assert-is-object/dist'),l=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,c=require('@stdlib/assert-has-own-property/dist'),g=require('@stdlib/assert-is-function/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist');function w(r,e,t,v){var u,n,i;if(!f(r))throw new TypeError(a('null3L',r));if(!l(e))throw new TypeError(a('null45',e));if(!g(t))throw new TypeError(a('null3N',t));u=0;for(i in r)if(c(r,i)&&(n=t.call(v,r[i],i,r),n&&(u+=1,u===e)))return!0;return!1}s.exports=w
});var q=o();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
