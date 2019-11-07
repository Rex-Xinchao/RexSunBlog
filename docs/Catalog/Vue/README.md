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