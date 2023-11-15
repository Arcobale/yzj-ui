import { defineConfig } from 'father'

export default defineConfig({
  // ...
  // 打包的时候自动引入antd的样式链接
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
})