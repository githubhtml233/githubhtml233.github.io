(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{306:function(t,s,a){"use strict";a.r(s);var n=a(14),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),a("h2",{attrs:{id:"css-盒子模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-盒子模型"}},[t._v("#")]),t._v(" CSS 盒子模型")]),t._v(" "),a("p",[t._v("定义：用来装页面元素的矩形区域，包含内容、边框和内外边距 种类：")]),t._v(" "),a("ul",[a("li",[t._v("标准盒子模型（content-box）：长宽只包括内容，内外边距和边框会撑大盒子")]),t._v(" "),a("li",[t._v("IE盒子模型（border-box）： 长宽包括内外边距、边框和内容，内外边距和边框不会撑大盒子")])]),t._v(" "),a("h2",{attrs:{id:"清除浮动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动"}},[t._v("#")]),t._v(" 清除浮动")]),t._v(" "),a("p",[t._v("原因：当父元素未定义高度，子元素浮动会导致父元素高度塌陷\n*** 方法： ***")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("clear:both 在浮动的元素后插入带有clear:both属性的块级元素")])]),t._v(" "),a("li",[a("p",[t._v("伪元素clearfix 在父元素上添加clearfix类，并将样式应用如下：")])])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".clearfix:after")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" both"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[t._v("overflow 父元素设置 overflow: auto;")])]),t._v(" "),a("li",[a("p",[t._v("父级元素定义高度")])])]),t._v(" "),a("h2",{attrs:{id:"bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc"}},[t._v("#")]),t._v(" BFC")]),t._v(" "),a("p",[t._v("触发条件：")]),t._v(" "),a("p",[t._v("根元素\nfloat不为none\noverflow不为visible\ndisplay为inline-block、table-cell、table-caption\nposition的值为absolute、fixed")]),t._v(" "),a("h2",{attrs:{id:"css-垂直居中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-垂直居中"}},[t._v("#")]),t._v(" CSS 垂直居中")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("- "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0 auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 除了在ie上兼容性不强。几乎是最优选择 */")]),t._v("\n- "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" justify-content = center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" align-items = center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 不需要提前知道尺寸 */")]),t._v("\n- "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 垂直居中 */")]),t._v("\n- "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" table-cell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("vertcal-middle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" middle\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 需提前知道尺寸, margin-top和margin-left为自己高宽的一半 */")]),t._v("\n- "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -40px\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 不需要提前知道尺寸 */")]),t._v("\n- "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" -50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"画一条-0-5px-的线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#画一条-0-5px-的线"}},[t._v("#")]),t._v(" 画一条 0.5px 的线")]),t._v(" "),a("ul",[a("li",[t._v("使用meta viewport ,设置initial-scale、min-scale、max-scale为0.5")]),t._v(" "),a("li",[t._v("使用transform:scaleY(0.5)")])]),t._v(" "),a("h2",{attrs:{id:"css-优先级和可继承属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-优先级和可继承属性"}},[t._v("#")]),t._v(" CSS 优先级和可继承属性")]),t._v(" "),a("p",[a("em",[a("strong",[t._v("选择器:")])])]),t._v(" "),a("p",[t._v("id选择器\n类选择器\n标签选择器\n属性选择器\n相邻选择器\n子元素选择器\n后代选择器\n通配符选择器\n伪类选择器\n伪元素选择器\n优先级： 元素标签:1 类选择器：10 id选择器：100 内联样式：1000")]),t._v(" "),a("p",[t._v("注：")]),t._v(" "),a("p",[t._v("！important声明的样式优先级最高； 如果优先级一样，则选择后出现的样式； 继承得到的样式优先级最低。")]),t._v(" "),a("p",[t._v("可继承属性：")]),t._v(" "),a("p",[t._v("font-size\nfont-family\ncolor\nul\nli\ndl\ndt\ndd")])])}),[],!1,null,null,null);s.default=p.exports}}]);