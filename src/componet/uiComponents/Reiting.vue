<template>
  <div class="reiting"> 
      <p class="mr1">Valoracion: </p>
      <IconoStars />
  </div>
</template>

<script>
import IconoStars from '../icons/IconoStars'
export default {
    components: {
        IconoStars
    }
}
</script>

<style lang="scss">
.reiting {
    display: flex;
    align-items: center;
}
</style>