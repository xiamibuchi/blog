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
