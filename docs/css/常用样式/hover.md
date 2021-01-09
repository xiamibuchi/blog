# hover

## 动态背景

<hover-background />

```html
<template>
  <div class="button" @mousemove="handleMouseMove">
    <span>hover me to change</span>
  </div>
</template>

<script>
  export default {
    name: "background",
    methods: {
      handleMouseMove(e) {
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;
        e.target.style.setProperty("--x", `${x}px`);
        e.target.style.setProperty("--y", `${y}px`);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .button {
    margin: 20px auto;
    width: 200px;
    padding: 10px 20px;
    text-align: center;
    position: relative;
    background: #f72359;
    color: white;
    font-size: 16px;
    cursor: pointer;
    overflow: hidden;
    border-radius: 100px;
  }

  .button span {
    position: relative;
  }

  .button::before {
    --size: 0;
    content: "";
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle closest-side, #4405f7, transparent);
    transform: translate(-50%, -50%);
    transition: width 0.2s ease, height 0.2s ease;
  }

  .button:hover::before {
    --size: 400px;
  }
</style>
```

## 边框动画

<hover-border />

```html
<template>
  <div class="button">
    <div class="button__content">hover me to change</div>
  </div>
</template>

<script>
  export default {
    name: "border",
  };
</script>

<style lang="scss" scoped>
  .button {
    width: 200px;
    height: 60px;
    position: relative;
    background: #fff;
    margin: 30px auto;
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
    line-height: 60px;
    &::before,
    &::after {
      content: "";
      width: 0;
      height: 0;
      background: #00adb5;
      position: absolute;
      z-index: 0;
      transition: width 0.5s, height 0.5s;
    }
    &::before {
      top: -1px;
      right: -1px;
    }
    &::after {
      bottom: -1px;
      left: -1px;
    }
    &:hover::before,
    &:hover::after {
      width: calc(100% + 2px);
      height: calc(100% + 2px);
    }

    .button__content {
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      background: #fff;
    }
  }
</style>
```

## 自定义提示

<hover-tip />

```html
<template>
  <div class="bruce flex-ct-x">
    <ul class="hover-tips">
      <li data-title="红"></li>
      <li data-title="紫"></li>
      <li data-title="橙"></li>
      <li data-title="蓝"></li>
      <li data-title="青"></li>
      <li data-title="绿"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "tip",
  };
</script>

<style lang="scss" scoped>
  $color-list: #f66 #66f #f90 #09f #9c3 #3c9;
  .hover-tips {
    display: flex;
    justify-content: space-between;
    width: 200px;
    li {
      list-style: none;
      position: relative;
      padding: 2px;
      border: 2px solid transparent;
      border-radius: 100%;
      width: 24px;
      height: 24px;
      background-clip: content-box;
      cursor: pointer;
      transition: all 300ms;
      &::before,
      &::after {
        position: absolute;
        left: 50%;
        bottom: 100%;
        opacity: 0;
        transform: translate3d(0, -30px, 0);
        transition: all 300ms;
      }
      &::before {
        margin: 0 0 12px -35px;
        border-radius: 5px;
        width: 70px;
        height: 30px;
        background-color: rgba(#000, 0.5);
        line-height: 30px;
        text-align: center;
        color: #fff;
        content: attr(data-title);
      }
      &::after {
        margin-left: -6px;
        border: 6px solid transparent;
        border-top-color: rgba(#000, 0.5);
        width: 0;
        height: 0;
        content: "";
      }
      @each $color in $color-list {
        $index: index($color-list, $color);
        &:nth-child(#{$index}) {
          background-color: $color;
          &:hover {
            border-color: $color;
          }
        }
      }
      &:hover {
        &::before,
        &::after {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
    }
  }
</style>
```
