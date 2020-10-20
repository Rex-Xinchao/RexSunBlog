[[toc]]

### Dom 操作

- 获取 dom 节点
  | 说明 | 获取所有的节点类型 | 只会获取到元素节点类型 |
  | :------------- |:-------------| :-----|
  | 所有子节点 | Dom.childNodes| Dom.children |
  | 第一个子节点 | Dom.firstChild | Dom.firstElementChild |
  | 最后一个子节点 | Dom.lastChild | Dom.lastElementChild |
  | 下一个兄弟节点 | Dom.nextSibling | Dom.nextElementSibling |
  | 上一个兄弟节点 | Dom.previousSibling | Dom.previousElementSibling |
  | 父节点 | Dom.parentNode | Dom.parentElement |
  | 所有子节点个数 | -- | Dom.childElementCount |
- 操作 dom 节点
  > - 增加文本节点：document.createTextNode("文本内容")
  > - 增加元素节点：document.createElement("元素名")
  > - 追加节点：父元素.appendChild(要插入的节点)
  > - 插入节点：父元素.insertBefore(要插入的节点,插入位置前的节点)
  > - 替换节点：父元素.replaceChild(新的节点,旧的节点)
  > - 移除节点：父元素.removeChild(要移除的子节点)
  > - 克隆节点：复制节点.cloneNode(true/false)

```javascript
// 插入dom
const ele = document.createElement('元素名')
// 追加法
ele.appendChild(text)
// 插入法
ele.insertBefore(text, ele.lastElementChild)
ele.insertBefore(text, null)
ele.insertBefore(text, undefined)
// 如果第二个参数传入的是undefined或者null,那么效果跟appendChild方法一样

// 克隆dom
<ul class="ul1">
  <li>第 1 个 li</li>
  <li>第 2 个 li</li>
  <li>第 3 个 li</li>
</ul>

const ul = document.querySelector('.ul1')
//复制一份ul成为ul的下一个兄弟
ul.parentElement.insertBefore(ul.cloneNode(true), ul.nextElementSibling)
```

- 节点属性操作
  > - 添加 attr：节点.setAttribute(key, value)
  > - 删除 attr：节点.removeAttribute(key)
  > - 获取 attr：节点.getAttribute(key)

### Event 事件

| 事件     | IE 浏览器                   | 其他                                |
| :------- | :-------------------------- | :---------------------------------- |
| 添加事件 | DOM.attachEvent(event,func) | DOM.addEventListener(event,func)    |
| 移除事件 | DOM.attachEvent(event,func) | DOM.removeEventListener(event,func) |

- 鼠标事件

  > - 点击事件：onclick
  > - 双击事件：ondbclick
  > - 按下鼠标按钮执行：onmousedown
  > - 松开鼠标按钮执行：onmouseup
  > - 鼠标移动都某个 HTML 标签上：onmouseover
  > - 鼠标停留都某个 HTML 标签上：onmouseenter
  > - 鼠标移出都某个 HTML 标签上：onmouseout
  > - 滚轴事件：onmousewheel

- 键盘事件

  > - 按下按键：onkeydown
  > - 松开按键：onkeyup
  > - 按住按键：onkeypress

- DOM 事件流(括三个阶段)

  > - 事件捕获阶段
  > - 处于目标阶段
  > - 事件冒泡阶段

- 冒泡
  > - 阻止冒泡：e.stopPropagation()
  > - 如果不阻止冒泡，元素在执行完自身的方法后会去执行上层元素的方法

### H5 新增

- 拖拽：draggable="true"

  > 拖动的元素上触发：事件皆由拖动元素监听
  >
  > - ondragstart：用户开始拖拉元素的时候触发
  > - ondrag：元素拖动过程中触发
  > - ondragend：用户完成元素拖动后触发

  > 释放所位于的元素（容器）上触发，事件皆由容器元素监听
  >
  > - ondragenter：当拖动元素进入容器中时触发
  > - ondragover：当拖动元素在容器中拖动过程中触发
  > - ondrop：在容器中，释放拖拉时触发（要在 ondragover 清除默认事件，不然会不生效）

- 文件读取
  > fileReader 方法:
  >
  > - readAsBinaryString(file)将文件读取为二进制编码
  > - readAsText(file,[encoding])：将文件读取为文本
  > - readAsDataURL(file)：将文件读取为 DataURL

> fileReader 的状态监听(读取成功失败结果都在 this.result 里面)
>
> - onabort：中断
> - onerror：出错
> - onloadstart：开始
> - onprogress：正在读取
> - onload：成功读取
> - onloadend：读取完成，无论成功失败

```javascript
const reader = new FileReader()
reader.readAsBinaryString(file)
reader.onload = function() {
  console.log(this.result)
}
```

- 地理位置

```javascript
navigator.geolocation.getCurrentPosition(successFunc, errorFuc, options)

let options = {
  enableHighAccuracy: false, //是否高精度
  maximumAge: 30000, //30
  stimeout: 15000 //愿意等多长时间
}

let successFunc = (e) => {
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude
}

let errorFunc = (e) => {
  switch (e.code) {
    case 1:
      this.$alert(e.message, 'error') //用户选了不允许
      break
    case 2:
      this.$alert(e.message, 'error') //连不上GPS卫星，或者网络断了
      break
    case 3:
      this.$alert(e.message, 'error') //超时了
      break
    default:
      this.$alert(e.message, 'error') //未知错误，其实是err.code==0的时候
      break
  }
}
```

- 视频
  > - autoplay：autoplay (视频在就绪后马上播放)
  > - controls：controls (向用户显示控件，比如播放按钮)
  > - height：pixels (设置视频播放器的高度)
  > - loop：loop (当媒介文件完成播放后再次开始播放)
  > - muted：muted (规定视频的音频输出应该被静音)
  > - poster：URL (规定视频下载时显示的图像，或者在用户点击播放按钮前显示的图像)
  > - preload：preload/autoplay (是否在页面加载后载入视频)
  > - src：url (要播放的视频的 URL)
  > - width：pixels (设置视频播放器的宽度)

```html
<video src="movie.ogg" controls="controls">您的浏览器不支持 video 标签。</video>
```

- 音频
  > - \<audio\>：定义了声音内容
  > - \<source\>：规定了多媒体资源, 可以是多个
  > - autoplay：autoplay (视频在就绪后马上播放)
  > - controls：controls (向用户显示控件，比如播放按钮)
  > - height：pixels (设置视频播放器的高度)
  > - loop：loop (当媒介文件完成播放后再次开始播放)
  > - muted：muted (规定视频的音频输出应该被静音)
  > - poster：URL (规定视频下载时显示的图像，或者在用户点击播放按钮前显示的图像)
  > - preload：preload/autoplay (是否在页面加载后载入音频)
  > - src：url (要播放的视频的 URL)
  > - width：pixels (设置视频播放器的宽度)

```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg" />
  <source src="horse.mp3" type="audio/mpeg" />
  您的浏览器不支持 audio 元素。
</audio>
<audio src="xxx.mp3" loop="true" preload="auto" />
```
