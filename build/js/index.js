!function e(n,t,i){function o(s,a){if(!t[s]){if(!n[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=t[s]={exports:{}};n[s][0].call(u.exports,function(e){var t=n[s][1][e];return o(t?t:e)},u,u.exports,e,n,t,i)}return t[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(e,n,t){"use strict";function i(){var e,n=document.createElement("fakeelement"),t={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in t)if(void 0!==n.style[e])return t[e]}function o(e,n,t){if(s)console.log("animation is running!");else{var i=e.classList.contains("hidden"),o=function(){e.removeEventListener(r,o),"in"===n?e.classList.remove("a-entry","a-active"):e.classList.remove("a-entry"),i||e.classList.add("hidden"),t&&t(),s=!1};i&&"in"===n&&(s=!0,e.addEventListener(r,o),console.log("Show"),e.classList.remove("hidden"),e.classList.add("a-entry"),setTimeout(function(){e.classList.add("a-active")},20)),i||"out"!==n||(s=!0,e.addEventListener(r,o),console.log("Hide"),e.classList.add("a-entry"))}}var r=i(),s=!1;n.exports=o},{}],2:[function(e,n,t){function i(){console.log("hello")}function o(){console.log("buy")}var r=e("./animateByClass"),s=document.querySelector(".show"),a=document.querySelector(".hide"),c=document.querySelector(".test");s.addEventListener("click",function(e){e.preventDefault(),r(c,"in",i)}),a.addEventListener("click",function(e){e.preventDefault(),r(c,"out",o)})},{"./animateByClass":1}]},{},[2]);