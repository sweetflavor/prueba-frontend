<template>
  <div class="AvatarSection">
      <div :class="`AvatarSection__${avatarStyle}`">
          <img :src="url" alt="avatar">
      </div>
      
      <div class="AvatarSection__content m1">
          <h3 class="userName">{{ avatarContent.title }}</h3>
          <p class="subTitle">{{ avatarContent.subtitle }}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'AvatarSection',
    props: {
        url: String,
        avatarStyle: String,
        avatarContent: Object
    }
}
</script>

<style lang="scss">
@import '../../scss/_variables';
.AvatarSection {
    width: 100%;
    display: flex;
    align-items: center;
    &__avatar {
        img {
          border-radius: 50%;  
        }
    }
}
</style>