<template>
  <div class="btnCircle p1 m1" :class="active ? 'active' : 'inactive'">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'BtnCircle',
    props: {
        active: Boolean
    }
}
</script>
<style lang="scss">
.btnCircle {
    width: 41px;
    height: 41px;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #727D85;
    cursor: pointer;
    &.active {
        background: #19B5BC;
        color: #fff;
    }
    &.inactive {
        box-shadow: inset 0 0 0 2px #E1E8EB;
    }
}
</style>