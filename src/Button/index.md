---
category: 组件
title: Button 按钮 # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 基础组件 # 所在分组的名称
  order: 1 # 分组排序，值越小越靠前
nav:
  title: 组件
  path: /components
---

# Button 按钮

## 介绍

基础的按钮组件 Button。

## 示例 

<!-- 可以通过code加载示例代码，dumi会帮我们做解析 -->
<code src="./demo/base.tsx">基础用法</code>

## API

### Attributes
| 属性名 | 说明                   | 类型   | 默认值 |
| ---- | ---------------------- | -------- | ---- |
| type | 按钮类型 | 'default' \| 'primary' \| 'danger' \| 'description' | 'default'  |
| size | 按钮大小 | 'large' \| 'middle' \| 'small' | 'middle' |
| shape | 按钮形状 | 'default' \| 'plain' \| 'circle' \| 'round' | 'default' |
| disabled | 按钮禁用状态 | boolean | false |
| shape | 按钮形状 | 'default' \| 'plain' \| 'circle' \| 'round' | 'default' |
| loading | 按钮加载状态 | boolean | false |

### Exposes
| 方法名 | 说明 | 类型 |
| --- | --- | --- |
| click | 点击按钮时的回调 | 