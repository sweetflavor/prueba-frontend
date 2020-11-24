<template>
  <div class="moreExperience">
      <h1>More experience</h1>
  </div>
</template>

<script>
export default {
    name: 'MoreExperience',
    props: {
        isLoading: Boolean,
        postData: {
            type:Array,
            default:function(){
                return{}
            }
        }
    },
    created () {
        console.log(this.postData);
        console.log(this.isLoading);
    }
}
</script>

<style>

</style>