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
