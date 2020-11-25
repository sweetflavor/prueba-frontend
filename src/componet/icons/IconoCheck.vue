<template>
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 11C8.53757 11 11 8.53757 11 5.5C11 2.46243 8.53757 0 5.5 0C2.46243 0 0 2.46243 0 5.5C0 8.53757 2.46243 11 5.5 11Z" :fill="isActive ? 'red' : '#19B5BC'"/>
    <path d="M2.5 5.40476L4.825 7.5L8.5 3.5" stroke="white"/>
  </svg>
</template>

<script>
export default {
    name: 'IconoCheck',
    props: {
        isActive: Boolean
    }
}
</script>

<style>

</style>