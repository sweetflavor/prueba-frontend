<template>
  <button class="mtb1">
      <slot></slot>
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../../scss/_variables';
button {
    background: $accent-color;
    border: none;
    padding: 8px 12px;
    border-radius: 23px;
    color: #fff;
    cursor: pointer;
}
</style>