---
title: Toast -  弹出提示框
sidebarDepth: 2
---

# 弹出提示框

<h2>this.$toast</h2>

**预览**

<toast-demos></toast-demos>

**代码**

```vue
<g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
```

<h2>设置关闭按钮</h2>

**预览**

<toast-demos2></toast-demos2>

**代码**
```vue
<div>
  <g-button @click="onClickButton">上方弹出</g-button>
</div>
<script>
export default {
    methods: {
      onClickButton () {
        this.$toast('你知道我在等你吗？', {
          closeButton: {
            text: '知道了',
            callback: () => {
              console.log('他说知道了')
            }
          }
        })
      }
    }
  }
</script>

```

<h2>支持 HTML</h2>

**预览**

<toast-demos3></toast-demos3>

**代码**
```vue
<div>
   <g-button @click="onClickButton">上方弹出</g-button>
</div>
<script >
export default {
    methods: {
      onClickButton() {
        this.$toast('<strong style="color: red">加粗的提示</strong>', {
          enableHtml: true
        })
      }
    }
  }
</script>
```
<h2>选项</h2>

1. zIndex <br>
此选项用于设定 Toast 组件在当前堆叠上下文中的堆叠层级。默认为20。(这是因为再使用 vuepress 编写文档时发现值大于等于 20 才有效。)
若你的项目不可见 Toast 组件，尝试传入一个 `zIndex` 试试。

2. autoClose <br>
此选项可以设定 Toast 自动关闭的延时。单位为“ 秒 ”，默认延时 5 秒后自动关闭。

3. closeButton <br>
Toast 组件的右侧按钮文本可编辑，并且支持传入一个回调。 closeButton 选项接收一个对象。对象包括 `text` 与 `callback` 属性。用于设定按钮的文本与回调。

4. enableHtml<br>
Toast 组件还支持 HTML 语法，该功能默认关闭，你需要传递一个 enableHTML 参数来开启它, `enableHtml:true` 。 开启后就可以在 Toast 内容区域写 HTML 语法。

5. position
   可以设定 Toast 弹出的位置 ，支持 `top`, `middle`, `bottom` 三个值。