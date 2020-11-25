<template>
  <div class="mainContent">
      <AvatarSection 
        url="src/assets/avatar4.png"
        avatarStyle="avatar"
        :avatarContent="{title: 'vebris', subtitle: 'Barcelona (ciudad) · 8 sep 2019'}"/>
      <Title>Estoy muy orgullosa de mi nuevo abdomen</Title>
      <SubInfo />
      <GridSection>
        <ImageApp url="src/assets/gallery2.png" />
        <ImageApp url="src/assets/gallery1.png" />
        <ImageApp url="src/assets/gallery2.png" />
        <ImageApp url="src/assets/gallery1.png" />
        <ImageApp url="src/assets/gallery2.png" />
      </GridSection>
      <br>
      <div class="doctorBio ptb1">
        <SubTitle :size="`ml`">Sobre el doctor</SubTitle>
        <AvatarSection
          url="src/assets/doctor.png"
          avatarStyle="user"
          :avatarContent="{title: 'Dorsia Clínica Estética', subtitle: '81 sedes en Madrid, Lleida, Tarragona…'}"/>
        <BtnPrincipal>Contactar al doctor</BtnPrincipal>
        <Reiting />
        <br>
        <div class="doctorBio__content">
          <p class="paragraph">
            Es un excelente cirujano que se merece con creces la buena fama tiene, pero para estas cosas no hay que escatimar! El post operatorio ha sido un poco difícil. Aún no me adapto a 
            caminar sin sentir molestia y opresión, pero supongo que es cuestión de tiempo.
          </p>
        </div>
        <br>
        <Title>Cuéntanos tu experiencia</Title>
        <br>
        <h3 class="cuentaSubTitle mtb1">¿Qué tratamiento te has realizado?</h3>
        <SelectBox />
        <br>
        <h3 class="cuentaSubTitle mtb1">¿Recomendarías el tratamiento?</h3>
        <div class="doctorBio__btn-section">
          <BtnCircu @click.native="activeBtn = !activeBtn" :active="!activeBtn">Si</BtnCircu>
          <BtnCircu @click.native="activeBtn = !activeBtn" :active="activeBtn">No</BtnCircu>
        </div>
        <div v-if="!activeBtn" class="doctorBio__form mtb2">
          <FormOpinion />
        </div>
      </div>
      
  </div>
</template>

<script>
import AvatarSection from './uiComponents/AvatarSection'
import Title from './uiComponents/Title'
import SubInfo from './uiComponents/SubInfo'
import SubTitle from './uiComponents/SubTitle'
import ImageApp from './uiComponents/ImageApp'
import BtnPrincipal from './uiComponents/BtnPrincipal'
import BtnCircu from './uiComponents/BtnCircu'
import Reiting from './uiComponents/Reiting'
import SelectBox from './uiComponents/SelectBox'
import FormOpinion from './forms/FormOpinion'
import GridSection from './layout/GridSection'

export default {
components: {
  AvatarSection,
  Title,
  SubInfo,
  GridSection,
  ImageApp,
  SubTitle,
  BtnPrincipal,
  BtnCircu,
  Reiting,
  SelectBox,
  FormOpinion
},
data () {
  return {
    activeBtn: false
  }
}
}
</script>

<style lang="scss">
.cuentaSubTitle {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #333333;
}
.doctorBio {
  &__btn-section {
  display: flex;
  }
  &__form {
    max-width: 400px;
  }
}

</style>