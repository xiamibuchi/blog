# 播放器

## auto play

浏览器政策
chrome： https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
safari：https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/
firefox：https://hacks.mozilla.org/2019/02/firefox-66-to-block-automatically-playing-audible-video-and-audio/

2.流列表视频数据存储 (以 MomentFeed 动态流为例)

```js
loadSuccess(datas) {
    ...
    this.getVideoList(list);
    ....
},

 getVideoList(list) {
    //针对数据返回了 video_resource 节点的数据 ,通过查询流内所有video_resources节点,采用 concatVideoResourceList 方式进行填充
    this.concatVideoResourceList(video_resources);
    //针对没有返回video_resource 节点,通过查询流内所有video节点,
    let ids = this.videoTopicList.map((item) => item.video_id).join(',');
    if (ids) {
        this.$store.dispatch('video/queryVideoResourceList', ids);
    }
}
```

```js
import { autoPlayOnList } from '@/utils/autoPlay';

<div class="moment-feed" v-page-scroll="handleScroll">
 handleScroll: _.throttle(function() {
    //执行自动播放逻辑
    autoPlayOnList();
}, 300),
```


### 自动推理引擎

safari会通过自动推理引擎来阻止自动播放，文档提到的因素有**电量**和**带宽**，猜测会有类似chrome白名单的策略。

### Safiri提供的最佳实践

同chrome

```
var promise = document.querySelector('video').play();

if (promise !== undefined) {
    promise.catch(error => {
        // Auto-play was prevented
        // Show a UI element to let the user manually start playback
    }).then(() => {
        // Auto-play started
    });
}
```

### Firefox的自动播放规则

- 始终允许静音自动播放。
- 如果未执行任何用户交互，则将永远不允许自动播放
- 如果用户已授予摄像头/麦克风权限，则允许自动播放音频

### Chrome的自动播放政策

- 始终允许静音自动播放。
- 在以下情况下，允许自动播放声音
  - 用户已与域进行了交互（单击，点击等）。
  - 在**台式机上**，已经超过了用户的“[Media Engagement Index (MEI)](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#mei)”阈值，这意味着该用户以前曾播放带声音的视频。
  - 用户已将该网站添加到他们在移动设备上的主屏幕，或者在桌面上安装了 PWA。

## 媒体参与度指数（MEI）

MEI衡量个人在站点上消费媒体的倾向。Chrome当前的做法是每个来源的访问次数与重大媒体播放事件的比率：

- 媒体（音频/视频）的消耗必须大于7秒。
- 音频必须存在且不能静音。
- 带有视频的标签处于活动状态。
- 视频大小（以px为单位）必须大于200x140。

*chrome可以访问[chrome://media-engagement](chrome://media-engagement/)查看*

*Chrome提供了全球1000多个站点允许自动播放的白名单，白名单未公开，加入方式未公开。这也解释了为什么youtube在pc上是允许自动播放的。*

### Chrome提供的最佳实践

```
播放失败时提示用户主动点击
var promise = document.querySelector('video').play();

if (promise !== undefined) {
  promise.then(_ => {
    // Autoplay started!
  }).catch(error => {
    // Autoplay was prevented.
    // Show a "Play" button so that user can start playback.
  });
}

```

### YouTube、Twitter的做法

默认静音播放，提示用户点击取消静音

```
<video id="video" muted autoplay>
<button id="unmuteButton"></button>

<script>
  unmuteButton.addEventListener('click', function() {
    video.muted = false;
  });
</script>
```

### macOS的自动播放政策

- 允许由用户手势导致的播放（**不代表有过用户手势就可以播**），touchend，click，doubleclick，keydown
- 允许带有autoplay属性，并且不包含音轨（有音轨单无声音的不在范围内）
- 允许带有muted属性的
- 无音轨视频正在播放的时候获得音轨，未经用户手势导致的取消静音，将会暂停播放
- 视频元素必须在可视区域并且css可见，透明度0视为不可见。

### 在流中的视频

如果带声音播放被浏览器阻止，会将视频设置为静音，然后再播放，如果静音播放也被浏览器阻止，将会暂停播放。

## 防止 video 被渲染成原生播放器

一些浏览器会劫持 video 并且生成原生视频播放器。在这种情况下，用 z-index 无法控制浏览器层级，播放器定位永远高于其他元素（包括定位元素）。
解决方案。部分浏览器提供特殊属性控制浏览器，设置后不再将 vidoe 转化为原生播放器：

- `raw-controls`：钉钉、UC
- `controls`：360 浏览器
- `x5-video-player-type="h5"`：微信内置浏览器

```html
<video
  raw-controls
  controls
  x-webkit-airplay
  webkit-playsinline  
  x5-playsinline
  x5-video-player-type="h5-page"
>
</video>
```

## Picture-in-Picture

```js
// 进入画中画
HTMLVideoElement.requestPictureInPicture()
// 退出画中画
document.exitPictureInPicture()

// events
HTMLVideoElement.addEventListener('enterpictureinpicture', function() {
  // 已进入画中画模式
});
// 退出画中画模式时候执行
HTMLVideoElement.addEventListener('leavepictureinpicture', function() {
  // 已退出画中画模式
});

// 监听小窗口尺寸的改变。PictureInPictureWindow 对象的获取在画中画响应事件的event对象中
HTMLVideoElement.addEventListener('enterpictureinpicture', function(event) {
  const videoPicWindow = event.pictureInPictureWindow;
  pipWindow.addEventListener('resize', function () {
    // videoPicWindow.width
    // videoPicWindow.height
  });
});

// document.pictureInPictureElement 返回当前的画中画元素是什么。可以判断当前浏览器是否进入了画中画模式（无画中画返回 null）。
```
