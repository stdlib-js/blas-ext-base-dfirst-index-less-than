"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var d=v(function(w,o){
function j(e,r,i,t,a,L,T){var n,u,s;if(e<=0)return-1;for(n=t,u=T,s=0;s<e;s++){if(r[n]<a[u])return s;n+=i,u+=L}return-1}o.exports=j
});var c=v(function(z,x){
var q=require('@stdlib/strided-base-stride2offset/dist'),m=d();function l(e,r,i,t,a){return m(e,r,i,q(e,i),t,a,q(e,a))}x.exports=l
});var h=v(function(A,p){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=c(),_=d();R(y,"ndarray",_);p.exports=y
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=h(),f,I=O(E(__dirname,"./native.js"));b(I)?f=g:f=I;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
