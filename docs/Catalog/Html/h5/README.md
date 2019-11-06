拖拽
----------
### 设置拖拽属性
+ draggable="true" (是否允许拖拽)

### 拖拽事件
+ 拖动的元素上触发：事件皆由拖动元素监听
    >+ ondragstart：用户开始拖拉元素的时候触发
    >+ ondrag：元素拖动过程中触发
    >+ ondragend：用户完成元素拖动后触发
    
+ 释放所位于的元素（容器）上触发：事件皆由容器元素监听
    >+ ondragenter：当拖动元素进入容器中时触发
    >+ ondragover：当拖动元素在容器中拖动过程中触发
    >+ ondrop：在容器中，释放拖拉时触发（要在ondragover清除默认事件，不然会不生效）
    
文件读取
----------
### fileReader方法
+ readAsBinaryString(file)：将文件读取为二进制编码
+ readAsText(file,[encoding])：将文件读取为文本
+ readAsDataURL(file)：将文件读取为DataURL  

### fileReader的状态监听 (读取成功失败结果都在this.result里面)
+ onabort：中断
+ onerror：出错
+ onloadstart：开始
+ onprogress：正在读取
+ onload：成功读取
+ onloadend：读取完成，无论成功失败 

### 用法
```javascript
const reader = new FileReader();
reader.readAsBinaryString(file);
reader.onload = function() {
 console.log(this.result); 
}

```

地理位置
----------
```javascript
navigator.geolocation.getCurrentPosition(successFunc, errorFuc, options);

let options = { 
  enableHighAccuracy: false, //是否高精度
  maximumAge: 30000, //30
  stimeout: 15000 //愿意等多长时间
   };

let successFunc = e => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
};

let errorFunc = e => {
    switch (e.code) {
    case 1 :
        this.$alert(e.message, 'error');//用户选了不允许
        break;
    case 2:
        this.$alert(e.message, 'error');//连不上GPS卫星，或者网络断了
        break;
    case 3:
        this.$alert(e.message, 'error');//超时了
        break;
    default:
        this.$alert(e.message, 'error');//未知错误，其实是err.code==0的时候
        break;
    }
};
```

视频&音频
----------
### 视频
+ autoplay：autoplay	 (视频在就绪后马上播放)
+ controls：controls (向用户显示控件，比如播放按钮)
+ height：pixels (设置视频播放器的高度)
+ loop：loop (当媒介文件完成播放后再次开始播放)
+ muted：muted (规定视频的音频输出应该被静音)
+ poster：URL (规定视频下载时显示的图像，或者在用户点击播放按钮前显示的图像)
+ preload：preload (是否在页面加载后载入视频)
    >+ preload：视频在页面加载时进行加载并预备播放
    >+ autoplay：则忽略该属性
+ src：url (要播放的视频的URL)
+ width：pixels (设置视频播放器的宽度)

### 用法
```html
<video src="movie.ogg" controls="controls">您的浏览器不支持 video 标签。</video>
```

### 音频
+ \<audio\>：定义了声音内容
+ \<source\>：规定了多媒体资源, 可以是多个
+ autoplay：autoplay (视频在就绪后马上播放)
+ controls：controls (向用户显示控件，比如播放按钮)
+ height：pixels (设置视频播放器的高度)
+ loop：loop (当媒介文件完成播放后再次开始播放)
+ muted：muted (规定视频的音频输出应该被静音)
+ poster：URL (规定视频下载时显示的图像，或者在用户点击播放按钮前显示的图像)
+ preload：preload (是否在页面加载后载入音频)
    >+ preload： 视频在页面加载时进行加载并预备播放
    >+ autoplay：则忽略该属性
+ src：url (要播放的视频的URL)
+ width：pixels (设置视频播放器的宽度)

### 用法
```html
<audio controls>
<source src="horse.ogg" type="audio/ogg">
<source src="horse.mp3" type="audio/mpeg">您的浏览器不支持 audio 元素。</audio>
<audio src='xxx.mp3' loop=true preload='auto' />
```
