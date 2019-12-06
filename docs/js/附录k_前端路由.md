# 前端路由

目前前端三杰 Angular、React、Vue 都推介单页面应用 SPA 开发模式，在路由切换时替换 DOM Tree 中最小修改的部分 DOM，来减少原先因为多页应用的页面跳转带来的巨量性能损耗。它们都有自己的典型路由解决方案，@angular/router、react-router、vue-router。

这些路由插件总是提供两种不同方式的路由方式： Hash 和 History，有时也会提供非浏览器环境下的路由方式 Abstract，在 vue-router 中是使用了外观模式将几种不同的路由方式提供了一个一致的高层接口，让我们可以更解耦的在不同路由方式中切换。

Hash 和 History 除了外观上的不同之外，还一个区别是：Hash 方式的状态保存需要另行传递，而 HTML5 History 原生提供了自定义状态传递的能力，我们可以直接利用其来传递信息。

## Hash

Hash 方法是在路由中带有一个 `#`，主要原理是通过监听 `#` 后的 URL 路径标识符的更改而触发的浏览器 `hashchange` 事件，然后通过获取 `location.hash` 得到当前的路径标识符，再进行一些路由跳转的操作，参见 [MDN](https://link.juejin.im/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FEvents%2Fhashchange)

1. `location.href`：返回完整的 URL
2. `location.hash`：返回 URL 的锚部分
3. `location.pathname`：返回 URL 路径名
4. `hashchange` 事件：当 `location.hash` 发生改变时，将触发这个事件

比如访问一个路径 `http://sherlocked93.club/base/#/page1`，那么上面几个值分别为：

```
# http://sherlocked93.club/base/#/page1
{
  "href": "http://sherlocked93.club/base/#/page1",
  "pathname": "/base/",
  "hash": "#/page1"
}
复制代码
```

**注意：** Hash 方法是利用了相当于页面锚点的功能，所以与原来的通过锚点定位来进行页面滚动定位的方式冲突，导致定位到错误的路由路径，因此需要采用别的办法，之前在写 [progress-catalog](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2FSHERlocked93%2Fprogress-catalog) 这个插件碰到了这个情况。

### 实例

这里简单做一个实现，原理是把目标路由和对应的回调记录下来，点击跳转触发 `hashchange` 的时候获取当前路径并执行对应回调。

如果希望使用脚本来控制 Hash 路由的后退，可以将经历的路由记录下来，路由后退跳转的实现是对 `location.hash` 进行赋值。但是这样会引发重新引发 `hashchange` 事件，第二次进入 `render` 。所以我们需要增加一个标志位，来标明进入 `render` 方法是因为回退进入的还是用户跳转

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <ul>
      <li><a href="#/">/</a></li>
      <li><a href="#/page1">page1</a></li>
      <li><a href="#/page2">page2</a></li>
    </ul>
    <div class="content-div"></div>

    <button>back</button>
  </body>
  <script>
    class RouteClass {
      constructor() {
        this.routes = {}; // 记录路径标识符对应的 cb
        this.currentUrl = ""; // 记录 hash，方便执行 cb
        this.historyStack = []; // hash栈
        window.addEventListener("load", () => this.render());
        window.addEventListener("hashchange", () => this.render());
      }

      // 初始化
      static init() {
        window.Router = new RouteClass();
      }

      // 记录path对应 cb
      route(path, cb) {
        this.routes[path] = cb || function() {};
      }

      // 记录当前 hash，执行 cb
      render() {
        // 如果是由backoff进入，则置false之后return
        if (this.isBack) {
          this.isBack = false; // 其他操作在backoff方法中已经做了
          return;
        }
        this.currentUrl = location.hash.slice(1) || "/";
        this.historyStack.push(this.currentUrl);
        this.routes[this.currentUrl]();
      }

      // 路由后退
      back() {
        this.isBack = true;
        this.historyStack.pop(); // 移除当前hash，回退到上一个
        const { length } = this.historyStack;
        if (!length) return;
        let prev = this.historyStack[length - 1]; // 拿到要回退到的目标hash
        location.hash = `#${prev}`;
        this.currentUrl = prev;
        this.routes[prev](); // 执行对应cb
      }
    }

    RouteClass.init();
    const BtnDom = document.querySelector("button");
    const ContentDom = document.querySelector(".content-div");
    const changeContent = content => (ContentDom.innerHTML = content);

    Router.route("/", () => changeContent("默认页面"));
    Router.route("/page1", () => changeContent("page1页面"));
    Router.route("/page2", () => changeContent("page2页面"));

    BtnDom.addEventListener("click", Router.back.bind(Router), false);
  </script>
</html>
```

## HTML5 History Api

### 相关 Api

HTML5 提供了一些路由操作的 Api，关于使用可以参看 这篇 MDN 上的文章，这里就列举一下常用 Api 和他们的作用

1. `history.go(n)`：路由跳转，比如 n 为 `2` 是往前移动 2 个页面，n 为 `-2` 是向后移动 2 个页面，n 为 0 是刷新页面
2. `history.back()`：路由后退，相当于 `history.go(-1)`
3. `history.forward()`：路由前进，相当于 `history.go(1)`
4. `history.pushState()`：添加一条路由历史记录，如果设置跨域网址则报错
5. `history.replaceState()`：替换当前页在路由历史记录的信息
6. `popstate` 事件：当活动的历史记录发生变化，就会触发 `popstate` 事件，在点击浏览器的前进后退按钮或者调用上面前三个方法的时候也会触发，参见 [MDN](https://link.juejin.im?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FWindow%2Fonpopstate)

### 实例

将之前的例子改造一下，在需要路由跳转的地方使用 `history.pushState` 来入栈并记录 `cb`，前进后退的时候监听 `popstate` 事件拿到之前传给 `pushState` 的参数并执行对应 `cb`，因为借用了浏览器自己的 Api，因此代码看起来整洁不少

![img](https://user-gold-cdn.xitu.io/2019/1/31/168a3a5e914aa00a?imageslim)

```
class RouterClass {
  constructor(path) {
    this.routes = {}        // 记录路径标识符对应的cb
    history.replaceState({ path }, null, path)	// 进入状态
    this.routes[path] && this.routes[path]()
    window.addEventListener('popstate', e => {
      const path = e.state && e.state.path
      this.routes[path] && this.routes[path]()
    })
  }

  /* 初始化 */
  static init() {
    window.Router = new RouterClass(location.pathname)
  }

  /* 注册路由和回调 */
  route(path, cb) {
    this.routes[path] = cb || function() {}
  }

  /* 跳转路由，并触发路由对应回调 */
  go(path) {
    history.pushState({ path }, null, path)
    this.routes[path] && this.routes[path]()
  }
}
```

Hash 模式是使用 URL 的 Hash 来模拟一个完整的 URL，因此当 URL 改变的时候页面并不会重载。History 模式则会直接改变 URL，所以在路由跳转的时候会丢失一些地址信息，在刷新或直接访问路由地址的时候会匹配不到静态资源。因此需要在服务器上配置一些信息，让服务器增加一个覆盖所有情况的候选资源，比如跳转 `index.html` 什么的，一般来说是你的 app 依赖的页面，事实上 vue-router 等库也是这么推介的，还提供了常见的[服务器配置](https://link.juejin.im?target=https%3A%2F%2Frouter.vuejs.org%2Fzh%2Fguide%2Fessentials%2Fhistory-mode.html%23html5-history-%25E6%25A8%25A1%25E5%25BC%258F)。

代码实现参考 [CodePen](https://link.juejin.im?target=https%3A%2F%2Fcodepen.io%2FSHERlocked93%2Fpen%2FPVzoLJ)

---

网上的帖子大多深浅不一，甚至有些前后矛盾，在下的文章都是学习过程中的总结，如果发现错误，欢迎留言指出~

> 参考：
>
> 1. [history | MDN](https://link.juejin.im?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FMozilla%2FAdd-ons%2FWebExtensions%2FAPI%2Fhistory)
> 2. [hashchange | MDN](https://link.juejin.im?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FEvents%2Fhashchange)
> 3. [Manipulating the browser history | MDN](https://link.juejin.im?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FHistory_API)
> 4. [前端路由的基本原理 - 大史不说话](https://link.juejin.im?target=https%3A%2F%2Fwww.cnblogs.com%2Fdashnowords%2Fp%2F9671213.html)
> 5. [History 对象 -- JavaScript 标准参考教程](https://link.juejin.im?target=http%3A%2F%2Fjavascript.ruanyifeng.com%2Fbom%2Fhistory.html%23toc3)
