(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{363:function(s,t,a){"use strict";a.r(t);var n=a(9),p=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"div-里边只包含一个-img，-结果-div-的高度比-img-图片的高度多-3px"}},[s._v("div 里边只包含一个 img， 结果 div 的高度比 img 图片的高度多 3px")]),s._v(" "),a("p",[s._v("img 是一种类似 text 的元素，在结束的时候，会在末尾加上一个空白符，所以就会多出 3px，可以把 img 设置为 block")]),s._v(" "),a("h2",{attrs:{id:"less-的-calc-与原生的-calc-冲突"}},[s._v("less 的 calc 与原生的 calc 冲突")]),s._v(" "),a("p",[s._v("对于前端 er 来说，Less 或 Sass 已经是一项必备的基本技能，有了这个利器，可以省下前端开发者的很多编码时间，让你写 CSS 如行云流水一般，然后最近我在 Less 里加入 calc 时确发现了有点问题，我在 Less 中这么写：")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("calc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("100% - 30px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("结果 Less 把这个当成运算式去执行了，解析成这样：")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v('<span style="font-size:14px;">div')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("calc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("70%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("</span>\n")])])]),a("p",[s._v("当时我就郁闷了，怎么会产生这样的现象呢？后来各种查，是由于 less 的计算方式跟 calc 方法有重叠，两者在一起有冲突，于是，我在 Less 中把 calc 的写法改写成下面这样：")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v('<span style="font-size:14px;">div')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("calc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("~"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"100% - 30px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("</span>\n")])])]),a("p",[s._v("OK，解析结果正常：")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v('<span style="font-size:14px;">div')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("calc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("100% - 30px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("</span>\n")])])]),a("p",[s._v("如果需要使用变量")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("　　"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n　　  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@diff")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 30px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n　　  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("calc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("~"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v('"100% - @')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("diff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v('"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n　　"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=p.exports}}]);