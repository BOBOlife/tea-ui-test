---
title: Grid - 栅格
sidebarDepth: 2
---

# 栅格

<h2>24栅格系统</h2>




**预览**

<grid-demos></grid-demos>

**代码**
~~~vue
<template>
  <div class="grid-wrapper">
    <g-row class="row">
      <g-col class="item" span="24">col-24</g-col>
    </g-row>
    <g-row>
      <g-col class="item" span="12">col-12</g-col>
      <g-col class="item" span="12">col-12</g-col>
    </g-row>
    <g-row class="row">
      <g-col class="item" span="8">col-8</g-col>
      <g-col class="item" span="8">col-8</g-col>
      <g-col class="item" span="8">col-8</g-col>
    </g-row>
    <g-row class="row">
      <g-col class="item" span="6">col-6</g-col>
      <g-col class="item" span="6">col-6</g-col>
      <g-col class="item" span="6">col-6</g-col>
      <g-col class="item" span="6">col-6</g-col>
    </g-row>
  </div>
</template>
<style lang="scss" scoped>
  * { box-sizing: border-box;}
  .grid-wrapper {
    $background: #3eaf7c;
    > .row { padding: .2em;
      > .item { text-align: center; color: white;
        &:nth-child(odd) { background: $background; }
        &:nth-child(even) { background: lighten($background, 20%); color: black; }
      }
    }
  }
</style>
~~~

<h2>选项</h2>
<h3>Row选项</h3>

1. gutter（排水沟）

通过在Row上面设置`gutter`属性，可以让栅格有间隔。单位为`px`。

**预览**

<grid-demos2></grid-demos2>

**代码**
```vue
<template>
  <div class="gutter-wrapper">
    <g-row gutter="30">
      <g-col class="item" span="8"><span> col-8; gutter-30;</span></g-col>
      <g-col class="item" span="8"><span> col-8; gutter-30;</span></g-col>
      <g-col class="item" span="8"><span> col-8; gutter-30;</span></g-col>
    </g-row>
    <g-row gutter="10">
      <g-col class="item" span="8"><span> col-8; gutter-10;</span></g-col>
      <g-col class="item" span="8"><span> col-8; gutter-10;</span></g-col>
      <g-col class="item" span="8"><span> col-8; gutter-10;</span></g-col>
    </g-row>
  </div>
</template>

<style lang="scss" scoped>
  * { box-sizing: border-box; }
  .gutter-wrapper { padding-top: 10px;
    .item { text-align: center; color: white;
      > span { display: block; background: #3eaf7c; }
    }
  }
</style>
```

2. align

通过Row设置`align`属性，可以定义其子组件在该节点里面的排版方式。分别取值 `left` ，`center` ，`right`。

**预览**

<grid-demos3></grid-demos3>

**代码**
```vue
<template>
  <div class="align-wrapper">
    <g-row class="row" align="left">
      <g-col class="item" span="8">left</g-col>
      <g-col class="item" span="8">left</g-col>
    </g-row>
    <g-row class="row" align="center">
      <g-col class="item" span="8">center</g-col>
      <g-col class="item" span="8">center</g-col>
    </g-row>
    <g-row class="row" align="right">
      <g-col class="item" span="8">right</g-col>
      <g-col class="item" span="8">right</g-col>
    </g-row>
  </div>
</template>
<style lang="scss" scoped>
  $background: #3eaf7c;
  * { box-sizing: border-box; }
  .align-wrapper{ text-align: center; color: white;
    .row{ padding-top: 10px;
      > .item { text-align: center; color: white;
        &:nth-child(odd){ background: $background; }
        &:nth-child(even){ background: lighten($background,20%); color: black; }
      }
    }
  }
</style>
```
<h3>Col选项</h3>

**Col 的选项有 `span`, `offset` 以及响应式相关的 `ipad`, `narrowPc`, `pc`, `widePc`。**

1. span

栅格系统的列在一行里分成24份，`span`表示当前列占有当前的行可占范围的自定义份。
例如三个等宽的列可以 `<g-col span="8">三分之一列<g-col>`，其余的两列复制即可。

2. offset

使用 `offset` 属性，可以向右偏移。<br>
例如，像 `offset="2"`,则表示当前列会向右侧移2个列的宽度。

**预览**

<grid-demos4></grid-demos4>

**代码**
```vue
<template>
  <div class="offset-wrapper">
    <g-row class="row">
      <g-col class="item" span="8"> <span>col-8</span> </g-col>
      <g-col class="item" span="8"> <span>col-8</span> </g-col>
      <g-col class="item" span="4" offset="4"> <span>col-4</span> </g-col>
    </g-row>
    <g-row class="row">
      <g-col class="item" span="8"> <span>col-8</span> </g-col>
      <g-col class="item" span="5" offset="3"> <span>col-5</span> </g-col>
      <g-col class="item" span="4" offset="4"> <span>col-4</span> </g-col>
    </g-row>g</div>
</template>
<style lang="scss" scoped>
  $background: #3eaf7c;
  $wrapper-top: 10px;
  $font-color: white;
  * { box-sizing: border-box; }
  .offset-wrapper { padding-top: $wrapper-top;
    > .row {
      > .item { text-align: center; color: $font-color;
        > span { display: block; background: $background; }
      }
    }
  }
</style>
```

3. 响应式

支持ipad、narrowPC、pc、widePc四种设备尺寸的响应式设置。<br>
若不设置上述四个属性，默认为手机端响应，span的值为24。<br>
***注意： 若设置这四个属性，则需要对应属性 + offset 的和值为24，具体看代码。***

**代码**
```vue
<template>
  <div class="response-wrapper">
    <g-row class="row">
      <g-col class="item"
             span="24"
             :ipad="{span:8}"
             :narrow-pc="{span:4}"
             :pc="{span: 2}"
             :wide-pc="{span:1}"
      >
        col
      </g-col>
      <g-col class="item"
             span="24"
             :ipad="{span:16}"
             :narrow-pc="{span:20}"
             :pc="{span: 20,offset:2}"
             :wide-pc="{span:21}"
      >
        col
      </g-col>
    </g-row>
  </div>
</template>
<style lang="scss" scoped>
  $background: #3eaf7c;
  $wrapper-top: 10px;
  $font-color: white;
  * { box-sizing: border-box; }
  .response-wrapper { padding-top: $wrapper-top;
    > .row {
      > .item { text-align: center; color: $font-color;
        > span { display: block; background: $background; }
      }
    }
  }
</style>
```
