<template>
  <div id="app">
    <MoreExperience v-if="postData" :isLoading="isLoading" :postData="postData"/>
  </div>
</template>

<script>
import getPosts from './api/api';
import MoreExperience from './componet/MoreExperience';
export default {
  name: 'app',
  components: {
    MoreExperience
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
