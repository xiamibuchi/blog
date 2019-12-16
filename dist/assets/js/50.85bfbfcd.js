(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{362:function(_,v,i){"use strict";i.r(v);var t=i(9),l=Object(t.a)({},(function(){var _=this,v=_.$createElement,i=_._self._c||v;return i("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[i("h1",{attrs:{id:"命名"}},[_._v("命名")]),_._v(" "),i("h2",{attrs:{id:"基本概念"}},[_._v("基本概念")]),_._v(" "),i("ol",[i("li",[_._v("样式不从页面布局，而是将页面分模块考虑")]),_._v(" "),i("li",[_._v("样式不考虑别的文档区域")]),_._v(" "),i("li",[_._v("与html无关")]),_._v(" "),i("li",[_._v("尽量使用 class 而不是 id")])]),_._v(" "),i("h2",{attrs:{id:"bem"}},[_._v("BEM")]),_._v(" "),i("p",[_._v("BEM 由块（block）、元素（element）、修饰符（modifier）组成")]),_._v(" "),i("ol",[i("li",[_._v("Block（块）。块是网页逻辑和功能的独立组件。块是可嵌套的。，能被包含在另一个块中，而不会破坏任何样式。块是可重复的。界面应该能够包含同一块的多个实例。")]),_._v(" "),i("li",[_._v("Element（元素）。元素是块的组成部分，不能在块之外使用。")]),_._v(" "),i("li",[_._v("Modifier（修饰符）。修饰符定义块的外观和行为。例如，菜单块的外观的垂直或水平，取决于所使用的修饰符。")])]),_._v(" "),i("h3",{attrs:{id:"命名约定"}},[_._v("命名约定")]),_._v(" "),i("p",[_._v(".block-name__element--modifier")]),_._v(" "),i("ol",[i("li",[_._v("名称以小写字母书写")]),_._v(" "),i("li",[_._v("名称中的单词用连字符（-）分隔")]),_._v(" "),i("li",[_._v("元素由双下划线（__）分隔")]),_._v(" "),i("li",[_._v("修饰符由双连字符（--）分隔")]),_._v(" "),i("li",[_._v("不嵌套 CSS，使用 .btn__price 而不是 .btn .btn__price 。")])]),_._v(" "),i("p",[_._v("即使是在 Sass 或 Less 也不该使用层级嵌套，但是可以使用 .btn__text 然后用 .btn--orange .btn__text 来覆盖应用了修饰符按钮的文本颜色")]),_._v(" "),i("h3",{attrs:{id:"smacss"}},[_._v("SMACSS")]),_._v(" "),i("p",[_._v("SMACSS 的含义是 CSS 的可扩展性和模块化架构（Scalable & Modular Architecture）")]),_._v(" "),i("p",[_._v("SMACSS 更像是对 OOCSS 和 BEM 的扩展，即通过命名规则以更好的识别区分 CSS 类名的作用。")]),_._v(" "),i("h3",{attrs:{id:"类别"}},[_._v("类别")]),_._v(" "),i("p",[_._v("CSS 系统可能包含的规则定义的类别：")]),_._v(" "),i("ul",[i("li",[_._v("基础（base） 规则是HTML元素的默认样式，如链接，段落和标题。")]),_._v(" "),i("li",[_._v("布局（grid） 规则将页面分成几个部分，并将一个或多个模块组合在一起。它们只定义布局，而不管颜色或排版。")]),_._v(" "),i("li",[_._v("模块（module）（又名“对象”或“块”）是可重用的，设计中的一个模块。例如，按钮，媒体对象，产品列表等。")]),_._v(" "),i("li",[_._v("状态（state） 规则描述了模块或布局在特定状态下的外观。通常使用 JavaScript 应用或删除。例如，隐藏，扩展，激活等。")]),_._v(" "),i("li",[_._v("主题（theme） 规则描述了模块或布局在主题应用时的外观，例如，在 Yahoo Mail 中，可以使用用户主题，这会影响页面上的每个模块。")])]),_._v(" "),i("h3",{attrs:{id:"命名约定前缀"}},[_._v("命名约定前缀")]),_._v(" "),i("ul",[i("li",[_._v("布局（grid）（.g-）：将页面分割为几个大块，通常有头部、主体、主栏、侧栏、尾部等！")]),_._v(" "),i("li",[_._v("模块（module）（.m-）：通常是一个语义化的可以重复使用的较大的整体！比如导航、登录、注册、各种列表、评论、搜索等！")]),_._v(" "),i("li",[_._v("元件（unit）（.u-）：通常是一个不可再分的较为小巧的个体，通常被重复用于各种模块中！比如按钮、输入框、loading、图标等！")]),_._v(" "),i("li",[_._v("功能（function）（.f-）：为方便一些常用样式的使用，我们将这些使用率较高的样式剥离出来，按需使用，通常这些选择器具有固定样式表现，比如清除浮动等！不可滥用！")]),_._v(" "),i("li",[_._v("皮肤（skin）（.s-）：如果你需要把皮肤型的样式抽离出来，通常为文字色、背景色（图）、边框色等，非换肤型网站通常只提取文字色！非换肤型网站不可滥用此类！")]),_._v(" "),i("li",[_._v("状态（.z-）：为状态类样式加入前缀，统一标识，方便识别，她只能组合使用或作为后代出现（.u-ipt.z-dis{}，.m-list li.z-sel{}），具体详见命名规则的扩展相关项。")])])])}),[],!1,null,null,null);v.default=l.exports}}]);