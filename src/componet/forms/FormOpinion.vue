<template>
  <form action="" method="post">
    <input v-model="resume" type="text" class="formItems p1" placeholder="Título resumen de tu experiencia">
    <p class="validation mtb1" :class="startTyping ? (errorsResume ? 'errorActive' : 'errorInActive') : null">
        <IconoCheck class="mr1" :isActive="errorsResume" v-if="startTyping"/>{{ resume.length }} / 90 (min.20)</p>
    <textarea v-model="resumeContent" name="" id="" cols="30" rows="10" class="formItems mtb2"></textarea>
    <p class="validation mtb1" :class="{errorActive: errorsResumeContent}">
        <IconoCheck class="mr1" :isActive="errorsResumeContent" v-if="startTyping"/>{{ resumeContent.length }} / 18000 (min.300)</p>
        <BtnPrincipal class="btn">Contactar al doctor</BtnPrincipal>
 </form>
</template>

<script>
import IconoCheck from '../icons/IconoCheck'
import BtnPrincipal from '../uiComponents/BtnPrincipal'
export default {
    name: 'FormOpinion',
    components: {
        IconoCheck,
        BtnPrincipal
    },
    data () {
        return {
            startTyping: false,
            errorsResume: null,
            errorsResumeContent: false,
            resume: '',
            resumeContent: ''
        }
    },
    watch: {
        resume (val) {
            this.startTyping = true
            if (val.length <= 20 || val.length >= 90) {
                this.errorsResume = true
            } else {
               this.errorsResume = false 
            }
        },
        resumeContent (val) {
            this.startTyping = true
            if (val.length <= 300 || val.length >= 18000) {
                this.errorsResumeContent = true
            } else {
               this.errorsResumeContent = false 
            }
        }
    }
}
</script>
<style lang="scss">
.validation {
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0px;
    text-align: right;
    color: #999999;
}
.errorActive {
    color: red;
}
.errorInActive {
    color: #19B5BC;
}
.btn {
    padding: 15px 75px;
}
@media (max-width: 446px) {
    .btn {
        width: 100%;
    }
}
</style>