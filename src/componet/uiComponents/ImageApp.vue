<template>
  <img :src="url" alt="">
</template>

<script>
export default {
    name: 'ImageApp',
    props: {
       url: String 
    }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>