# taro

## bug

1. lodash 报错 Cannot read property 'now' of undefined

在 app.js 内（项目主入口）加上以下代码：

```js
Object.assign(global, {
  Array: Array,
  Date: Date,
  Error: Error,
  Function: Function,
  Math: Math,
  Object: Object,
  RegExp: RegExp,
  String: String,
  TypeError: TypeError,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  setInterval: setInterval,
  clearInterval: clearInterval,
});
```

2. 3.3 版本后，关于 jsx

直接配置 vueJsx: true（vue2/vue3）
babel.config.js

```js
module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'vue',
        ts: false,
        vueJsx: true
      },
    ],
  ],
  plugins: [],
};

```
