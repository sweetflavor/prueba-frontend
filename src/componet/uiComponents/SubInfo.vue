<template>
  <div class="subInfo ptb1">
      <IconoLikeBlue />
      <SubTitle :size="'sm'">Vale la pena</SubTitle>
      <IconoEuro />
      <SubTitlePrice>Precio aproximado: 8500€</SubTitlePrice>
  </div>
</template>

<script>
import IconoLikeBlue from '../icons/IconoLikeBlue'
import IconoEuro from '../icons/IconoEuro'
import SubTitle from '../uiComponents/SubTitle'
import SubTitlePrice from '../uiComponents/SubTitlePrice'
export default {
    name: 'SubInfo',
    components: {
        IconoLikeBlue,
        IconoEuro,
        SubTitle,
        SubTitlePrice
    }
}
</script>
<style lang="scss">
.subInfo {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>