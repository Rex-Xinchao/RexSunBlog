[Vue开发必须知道的36个技巧](https://juejin.im/post/5d9d386fe51d45784d3f8637#heading-30 "#")

[vue文档里你没捡起来的宝藏](https://juejin.im/post/5d4bb71e51882551d172e557 "#")

[实用的vue插件大汇总](https://juejin.im/post/5c1b2921f265da613d7c06b5 "#")

## Vue-2.0

### require.context
批量导入组件
```ecmascript 6
const path = require('path')
const files = require.context('@/components/home', false, /\.vue$/)
const modules = {}
files.keys().forEach(key => {
  const name = path.basename(key, '.vue')
  modules[name] = files(key).default || files(key)
})
export default { 
 components:modules 
}
```

### watch
+ immediate (立即初始化)
    > 申明了后立即执行handle方法，默认false<br/>
    > immediate设置为true后，会在vue实例化后执行watch的handle方法
```ecmascript 6
export default {
  watch:{
  		searchValue:{
  			//使用watch值是对象的第三种情况
  			handler:"getList",
  			//getList里面通过searchValue去搜索数据库
  			immediate:true
  		}
  	},
  methods:{
  		getList(){
  			// 调用接口获取数据
  		}
  	}
}
```
+ deep (深度监听)
    > 监听复杂数据类型
```ecmascript 6
export default {
  watch:{
  		searchValue:{
  			handler () {
  			  // 事件处理
  			},
  			deep:true
  		}
  	}
}
```

### $root & $parent & $children
+ $root(子组件可以通过 $root 属性访问父组件实例的属性和方法)
    > $root获取的是根父组件实例
 
+ $parent(子组件可以通过 $parent 属性访问父组件实例的属性和方法)
    > 当只存在1级子组件时，$root等于$parent <br/>
    > 当存在多级子组件时，$parent是最近一级的父组件实例
    
+ $children (父组件可以通过$children获取子组件列)
    > 返回的是一个vue子组件实例数组
    
### $attrs & $listeners
+ attrs (继承所有的父组件属性，除props、class和style)
    > v-bind="$attrs"可以把父组件的属性传递给子组件
+ listeners (继承所有父组件的监听事件)
    > v-on="$listeners"可以把父组件的监听事件传递给子组件
    
### inheritAttrs
+ 设置为false时，所有属性（特指不是props的属性）不会绑定到html上
+ inheritAttrs并不影响class和style绑定

### EventBus
```ecmascript 6
// main.js
let $eventBus = new Vue()
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
}
// 使用
this.$eventBus.$emit('updateTags', 'hello')
this.$eventBus.$on('updateTags', val => console.log(val) )
this.$eventBus.$off('updateTags')
```

### Vue.observable
使对象的属性变计算属性
```ecmascript 6
// store/index.js
import Vue from 'vue'

export const store = Vue.observable({ count: 0 })
export const mutations = {
  setCount (count) {
    store.count = count
  }
}
```

### render
内容相同，但是会使用不同标签的情况下
```
// 父组件引用子组件
 <Dom-Set :level="1">hello world</Dom-Set>
 
// 子组件
<script>
  export default {
    render(h) {
      const tag = ['div', 'p', 'strong', 'h1', 'h2', 'textarea'][this.level-1]
      return h(tag, this.$slots.default)
    },
    props: {
      level: {  type: Number,  required: true  }
    }
  }
</script>
```

### 暂时更新到第一个链接的render