<template>
  <Header_components></Header_components>
  <router-view></router-view>
</template>

<script>
import Header_components from '../components/Header.vue'
export default {
  components :{
    Header_components,
  },
 

}
</script>
