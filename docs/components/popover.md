---
title: Popover - 弹出层
sidebarDepth: 2
---

# 弹出层

<h2>支持HTML</h2>

**预览**

<ClientOnly>
<popover-demos></popover-demos>
</ClientOnly>

**代码**
```vue
<template>
  <div>
    <g-popover>
      <g-button>上方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="bottom">
      <g-button>下方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="left">
      <g-button>左边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="right">
      <g-button>右边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
  </div>
</template>
```
<h2>将触发方式改为 hover</h2>

**预览**

<ClientOnly>
<popover-demos2></popover-demos2>
</ClientOnly>

**代码**
```vue
<template>
  <div>
    <g-popover trigger="hover">
      <g-button>上方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="bottom" trigger="hover">
      <g-button>下方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="left" trigger="hover">
      <g-button>左边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="right" trigger="hover">
      <g-button>右边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
  </div>
</template>
```

<h2>选项</h2>

***Popover 组件支两个选项： position 用于设置显示位置； trigger 用于设置出发事件***

**1. position**

`position` **默认**为 `top` ，可选择的参数为 `top` , `left` , `right` , `bottom` ,分别设置 popover 显示的方位。

**2. trigger**

`trigger` **默认**为 `click` ,用于设置触发 popover 显示的事件。 除此之外还支持 `hover`