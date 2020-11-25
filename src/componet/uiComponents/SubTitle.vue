<template>
  <div class="subTitle" :class="{ smTitle: size === 'sm' }">
      <h2><slot></slot></h2>
  </div>
</template>

<script>
export default {
    name: 'SubTitle',
    props: {
        size: String
    }
}
</script>

<style lang="scss">
.subTitle {
    h2 {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: #48545C;
        margin: 5px;
        margin-right: 20px;
    }
    .smTitle {
        font-size: 16px;
        line-height: 24px;
    }
}
</style>