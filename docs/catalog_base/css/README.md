[[toc]]

### Transition

- transition-property：width (设置过渡效果的 CSS 属性的名称)
- transition-duration：5s (完成过渡效果时间)
- transition-timing-function：linear (速度曲线)
  > - linear：规定以相同速度开始至结束的过渡效果，等同于 cubic-bezier(0,0,1,1)
  > - ease：规定慢速开始，然后变快，然后慢速结束的过渡效果，等同于 cubic-bezier(0.25,0.1,0.25,1)
  > - ease-in：规定以慢速开始的过渡效果，等同于 cubic-bezier(0.42,0,1,1)
  > - ease-out：规定以慢速结束的过渡效果，等同于 cubic-bezier(0,0,0.58,1)
  > - ease-in-out：规定以慢速开始和结束的过渡效果，等同于 cubic-bezier(0.42,0,0.58,1)
  > - cubic-bezier(n,n,n,n)：在 cubic-bezier 函数中定义自己的值，值范围为 0 至 1 之间的数值
- transition-delay：2s (过渡效果等待时间)

```css
/*整合写法*/
.animation-test {
  transition: width 5s ease 5s;
}

/*分开写法*/
.animation-test {
  transition-property: width;
  transition-duration: 5s;
  transition-timing-function: ease;
  transition-delay: 2s;
}
```

### Transform

- transform-origin: x-axis y-axis z-axis (改变起点位置)
  > - x-axis：支持 left | center | right | length | %
  > - y-axis：支持 top | center0 | bottom | length | %
  > - z-axis：支持 length
- transform-style: flat (变形样式)
  > - flat：该元素的所有子元素都将被平展到该元素的 2D 平面中进行呈现
  > - preserve-3d：不执行平展操作，该元素的所有子元素位于 3D 空间中
- perspective：none | \<length\> (观察点)
  > - 对于 3D 变形来说至关重要。
  > - 该属性会设置查看者的位置，并将可视内容映射到一个视锥上，继而投到一个 2D 视平面上。
  > - 如果不指定透视，则 Z 轴空间中的所有点将平铺到同一个 2D 视平面中，并且变换结果中将不存在景深概念。
- perspective-origin：50% 50% (源点角度)
  > - 3D 变形中另一个重要属性，主要用来决定 perspective 属性的源点角度。
  > - 它实际上设置了 X 轴和 Y 轴位置，在该位置观看者好像在观看该元素的子元素。
- backface-visibility: visible (元素旋转背面是否可见)
  > - visible 可见
  > - hidden 不可见

---

2d 变化

- 旋转 rotate(30deg)
  > 顺时针旋转给定的角度，允许负值
- 扭曲 skew(30deg,20deg)
  > 根据给定的水平线（X 轴）和垂直线（Y 轴），元素翻转给定的角度
- 缩放 scale(2,4)
  > 根据给定的宽度（X 轴）和高度（Y 轴），放大或缩小
- 移动 translate(100px,100px)
  > 平移，传进 x,y 值，代表沿 x 轴和 y 轴平移的距离
- 所有的 2D 转换方法组合在一起 matrix(scale.x,scale.y,translate.x,translate.y)
  > 旋转、缩放、移动以及倾斜元素

---

3d 变化

- 3D 旋转
  > 3D 旋转包括 rotateX()、rotateY()、rotateZ()和 rotate3d()4 个功能函数
- 3D 缩放
  > 3D 缩放包括 scaleZ()和 scale3d()2 个功能函数
- 3D 位移
  > 3D 位移包括 translateZ()和 translate3d()2 个功能函数
- 3D 矩阵
  > 3D 矩阵功能函数 matrix3d()

```css
.transform-test {
  transform: skew(30deg) scale(2, 4);
}
```

### Animation

- animation-name: test (动画的名称)
- animation-duration: 1s (动画持续时长)
- animation-timing-function: ease (定义动画的速率--贝塞尔曲线)
  > - linear： 动画从头到尾的速度是相同的
  > - ease：默认。动画以低速开始，然后加快，在结束前变慢
  > - ease-in：动画以低速开始
  > - ease-out：动画以低速结束
  > - ease-in-out：动画以低速开始和结束
  > - cubic-bezier(n,n,n,n)：在 cubic-bezier 函数中定义自己的值，值范围为 0 至 1 之间的数值
- animation-delay: 0.5s (延迟时间)
- animation-iteration-count: infinite (播放次数)
  > - infinite：无线次数
  > - number：具体次数
- animation-direction: alternate (动画播放方向)
  > - normal：一直向前播放,当到最后一帧会回到第一帧
  > - reverse：跟 normal 方向相反
  > - alternate：往复播放
  > - alternate-reverse：跟 alternate 反向
- animation-fill-mode: forwards (动画播放之前或之后动画效果是否可见)
  > - forwards：动画播放完毕回到第一帧的状态
  > - none：默认,不设置
  > - both：动画播放完毕后会回到结束或开始状态,结束状态优先
- animation-play-state: running (控制动画播放)
  > - paused：暂停动画
  > - running：启动继续播放

```css
.animation-test {
  animation-name: test;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  animation-play-state: running;
}
```
