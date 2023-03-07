## 使用 schema.org + microdata 在 Google+ 上提供丰富的摘要

```html
<div itemscope itemtype="http://schema.org/Article">
  <h1 itemprop="name">Enjoy fireworks</h1>
  <p itemprop="description">Fireworks are beautiful.
   This article explains how beautiful fireworks are.</p>
  <img itemprop="image" src="//developers.google.com/web/imgs/fireworks.jpg" />
</div>
```

## 页面增加开放图表协议 (OGP) 

[Metadata](https://ogp.me/)

- og:title - The title of your object as it should appear within the graph, e.g., "The Rock".
- og:type - The type of your object, e.g., "video.movie". Depending on the type you specify, other properties may also be required.
- og:image - An image URL which should represent your object within the graph.
  - og:image should be at least 200px in both dimensions, with 1500x1500 preferred. (Maximum image size is 5MB.)
- og:url - The canonical URL of your object that will be used as its permanent ID in the graph, e.g., "https://www.imdb.com/title/tt0117500/".
- ...

```html
<html prefix="og: https://ogp.me/ns#">
<head>
<title>The Rock (1996)</title>
<meta property="og:title" content="The Rock" />
<meta property="og:type" content="video.movie" />
<meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
<meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
...
</head>
...
</html>
```

### debug

- facebook：https://developers.facebook.com/tools/debug


https://developers.google.com/search/docs/beginner/get-started

## Google Search

### Search Console

[Search Console](https://developers.google.com/search/docs/monitor-debug/search-console-start?hl=zh-cn)

Google 推出的一款工具，可以帮助任何拥有网站的用户了解其网站在 Google 搜索中的表现，以及如何改进网站在 Google 搜索上的呈现效果，使网站获得更相关的流量。


Search Console 提供了与 Google 如何抓取网站、将网站编入索引和呈现网站相关的信息。这有助于网站所有者监控和优化其网站在 Google 搜索上的表现。
