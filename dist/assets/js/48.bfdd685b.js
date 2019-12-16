(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{361:function(t,r,s){"use strict";s.r(r);var a=s(9),v=Object(a.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"color"}},[t._v("color")]),t._v(" "),s("h2",{attrs:{id:"filter"}},[t._v("filter")]),t._v(" "),s("p",[t._v("可调整元素的模糊、颜色偏移等效果。")]),t._v(" "),s("h3",{attrs:{id:"url"}},[t._v("url()")]),t._v(" "),s("p",[t._v("URL 函数接受一个 XML 文件，该文件设置了一个 SVG 滤镜，且可以包含一个锚点来指定一个具体的滤镜元素")]),t._v(" "),s("h3",{attrs:{id:"blur"}},[t._v("blur()")]),t._v(" "),s("p",[t._v("给图像设置高斯模糊。“radius”一值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起，所以值越大越模糊；如果没有设定值，则默认是 0；这个参数可设置 css 长度值，但不接受百分比值。")]),t._v(" "),s("h3",{attrs:{id:"brightness"}},[t._v("brightness()")]),t._v(" "),s("p",[t._v("给图片应用一种线性乘法，使其看起来更亮或更暗。如果值是 0%，图像会全黑。值是 100%，则图像无变化。其他的值对应线性乘数效果。值超过 100%也是可以的，图像会比原来更亮。如果没有设定值，默认是 1。")]),t._v(" "),s("h3",{attrs:{id:"contrast"}},[t._v("contrast()")]),t._v(" "),s("p",[t._v("调整图像的对比度。值是 0%的话，图像会全黑。值是 100%，图像不变。值可以超过 100%，意味着会运用更低的对比。若没有设置值，默认是 1。")]),t._v(" "),s("h3",{attrs:{id:"drop-shadow"}},[t._v("drop-shadow()")]),t._v(" "),s("p",[t._v("给图像设置一个阴影效果。阴影是合成在图像下面，可以有模糊度的，可以以特定颜色画出的遮罩图的偏移版本。 函数接受"),s("code",[t._v("<shadow>")]),t._v("（在 CSS3 背景中定义）类型的值，除了“inset”关键字是不允许的。该函数与已有的 box-shadow box-shadow 属性很相似；不同之处在于，通过滤镜，一些浏览器为了更好的性能会提供硬件加速。")]),t._v(" "),s("offset-x",[s("offset-y",[t._v(" (必须)\n"),s("p",[t._v("这是设置阴影偏移量的两个 "),s("length",[t._v("值. "),s("offset-x",[t._v(" 设定水平方向距离. 负值会使阴影出现在元素左边. "),s("offset-y",[t._v("设定垂直距离.负值会使阴影出现在元素上方。.查看 "),s("length",[t._v("可能的单位.\n如果两个值都是 0, 则阴影出现在元素正后面 (如果设置了 "),s("blur-radius",[t._v(" and/or "),s("spread-radius",[t._v("，会有模糊效果).\n"),s("blur-radius",[t._v(" (可选)\n这是第三个 "),s("length",[t._v("值. 值越大，越模糊，则阴影会变得更大更淡.不允许负值 若未设定，默认是 0 (则阴影的边界很锐利).\n"),s("spread-radius",[t._v(" (可选)\n这是第四个 "),s("length",[t._v(" 值. 正值会使阴影扩张和变大，负值会是阴影缩小.若未设定，默认是 0 (阴影会与元素一样大小).\n注意: Webkit, 以及一些其他浏览器 不支持第四个长度，如果加了也不会渲染。\n"),s("color",[t._v(" (可选)\n查看 "),s("color",[t._v("该值可能的关键字和标记。若未设定，颜色值基于浏览器。在 Gecko (Firefox), Presto (Opera)和 Trident (Internet Explorer)中， 会应用 color color 属性的值。另外, 如果颜色值省略，WebKit 中阴影是透明的。")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),s("h3",{attrs:{id:"grayscale"}},[t._v("grayscale()")]),t._v(" "),s("p",[t._v("将图像转换为灰度图像。值定义转换的比例。值为 100%则完全转为灰度图像，值为 0%图像无变化。值在 0%到 100%之间，则是效果的线性乘子。若未设置，值默认是 0。")]),t._v(" "),s("h3",{attrs:{id:"hue-rotate"}},[t._v("hue-rotate()")]),t._v(" "),s("p",[t._v("给图像应用色相旋转。“angle”一值设定图像会被调整的色环角度值。值为 0deg，则图像无变化。若值未设置，默认值是 0deg。该值虽然没有最大值，超过 360deg 的值相当于又绕一圈。")]),t._v(" "),s("h3",{attrs:{id:"invert"}},[t._v("invert()")]),t._v(" "),s("p",[t._v("反转输入图像。值定义转换的比例。100%的价值是完全反转。值为 0%则图像无变化。值在 0%和 100%之间，则是效果的线性乘子。 若值未设置，值默认是 0。")]),t._v(" "),s("h3",{attrs:{id:"opacity"}},[t._v("opacity()")]),t._v(" "),s("p",[t._v("转化图像的透明程度。值定义转换的比例。值为 0%则是完全透明，值为 100%则图像无变化。值在 0%和 100%之间，则是效果的线性乘子，也相当于图像样本乘以数量。 若值未设置，值默认是 1。该函数与已有的 opacity 属性很相似，不同之处在于通过 filter，一些浏览器为了提升性能会提供硬件加速。")]),t._v(" "),s("h3",{attrs:{id:"saturate"}},[t._v("saturate()")]),t._v(" "),s("p",[t._v("转换图像饱和度。值定义转换的比例。值为 0%则是完全不饱和，值为 100%则图像无变化。其他值，则是效果的线性乘子。超过 100%的值是允许的，则有更高的饱和度。 若值未设置，值默认是 1。")]),t._v(" "),s("h3",{attrs:{id:"sepia"}},[t._v("sepia()")]),t._v(" "),s("p",[t._v("将图像转换为深褐色。值定义转换的比例。值为 100%则完全是深褐色的，值为 0%图像无变化。值在 0%到 100%之间，则是效果的线性乘子。若未设置，值默认是 0。")]),t._v(" "),s("h3",{attrs:{id:"复合函数"}},[t._v("复合函数")]),t._v(" "),s("p",[t._v("可以组合任意数量的函数来控制渲染")]),t._v(" "),s("div",{staticClass:"language-CSS extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("contrast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("175%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("brightness")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("3%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"currentcolor"}},[t._v("currentColor")]),t._v(" "),s("p",[t._v("当前的文字颜色。在CSS1和CSS2中定义了 border-color 属性的默认值是 color 属性的值。在CSS3中扩展了颜色值包含 currentColor 关键字，并用于所有接受颜色的属性上。")]),t._v(" "),s("p",[t._v("在iOS Safari浏览器下(iOS8)下，currentColor还是有一些bug的，例如伪元素hover时候，background:currentColor的背景色不会跟着变化")])])],1)],1)}),[],!1,null,null,null);r.default=v.exports}}]);