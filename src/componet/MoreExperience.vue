<template>
  <div class="moreExperience">
    <div v-for="(post, index) in postData" :key="index">
        <div class="experienceCrad p2 mtb2">
            <div class="experienceCrad__header">
                <img :src="post.image" alt="">
                <div class="m1">
                    <p class="message">{{ post.text }}</p>
                    <p class="userName">{{ post.owner.firstName }}</p>
                </div>
            </div>
            <div class="experienceCrad__body">
                <p class="comments">{{ post.likes }} comentarios</p>
                <p class="comments">leer más ></p>
            </div>
        </div>
    </div>
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
    }
}
</script>
<style lang="scss">
.experienceCrad {
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
    box-sizing: border-box;
    border-radius: 5px;
    &__header {
        display: flex;
        align-items: center;
        img {
            width: 50px;
            height: 50px;
            border-radius: 25px;
        }
        .message {
            font-weight: bold;
            font-size: 16px;
            line-height: 19px;
            color: #000000;
        }
        .userName {
            font-weight: normal;
            font-size: 12px;
            line-height: 14px;
            color: #5E5E5E;
            margin-top: 10px;
        }
    }
    &__body {
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
        .comments {
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 14px;
            color: #E78D45;
        }
    }
}
</style>