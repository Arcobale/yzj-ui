---
category: 组件
title: Foo 组件 # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 基础组件 # 所在分组的名称
  order: 2 # 分组排序，值越小越靠前
nav:
  title: 组件
  path: /components
---

## Foo

Demo:

```tsx
import React from 'react';
import { Foo } from 'yzj-ui';

export default () => <Foo title="First Demo" />;
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
