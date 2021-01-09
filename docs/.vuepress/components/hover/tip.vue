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
