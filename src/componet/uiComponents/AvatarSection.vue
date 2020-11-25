<template>
  <div class="AvatarSection">
      <div class="AvatarSection__image">
          <img src="../../assets/avatar4.png" alt="avatar">
      </div>
      
      <div class="AvatarSection__content m1">
          <h3 class="userName">vebris</h3>
          <p class="subTitle">Barcelona (ciudad) · 8 sep 2019</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../../scss/_variables';
.AvatarSection {
    width: 100%;
    display: flex;
    align-items: center;
    &__image {
        img {
          border-radius: 50%;  
        }
    }
    &__content {
        .userName {
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 21px;
            letter-spacing: 0.23333333432674408px;
            text-align: left;
            color: $secondery-grey;
        }
        .subTitle {
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0.20000000298023224px;
            text-align: left;
            color: $helper-grey;
        }
    }
}
</style>