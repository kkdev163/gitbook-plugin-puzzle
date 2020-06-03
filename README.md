GitBook Puzzle Plugin
==============

该插件用于给 GitBook 页面插入 Puzzle 初始化代码

使用方式：

```
npm install --save gitbook-plugin-puzzle
```

```
// book.json

"plugins": [
    ... //others
    "puzzle"
],
"pluginsConfig": {
    ... //others
    "puzzle": {
      "id": "000094" // 输入 puzzle 平台的脚本ID, 注意是 16 进制ID
    }
}
```
