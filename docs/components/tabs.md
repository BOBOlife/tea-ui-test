---
title: Tabs - 标签
sidebarDepth: 2
---

# 标签

<h2>简单方法</h2>

**预览** 

<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>

**代码**

```vue
data:{
  selected: '1'
}

<g-tabs :selected="selected">
 <g-tabs-head>
   <g-tabs-item name="1">1</g-tabs-item>
   <g-tabs-item name="2">22</g-tabs-item>
   <g-tabs-item name="3">333</g-tabs-item>
 </g-tabs-head>
 <g-tabs-body>
   <g-tabs-pane name="1">content 1</g-tabs-pane>
   <g-tabs-pane name="2">content 2</g-tabs-pane>
   <g-tabs-pane name="3">content 3</g-tabs-pane>
 </g-tabs-body>
</g-tabs>
```