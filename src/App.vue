<template>
  <div id="app" class="app">
    <div class="app__container p2">
      <div class="p2 mainContainer">
        <MainContent />
      </div>
      <div class="p2">
        <h2 class="moreExperience-text">Más experiencias</h2>
        <h3 v-if="isLoading">Loading...</h3>
        <MoreExperience v-if="postData" :isLoading="isLoading" :postData="postData"/>
      </div>
    </div>
  </div>
</template>

<script>
import getPosts from './api/api'
import MoreExperience from './componet/MoreExperience'
import MainContent from './componet/MainContent'

export default {
  name: 'app',
  components: {
    MoreExperience,
    MainContent
  },
  data () {
    return {
      postData: null,
      isLoading: true
    }
  },
  mounted() {
    getPosts()
      .then(data => {
        this.isLoading = false
        this.postData = data
      })
  }
}
</script>

<style lang="scss">
@import './scss/_variables';
@import './scss/_base';
@import './scss/_reset';
@import './scss/_common';
.mainContainer {
  background-color: #fff;
  @media (min-width: 768px) {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
  }
}
.moreExperience-text {
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #383B41;
}
</style>
