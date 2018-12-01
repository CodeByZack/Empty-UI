
# 快速上手

----

## 使用前准备

在使用之前，推荐学习 `Vue` 和 `ES2016` ，并正确配置 `Node.js` v6.x 或以上版本

`empty-ui` 基于 `Vue.js` 2.x+ 版本开发，所以有必要了解以下基础知识：
- [Vue 组件](https://cn.vuejs.org/v2/guide/components.html)
- [单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)

## 基于模板工程开发

`Vue.js` 提供一个官方命令行工具 `vue-cli`，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目。

```bash
> npm i -g vue-cli

 > mkdir my-project && cd my-project

 > vue init webpack

 > npm i && npm i empty-ui --save
```

## 标准开发


### 全局组件使用

可以在项目的入口文件中引入所有组件或所需组件

```js
import EmptyUI from 'empty-ui' // 引入组件库

 import 'empty-ui/packages/style/index.less' // 引入样式库

 Vue.use(EmptyUI)
```

### 单个组件按需使用

可以局部注册所需的组件，适用于与其他框架组合使用的场景

```js
import { EButton } from 'empty-ui'

 export default {

  components: {

    EButton
  }
}
```

在模板中，用 `<e-button></e-button>` 自定义标签的方式使用组件

```html
<template>

  <div>

    <e-button>这是一个按钮</e-button>

  </div>
  
</template>
```

