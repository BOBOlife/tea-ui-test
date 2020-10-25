---
title: Layout - 布局
sidebarDepth: 2
---
# 布局

<h2>布局</h2>

**预览**

<ClientOnly>
<layout-demos></layout-demos>
</ClientOnly>

**代码**

```vue
<g-layout style="color: white; margin-bottom:50px;">
  <g-header style="height: 50px; background:lightskyblue;">
    header
  </g-header>
  <g-content style="height: 100px; background:deepskyblue;">
    content
  </g-content>
  <g-footer style="height: 50px; background:lightskyblue;">
    footer
  </g-footer>
</g-layout>
```

<h2>布局</h2>

**预览**

<ClientOnly>
<layout-demos2></layout-demos2>
</ClientOnly>

**代码**
```vue
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <g-header style="height: 50px; background:lightskyblue;">
    header
  </g-header>
  <g-layout>
    <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
      sider
    </g-sider>
    <g-content style="height: 100px; background:deepskyblue;">
      content
    </g-content>
  </g-layout>
  <g-footer style="height: 50px; background:lightskyblue;">
    footer
  </g-footer>
</g-layout>
```
<h2>布局</h2>

**预览**

<ClientOnly>
<layout-demos3></layout-demos3>
</ClientOnly>

**代码**
```vue
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <g-sider style=" background:#ddd; width:200px; color: black;">
    sider
  </g-sider>
  <g-layout>
    <g-header style="height: 50px; background:lightskyblue;">
      header
    </g-header>
    <g-content style="height: 100px; background:deepskyblue;">
      content
    </g-content>
    <g-footer style="height: 50px; background:lightskyblue;">
      footer
    </g-footer>
  </g-layout>
</g-layout>
```

<h2>选项</h2>

提供基础的布局，样式自定义，可定制化高。

<h3>组件概述</h3>

- `g-layout`:布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。
- `g-header`:顶部布局，其下可嵌套任何元素，只能放在 Layout 中。
- `g-sider`: 侧边栏，其下可嵌套任何元素，自带关闭按钮，只能放在 Layout 中。
- `g-content`: 内容部分，其下可嵌套任何元素，只能放在 Layout 中。
- `g-footer`: 底部布局，其下可嵌套任何元素，只能放在 Layout 中。
