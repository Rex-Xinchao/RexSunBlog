::: tip Tips
个人面试经历汇总
:::

## 什么是闭包
::: tip  
+ 闭包就是能够读取其他函数内部变量的函数。
+ 在js中那就是定义在函数内部的函数。
:::

## 原型链
::: tip  
+ 原型：函数 prototype指向的对象就是原型（只有函数对象才有prototype属性）。
+ 原型链：函数或对象的__proto__ 指向创建它的构造函数的原型对象。
:::

## 深拷贝
::: tip  
+ 对象A = 对象B，因为对象B获取到的是对象A指向的是一个指针，A和B的指针指向同一个存储空间。因此对象B对指针指向的值进行变更，同事会影响到对象A。
+ 深拷贝的实现方案：
    + obj = Object.assign({}, 目标对象)
    + obj = [...目标对象] //当前仅当目标对象只有一层
    + obj = JSON.parse(JSON.stringify(目标对象))
    + let obj = {} for (let key in 目标对象) { obj[key] = 目标对象[key]} 
:::

## 首屏优化的方案
::: tip  
+ 雪碧图（减少请求数）
+ 骨架屏
+ 图片懒加载
+ CDN（通过CDN引入资源和三方库）
+ 缓存（强缓存和协商缓存）
+ 服务器渲染（有利于SEO，减少浏览器的渲染压力）
+ vue-route懒加载 （vue-route的异步组件和webpack的代码分割）
    + const Foo = () => Promise.resolve({ /* 组件定义对象 */ })
    + import('./Foo.vue') // 返回 Promise
+ 打包优化
    + 使用webpack-bundle-analyzer进行分析
    + 忽略不使用的引入
    + 删除重复引入
    + hash缓存
    + 代码分割
    + 生产环境关闭
:::

## 元素居中的实现方案
::: tip  
+ margin：0 auto
+ position：absolute; top/bottom/left/rigth: 0;
+ position：absolute; left: 50%; margin-left: -50%的元素宽度
+ display：flex; align-content: center(竖直|多行) align-items: center(竖直|单行) justify-content: center(水平)
+ display：grid; align-items: center(竖直|单行) justify-content: center(水平)
:::

## vue生命周期
::: tip  
+ beforeCreate：在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
+ created：在实例创建完成后被立即调用。
+ beforeMount:在挂载开始之前被调用：相关的 render 函数首次被调用。
+ mounted:虚拟dom生成后，并挂载到实例上去之后调用该钩子。
+ beforeUpdate:数据更新时调用，发生在虚拟 DOM 打补丁之前。
+ update:由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
:::

## vue双向绑定原理
::: tip  
vue的数据双向绑定是通过数据劫持和发布-订阅者功能来实现的，实现步骤：
+ 实现一个监听者Oberver来劫持并监听所有的属性，一旦有属性发生变化就通知订阅者
+ 实现一个订阅者watcher来接受属性变化的通知并执行相应的方法，从而更新视图
+ 实现一个解析器compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相对应的订阅者
:::

## v-if和v-for的优先级
::: tip  
+ 在vue2.0当中，v-if和v-for可以并存在在一个dom上。
+ 在vue2.0当中，v-for优先级高，v-if可以使用刀v-for的key值。
+ 在vue3.0当中，v-if和v-for已经不能并存在同一个dom上。
:::

## vue筛选器过滤多个参数
::: tip
+ filter支持函数{{ message | filterA('arg1', arg2)}}
    + filterA 被定义为接收三个参数的过滤器函数。 
    + message 的值作为第一个参数
    + 表达式 'arg1' 作为第二个参数
    + 表达式 arg2 的值作为第三个参数。
+ filter支持多次过滤{{ message | filterA | filterB }}
    + message作为filterA的参数
    + filterA的结果作为filterB的参数
:::

## 严格模式
::: tip
严格模式是采用具有限制性JavaScript变体的一种方式，从而使代码脱离马虎模式/稀松模式/懒散模式模式。
+ 严格模式通过抛出错误来消除了一些原有静默错误
+ 严格模式修复了一些导致 JavaScript引擎难以执行优化的缺陷：有时候，相同的代码，严格模式可以比非严格模式下运行得更快
+ 严格模式禁用了在ECMAScript的未来版本中可能会定义的一些语法
```
// 整个脚本都开启严格模式的语法
"use strict";
1，全局变量的显示声明
2，严格模式限制了动态绑定，比如禁止使用with,创设eval的单独作用域
3，严格模式下让你头痛的this关键字不能指向全局变量了
4，不能重名：对象不能有重名属性，方法不能有重名形参
5，对于arguments的限制，严格模式下不能对其赋值了，也不再跟踪参数的变化，arguments.callee也不允许使用
6，函数必须声明在顶层，不允许在非函数代码块内声明函数
7，试图删除不可删除的属性时会抛出异常
8，严格模式禁止八进制数字语法
9，ECMAScript 6中的严格模式禁止设置primitive值的属性
10，在严格模式中一部分字符变成了保留的关键字
```
:::

## 冒泡排序
::: tip  
[算法](../JavaScript/algorithm.md#冒泡排序 "算法")
:::
