(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{104:function(t,e,r){"use strict";r.r(e),r.d(e,"deleteProduct",(function(){return u})),r.d(e,"addProduct",(function(){return c}));r(152),r(44),r(101),r(155),r(157),r(158),r(99),r(161),r(166),r(176),r(177),r(58),r(100);var n=r(84);function o(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){c=!0,a=t},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw a}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var a=r(83).a;function u(t){var e,r=[],i=o(a);try{for(i.s();!(e=i.n()).done;){var c=e.value;c.id!==t&&r.push(c)}}catch(t){i.e(t)}finally{i.f()}a=r,Object(n.a)(a,u)}function c(t){t.preventDefault();var e=document.querySelector("#new-product #title"),r=document.querySelector("#new-product #price"),o=e.value,i=r.value;if(0===o.trim().length||0===i.trim().length||+i<0)alert("Please enter some valid input values for title and price.");else{var c={id:(new Date).toString(),title:o,price:i};a.unshift(c),Object(n.a)(a,u)}}}}]);
//# sourceMappingURL=1.js.map