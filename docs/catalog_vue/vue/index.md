[[toc]]

### 组件通讯

- $root(子组件可以通过 $root 属性访问父组件实例的属性和方法)

  > \$root 获取的是根父组件实例

- $parent(子组件可以通过 $parent 属性访问父组件实例的属性和方法)

  > 当只存在 1 级子组件时，$root等于$parent <br/>
  > 当存在多级子组件时，\$parent 是最近一级的父组件实例

- $children (父组件可以通过$children 获取子组件列)

  > 返回的是一个 vue 子组件实例数组

- attrs (继承所有的父组件属性，除 props、class 和 style)

  > v-bind="\$attrs"可以把父组件的属性传递给子组件

- listeners (继承所有父组件的监听事件)

  > v-on="\$listeners"可以把父组件的监听事件传递给子组件

- EventBus(全局组件任意通讯)

```ecmascript 6
// main.js
let $eventBus = new Vue();
Vue.prototype.$eventBus = {
  /**
   * @param {any} event 第一个参数是事件对象，第二个参数是接收到消息信息，可以是任意类型
   * @method $on 事件订阅, 监听当前实例上的自定义事件。https://cn.vuejs.org/v2/api/#vm-on
   * @method $off 取消事件订阅，移除自定义事件监听器。 https://cn.vuejs.org/v2/api/#vm-off https://github.com/vuejs/vue/issues/3399
   * @method $emit 事件广播, 触发当前实例上的事件。 https://cn.vuejs.org/v2/api/#vm-emit
   * @method $once 事件订阅, 监听一个自定义事件，但是只触发一次，在第一次触发之后移除监听器。 https://cn.vuejs.org/v2/api/#vm-once
   */
  $on(...event) {
    $eventBus.$on(...event)
  },
  $off(...event) {
    $eventBus.$off(...event)
  },
  $once(...event) {
    $eventBus.$emit(...event)
  },
  $emit(...event) {
    $eventBus.$emit(...event)
  }
};
// 使用
this.$eventBus.$emit('updateTags', 'hello');
this.$eventBus.$on('updateTags', val => console.log(val) );
this.$eventBus.$off('updateTags');
```

### Vue 属性

- watch (监听)

  > - immediate (立即初始化)
  >
  > ```ecmascript 6
  > // 申明了后立即执行 handle 方法，默认 false
  > // immediate 设置为 true 后，会在 vue 实例化后执行 watch 的 handle 方法
  > export default {
  >  watch:{
  >  		searchValue:{
  >  			//使用watch值是对象的第三种情况
  >  			handler:"getList",
  >  			//getList里面通过searchValue去搜索数据库
  >  			immediate:true
  >  		}
  >  	},
  >  methods:{
  >  		getList(){
  >  			// 调用接口获取数据
  >  		}
  >  	}
  > }
  > ```

  > - deep (深度监听)
  >
  > ```ecmascript 6
  > // 监听复杂数据类型
  > export default {
  >  watch:{
  >  		searchValue:{
  >  			handler () {
  >  			  // 事件处理
  >  			},
  >  			deep:true
  >  		}
  >  	}
  > }
  > ```

- inheritAttrs

  > 设置为 false 时，所有属性（特指不是 props 的属性）不会绑定到 html 上<br/>
  > inheritAttrs 并不影响 class 和 style 绑定<br/>

- extends

  > vue 的 extends 和 mixins 类似，通过暴露一个 extends 对象到组件中使用<br/>
  > extends 会比 mixins 先执行。执行顺序：extends > mixins > 组件<br/>
  > extends 只能暴露一个 extends 对象，暴露多个 extends 不会执行<br/>

- Vue.observable

  > 使对象的属性变计算属性
  >
  > ```ecmascript 6
  > // store/index.js
  > import Vue from 'vue'
  >
  > export const store = Vue.observable({ count: 0 })
  > export const mutations = {
  >   setCount (count) {
  >     store.count = count
  >   }
  > }
  > ```

- directive
  > 将文字变成指定的颜色
  >
  > ```
  > // 全局定义
  > Vue.directive("change-color",function(el,binding,vnode){
  >   el.style["color"]= binding.value;
  > })
  >
  > // 使用
  > <template>
  >     <div v-change-color=“color”>{{message}}</div>
  > </template>
  > <script>
  >   export default{
  >     data(){
  >       return{ color:'green' }
  >     }
  >   }
  > </script>
  > ```

### 性能/代码优化

- require.context

  > 批量导入组件
  >
  > ```ecmascript 6
  > const path = require('path');
  > const files = require.context('@/components/home', false, /\.vue$/);
  > const modules = {};
  > files.keys().forEach(key => {
  >  const name = path.basename(key, '.vue');
  >  modules[name] = files(key).default || files(key)
  > });
  > export default {
  > components:modules
  > }
  > ```

- 局部/全局注册组件

  > ```ecmascript 6
  > // 局部
  > export default{ components:{home}}
  > // 全局
  > Vue.component('home',home)
  > ```

- 异步组件

  > 异步组件实现按需加载
  >
  > - 方法 1
  >
  > ```ecmascript 6
  > // 工厂函数执行 resolve 回调
  > Vue.component('component-example', function (resolve) {
  >  // 这个特殊的 `require` 语法将会告诉 webpack
  >  // 自动将你的构建代码切割成多个包, 这些包
  >  // 会通过 Ajax 请求加载
  >  require(['./component-example'], resolve)
  > });
  > // ☆☆☆☆☆
  > export default {
  >  data (){},
  >  components: { 'component-example': (resolve) => {
  >    require(['./component-example'], resolve)
  >  }},
  > }
  > ```
  >
  > - 方法 2
  >
  > ```ecmascript 6
  > // 工厂函数返回 Promise
  > Vue.component(
  >  'component-example',
  >  // 这个 `import` 函数会返回一个 `Promise` 对象。
  >  () => import('./component-example')
  > );
  > // ☆☆☆☆☆
  > export default {
  >  data (){},
  >  components: { 'component-example': () => import('./component-example')},
  > }
  > ```

- 动态组件

  > v-if 会销毁实例，但使用了 keep-alive 会保存之前用户的使用状态
  >
  > ```
  > <keep-alive>
  >   <INPUT-ONE v-if="show"></INPUT-ONE>
  >   <INPUT-TWO v-if="!show"></INPUT-TWO>
  > </keep-alive>
  > ```

- render
  > 内容相同，但是会使用不同标签的情况下，使用 render
  >
  > ```
  > // 父组件引用子组件
  > <Dom-Set :level="1">hello world</Dom-Set>
  >
  > // 子组件
  > <script>
  >  export default {
  >    render(h) {
  >      const tag = ['div', 'p', 'strong', 'h1', 'h2', 'textarea'][this.level-1]
  >      return h(tag, this.$slots.default)
  >    },
  >    props: {
  >      level: {  type: Number,  required: true  }
  >    }
  >  }
  > </script>
  > ```

### vdom(虚拟 dom)

> 虚拟 DOM 是放在 JS 和 HTML 中间的一个层。
> 它可以通过新旧 DOM 的对比，来获取对比之后的差异对象，然后有针对性的把差异部分真正地渲染到页面上。
> 从而减少实际 DOM 操作，最终达到性能优化的目的。

- vdom 原理

> - 用 JavaScript 模拟 DOM 树，并渲染这个 DOM 树
> - 比较新老 DOM 树，得到比较的差异对象
> - 把差异对象应用到渲染的 DOM 树。

- vdom 实例

::: details vdom 生成

```javascript
const h = this.$createElement
const vdom = h('div', { class: 'class', attrs: { title: 'title' } }, [
  h('p', { class: 'class' }, '这是P标签'),
  h('span', '这是span标签')
])
```

:::

::: details vdom 转化成 dom

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

:::

### others

- nextTick

  > 用法:在下次 DOM 更新循环结束之后执行延迟回调<br/>
  > 在修改数据之后立即使用这个方法，获取更新后的 DOM
  >
  > ```
  > mounted(){
  >   //因为 mounted 阶段 dom 并未渲染完毕,所以需要$nextTick
  >  this.$nextTick(() => {
  >    this.$refs.inputs.focus() //通过 $refs 获取dom 并绑定 focus 方法
  >  })
  > }
  > ```

- version

  > ```javascript
  > // 针对不同版本vue处理
  > var version = Number(Vue.version.split('.')[0])
  > if (version === 2) {
  >   // Vue v2.x.x
  > } else if (version === 1) {
  >   // Vue v1.x.x
  > } else {
  >   // Unsupported versions of Vue
  > }
  > ```

- v-pre

  > 静态标签不需要多次编译
  >
  > ```
  > <span v-pre>{{ this will not be compiled }}</span>   显示的是{{ this will not be compiled }}
  > <span v-pre>{{msg}}</span>     即使data里面定义了msg这里仍然是显示的{{msg}}
  > ```

- 为路径设置别名

  > - vue-cli 2.x
  >
  > ```
  > // 在 webpack.base.config.js中的 resolve 配置项，在其 alias 中增加别名
  > resolve: {
  >    extensions: ['.js', '.vue', '.json'],
  >    alias: {
  >      'vue$': 'vue/dist/vue.esm.js',
  >      '@': resolve('src'),
  >    }
  >  }
  > ```
  >
  > - vue-cli 3.x
  >
  > ```
  > // 在根目录下创建vue.config.js
  > var path = require('path')
  > function resolve (dir) {
  >  console.log(__dirname)
  >  return path.join(__dirname, dir)
  > }
  > module.exports = {
  >  chainWebpack: config => {
  >    config.resolve.alias
  >      .set(key, value) // key,value自行定义，比如.set('@@', resolve('src/components'))
  >  }
  > }
  > ```

- img 加载失败
  > ```html
  > // page 代码
  > <img :src="imgUrl" @error="handleError" alt="" />
  > <script>
  >   export default {
  >     data() {
  >       return { imgUrl: '' }
  >     },
  >     methods: {
  >       handleError(e) {
  >         e.target.src = reqiure('图片路径') //当然如果项目配置了transformToRequire,参考上面 27.2
  >       }
  >     }
  >   }
  > </script>
  > ```

### 参考文档

[Vue 开发必须知道的 36 个技巧](https://juejin.im/post/5d9d386fe51d45784d3f8637#heading-30 '#')

[vue 文档里你没捡起来的宝藏](https://juejin.im/post/5d4bb71e51882551d172e557 '#')

[实用的 vue 插件大汇总](https://juejin.im/post/5c1b2921f265da613d7c06b5 '#')
