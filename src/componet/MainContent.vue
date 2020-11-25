<template>
  <div class="mainContent">
      <AvatarSection />
      <Title>Estoy muy orgullosa de mi nuevo abdomen</Title>
      <SubInfo />
      <GridSection>
        <ImageApp url="src/assets/gallery2.png" />
        <ImageApp url="src/assets/gallery1.png" />
        <ImageApp url="src/assets/gallery2.png" />
        <ImageApp url="src/assets/gallery1.png" />
        <ImageApp url="src/assets/gallery2.png" />
      </GridSection>
      <SubTitle :size="`sm`">Vale la pena</SubTitle>
  </div>
</template>

<script>
import AvatarSection from './uiComponents/AvatarSection'
import Title from './uiComponents/Title'
import SubInfo from './uiComponents/SubInfo'
import SubTitle from './uiComponents/SubTitle'
import ImageApp from './uiComponents/ImageApp'
import GridSection from './layout/GridSection'

export default {
components: {
  AvatarSection,
  Title,
  SubInfo,
  GridSection,
  ImageApp,
  SubTitle
}
}
</script>

<style>

</style>