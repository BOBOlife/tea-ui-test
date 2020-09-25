# 波咕噜 - 一个Vue UI组件
[![Build Status](https://travis-ci.org/BOBOlife/gulu-test.svg?branch=master)](https://travis-ci.org/BOBOlife/gulu-test)
## 介绍
这是我在学习Vue的过程中做的一个UI框架，希望对你有用
## 开始使用

1. 添加 CSS 样式
   使用本框架前，请在CSS中开启 border-box
   
   ```css
   *,*::before,*::after {box-sizing: border-box;}
   ```
   IE 8 及以上浏览器都支持此样式
   
   你还需要设置默认颜色等变量 （后续会改为 SCSS 变量）
   ```CSS
     html {
         --button-height: 32px;
         --font-size: 14px;
         --button-bg: #ffffff;
         --button-active-bg: #eee;
         --border-radius: 4px;
         --color: #333;
         --border-color: #999;
         ---border-color-hover: #666
       }
   ```
IE 15 及以上浏览器都支持此样式

2. 安装 bobo-gulu
```
npm i --save bobo-gulu
```

3.  引入 bobo-gulu
```
import {Button,ButtonGroup,Icon} from 'bobo-gulu'
import 'bobo-gulu/dist/index.css'

export default {
    name: 'app',
    components:{
        'g-button':Button,
        'g-icon': Icon
    }
}
```


## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
作者：鱼塘主罐头

