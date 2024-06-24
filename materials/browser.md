# 浏览器的基本工作原理

## 浏览器渲染过程
首先我们来简单了解下浏览器渲染过程，这个过程一般包含以下步骤：
1. 处理 HTML：浏览器接收到 HTML 文档后，开始解析 HTML 标签，生成 DOM 树（Document Object Model Tree）。
2. 处理 CSS： 解析 CSS 文件和内嵌的样式，生成 CSSOM 树（CSS Object Model Tree）。
3. 构建渲染树：将 DOM 和 CSSOM 树结合起来，生成渲染树（Render Tree）。渲染树包含了需要显示在屏幕上的所有结点。
4. 布局（重排）：浏览器计算渲染树中每个节点的位置和大小。
5. 绘制（重绘）：将渲染树中的每个节点绘制到屏幕上。

接着我们对每一个步骤进行更为详细地讲解：
### 处理 HTML
当浏览器接收到 HTML 文档后，会逐行解析 HTML 标签，生成 DOM 树。DOM 树是一种树状结构，表示 HTML 文档的结构。
#### 例子
##### HTML 文档
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <div id="container">
      <h1>Hello, World!</h1>
      <p>This is a simple example.</p>
    </div>
  </body>
</html>
```
##### 生成的 DOM 树
```markdown
- html
  - head
    - title
      - "Example"
  - body
    - div#container
      - h1
        - "Hello, World!"
      - p
        - "This is a simple example."
```
### 处理 CSS
浏览器解析 CSS 样式和内嵌样式，生成 CSSOM 树。CSSOM 树描述了文档的样式规则。
#### 例子
##### CSS 样式
```css
body {
  font-family: Arial, sans-serif;
}
#container {
  width: 80%;
  margin: 0 auto;
}
h1 {
  color: blue;
}
p {
  color: green;
}
```
##### 生成的 CSSOM 树
```markdown
- body
  - font-family: Arial, sans-serif
- #container
  - width: 80%
  - margin: 0 auto
- h1
  - color: blue
- p
  - color: green
```
### 构建渲染树
浏览器将 DOM 树和 CSSOM 树结合起来，生成渲染树。渲染树包含了需要显示在屏幕上的所有节点。
#### 例子
渲染树中的每个节点都包含了需要绘制的内容和样式信息：
```markdown
- RenderRoot
  - RenderBlock (body)
    - RenderBlock (div#container)
      - RenderInline (h1)
        - "Hello, World!"
      - RenderInline (p)
        - "This is a simple example."
```
渲染树省略了那些不可见的元素，比如 `<head>` 中的内容
### 布局（重排）
浏览器计算渲染树中每个节点的位置和大小。这个过程称为布局或重排。布局从渲染树的根节点开始，根据 CSS 盒模型计算每个节点的位置和尺寸。
#### 例子
假设浏览器窗口宽度为 1000 px，渲染树的布局计算可能如下：
`body`：宽度1000px，高度根据内容确定
`div#container`：宽度80%（800px），水平居中（左右各100px的margin）
`h1`和`p`：根据内容和样式计算高度和位置
### 绘制（重绘）
浏览器将渲染树中的每个节点绘制到屏幕上。绘制过程涉及将样式应用到节点上，并调用系统的绘制功能绘制每个像素。
#### 例子
浏览器使用绘制引擎（如Skia或Direct2D）将每个节点的内容绘制到屏幕上：

绘制`div#container`的背景和边框
绘制`h`1的蓝色文本 “Hello, World!”
绘制`p`的绿色文本 “This is a simple example.”
### 增量更新
当页面内容或样式发生变化时，浏览器会进行增量更新。这通常涉及以下几种情况：
- DOM 变化：添加、删除或修改节点
- 样式变化： 修改 CSS 样式
- 布局变化： 节点的位置或尺寸发生变化
- 重绘： 节点的外观发生变化（如颜色、字体等）
#### 例子
```js 
// 修改DOM
let container = document.getElementById('container');
let newElement = document.createElement('p');
newElement.textContent = 'This is a new paragraph.';
container.appendChild(newElement);

// 修改样式
container.style.backgroundColor = 'lightgrey';
```
### 优化技巧
- 减少 DOM 操作：尽量减少直接的 DOM 操作，使用文档片段（DocumentFragment）批量操作 DOM
- 减少重排和重绘：避免频繁修改影响布局的属性，使用 CSS 类进行样式修改
- 使用虚拟 DOM：如 React 中的虚拟 DOM 机制，通过差异计算（diffing）最小化实际的 DOM 操作
#### 例子
```js
// 使用文档片段批量添加元素
let fragment = document.createDocumentFragment();
for (let i = 0; i < 10; i++) {
  let newElement = document.createElement('p');
  newElement.textContent = `Paragraph ${i + 1}`;
  fragment.appendChild(newElement);
}
container.appendChild(fragment);
```
## 浏览器有哪些进程
一般来说至少有以下四个进程：
- 浏览器进程：整个浏览器的主进程，负责协调、控制其他进程
- 渲染进程（内核进程）：负责渲染页面内容的进程
- GPU 进程：负责处理浏览器中与图形相关的任务，例如加速页面绘制、处理 CSS 动画、执行 WebGL 操作等。GPU 进程与渲染进程分离，以提高性能

渲染进程一般有 5 类线程
- GUI 渲染线程：负责渲染网页，当页面触发重绘、回流时该线程也会执行
- JS 引擎线程：该线程是使用 js 引擎处理 JavaScript 脚本程序，解析 JavaScript 脚本，运行代码
> GUI 渲染线程和 JS 引擎线程是互斥的（因为 GUI 渲染线程和 JavaScript 引擎线程都需要访问和操作 DOM，所以做了线程安全处理），当 JS 引擎执行时 GUI 线程会被挂起，GUI 更新会被保存在一个队列中等待 JS 引擎空闲时再执行。这也是为什么 JS 文件会阻塞页面加载，一般最好放在 HTML 底部引入的原因。
- 事件触发线程：负责处理用户输入和触发相应的事件（例如，点击按钮时，事件触发线程会负责处理这个点击事件）。它管理一个事件队列，当相应的事件被触发后，事件触发线程会把该事件添加到事件队列的队尾，等待 JS 引擎的处理。
- 定时器触发线程：负责处理 setTimeout 和 setInterval 等方法设置的定时器，触发相应的回调函数。
- 异步 HTTP 请求线程：XMLHttpRequest 连接后，浏览器会新开一个线程请求，检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件，将回调函数放入事件队列中，等待 JS 引擎空闲后执行
> 为什么事件触发、定时器触发、异步 HTTP 请求都会有各自的线程处理呢？因为 JS 引擎是单线程的，这些异步任务会阻塞 JS 的执行。所以要单独开启几个线程和主线程并行执行。这些处理异步操作的线程会把所有异步任务放到一个任务队列中，等待 JS 引擎空闲时，再把他们添加到可执行栈中开始执行（事件循环机制）
## 渲染进程的作用
除了上面提到的渲染流程，渲染进程的作用还包括：
1. 合成：将各个图层按正确的顺序（根据层叠顺序 z-index 和透明度等因素）合成为最终的画面页面，提高绘制性能
2. 处理用户输入：监听用户输入事件（鼠标点击、键盘输入等），并触发相应的事件处理程序
3. 脚本执行：执行页面中的 JavaScript 脚本，响应用户交互、更新页面内容
4. 处理网络请求：处理页面发起的网络请求，包括获取 HTML、CSS、JavaScript 文件等
5. 插件管理：如果页面使用了插件，渲染进程会与插件进行交互
6. 内存管理：管理渲染进程的内存使用，确保不发生内存泄漏等问题
7. 安全性：实施浏览器的安全策略，防止恶意脚本和攻击 
## 渲染进程中的异步 HTTP 请求线程和网络进程有什么区别？
渲染进程中的异步 HTTP 请求线程是专门用来处理 JavaScript 层面的异步网络请求的，例如使用 XMLHttpRequest 对象或 Fetch API 。而网络进程就比较全面，它负责处理所有的网络操作，包括页面导航、处理主页面请求、子页面请求、资源加载等。另外他们俩是协同工作的，例如 JS 发起的异步网络请求，要经历 DNS 解析 -> 建立连接 -> 发送请求 -> 接收响应。当 HTTP 异步请求线程处理 JS 代码发起的异步网络请求时，DNS 解析和建立通常在网络进程中执行，HTTP 异步请求线程则发送请求和接收响应。
## 浏览器的垃圾回收机制
目前的现代浏览器（如 Chrome、Firefox、Safari 等）使用高效的垃圾回收算法来管理 JavaScript 的内存。这些算法主要是标记-清除和分代收集。
### 标记-清除算法
#### 基本原理
1. 标记阶段：从根对象（如全局对象和局部变量）开始，递归地遍历所有可以到达的对象，并标记这些对象为活跃状态
2. 清除阶段：遍历堆中的所有对象，回收那些没有被标记为活跃状态的对象的内存
这种方法的好处是能够正确处理循环引用问题。
```js
let a = { name: "Alice" };
let b = { name: "Bob" };
a.friend = b;
b.friend = a;

// 删除引用
a = null;
b = null;

// 垃圾回收器会正确回收a和b指向的对象，因为没有任何根对象指向它们
```
在上述例子中，尽管 a 和 b 互相引用，但由于没有任何根对象指向它们，因此它们的内存会被正确回收。
### 分代收集算法
现代浏览器通常采用分代收集算法，因为它能更高效地处理不同生命周期的对象。分代收集将堆内存分为几代，通常为"年轻代"（Young Generation）和"老年代"（Old Generation）。
#### 基本原理
1. 年轻代：存放新创建的对象，垃圾回收频率高。大多数新对象很快会变成垃圾（即对象的生命周期短）。
2. 老年代：存放生命周期较长的对象。从年轻代晋升的对象会被移到老年代。垃圾回收频率低。
**年轻代回收（Minor GC）**
- 当年轻代的内存用尽时，进行一次 Minor GC
- 将仍然活跃的对象移到老年代
**老年代回收（Major GC）**
- 当老年代的内存用尽时，进行一次 Major GC
- 对整个堆进行标记-清除和压缩处理
### 增量标记
为减少垃圾回收带来的停顿时间，现代垃圾回收器使用增量标记技术。增量标记将标记过程分为多个小步骤，与应用程序的执行交替进行，从而减少每次垃圾回收的停顿时间
### 三色标记算法
三色标记算法是一种常用的增量标记算法，将对象分为三种颜色：
1. 白色：尚未方位的对象
2. 灰色：已访问但其引用的对象尚未完全标记的对象
3. 黑色：已访问且其引用的对象已全部标记的对象
通过这种方法，垃圾回收期可以在应用程序运行时逐步标记和清除对象，从而减少停顿时间
### V8 引擎中的垃圾回收
V8 是 Google Chrome 和 Node.js 使用的 JavaScript 引擎。V8 的垃圾回收器使用了上述技术并进行了优化：
- Scavenger：用于年轻代的垃圾回收，采用半空间复制算法。
- Mark-Sweep-Compact：用于老年代的垃圾回收，采用标记-清除和标记-压缩算法。
- Incremental Marking：减少垃圾回收停顿时间的增量标记。
- Concurrent Marking：在后台线程进行标记，进一步减少停顿时间。
### JavaScript 内存管理最佳实践
尽管 JavaScript 又垃圾自动回收机制，但遵循以下最佳实践可以帮助优化性能并减少内存泄漏：
- 避免全局遍历：全局遍历生命周期长，容易造成内存泄漏
- 清理不再使用的引用：及时将不再使用的对象设为 null，帮助垃圾回收器识别
- 避免闭包中的不必要引用：闭包容易导致内存泄漏，确保不再需要的变量不被闭包引用
- 使用 WeakMap 和 WeakSet：当需要临时存储对象且不影响垃圾回收时，使用 WeakMap 和 WeakSet
**示例**
```js
function createClosure() {
    let largeArray = new Array(1000000).fill("data");

    return function() {
        console.log(largeArray[0]);
    }
}

let closure = createClosure();
// closure保持了对largeArray的引用，largeArray不会被垃圾回收
closure = null;
// 现在largeArray可以被垃圾回收
```
通过清理对闭包的引用，可以确保 largeArray 被及时回收，避免内存泄漏