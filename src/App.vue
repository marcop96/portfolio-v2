<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import IntroSection from "./components/sections/IntroSection.vue";
import TheProjects from "./components/sections/TheProjects.vue";
</script>

<template>
  <NavBar class="m-4" />
  <main class="flex flex-col justify-center">
    <section id="info"><IntroSection /></section>
    <section id="projects" class="flex justify-center"><TheProjects /></section>
    <section id="about" class="flex justify-center"><h1>About me</h1></section>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  width: 80%;
  margin: auto;
}
</style>
