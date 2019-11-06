Dom元素
-------------
### 节点之间的关系
+ 第一种获取方式（以下获取节点都会获取所有的节点类型,不只是包括元素节点,还有文本类型等）
    >+ 获取一个元素节点的所有子节点：Dom.childNodes(获取到的是一个类数组NodeList)
    >+ 获取一个元素节点的第一个子节点：Dom.firstChild
    >+ 获取一个元素节点的最后一个子节点：Dom.lastChild
    >+ 获取一个元素节点的下一个节点对象：Dom.nextSibling
    >+ 获取一个元素节点的上一个节点对象：Dom.previousSibling
    >+ 获取一个元素节点的父节点：Dom.parentNode  
+ 第二种获取方式（以下获取节点只会获取到元素节点类型）
    >+ 获取一个元素节点的所有子节点：Dom.children（获取到的是一个类数组HTMLCollection）
    >+ 获取一个元素节点的第一个元素子节点：Dom.firstElementChild
    >+ 获取一个元素节点的最后一个元素子节点：Dom.lastElementChild
    >+ 获取一个元素节点的下一个兄弟元素节点：Dom.nextElementSibling
    >+ 获取一个元素节点的上一个兄弟元素节点：Dom.previousElementSibling
    >+ 获取一个元素节点的元素父节点：Dom.parentElement
    >+ 获取一个元素节点的所有子节点个数：Dom.childElementCount
    
### 节点的增加,插入,替换,移除,克隆
+ 增加节点
    >+ 增加文本节点：document.createTextNode("文本内容")
    >+ 增加元素节点：document.createElement("元素名")
+ 插入子节点
    >+ 追加法：父元素对象.appendChild(要插入的节点对象名)
    >+ 插入法：父元素对象.insertBefore(要插入的节点对象名,插入到哪个元素节点前)
   
::: tip Tips
插入节点必须通过父元素进行插入
:::
```javascript
const ele = document.createElement("元素名");
// 追加法
ele.appendChild(text);
// 插入法
ele.insertBefore(text,ele.lastElementChild);
ele.insertBefore(text,null);
ele.insertBefore(text,undefined);
// 如果第二个参数传入的是undefined或者null,那么效果跟appendChild方法一样
```   
+ 替换子节点
    >+ 父元素节点对象.replaceChild(新的节点,旧的节点)
+ 移除子节点
    >+ 父元素节点对象.removeChild(要移除的子节点对象)
+ 克隆节点
    >+ 要复制的节点对象.cloneNode(true/false)

::: tip Tips
+ true表示深复制,就是全部复制,子孙之类的全部复制
+ false表示浅复制,就是只复制当前的节点,子孙节点不会复制
:::
```html
<ul class="ul1">
    <li>第 1 个 li</li>
    <li>第 2 个 li</li>
    <li>第 3 个 li</li>
</ul>
```
```javascript
const ul = document.querySelector(".ul1");
//复制一份ul成为ul的下一个兄弟
ul.parentElement.insertBefore(ul.cloneNode(true),ul.nextElementSibling);

```
+ 节点属性操作
    >+ 添加attr：Dom对象.setAttribute(key, value)
    >+ 删除attr：Dom对象.removeAttribute(key)
    >+ 获取attr：Dom对象.getAttribute(key)

Event事件
-------------
### IE浏览器
+ 添加事件：attachEvent
    >+ DOM.attachEvent(event,func)
+ 移除事件：detachEvent
    >+ DOM.attachEvent(event,func)  
     
### 其他浏览器
+ 添加事件：addEventListener
    >+ DOM.addEventListener(event,func)
+ 移除事件：removeEventListener
    >+ DOM.removeEventListener(event,func)  
    
### 鼠标事件
+ 点击事件：onclick
+ 双击事件：ondbclick
+ 按下鼠标按钮执行：onmousedown
+ 松开鼠标按钮执行：onmouseup
+ 鼠标移动都某个HTML标签上：onmouseover
+ 鼠标停留都某个HTML标签上：onmouseenter
+ 鼠标移出都某个HTML标签上：onmouseout
+ 滚轴事件：onmousewheel  

### 键盘事件
+ 按下按键：onkeydown
+ 松开按键：onkeyup
+ 按住按键：onkeypress

### DOM事件流
+ "DOM2事件流"规定的事件流包括三个阶段
    >+ 事件捕获阶段
    >+ 处于目标阶段
    >+ 事件冒泡阶段


### 冒泡
+ 阻止冒泡：e.stopPropagation()
+ 如果不阻止冒泡，元素在执行完自身的方法后会去执行上层元素的方法