# JavaScript
## 闭包
### 定义
指有权访问另一函数作用域中变量的函数，也可以说是在创建它的上下文中保存变量的函数，即使在该上下文之外调用它，这些变量仍然可以被访问和修改。闭包使得函数能够“记住”并访问其词法作用域，即使函数在其词法作用域外被执行。

### 原理
闭包依赖于词法作用域，即在代码编写时确定变量和函数的可访问性。每当一个函数被创建时，闭包包含这个函数和它在定义时所在的词法作用域中的变量。

### 闭包的例子
#### 例子1：基本闭包
```js
function outerFunction() {
    let outerVariable = 'I am outside!';
    
    function innerFunction() {
        console.log(outerVariable);
    }
    
    return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // 输出: I am outside!
```
在这个例子中，innerFunction 是一个闭包，即使在 outerFunction 执行完成后，innerFunction 依然能够访问 outerVariable。
#### 例子2：模拟私有变量
闭包可以用来模拟私有变量，避免直接访问
```js
function createCounter() {
    let count = 0;
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 输出: 1
console.log(counter.increment()); // 输出: 2
console.log(counter.decrement()); // 输出: 1
console.log(counter.getCount());  // 输出: 1
```
在这个例子中， count 变量是 createCounter 私有变量，只能通过返回的对象的方法来访问和修改。
#### 例子3：循环中的闭包问题及其解决
在使用 var 声明变量时，循环中的闭包常常会遇到问题。
```js
function createFunctions() {
    var functions = [];
    
    for (var i = 0; i < 3; i++) {
        functions.push(function() {
            console.log(i);
        });
    }
    
    return functions;
}

const funcs = createFunctions();
funcs[0](); // 输出: 3
funcs[1](); // 输出: 3
funcs[2](); // 输出: 3
```
在这个例子中，所有函数都引用了相同的 i 变量。当这些函数被调用时，i 的值已经是 3 了。
可以通过使用 let 来解决这个问题，因为 let 具有块级作用域。
```js
function createFunctions() {
    var functions = [];
    
    for (let i = 0; i < 3; i++) {
        functions.push(function() {
            console.log(i);
        });
    }
    
    return functions;
}

const funcs = createFunctions();
funcs[0](); // 输出: 0
funcs[1](); // 输出: 1
funcs[2](); // 输出: 2
```
现在每个闭包都有自己独立的 i 变量，因此输出值是正确的

#### 闭包的应用场景
1. 数据封装：使用闭包封装数据，使其只能通过特定方法访问
2. 函数工厂：生成特定的函数，例如带有预设参数的函数
3. 回调函数和事件处理：闭包在异步编程中非常有用，能够保留回调函数中的上下文
4. 模块模式：实现模块模式，封装私有数据和方法，暴露公共接口
## 对象与类
什么是对象 对象可以被看作一组没有特定顺序的值。 在对象中，属性可分为数据属性和访问器属性，且都有一些内部特性描述属性的特征。这种内部特征用[[Property]]标识，其中Property表示不同的标识。

### 继承

1. 原型链

将父类的实例作为子类的原型
```js
function SuperType() {
	this.property = true;
}
SuperType.prototype.getSuperValue = function() {
	return this.property;
}
function SubType() {
	this.subproperty = false;
}
//继承SuperType
SubType.prototype = new SuperType();
SubType.getSubValue = function() {
	return this.subproperty;
}
let instance = new SubType();
console.log(instance.getSuperValue()) //true
```
**优点：**实现简单 缺点：

原型中包含的引用值会在所有实例中共享
子类型在实例化时不能给父类型的构造函数传参
2. 盗用构造函数

在子类构造函数中调用父类构造函数
```js
funciton SuperType() {
	this.colors = ["red", "blue", "green"];
}
function SubType() {
	SuperType.call(this);
}
let instance1 = new SubType();
instance.colors.push("black");
console.log(instance1.colors) //["red", "blue", "green", "black"]
let instance2 = new SuperType();
console.log(instance2.colors) //["red", "blue", "green"]
优点：

可以在子类构造函数中向父类构造函数传参
function SuperType(name) {
	this.name = name;
}
function SubType() {
	SuperType.call(this,"Yang");
	this.age = 24;
}
let instance = new SubType();
console.log(instance.name); //Yang
console.log(instance.age); //24
```
缺点：

必须在构造函数中定义方法，导致函数不能重用
3. 组合继承

综合原型链和盗用构造函数，用原型链继承原型上的属性和方法，通过盗用函数继承实例属性。是JS中使用最多的继承模式。
```js
function SuperType() {
	this.name = "Yang";
	this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function() {
	console.log(this.name);
}
function SubType(name, age) {
	//继承属性
	SuperType.call(this, name);
	this.age = 24;
}
//继承方法
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function() {
	console.log(this.age);
}
let instance1 = new Subtype("Yang", "24");
instance1.colors.push("black");
console.log(instace1.colors) //["red", "blue", "green", "black"]
instance1.sayName(); //Yang
instance1.sayAge(); //24

let instance2 = new Subtype("Xiong", "29");
console.log(instance2.colors);
instance2.sayName(); //Xiong
instance2.sayAge(); //29
```
缺点：两次调用父类构造函数

4. 寄生式继承

创建一个实现继承的函数，以某种方式增强对象，然后返回这个对象。 适合主要关注对象，而不在乎类型和构造函数的场景。
```js
function createAnother(original) {
	let clone = object(original); //通过调用函数创建一个新对象
	clone.sayHi = function() { //以某种方式增强对象
		console.log("hi");
	}
	return clone; //返回对象
}
let person = {
	name: "Yang",
	frend:["Zhou", "Wu", "Zheng", "Wang"]
};
let anotherPerson = creatAnother(person);
anotherPerson.sayHi(); //"hi"
```
5. 寄生式组合继承

由于组合继承存在效率问题：父类构造函数始终会被调用两次,因此提出寄生式组合继承：通过调用父类构造函数继承属性，使用混合式原型链继承方法，即使用寄生式继承父类原型。
```js
function inheritPrototype(subType, superType) {
	let prototype = object(superType.prototype); //创建父类原型副本
	prototype.constructor = subType; //增强对象
	subType.prototype = prototype; //赋值对象
}
function SuperType(name) {
	this.name = name;
	thih.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayNme = function() {
	console.log(this.name);
}
function SubType(name, age) {
	SuperType.call(this, name);
	this.age = age;
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function() {
	console.log(this.age);
}
```
只调用一次SuperType构造函数，是引用类型继承的最佳模式。

### 类定义

- 类声明
```js
class Person {}
```
- 类表达式
```js
const Animal = class {};
```
### 类的实例化

使用new调用类的构造函数进行实例化。其具体执行过程如下。

在内存中创建一个新对象。
这个新对象内部的[[prototype]]指针被赋值为构造函数的prototype属性
构造函数的this被赋值为新对象
执行构造函数操作
如果构造函数返回非空对象，则返回该对象，否则返回创建的新对象。
## 作用域与作用域链
作用域：定义变量的区域，有一套访问变量的规则 作用域链：指向变量对象的指针列表，能让我们访问外部环境的变量和函数。

## this、call、apply和bind
全局范围内，this指向window
函数中，this指向最后调用它的对象
构造函数中，this指向创建的新对象
call、apply和bind强行改变this指向
箭头函数中，this指向为离它最近的父作用域this
## 事件循环机制
### 定义
事件循环是 JavaScript 运行时的一部分，用于处理和协调执行代码、收集和处理事件、执行子任务等。它允许 JavaScript 在单线程环境中实现异步编程，确保非阻塞地执行。
### 原理
事件循环的核心是一个简单的循环机制，用于监控和处理各种任务队列。以下是事件循环的主要步骤：
1. 执行栈：这是一个后进先出的栈结构，用于存储所有执行上下文（包括函数调用、全局代码等）。当前正在执行的代码总是在栈顶。
2. 宏任务队列：用于存储需要异步执行的任务，包括 setTimeout、setInterval、I/O 操作等。
3. 微任务队列：用于存储需要尽快执行的任务，包括 Promise 回调、MutationObserver 等。
### 事件循环的具体执行步骤
1. 从执行栈中取出所有同步代码，直至执行栈为空
2. 检查微任务队列，如果不为空，则依次取出并执行所有微任务，直到微任务队列为空。
3. 执行一个宏任务（从宏任务队列中取出第一个任务并执行）
4. 更新渲染（如果需要）
5. 重复上述步骤
### 事件循环的示例
#### 示例1：基本事件循环
```js
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');
```
执行结果：
```js
Start
End
Promise
Timeout
```
解释：
1. console.log('Start') 和 console.log('End') 是同步任务，直接执行，输出 'Start' 和 'End'。
2. setTimeout 的回调是宏任务，放入宏任务队列。
3. Promise.resolve().then 是微任务，放入微任务队列
4. 执行完所有同步任务后，检查微任务队列，执行 Promise 的回调，输出 'Promise'。
5. 最后执行宏任务队列中的 setTimeout 回调，输出 'Timeout'。
#### 示例2：嵌套的微任务和宏任务
```js 
console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
  Promise.resolve().then(() => {
    console.log('Promise 1');
  });
}, 0);

setTimeout(() => {
  console.log('Timeout 2');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 2');
  setTimeout(() => {
    console.log('Timeout 3');
  }, 0);
});

console.log('End');
```
执行结果：
```js
Start
End
Promise 2
Timeout 1
Promise 1
Timeout 2
Timeout 3
```
解释：
1. 同步任务按顺序执行，输出 Start 和 End。
2. setTimeout 回调放入宏任务队列，Promise 放入微任务队列。
3. 执行完同步任务后，先执行微任务 Promise 2，输出 Promise 2，然后将 Timeout 3 放入宏任务队列。
4. 执行宏任务队列 Timeout 1，输出 Timeout 1，然后它添加的微任务 Promise 1 放入微任务队列。
5. 执行微任务 Promise 1，输出 Promise 1 。
6. 执行宏任务 Timeout 2，输出 Timeout 2 。
7. 执行宏任务 Timeout 3，输出 Timeout 3 。

> 总而言之，微任务先于宏任务执行，微任务执行阶段是清空整个微任务队列，而宏任务执行阶段只取出一个宏任务执行，该任务执行完毕后又循环取执行微任务。