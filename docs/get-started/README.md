---
title: 快速上手

---

# 快速上手

<h2>引入必要资源</h2>

```js
import {Button} from "tears-ui";
import "tears-ui/dist/index.css";
```

<h2>注册组件</h2>

```js
export default {
  name: "ComponentName",
  components: {
    "g-button": Button,
  },
}
```

<h2>使用</h2>

```vue
<template>
  <div>
    <g-button>默认按钮</g-button>
  </div>
</template>
```