---
title: Collapse - 折叠面板
sidebarDepth: 2
---

# 折叠面板

<h2>预览</h2>

<collapse-demos></collapse-demos>

<h2>使用方法</h2>

```vue
<template>
  <div>
    <g-collapse :selected.sync="selected">
      <g-collapse-item title="标题1" name="1">1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">3</g-collapse-item>
    </g-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        selected: ['1']
      }
    },
  }
</script>
```

<h2>选项</h2>

1. 双向绑定
Collapse 组件的双向绑定与 Vue 官方的类似，支持 .sync 修饰符。
```vue
<g-collapse :selected.sync="selected">...</g-collapse>
```
2. 必选参数
Collapse 组件必须接受两个参数： `title` 用于显示折叠面板的标题。 `name` 用于表示选中的 item。
<g-collapse-item title="标题1" name="1">1</g-collapse-item>
3. 手风琴效果
Collapse 组件还支持手风琴效果，就是只能同时显示一个面板内容,可以通过设置 `single` 属性来更改，默认是 `false` 。

**预览**

<collapse-demos2></collapse-demos2>

**代码**

```vue
<template>
  <div>
    <g-collapse :selected.sync="selected" single>
      <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        selected: ['1']
      }
    },
  }
</script>
```