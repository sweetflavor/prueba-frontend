<template>
  <div id="app">
    <div class="container">
      <div>
        <MainContent />
      </div>
      <div>
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
</style>
