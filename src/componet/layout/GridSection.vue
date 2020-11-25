<template>
  <div class="gridSection">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.gridSection {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(153px, 2fr));
    row-gap: 20px;
    column-gap: 20px;
    @media (max-width: 446px) {
        grid-template-columns: repeat(auto-fit, minmax(123px, 2fr));
    }
}
</style>