---
title: Input - 输入框
sidebarDepth: 2
---

# 输入框

<h2>预览</h2>
<br>

<ClientOnly>
<input-demos></input-demos>
</ClientOnly>

<h2>使用方法</h2>

```vue
<g-input value="中文"></g-input>
<g-input value="中文" disabled></g-input>
<g-input value="中文" readonly></g-input>
<g-input value="错误信息" error="这里是错误信息" ></g-input>
<br>
<g-input v-model="value"></g-input>
<div>
  value: {{value}}
</div>
```

<h2>选项</h2>

Input组件的选项有: `disabled` , `readOnly` , `error` ,以及支持**双向绑定**。

- disabled :表示是否为禁用状态，默认为`false`，禁用
- readOnly : 表示**只读**状态，与 `disabled` 相似。但是`disabled`不可以被**Tab键**选中，`readOnly`可以被选中，但不能修改。 
- error : 给 `input` 添加`error`属性，会在该`input`右侧显示一个提示图标与文字，一般用于错误提示。
- v-model : 看下面例子

**预览**

<ClientOnly>
<input-demos2></input-demos2>
</ClientOnly>

**代码**
```vue
<template>
  <div>
    <g-input v-model="value"></g-input>
    <div>
      value: {{value}}
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: '双向绑定'
      }
    }
  }
</script>
```

