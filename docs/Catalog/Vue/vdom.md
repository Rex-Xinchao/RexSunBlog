虚拟dom
> 虚拟DOM是放在JS 和 HTML中间的一个层。它可以通过新旧DOM的对比，来获取对比之后的差异对象，然后有针对性的把差异部分真正地渲染到页面> 上，从而减少实际DOM操作，最终达到性能优化的目的。
-----------------
### vdom原理
+ 用JavaScript模拟DOM树，并渲染这个DOM树
+ 比较新老DOM树，得到比较的差异对象
+ 把差异对象应用到渲染的DOM树。

### vdom生成
```javascript
const h = this.$createElement;
const vdom = h('div', {class: 'class', title: 'title'}, [
    h('p', {class: 'class'}, '这是P标签'),
    h('span', '这是span标签'),
])
```

### vdom转化成dom
```html
// 父组件调用子组件并把level传入
<Anchored-Heading :level="1">Hello world!</Anchored-Heading>
```
```javascript
<script>
// 子组件获取level，并通过render生成vdom返回父组件
export default {
  name: "anchored-heading",
  render: createElement => {
    return createElement(
      "h" + this.level, // 标签名称
      this.$slots.default // 子节点数组
    );
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
};
</script>
```