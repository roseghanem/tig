<script>
import About from './About.vue';
import Rose from './Rose.vue';
export default {
  name: "home",
  components: {
    About,
    Rose,
  }
};
</script>

<template>
<main>
  <Rose/>
  <About />
  
</main>
</template>

<style scoped>
</style>
