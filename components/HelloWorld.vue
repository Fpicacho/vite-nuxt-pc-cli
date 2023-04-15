<template>
  <div class="helloWorld">
    <div class="container">
      <div class="title">
        <span class="white">HELLO</span>
        <span class="black">WORLD</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.helloWorld {
  position: relative;
  min-height: 100vh;
  background: #000;
  color: #fff;
  .container {
    .title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      user-select: none;
      span {
        font-family: "FiraMono";
        font-size: 7rem;
        padding: 0 20px;
        margin-left: -20px;
        letter-spacing: 20px;
        padding: 0 20px;
        letter-spacing: 20px;
      }
      .white {
        color: #fff;
      }
      .black {
        color: #000;
        background: #fff;
      }
    }
  }
}
</style>
