var pageComponent=webpackJsonppageComponent([57],{839:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),u=o(l),s=n(0),d=o(s);n(18),n(19),n(20),n(4),n(10),n(13),n(21),n(5),n(22),n(9),n(23),n(7),n(2),n(8),n(3),n(14),n(17),n(24),n(25),n(11),n(16),n(12),n(26),n(6),n(15),n(27),n(28),n(29),n(30),n(31),n(32),n(33);var p=n(840),c=o(p),f=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(u.default);d.default.register(f,c.default),t.default=f},840:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.EmQzA=void 0;var l,u=n(1),s=o(u),d=n(0),p=o(d);goog.loadModule(function(e){function t(e,t,o){var l=function(){r("h6");var t=e.page.description;"function"==typeof t?t():null!=t&&i(t),a("h6"),r("article",null,null,"id","1"),r("p"),u({data:[{id:"data1",data:[10,70,30,120,20,10]},{id:"data2",data:[100,150,120,90,10,55]}],grid:{x:{show:!0},y:{show:!1}}},null,o),a("p"),s({code:"{call ClayChart.render}\n    {param data: [\n        [\n            'id': 'data1',\n            'data': [10, 70, 30, 120, 20, 10]\n        ],\n        [\n            'id': 'data2',\n            'data': [100, 150, 120, 90, 10, 55]\n        ]\n    ] /}\n    {param grid: [\n        'x': [\n            'show': true\n        ],\n        'y': [\n            'show': false\n        ]\n    ] /}\n{/call}",mode:"soy"},null,o),s({code:"<Chart\n    data={[\n        {\n            id: 'data1',\n            data: [10, 70, 30, 120, 20, 10]\n        },\n        {\n            id: 'data2',\n            data: [100, 150, 120, 90, 10, 55]\n        }\n    ]}\n    grid={\n        x: {\n            show: true\n        },\n        y: {\n            show: true\n        }\n    }\n/>",mode:"jsx"},null,o),a("article"),r("input",null,null,"type","hidden","value",e.page.title),a("input"),r("input",null,null,"type","hidden","value",e.site.title),a("input")};d(n.$$assignDefaults({content:l},e),null,o)}goog.module("EmQzA.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),r=o.elementOpen,a=o.elementClose,i=(o.elementVoid,o.elementOpenStart,o.elementOpenEnd,o.text),u=(o.attr,p.default.getTemplate("ClayChart.incrementaldom","render")),s=p.default.getTemplate("ElectricCode.incrementaldom","render"),d=p.default.getTemplate("guide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="EmQzA.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=l=e,e});var c=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(s.default);p.default.register(c,l),t.EmQzA=c,t.templates=l,t.default=l}},[839]);