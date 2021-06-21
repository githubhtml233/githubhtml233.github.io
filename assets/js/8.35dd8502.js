(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{365:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"css盒子模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css盒子模型"}},[t._v("#")]),t._v(" CSS盒子模型")]),t._v(" "),a("p",[t._v("定义：用来装页面元素的矩形区域，包含内容、边框和内外边距\n种类：")]),t._v(" "),a("ul",[a("li",[t._v("标准盒子模型（content-box）：长宽只包括内容，内外边距和边框会撑大盒子")]),t._v(" "),a("li",[t._v("IE盒子模型（border-box）： 长宽包括内外边距、边框和内容，内外边距和边框不会撑大盒子")])]),t._v(" "),a("h2",{attrs:{id:"清除浮动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动"}},[t._v("#")]),t._v(" 清除浮动")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("原因：当父元素未定义高度，子元素浮动会导致父元素高度塌陷\n")])])]),a("p",[a("strong",[t._v("方法：")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("clear:both\n在浮动的元素后插入带有clear:both属性的块级元素")])]),t._v(" "),a("li",[a("p",[t._v("伪元素clearfix\n在父元素上添加clearfix类，并将样式应用如下：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".clearfix:after")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" both"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])])]),t._v(" "),a("li",[a("p",[t._v("overflow\n父元素设置 overflow: auto;")])]),t._v(" "),a("li",[a("p",[t._v("父级元素定义高度")])])]),t._v(" "),a("h2",{attrs:{id:"bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc"}},[t._v("#")]),t._v(" BFC")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("块级格式化上下文，是一个独立的容器，内部元素和外部元素不相互影响。\n")])])]),a("p",[a("strong",[t._v("触发条件：")])]),t._v(" "),a("ul",[a("li",[t._v("根元素")]),t._v(" "),a("li",[t._v("float不为none")]),t._v(" "),a("li",[t._v("overflow不为visible")]),t._v(" "),a("li",[t._v("display为inline-block、table-cell、table-caption")]),t._v(" "),a("li",[t._v("position的值为absolute、fixed")])]),t._v(" "),a("h2",{attrs:{id:"css垂直水平居中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css垂直水平居中"}},[t._v("#")]),t._v(" CSS垂直水平居中")]),t._v(" "),a("p",[t._v("行内元素：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("text_align = center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  line-height = height\n")])])]),a("p",[t._v("块级元素：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("- "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0 auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 除了在ie上兼容性不强。几乎是最优选择 */")]),t._v("\n- "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" justify-content = center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" align-items = center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 不需要提前知道尺寸 */")]),t._v("\n- "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 垂直居中 */")]),t._v("\n- "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" table-cell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("vertcal-middle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" middle\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 需提前知道尺寸, margin-top和margin-left为自己高宽的一半 */")]),t._v("\n- "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -40px\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 不需要提前知道尺寸 */")]),t._v("\n- "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" -50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"画一条0-5px的线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#画一条0-5px的线"}},[t._v("#")]),t._v(" 画一条0.5px的线")]),t._v(" "),a("ul",[a("li",[t._v("使用meta viewport ,设置initial-scale、min-scale、max-scale为0.5")]),t._v(" "),a("li",[t._v("使用transform:scaleY(0.5)")])]),t._v(" "),a("h2",{attrs:{id:"css选择器及优先级和可继承属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css选择器及优先级和可继承属性"}},[t._v("#")]),t._v(" CSS选择器及优先级和可继承属性")]),t._v(" "),a("p",[a("strong",[t._v("选择器:")])]),t._v(" "),a("ol",[a("li",[t._v("id选择器")]),t._v(" "),a("li",[t._v("类选择器")]),t._v(" "),a("li",[t._v("标签选择器")]),t._v(" "),a("li",[t._v("属性选择器")]),t._v(" "),a("li",[t._v("相邻选择器")]),t._v(" "),a("li",[t._v("子元素选择器")]),t._v(" "),a("li",[t._v("后代选择器")]),t._v(" "),a("li",[t._v("通配符选择器")]),t._v(" "),a("li",[t._v("伪类选择器")]),t._v(" "),a("li",[t._v("伪元素选择器")])]),t._v(" "),a("p",[a("strong",[t._v("优先级：")]),t._v("\n元素标签:1\n类选择器：10\nid选择器：100\n内联样式：1000")]),t._v(" "),a("p",[a("strong",[t._v("注：")])]),t._v(" "),a("blockquote",[a("p",[t._v("！important声明的样式优先级最高；\n如果优先级一样，则选择后出现的样式；\n继承得到的样式优先级最低。")])]),t._v(" "),a("p",[a("strong",[t._v("可继承属性：")])]),t._v(" "),a("ol",[a("li",[t._v("font-size")]),t._v(" "),a("li",[t._v("font-family")]),t._v(" "),a("li",[t._v("color")]),t._v(" "),a("li",[t._v("ul")]),t._v(" "),a("li",[t._v("li")]),t._v(" "),a("li",[t._v("dl")]),t._v(" "),a("li",[t._v("dt")]),t._v(" "),a("li",[t._v("dd")])])])}),[],!1,null,null,null);s.default=e.exports}}]);