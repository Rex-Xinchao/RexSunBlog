[[toc]]

### 节流 && 防抖

```js
/**
 * 节流throttle
 * 调用多次、只第一次调用有效
 */
const throttle = (fn, delay) => {
  // 定义上次触发时间
  let last = 0
  return (...args) => {
    const now = Date.now()
    if (now > last + delay) {
      last = now
      fn.apply(this, args)
    }
  }
}

/**
 * 防抖Debounce
 * 最后一次为准
 */
const debounce = (fn, delay) => {
  let timer = null
  return (...args) => {
    // 判断定时器是否存在，清除定时器
    if (timer) {
      clearTimeout(timer)
    }

    // 重新调用setTimeout
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
```

### 时间旅行

```js
module.exports = createHistory = () => {
  const timeline = {}

  timeline.past = []
  timeline.future = []

  timeline.gotoState = (index) => {
    const allState = [...timeline.past, timeline.present, ...timeline.future]
    timeline.present = allState[index]
    timeline.past = allState.slice(0, index)
    timeline.future = allState.slice(index + 1, allState.length)
  }

  timeline.getIndex = () => {
    // 获取当前状态index
    return timeline.past.length
  }

  // 保存当前状态
  timeline.push = (currentState) => {
    // 将状态都保存，并更新当前状态
    if (timeline.present) {
      timeline.past.push(timeline.present)
    }
    timeline.present = currentState
  }

  // 后退
  timeline.undo = () => {
    if (timeline.past.length !== 0) {
      timeline.gotoState(timeline.getIndex() - 1)
    }
  }

  // 前进
  timeline.redo = () => {
    if (timeline.future.length !== 0) {
      timeline.gotoState(timeline.getIndex() + 1)
    }
  }

  return timeline
}
```
