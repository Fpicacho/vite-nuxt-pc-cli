<template>
  <div>
    <p></p>
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
p {
  height: 10px;
  width: 100%;
  background-image: linear-gradient(
    to right,
    #75e013,
    #cfb400,
    #ff7b00,
    #ff3655,
    #eb1297
  );
}
</style>
